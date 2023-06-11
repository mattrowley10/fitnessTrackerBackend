const jwt = require("jsonwebtoken");

const authRequired = (req, res, next) => {
  try {
    const token = req.signedCookies.token;
    console.log("Token: ", token);
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Req.user: ", req.user);
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "Please Register or Login :}",
    });
    return;
  }
  next();
};

module.exports = { authRequired };
