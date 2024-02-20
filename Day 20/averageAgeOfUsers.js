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
    },
    age: {
        type: Number
    }
});

const User = mongoose.model('User', userSchema);

async function averageAgeOfUsers(req, res) {
    try {
        const result = await User.aggregate([
            {
                $group: {
                    _id: null,
                    averageAge: { $avg: '$age' }
                }
            }
        ])
        const averageAge = result.length > 0 ? result[0].averageAge : 0
        res.json({ averageAge })
    } catch (error) {
        console.log(error);
    }
}

module.exports = averageAgeOfUsers