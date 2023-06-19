const mongoose = require('mongoose')

const { Schema } = mongoose

const TestimonialSchema = new Schema({
    userName: {
        required: true,
        type: String
    },
    testimonial: {
        type: String
    }

})

module.exports = mongoose.model('testimonials', TestimonialSchema)