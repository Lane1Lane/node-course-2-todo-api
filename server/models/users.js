var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email: {
        required: true,
        trim: true,
        type: String,
        minlenght: 1
    },
});

module.exports = {User};

// var newUser = new User({
//     email: '   bbbb@gmail.com    ' 
// });

// newUser.save().then((doc) => {
//     console.log('New user saved', doc);
// },(e) => {
//     console.log('Failed to save new user');
// })