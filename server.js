const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'The Twelve Apostles of Ireland',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/Ciaran_of_Saigir', (req, res) => {
  res.render('St. Ciaran.hbs', {
    pageTitle: 'St. Ciarán of Saigir'
  });
});

app.get('/Ciaran_of_Clonmacnoise', (req, res) => {
  res.render('St. Ciarán of Clonmacnoise.hbs', {
    pageTitle: 'St. Ciarán of Clonmacnoise'
  });
});

app.get('/Brendan_of_Birr', (req, res) => {
  res.render('St. Brendan of Birr.hbs', {
    pageTitle: 'St. Brendan of Birr'
  });
});

app.get('/Brendan_of_Clonfert', (req, res) => {
  res.render('St. Brendan of Clonfert.hbs', {
    pageTitle: 'St. Brendan of Clonfert'
  });
});

app.get('/Columba_of_Terryglass', (req, res) => {
  res.render('St. Columba of Terryglass.hbs', {
    pageTitle: 'St. Columba of Terryglass'
  });
});

app.get('/Columba', (req, res) => {
  res.render('St. Columba.hbs', {
    pageTitle: 'St. Columba'
  });
});

app.get('/Mohbi_of_Glasnevin', (req, res) => {
  res.render('St. Mohbi of Glasnevin.hbs', {
    pageTitle: 'St. Mohbi of Glasnevin'
  });
});

app.get('/Ruadhain_of_Lorrha', (req, res) => {
  res.render('St. Ruadhain of Lorrha.hbs', {
    pageTitle: 'St. Ruadhain of Lorrha'
  });
});

app.get('/Senan_of_Iniscathay', (req, res) => {
  res.render('St. Senan of Iniscathay.hbs', {
    pageTitle: 'St. Senan of Iniscathay'
  });
});

app.get('/Ninnidh_of_Lough_Erne', (req, res) => {
  res.render('St. Ninnidh of Lough Erne.hbs', {
    pageTitle: 'St. Ninnidh of Lough Erne'
  });
});

app.get('/Laisren_mac_Nad_Froich', (req, res) => {
  res.render('St. Laisrén mac Nad Froích.hbs', {
    pageTitle: 'St. Laisrén mac Nad Froích'
  });
});

app.get('/Canice_of_Aghaboe', (req, res) => {
  res.render('St. Canice of Aghaboe.hbs', {
    pageTitle: 'St. Canice of Aghaboe'
  });
});

app.listen(3000, () => {
  console.log("Server up and running.")
});
