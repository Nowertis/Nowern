db.createUser({
    user: 'nowertis',
    pwd: 'nowertispwd',
    roles :[
        {
            role: "readWrite",
            db: "nowern"
        }
    ]
});