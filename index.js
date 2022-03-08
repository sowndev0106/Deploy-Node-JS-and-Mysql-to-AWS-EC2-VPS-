const express = require('express');
var mysql = require('mysql');
const app = express();
const post = 3000;
app.get('/', (req, res) => {
    res.send('Hello this is sample server');
});
app.get('/mysql', (req, res) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "162001"
    });
    con.connect(function (err) {
        if (err) {
            res.send('Connection error: ' + err);
            return;
        }
        res.send('Connecting to the MySQL successfully');
    });
})
app.listen(post, (req, res) => {
    console.log(`Example app listening on port ${post}!`);
})