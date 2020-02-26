// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Post = require("./models/post");

const app = express();

// mongoose.connect(`mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/posts", (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).send({
    message: "Post addes sucessfully"
  });
});

app.get("/posts", (req, res) => {
  const posts = [
    { id: "sdfsdf", title: "First server-side post", content: "Jakiś kontent" },
    {
      id: "sdfsdfsdf",
      title: "2nd server-side post",
      content: "Jakiś kontent 2"
    },
    {
      id: "sdfsdf123",
      title: "3rd server-side post",
      content: "Jakiś kontent 3"
    }
  ];
  res.status(200).send({
    message: "Posts fetced succesfully!",
    posts: posts
  });
});

module.exports = app;
