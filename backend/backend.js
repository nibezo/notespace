const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

let sql = `CREATE TABLE your_table_name(
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER,
  created_at DATETIME
)`;

db.run(sql, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Table created");
});

sql = `INSERT INTO your_table_name(name, age, created_at) 
            VALUES('John Doe', 28, DATETIME('now'))`;

db.run(sql, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Data inserted");
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
  console.log(name);
  sql = `INSERT INTO your_table_name(name, age, created_at) 
  VALUES('${name}', 28, DATETIME('now'))`;
  db.run(sql, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Data with name was inserted");
  });
  readline.close();
});
