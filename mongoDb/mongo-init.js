db.createUser({
  user: "docker",
  pwd: "dockerpwd",
  roles: [
    {
      role: "readWrite",
      db : "test"
    }
  ]
});
