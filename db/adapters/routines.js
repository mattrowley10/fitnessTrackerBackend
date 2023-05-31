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

async function getRoutineById() {
    try {
    } catch (error) {
        
    }
}

async function getRoutinesWithoutActivities(){
    try {
        
    } catch (error) {
        throw error;
    }
}

async function getAllRoutines(){
    try {
        
    } catch (error) {
        throw error;
    }
}

async function getAllPublicRoutines(){
    try {
        
    } catch (error) {
        throw error;
    }
}

async function getAllRoutinesByUser(username){
    try {
        
    } catch (error) {
        throw error;
    }
}

async function getPublicRoutinesByUser(username){
    try {
        
    } catch (error) {
        throw error;
    }
}

async function getPublicRoutinesByActivity(activityId){
    try {
        
    } catch (error) {
        throw error;
    }
}

async function updateRoutine(routineId, isPublic, name, goal){
    try {
        
    } catch (error) {
        throw error;
    }
}

async function destroyRoutine(routineId){
try {
    
} catch (error) {
    throw error;
}
}
module.exports = { createRoutines, getRoutineById, getRoutinesWithoutActivities, getAllRoutines, getAllPublicRoutines, getAllRoutinesByUser, getPublicRoutinesByUser, getPublicRoutinesByActivity, destroyRoutine, updateRoutine }