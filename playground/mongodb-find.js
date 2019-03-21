// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    };

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to read todos', err);
    // })

    // db.collection('Todos').find({
    //     _id : new ObjectID('5c910596948156947c62f3ca')
    // }).toArray().then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to read todos', err);
    // })

    
    // db.collection('Todos').find().count().then((count) => {
    //         console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to read todos', err);
    // })

    db.collection('Users').find({
        name: 'Andrew'
    }).count().then((count) => {
        console.log(`Number of users withe name Andrew: ${count}`)
    }, (err) => {
        console.log('Fuck OFF', err)
    });

    db.collection('Users').find({
        name: 'Andrew'
    }).toArray().then((docs) => {
        console.log(docs)
    }, (err) => {
        console.log('Fuck OFF', err)
    })


    client.close();
});