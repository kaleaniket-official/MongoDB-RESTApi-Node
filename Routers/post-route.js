const express =  require('express');
const router = express.Router();

const Post  = require('../models/post')

//Gets all posts
router.get('/test-specific', async (req,res) => {
    try{
        const getPosts = await Post.find();
        res.json(getPosts);
    }catch(err){
        res.json({message: err});
    }
    

});

//without async-await
// router.post('/test-specific',(req,res) => {
 
//     const myPost = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     //SAVE
//     myPost.save()
//     .then(data =>{
//         res.json(data);
//     }).catch(err => {
//         res.json({message: err});
//     })

// });

//with async-await
router.post('/test-specific',async (req,res) => {
 
    const myPost = new Post({
        title: req.body.title,
        description: req.body.description
    });

    //SAVE
    try{
        const savedPost = await myPost.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

//get specific post
router.get('/test-specific/:postId',async (req,res) => {
    //SAVE
    try{
        const getPost = await Post.findById(req.params.postId);
        res.json(getPost);
    }catch(err){
        res.json({message: err});
    }
});

//DELETE specific post
router.delete('/test-specific/:postId',async (req,res) => {
    //SAVE
    try{
        const deletedPost = await Post.remove({_id: req.params.postId});
        res.json(deletedPost);
    }catch(err){
        res.json({message: err});
    }
});

//Update specific post
router.patch('/test-specific/:postId',async (req,res) => {
    //SAVE
    try{
        const updatedPost = await Post.updateOne({_id: req.params.postId},{$set : {title: req.body.title}});
        res.json(updatedPost);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;