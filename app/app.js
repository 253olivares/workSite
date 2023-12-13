var feedbackS, reviewS, workS = []

let slideIndex = 0;

let afterRoute = () => {

}

let route = () => {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");
    if (!pageID) {
        MODEL.changeContent("home");
    } else {
        MODEL.changeContent(pageID, afterRoute);
    }
}

let setFooterHeight = () => {
    // code created to set footer height for formating
    $("#content-wrap").css("padding-bottom", $(".footer").height())
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

let checkHash = () => {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(() => {
    console.log("Page has loaded basic functions completed. ");
    try {
        setFooterHeight();
        hamburgerlistener();
        checkHash();
    } catch (e) {
        console.error(e);
        alert(e);
    }
})