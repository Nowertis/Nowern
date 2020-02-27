// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Post = require("./models/post");

const app = express();

mongoose
  .connect("mongodb://docker:dockerpwd@mongo:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to database!");

    initPosts();
  })
  .catch(err => {
    console.log("Connection failed!");
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/posts", (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).send({
      message: "Post addes sucessfully",
      postId: createdPost._id
    });
  });
});

app.get("/posts", (req, res) => {
  Post.find().then(documents => {
    res.status(200).send({
      message: "Posts fetced succesfully!",
      posts: documents
    });
  });
});

app.delete("/posts/:id", (req, res) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).send({ message: "Post deleted" });
  });
});

var initPosts = function() {
  new Post({
    title: "Post1",
    content: "Content 1"
  }).save();

  new Post({
    title: "Post2",
    content: "Content 2"
  }).save();

  new Post({
    title: "Post3",
    content: "Content 3"
  }).save();

  new Post({
    title: "Post4",
    content: "Content 4"
  }).save();

  new Post({
    title: "Post5",
    content: "Content 5"
  }).save();

  new Post({
    title: "Post6",
    content: "Content 6"
  }).save();
};

module.exports = app;
