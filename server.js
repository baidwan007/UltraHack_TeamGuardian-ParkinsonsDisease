/**
 * Created by digvijay on 15/10/17.
 */
/**
 * Created by digvijay on 19/7/17.
 */
const express = require('express');
const app = express();
// const db = require('./db');
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
//app.use('/', express.static(__dirname + "/public"));
// var ngrok = require('ngrok');
//
// //ngrok.connect(function (err, url) {}); // https://757c1652.ngrok.io -> http://localhost:80
// ngrok.connect(3000, function (err, url) {if (err) throw err
// console.log(url)}); // https://757c1652.ngrok.io -> http://localhost:9090
//ngrok.connect({proto: 'tcp', addr: 22}, function (err, 0.0.0.0:3000) {}); // tcp://0.tcp.ngrok.io:48590



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// app.get('/qtest/all', (req, res) => {
//     db.fetchTasks(function (result) {
//     console.log(result);
//     res.send(result)
//     });
// });
// app.get('/',(req,res)=>{
//     res.send('hi');
// })

// app.post('/qtest/addq', (req, res) => {
//
//     db.addNewTask(req.body.title,req.body.descript, function (result) {
//     res.redirect('/all');
// })
//});

app.use('/', express.static(__dirname + "/public"));

app.listen(port,'0.0.0.0', () => {console.log('Started on 2352')});

// app.post('/todos/edit', (req, res) => {
//
//     console.log(req.body.taskid + " " + req.body.done);
//
// db.setTaskState(req.body.taskid, req.body.done,
//     function(result) {
//         res.send(result)
//     }
// )
// });