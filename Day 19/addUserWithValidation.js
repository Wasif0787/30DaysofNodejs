const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    }
});

const User = mongoose.model('User', userSchema);

async function addUserWithValidation(user) {
    try {
        const newUser = new User(user);
        await newUser.validate();
        console.log('User data is valid');
        await newUser.save();
        console.log('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error.message);
    }
}

module.exports = addUserWithValidation;
