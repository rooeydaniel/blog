/*
    This handles non-RESTful routes declared in the server/server.js file
 */

module.exports.index = function (req, res) {
    res.render('index');
};

module.exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};