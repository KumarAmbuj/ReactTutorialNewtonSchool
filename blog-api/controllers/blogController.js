const {getDatabaseConnection}=require('../utils/db')
const BlogPost=require('../models/blogModel')

async function getPostById(req,res) {}

async function getAllPosts(req,res) {}

async function createPost(req,res) {
    const {title,content}=req.body;
    const post =new BlogPost({title,content})
    await post.save()
    res.json(post)
}

module.exports = { getAllPosts, getPostById, createPost };

//localhost:4000/api/v1/posts=>POST
// {
//     "title": "Example Blog Post",
//   "content": "This is the content of the blog post. It can be quite long and detailed.",
// }

// sdsd