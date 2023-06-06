const router = require("express").Router();

//GET /api/health
router.get("/health", (req, res, next) => {
  res.send("Api is healthy!");
});
//GET /api/users
router.use("/users", require(`./users`));
//GET /api/routines
router.use("/routines", require(`./routines`));
//GET /api/activities
router.use("/activities", require(`./activities`));
//GET /api/routine_activities
router.use("/routine_activities", require(`./routine_activities`));

module.exports = router;
