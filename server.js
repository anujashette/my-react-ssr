
const express = require( 'express' );
const React = require('react');
var reactViews = require('express-react-views');

const app = express();
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

function handleRender(req, res) {
    res.render('IndexHtml',{req:req});
}
function handleRenderHome(req, res) {
    res.render('Home');
}

app.use("/public", express.static("./public"));

app.get("/", handleRender);
app.get("/home", handleRenderHome);

app.listen(3000);
console.log("App is running on http://localhost:3000");
