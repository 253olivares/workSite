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
        if (!$(".hamburger").hasClass("is-active")) {
            $(".hamburger").addClass("is-active");
            $("html").css("overflow", "hidden");
        } else {
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