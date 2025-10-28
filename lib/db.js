import mysql from "mysql2/promise";

export async function connectToDatabase() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "schooldb",
  });
  return db;
}
