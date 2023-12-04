const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

const cors = require('cors')
app.use(cors())

// data loded
const categories = require('./data/categories.json')
const courses = require('./data/courses.json')


app.get('/', (req, res) => {
    res.send('code script is running');
})

// loaded category data
app.get('/categories', (req, res) => {
    res.send(categories)
})

// All courses data loaded
app.get('/courses', (req, res) => {
    res.send(courses)
})

// specific course loaded by category id
app.get('/category/:id', (req, res) => {
    const id = req.params.id
    if (id === '0') {
        res.send(courses)
    } else {
        const selectedCategory = courses.filter(n => n.category_id === id)
        res.send(selectedCategory)
    }
})

// All courses load with specific id
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n._id === id)
    res.send(selectedCourse)
})



app.listen(port, (req, res) => {
    console.log(`Code server running on : ${port}`);
})