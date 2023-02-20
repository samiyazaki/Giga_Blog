const router = require('express').Router();
const { Post, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {"user_id": req.session.user_id},
            include: [User]
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('all-posts', {
        layout: 'dashboard',
        posts,
    });
}catch (err) {
    res.redirect('login');
}
});