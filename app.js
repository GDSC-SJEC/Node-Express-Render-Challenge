const express = require('express')
const app = express()
const fs = require('fs');
const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    const rawdata = fs.readFileSync('contribs.json');
    const contribs = JSON.parse(rawdata);
    res.render('index', { contribs: contribs})
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})