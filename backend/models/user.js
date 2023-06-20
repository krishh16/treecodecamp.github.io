const mongoose = require('mongoose')

const {Schema} = mongoose

const UserSchema = new Schema({
    userName: {
        required: true,
        type: String,
        unique: true
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    },
    heardFrom: {
        type: String,
        default: 'self-awareness'
    }, 
    techInterest: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIQAhAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwECB//EADQQAAIBAwIEAggEBwAAAAAAAAABAgMEEQUSITFBUWHBBhMiUmJxkdFCgaGxFBUycoLh8P/EABgBAQEBAQEAAAAAAAAAAAAAAAADAgEE/8QAHREBAQEBAAIDAQAAAAAAAAAAAAECESExAxJBMv/aAAwDAQACEQMRAD8A/RAAelEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAexjKclGEXKT5JFnQ0eUknWqbfhjx/UzdSOydVYLz+T2/v1fqvscK+jYWaNVt9p/c59479aqgfVSMqc3CcXGS5pnybZAAAAAAAAAAAAAAk0bG4rxjOnFbJdXIjGj03hY0f7TG7yNSdfNhYxtY5eJVHzl9iYARvlQAAFbq9hK6pxnRwq0OXxLsZ6FfD21Ftknh5NmZf0it1SvFUisRqxy/mimL+Man65ZyCFCpKHJ5XYk060Z8OT8SrHXQAAAAAAAAAADQ6VLdY0/DK/UzzLnQ9/qZpxexyzF/uY+T01n2tAARUAAAM/6UNbrddfaf7GgMt6Q1JT1FxkmlCKSz165/wC7G8f0zv0qwAXRdadZx4PiiTTqRnyZBPU8cuY471PBFVxNLHB+IOO9SgAAAAAvdFlmz29Yya8yiJ2l3XqK2ySzGo0vkzG52NZX4PD0ioAAAZLXam/U6nwJR8/M0t9cxtLaVaabUei6mNq1HVqzqS/qnJtlPjnnqe6+AAWTAAAAAFgADjQAAA5PIAdaazrq4t4VOrXH5ncqtCz6qr23LH0LU8+pyqQABx1n/SW5TdO2i+Xty8vMoiXqia1G4TbftvmRD0ZnIhq+QAGnAAAAABYAA40AAAepZeFzYipTlthFyfZFnYabUVWFWviKi8qPXJy3jsnVjZ20LWlsg28vLb7kgA86oAAM96Q2UKa/io7t85pSXTl/oozbX1tG7tp0ZfiXB9n0ZlrvTLq0y5Q3wX44cV+fYrjXjiW8/qEACrAAAAAAsAPDuW1ppOUpXL/wXmZtkbisp051ZbacXKXZIsbbR5PEriePhj9y1pUadKO2nBRXZI6Eru303MuVChToR20oKK6+J1AMNAAAAAAAAK+80i2usy2+rqe9Dh9UUd5o9zbZlFeth3guK/I1gNTdjNzKwfI8NheaZa3abnTxP348GZ3UtNq2LUsqdJvCl2+ZXO5U7niCADbK3s0nd0U/fRpUAR+T2tn09ABNoAAAAAAAAAAAAACv1xJ6ZXz0w19Ueg7Pbl9MiAD0oP/Z'
    },
    profession: {
        type: String,
        required: true
    },
    bio: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('userInfo', UserSchema)