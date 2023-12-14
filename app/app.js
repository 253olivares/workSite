var feedbackS, reviewS, workS = []

let i;
let slideIndex = 0;

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
    $("html").css("overflow", "");
}

let hamburgerlistener = () => {
    $(".hamburger").click(() => {
        let mobileMenuiDiv = $(".mobNav");
        let topNavDiv = $(".header")
        let t = 0;
        if (!$(".hamburger").hasClass("is-active")) {
            t = topNavDiv.outerHeight(true);
            mobileMenuiDiv.css("height", `calc(100vh - ${t}px + 5px)`)
            mobileMenuiDiv.css("top", `${t}px`);
            $(".hamburger").addClass("is-active");
            $("html").css("overflow", "hidden");
        } else {
            t = 0;
            mobileMenuiDiv.css("height", `calc(100vh - ${t}px)`)
            mobileMenuiDiv.css("top", `-100vh`);
            $(".hamburger").removeClass("is-active");
            $("html").css("overflow", "");
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

$(document).ready(() => {
    console.log("Page has loaded basic functions completed. ");
    try {
        setFooterHeight();
        hamburgerlistener();
        clickFooter();
        checkHash();
    } catch (e) {
        console.error(e);
        alert(e);
    }
})