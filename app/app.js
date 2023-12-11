var feedbackS, reviewS, workS = []

let slideIndex = 0;

let route = () => {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");
    if (!pageID) {
        MODEL.changeContent("home");
    } else {
        MODEL.changeContent(pageID, afterRoute);
    }
}

let checkHash = () => {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(() => {
    console.log("Page has loaded basic functions completed. ");
    try {
        checkHash();
    } catch (e) {
        console.error(e);
        alert(e);
    }
})