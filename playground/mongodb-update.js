// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    };

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c94e85654756afdf262de5d')},{
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })




    client.close();
});