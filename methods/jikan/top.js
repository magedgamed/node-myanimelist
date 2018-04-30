module.exports = function (type, page, subtype) {
    var rp = require('request-promise-native');
    var pageS = '';
    var subtypeS = '';
    if (page) {
        pageS = '/' + page;
        if (subtype) {
            subtypeS = '/' + subtype;
        }
    }
    return new Promise(function (res, rej) {
        rp("https://api.jikan.moe/top/" + type + pageS + subtypeS)
            .then(function (res) { return JSON.parse(res); })
            .then(function (json) { return res(json); })
            .catch(function (err) { return rej("Error"); });
    });
};