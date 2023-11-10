var feedbackS = [];

var reviewS = [];

var workS = [];


$.getJSON("data/feedback.json", function (feedback) {
    feedbackS = feedback.userFeedback;
    console.log(feedbackS);
});
$.getJSON("data/work.json", function (work) {
    workS = work.workStuff;
    console.log(workS);
})
$.getJSON("data/reviews.json", function (review) {
    reviewS = review.userReviews;
    console.log(reviewS);
});

let slideIndex = 0;
function workPagePagnation() {
    $("#rMore").click(function () {
        if ($("#more").css("display") == "none") {
            $("#more").css("display", "flex");
            $("#rMore").html("Read Less...");
        } else {
            $("#more").css("display", "none");
            $("#rMore").html("Read More...");
        }
    });
}

function loadContent(c) {
    console.log(workS);
    let videoPhoto = "";
    let infot = "";
    $(".modal").css("display", "flex");
    $("html").css("overflow", "hidden");
    $(".modalBackground").click(function () {
        if ($(".videoS")) {
            $(".videoS").trigger('pause');
        }
        $(".modal").css("display", "none");
        $("html").css("overflow", "");
    });
    $(".close").click(function () {
        if ($(".videoS")) {
            $(".videoS").trigger('pause');
        }
        $(".modal").css("display", "none");
        $("html").css("overflow", "");
    });

    $.each(workS, function (index, work) {
        if (work.id == c) {

            $(".media").empty();
            $(".information").empty();

            if (work.type == "Video") {
                videoPhoto = `
            <video class="videoS" controls>
                <source src="/img/${work.src}" type="video/mp4">
            </video>
            `
            } else if (work.type == "Photo") {
                videoPhoto = `
            <img src="/img/${work.src}" alt="${work.name} Image">
            `
            }
            infot = `
        <h1>${work.name}</h1>
        <p>${work.date}</p>
        `
            $(".media").append(videoPhoto);
            $(".information").append(infot);
        }
    })
}

function loadReviews(callback) {
    $("mainBodyWork__reviews__googleReviewGrid").empty();
    $.each(reviewS, function (index, review) {
        let displayReview = "";
        let scores = "";
        if (review.comment == "") {
            switch (review.score) {
                case 5:
                    displayReview = `
                    <div class="mainBodyWork__reviews__googleReviewGrid__individualReview">
                        <div class="mainBodyWork__reviews__googleReviewGrid__individualReview__nameScore">
                            <h2>${review.name}</h2>
                            <div class="mainBodyWork__reviews__googleReviewGrid__individualReview__nameScore__score stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            </div>
                        </div>
                        <div class="mainBodyWork__reviews__googleReviewGrid__individualReview__comment">
                        <p>No Comment Given</p>
                    </div>
                    </div>
                    `
                    break;
            }
        } else {
            switch (review.score) {
                case 5:
                    displayReview = `
                    <div class="mainBodyWork__reviews__googleReviewGrid__individualReview">
                        <div class="mainBodyWork__reviews__googleReviewGrid__individualReview__nameScore">
                            <h2>${review.name}</h2>
                            <div class="mainBodyWork__reviews__googleReviewGrid__individualReview__nameScore__score stars">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            </div>
                        </div>
                        <div class="mainBodyWork__reviews__googleReviewGrid__individualReview__comment">
                        <p>"${review.comment}"</p>
                    </div>
                    </div>
                    `
                    break;
            }
        }
        if (index >= 3) {
            if (index == 3) {
                $(".mainBodyWork__reviews__googleReviewGrid").append(
                    ` <span id="more">

                    </span>`
                )
            }
            $("#more").append(displayReview);
        } else {
            $(".mainBodyWork__reviews__googleReviewGrid").append(displayReview);
        }
    })
    callback();
}

function showSlides() {
    let i;
    let slides = 2
    for (i = 0; i < slides; i++) {
        if (slideIndex == 0) {
            $(".slideDynamic").animate({ left: "0%" }, 1000);
            console.log("works1");
        } else if (slideIndex == 1) {
            $(".slideDynamic").animate({ left: "-100%" }, 1000);
            console.log("works2");
        } else if (slideIndex == 2) {
            $(".slideDynamic").animate({ left: "-200%" }, 1000);
            console.log("works3");
        }
    }
    slideIndex++;
    if (slideIndex > slides) { slideIndex = 0 }
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function addResponse() {

    $name = $("#name").val;
    $telephone = $("#telephone").val;
    $email = $("#email").val;
    $fax = $("#fax").val;

    $urgentCheck = $("#urgent").val;

    $subject = $("#subjects").val;
    $otherSubject = $("#other").val;

    $comment = $("#comment").val;
    $id = feedbackS.length + 1;

}
function clearResponse() {
    $("#name").val("");
    $("#telephone").val("");
    $("#email").val("");
    $("#fax").val("");

    $("#urgent").val("");

    $("#other").val("");

    $("#comment").val("");


}


//This function exists so I can run page specific code
function afterRoute(pageID) {

    AOS.init();

    switch (pageID) {
        case "home":
            showSlides()
            break;
        case "feedback":
            $("#send").click(function () {
                addResponse();
            });
            $("#clear").click(function () {
                clearResponse();
            })
            break;
        case "work":
            loadReviews(workPagePagnation);
            break;
    }
}

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");

    if (!pageID) {
        MODEL.changeContent("home");
    } else {
        MODEL.changeContent(pageID, afterRoute);
    }
}

function checkHash() {
    $(window).on("hashchange", route);
    route();
}

//First function that should run when the page is loaded
$(document).ready(function () {
    console.log(
        "Page functions have loaded! checkHash() function has begun running!"
    );
    try {
        checkHash()
        $(".clickScroll").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 500);
            console.log("clicked");
        });
        $("#languageSelect").click(function () {
            if ($("#hideMenu").css("display") == "none") {
                $("#hideMenu").css("display", "block");
            } else {
                $("#hideMenu").css("display", "none");
            }
        });

        $(".mobileClose").click(function () {
            $(".mobNav").animate({
                top: "-100%",
            });
            $(".hamburger").removeClass("is-active");
            $("html").css("overflow", "");

        })

        $(".hamburger").click(function () {
            if (!$(".hamburger").hasClass("is-active")) {
                $(".mobNav").animate({
                    top: "54px",
                });
                $(".hamburger").addClass("is-active");
                $("html").css("overflow", "hidden");
            } else {
                $(".mobNav").animate({
                    top: "-100%",
                });
                $(".hamburger").removeClass("is-active");
                $("html").css("overflow", "");

            }
        })
    } catch (e) {
        console.error(e);
        alert(e);
    }
});