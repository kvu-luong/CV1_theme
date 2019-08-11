const express = require('express');
var app = express();

app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');
app.set("views", "./src/views");
//cv1
app.get('/', (req, res)=>{
    res.render("cv1");
})
app.listen(process.env.PORT || 8080, () => console.log('Server started!'));