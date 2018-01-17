//se llama server en vez de app
const express = require('express');

const hbs = require('hbs');

var app = express();

app.use(express.static(__dirname + '/public'));

//motor de vista se tiene que escribir tal cual view engine
app.set('view engine', 'hbs');
//cuando trabajamos con partial
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear();
});

//
// la tercera es next por convencion
app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}: ${req.method} {$req.url}`);
  next();
})

app.user ((req, res, next) => {
    res.render('mantenimiento.hbs');
})

//para esponer en la raiz
app.get('/', (req, res) => {
  //esto manda html

  res.render('home.hbs',{
    pageTitle: 'home',
    etiqueta1: 'homeEtiqueta',
    user: 'juan'
  });
});

//otra que no este en la raiz

app.get('/about',(req, res) => {
  // res.send('about page');
// se encarga de montar el contenido dinamico
  res.render('about.hbs',{
    pageTitle: 'titulo',
    etiqueta1: 'etiqueta',
    user: 'juan'
  });
//se le pasan modelo json

})


//se utiliza el 3000 por convencion
app.listen(3000);
