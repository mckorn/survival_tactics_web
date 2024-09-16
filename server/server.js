const express = require('express') // import express
const app = express() // create an our app

// set up a basic route
app.get("/api", (req, res) => { 
    res.json({ "users": ["user1", "user2", "user3"] })
})

// set up backend
app.listen(5000, () => {
    console.log('Server is running on port 5000')
 })