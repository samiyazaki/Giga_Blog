const {Post} = require('../models');
const postData = [
    {
        title: 'The future of hunting technology',
        content: 'You ever heard of a drone that can shoot a gun? Well, now you have.',
        user_id: 1
    },
    {
        title: 'Using AI to train your dog',
        content: 'Have you ever wanted to train your dog to do something, but you just don\'t have the time? Well, now you can!',
        user_id: 2
    },
    {
        title: 'Smart fish fryer',
        content: 'Using basic AI, you can now cook your fish to perfection every time!',
        user_id: 3
    },
    {
        title: 'Wresting with Robots',
        content: 'Robots vs Wrestlers is the new sport of the future!',
        user_id: 4
    },
];
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;