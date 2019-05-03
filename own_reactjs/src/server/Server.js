const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const port = 4000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todos'
});

const app = express();
const SELECT_ALL_TODO = 'SELECT * FROM todos';

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res) =>
    res.send('go to /todo to see todos')
);

app.get('/todo', (req, res) => {

    connection.query(SELECT_ALL_TODO, (err, result) =>{

        if(err) {
            res.send(err)
        } else {
            return res.json({
                data: result
            })
        }

    });

});

app.listen(port, () => {
    console.log("Listening on port" + port);
});