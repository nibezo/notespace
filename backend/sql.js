// If database.db doesn't exist, create if
export const loginData = `CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY,
  username TEXT,
  password TEXT,
  token TEXT,
  created_at DATETIME
)`

// Create user
export const createUser = `INSERT INTO users(username, password, created_at) 
VALUES('${login}', 12345678, DATETIME('now'))`
