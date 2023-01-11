import { loginData, createUser } from 'sql.js';
// We use SQLite3
const sqlite3 = require('sqlite3').verbose();
// We need to check the database existing
const fs = require('fs');
// Path to the database file
const path = './backend/database.db';


// Connect to the database
let db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
});

db.run(loginData, (err) => {
  if (err) {
    return console.error(err.message);
  }
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Who are you?', (login) => {
  console.log(login);
  db.run(createUser, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Data with name was inserted');
  });
  readline.close();
});
