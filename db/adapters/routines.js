const client = require('../client')

async function createRoutines({
    creator_id, 
    is_public,
    name,
    goal
}){
    try {
        const { rows : [routine] } = await client.query(`
        INSERT INTO routines("creator_id", is_public, name, goal)
        VALUES($1, $2, $3, $4)
        RETURNING *;
         `, [creator_id, is_public, name, goal]);
         return routine
    } catch(error){
        throw error
    }
}

module.exports = { createRoutines }