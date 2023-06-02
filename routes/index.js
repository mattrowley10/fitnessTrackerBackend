const router = require ("express").Router();

//GET /api/health
router.get('/health', (req, res, next)=>{
    res.send("Api is healthy!")
})

router.use("/users", require(`./users`));


module.exports = router; 