var feedbackS, reviewS, workS = []

let i;
let slideIndex = 0;

$.getJSON("../data/feedback.json", (feedback) => {
    feedbackS = feedback.userFeedback;
})

$.getJSON("../data/reviews.json", (review) => {
    reviewS = review.userReviews;
})

let showSlides = () => {
    try {
        let hashTag = window.location.hash;
        let pageID = hashTag.replace("#/", "");
        console.log(pageID);
        if (pageID == "" || pageID == "home") {
            let slides = $(".mainBody__hero__slidesAnimated__slide").length - 1;
            for (i = 0; i < slides; i++) {
                if (slideIndex == 0) {
                    $(".slideDynamic").css("left", "0%");
                } else if (slideIndex == 1) {
                    $(".slideDynamic").css("left", "-100%");
                } else if (slideIndex == 2) {
                    $(".slideDynamic").css("left", "-200%");
                }
            }
            slideIndex++;
            if (slideIndex > slides) { slideIndex = 0 }
            console.log("ran");
            setTimeout(showSlides, 5000);
        } else {
            return false;
        }
    } catch (e) {
        console.error(e);
        alert(e);
    }
}

let loadReviews = (callback) => {
    $(".mainBodyWork__reviews__googleReviewGrid").empty();
    $.each(reviewS, (index, review) => {
        let displayReview = "";
        let scores = "";
        if (review.comment == "") {

        } else {

        }
        if (index >= 3) {

        } else {

        }
    });
    callback();
}

let workPagePagnation = () => {

}

let afterRoute = (pageID) => {
    switch (pageID) {
        case "home":
            showSlides();
            break;
        case "contact":
            break;
        case "feedback":
            break;
        case "aboutus":
            break
        case "work":
            loadReviews(workPagePagnation);
            break
    }
}

let route = () => {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");
    if (!pageID) {
        MODEL.changeContent("home", afterRoute);
    } else {
        MODEL.changeContent(pageID, afterRoute);
    }
}

let setFooterHeight = () => {
    // code created to set footer height for formating
    $("#content-wrap").css("padding-bottom", $(".footer").height() - 5)
}

let closeMobileFromNav = () => {
    $(".hamburger").removeClass("is-active");
    $("html,body").css("overflow", "");
}

let page = () => {

    return true;
}

let hamburgerlistener = () => {
    $(".hamburger, .mobileClose").click(async () => {
        let mobileMenuiDiv = $(".mobNav");
        let topNavDiv = $(".header")
        let t = 0;
        if (!$(".hamburger").hasClass("is-active")) {
            // $("html, body").animate({ scrollTop: -10 }, 'slow', () => {
            //     t = topNavDiv.outerHeight(true);
            //     mobileMenuiDiv.css("height", `calc(100vh - ${t}px + 5px)`)
            //     mobileMenuiDiv.css("top", `${t}px`);
            //     $(".hamburger").addClass("is-active");
            //     $("html,body").css("overflow", "hidden");
            // });
            document.getElementById("headerScroll").scrollIntoView({ behavior: 'smooth', block: 'center' });
            await $("html, body").stop().animate(
                { scrollY: 0 }, () => {
                    t = topNavDiv.outerHeight(true);
                    mobileMenuiDiv.css("height", `calc(100vh - ${t}px + 5px)`)
                    mobileMenuiDiv.css("top", `${t}px`);
                    $(".hamburger").addClass("is-active");
                    $("html,body").css("overflow", "hidden");
                });

        } else {
            t = 0;
            mobileMenuiDiv.css("height", `calc(100vh - ${t}px)`)
            mobileMenuiDiv.css("top", `-100vh`);
            $(".hamburger").removeClass("is-active");
            $("html,body").css("overflow", "");
        }
    });
}

let clickFooter = () => {
    $(".clickScroll").click(() => {
        document.getElementById("headerScroll").scrollIntoView({ behavior: 'smooth', block: 'center' });
    })
    console.log("click");
}

let checkHash = () => {
    $(window).on("hashchange", route);
    route();
}

let closeMenuListener = () => {

}

$(document).ready(() => {
    console.log("Page has loaded basic functions completed. ");
    try {
        setFooterHeight();
        hamburgerlistener();
        clickFooter();
        closeMenuListener();
        checkHash();
    } catch (e) {
        console.error(e);
        alert(e);
    }
})