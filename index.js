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
        password: "12345678"
    });
    con.connect(function (err) {
        if (err) {
            res.send('Connection error: ' + err);
            return;
        }

        con.query("SHOW DATABASES;", function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
})
app.listen(post, (req, res) => {
    console.log(`Example app listening on port ${post}!`);
})