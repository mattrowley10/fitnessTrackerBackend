const usersRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const {
  getAllUsers,
  getUserById,
  createUser,
  getUserByUsername,
} = require("../db/adapters/users");
const { authRequired } = require("./utils");

usersRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const _user = await getUserByUsername(username);
    if (_user) {
      next({
        message: "That use already exists!",
        name: "Auth Error",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await createUser({ username, password: hashedPassword });
    delete user.password;

    const token = jwt.sign(user, process.env.JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });

    res.send(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/login", authRequired, async (req, res, next) => {});

usersRouter.get("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out!",
    });
  } catch (error) {}
});

usersRouter.get("/me", (req, res, next) => {});

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});
usersRouter.get(`/:id`, async (req, res, next) => {
  try {
    const id = req.params.id;
    const userById = await getUserById(id);
    res.send({
      userById,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = usersRouter;
