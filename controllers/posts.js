//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const posts=require("../database/models/posts.js")

module.exports = {
    //method to fetch all posts from the blog database.
    getAllPosts: function(req, res) {
        posts.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },
    //method to get one post by id.
    getOnePost: function(req, res) {
     posts.getOne(req.params.id,function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
    })  
    },
    //method to add a post to the database via the respective model function.
    addPost: function(req, res) {
        posts.add(req.body.idposts,req.body.title,req.body.body,req.body.users_iduser,function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
        }

}