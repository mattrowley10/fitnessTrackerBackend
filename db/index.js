const { Client } = require('pg')
const client = new Client('postgress://localhost:5432/fitnesstrackerbackend')

async function createUser ({ id, username, password }){
    try {
        const { rows: [ user ] } = await client.query(`
        INSERT INTO  users(id, username, password)
        VALUES($1, $2, $3)
        ON CONFLICT (username) DO NOTHING
        RETURNING *;`, [id, username, password])
    } catch (error) {
        throw error 
    }
}

async function getAllUsers(){
    try{
        const { rows } = await client.query(`
        SELECT id, username
        FROM users;
        `)
    } catch (error){
        throw error
    }
}

async function createRoutines({
    creator_id, 
    is_public,
    name,
    goal
}){
    try {
        const { rows } = await client.query(`
        INSERT INTO routines("creator_id", is_public, name, goal)
        VALUES($1, $2, $3, $4)
        RETURNING *;
         `, [creator_id, is_public, name, goal]);
    } catch(error){
        throw error
    }
}

async function getAllRoutines(){
    try{
        
    }catch(error){
        throw error
    }
}

module.exports = {
    createUser,
    getAllUsers,
    createRoutines
}