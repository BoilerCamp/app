var Post = require('../models/Post');

exports.getPost = function(req, res) {
  var postURL = req.params.postURL;

  Post.findOne({url: postURL}, function(err, post) {
    if (!post) {
      return res.render('404');
    }

    if (!err) {
      res.render('post', {
        post: post
      });
    } else {
      res.sendStatus(500);
    }
  });
};
