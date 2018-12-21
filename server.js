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

app.listen(3000, () => {
  console.log("Server up and running.")
});
