var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        trim: true,
        minlenght: 1,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: "    Cook dinner 2   "
// });

// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc)
// }, (e) => {
//     console.log('Unable to save Todo')
// });

module.exports = {Todo};