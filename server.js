const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001

const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '../notespace/client/build')));

app.get('/api', (req, res) => {
  res.json({message: "it's working. "})
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.listen(port, () => {
  console.log(`My app is listening on port ${port}`)
})