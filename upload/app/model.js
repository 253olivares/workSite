var MODEL = (() => {
    var _changeContent = (page, callback) => {
        $.get(`pages/${page}/${page}.html`, (data) => {
            try {
                $("#app").html(data);
                if (callback) {
                    callback(page);
                }
            } catch (e) {
                console.log("Error found in model page: " + e);
                alert(e);
            }
        });
    };
    return {
        changeContent: _changeContent,
    }
})();   