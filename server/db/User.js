const { model, Schema } = require('mongoose')

const userSchema = new Schema(

{
    email: String,
    password: String,
}, {
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (doc, ret) => {
            delete ret._id
        }
    }
})

const User = model('User', userSchema)

module.exports = User