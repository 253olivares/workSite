var MODEL = (function () {
    var _changeContent = function (page, callback) {
        $.get(`pages/${page}/${page}.html`, function (data) {
            AOS.init();
            switch (page) {
                case "home":
                    $("#app").html(data);
                    break;
                case "feedback":
                    $("#app").html(data);
                    break;
                case "contact":
                    $("#app").html(data);
                    break;
                case "aboutus":
                    $("#app").html(data);
                    break;
                case "work":
                    $("#app").html(data);
                    break;
                default:
                    $("#app").html(data);
            }

            if (callback) {
                callback(page);
            }
        });
    };

    return {
        changeContent: _changeContent,
    };
})();