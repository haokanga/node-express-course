// The first line gives you access to the express library by searching your node_modules for "express".
const express = require('express');
// The next creates an instance of the express constructor, which we will name "app".
const app = express();


const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]
app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function (req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

// We can now access methods used for making a server by including their name after app.
app.listen(8000, function () {
    console.log("server is running")
})
// The app.listen method will start up the server locally on the port you give as its first argument
// (in this case the base url is: http://localhost:8000)

// But first we need to run the server.js file by entering this in the terminal: node server.js
// If everything was successful, you should see the console.log message we supplied in the callback: "server is running". This happens because the file is being run on our terminal. To end this process, push CTRL+C. Whenever you make changes to your server, you need exit and restart it.

