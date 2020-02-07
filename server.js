
const express = require( 'express' );
const React = require('react');
var reactViews = require('express-react-views');

const app = express();
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.use("/dist", express.static("./dist"));
app.get('/home', function(req, res) {
    res.render('Home');
});
app.get('/', function(req, res) {
    res.render('IndexHtml');
});

app.listen(3000);
console.log("App is running on http://localhost:3000");
