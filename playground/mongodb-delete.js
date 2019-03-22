// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    };

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {

    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {

    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c922758573a9e5ed0e0ae86')}).then((result) => {
        console.log(result);
    })



    client.close();
});