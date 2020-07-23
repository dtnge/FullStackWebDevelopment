const express = require ('express')
const { randomBytes } = require('crypto');

const app = express();

//object to reference the every posts that is created
const posts = {};

// retrieves all the post
app.get('/posts', (req, res) => {
    res.send(posts);
});

// submits new post 
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log("listening on Port 4000");
});