// require file system module
// const fs=require('fs');
// fs.copyFileSync("file.txt","dest.txt");

// const superheroes = require('superheroes');
 
// superheroes.all;
// //=> ['3-D Man', 'A-Bomb', …]
 
// var mysuperHero=superheroes.random();
// console.log(mysuperHero);
// //=> 'Spider-Ham'

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact', (req, res) => {
    res.send('Hello contact World!')
  })
  app.get('/about', (req, res) => {
    res.send('Hello about World!')
  })
  app.get('/hobbies', (req, res) => {
    res.send('Hello hobbies World!')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
