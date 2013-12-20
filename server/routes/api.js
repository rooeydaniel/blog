/*
    Load the appropriate models
 */
var Post = require('../models/post.js');


/*
    GET requests
 */
module.exports.posts = function (req, res) {
    Post.find(function(err, posts) {
        if (err) {
            res.send(err);
        }

        res.json({
            posts: posts
        });
    });
};

module.exports.post = function (req, res) {
    var id = req.params.id;

    Post.find({"_id": id}, function (err, post) {
        if (err) {
            res.send(err);
        }

        res.json({
            post: post[0]
        })
    });
};

/*
    POST requests
    Type of request is used when server-side state does not matter (e.g. state could exist, be modified or not exist)

    http://www.stormpath.com/blog/put-or-post - provides a good explanation of POST vs. PUT requests
 */
module.exports.addPost = function (req, res) {
    // Create post in database

    res.json(true);
};

/*
    PUT requests
    Type of request is used when server-side state does matter
    (e.g. you have an identifier for a resource and you don't care about side effects)

    On create, you specify the identifier and are then relocated to the newly create resource
    On update, you need to send all data fields so that any changes that may have happened to this resource do not matter
 */
module.exports.editPost = function (req, res) {
    // Pull id from request

    // Validate body of the request - req.body and update post in database

    res.json(true);
};

/*
    DELETE requests
 */
module.exports.deletePost = function (req, res) {
    // Pull id from request - req.params.id

    // Delete the post from database

    res.json(true);
};