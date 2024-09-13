const express = require('express');
const path = require('path');

// create new instance of express application
const app = express();

app.get('/api', (req, res) => {
    // basic response to test api
    res.json('HTTP GET request');
    //res.json({ message: 'Hello from server!' });
})

// now when using react instead of a static webpage
app.use('/', express.static(path.join(__dirname, '/react-app/build'))); // want this to be served up when a user makes a request to the root

// if you wanted to serve your content on a subdirectory of the root, you could do this (here we're using a static webpage):
app.use('/website', express.static(path.join(__dirname, '/public'))); // basically, you would access the website by going to localhost:3000/website instead of localhost:3000 (which would give you a 404 error)

// create a 404 page so that if a user tries to access a page that doesn't exist, they will be redirected
app.use((req, res) => {
    // set a status code (or a response)
    res.status(404);
    res.send('<h1>Error 404: Page not found</h1>');
    //res.status(404).sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(3000, () => {
    console.log('App listening on port 3000'); 
})