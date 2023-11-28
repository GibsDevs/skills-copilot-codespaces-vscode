// Create web server
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Comment = require('../models/comment');

// Get all comments
router.get('/', function(req, res) {
    Comment.find(function(err, comments) {
        if (err)
            res.send(err);
        res.json(comments);
    });
});

// Get comment by id
router.get('/:id', function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
});

// Create new comment
router.post('/', function(req, res) {
    var comment = new Comment();
    comment.postId = req.body.postId;
    comment.content = req.body.content;
    comment.userId = req.body.userId;

    comment.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Comment created!' });
    });
});

// Update comment by id
router.put('/:id', function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
        if (err)
            res.send(err);
        comment.postId = req.body.postId;
        comment.content = req.body.content;
        comment.userId = req.body.userId;

        comment.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Comment updated!' });
        });
    });
});

// Delete comment by id
router.delete('/:id', function(req, res) {
    Comment.remove({
        _id: req.params.id
    }, function(err, comment) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted comment!' });
    });
});

module.exports = router;