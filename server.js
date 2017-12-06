var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_api_db'
});

app.get('/', (req, res) => {
    res.send('Nodejs Express REST API!');
});

app.get('/api', (req, res, next) => {
    connection.query('select * from Persons', (error, results) => {
        if (error) next(error);
        res.send(results);
    });
});

app.get('/api/:id', (req, res, next) => {
    var id = req.params['id'];
    connection.query('select * from Persons where PersonId = ?', id, (error, result) => {
        if (error) next(error);
        res.send(result);
    });
});

app.post('/api', (req, res, next) => {
    var id = req.body['id'];
    var name = req.body['name'];
    var surname = req.body['surname'];
    var city = req.body['city'];
    connection.query('insert into Persons values(?, ?, ?, ?)', [id, name, surname, city], (error, result) => {
        if (error) next(error);
        res.send({ result: 'Success', message: 'Veri ekleme işlemi başarılı.' });
    });
});

app.put('/api', (req, res, next) => {
    var id = req.body['id'];
    var name = req.body['name'];
    var surname = req.body['surname'];
    var city = req.body['city'];
    connection.query('update Persons set FirstName = ?, LastName = ?, City = ? where PersonID = ?', [name, surname, city, id], (error, result) => {
        if (error) next(error);
        res.send({ result: 'Success', message: 'Veri güncelleme işlemi başarılı.' });
    });
});

app.delete('/api/:id', (req, res, next) => {
    var id = req.params['id'];
    connection.query('delete from Persons where PersonID = ?', id, (error, reulst) => {
        if (error) next(error);
        res.send({ result: 'Success', message: 'Veri silme işlemi başarılı.' });
    });
});

app.listen('8080', () => {
    console.log('Uygulama 8080 portunda çalışıyor.');
});