var MODEL = (() => {
    var _changeContent = (page, callback) => {
        $.get(`pages/${page}/${page}.html`, (data) => {
            $("#app").html(data);
            if (callback) {
                callback(page);
            }
        });
    };
    return {
        changeContent: _changeContent,
    }
})();   