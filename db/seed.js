const client = require("./client.js");
// const  = require("./index")

async function dropTables() {
  console.log("Dropping tables");
  try {
    await client.query(`DROP TABLE IF EXISTS users;`);
  } catch (error) {
    console.error(error);
  }
}

async function createTables() {
  console.log("Creating tables");
  try {
    await client.query(`
    CREATE TABLE users(
        id SERIAL PRIMARY KEY, 
        username TEXT UNIQUE NOT NULL, 
        password TEXT NOT NULL
    );

    CREATE TABLE routines (
        id SERIAL PRIMARY KEY,
        "creator_id" INTEGER REFERENCES users(id),
        is_public BOOLEAN DEFAULT false,
        name VARCHAR(255) NOT NULL,
        goal TEXT NOT NULL
        );

    `);
  } catch (error) {
    console.error(error);
  }
}

async function populateTables() {
  console.log("Populating tables");
  try {
    // await createTables();
  } catch (error) {
    console.error(error);
  }
}

async function rebuildDb() {
  client.connect();
  try {
    await dropTables();
    await createTables();
    await populateTables();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDb();
