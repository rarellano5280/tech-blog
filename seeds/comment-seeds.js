const sequelize = require('../config/connection');
const { Comment } = require('../models');


const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Cool blog!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Interesting stuff, good work!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "I agree!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Such a good read! Thank you!"
    }
]

const commentSeeds = () => Comment.beforeBulkCreate(commentData);
module.exports = commentSeeds