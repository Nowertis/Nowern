db = db.getSiblingDB('nowern')

db.createUser({
  user: "docker",
  pwd: "dockerpwd",
  roles: [
    {
      role: "readWrite",
      db : "nowern"
    }
  ]
});


db.posts.insert({"title": "Test 1", "content": "Content 1"});
db.posts.insert({"title": "Test 2", "content": "Content 2"});
db.posts.insert({"title": "Test 3", "content": "Content 3"});
db.posts.insert({"title": "Test 4", "content": "Content 4"});
db.posts.insert({"title": "Test 5", "content": "Content 5"});
db.posts.insert({"title": "Test 6", "content": "Content 6"});
db.posts.insert({"title": "Test 7", "content": "Content 7"});