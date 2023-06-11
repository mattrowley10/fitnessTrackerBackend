const usersRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const {
  getAllUsers,
  getUserById,
  createUser,
  getUserByUsername,
  getUser,
} = require("../db/adapters/users");
const { authRequired } = require("./utils");

usersRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const _user = await getUserByUsername(username);
    if (_user) {
      res.status(409);
      next({
        message: "That user already exists!",
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

    res.send({
      success: true,
      message: "Registration Successful!",
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const _user = await getUserByUsername(username);
    if (username.length === 0) {
      next({
        message: "You must enter a username!",
        name: "Username Error",
      });
      return;
    }
    if (_user.username !== username) {
      next({
        message: "Incorrect Username!",
        name: "Username Error",
      });
      return;
    }
    const match = await bcrypt.compare(password, _user.password);
    const token = jwt.sign(_user, process.env.JWT_SECRET);
    if (match === true) {
      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });
      res.send(_user);
    }
  } catch (error) {
    next(error);
  }
});

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
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/me", authRequired, async (req, res, next) => {
  res.send({ success: true, message: "you are authorized", user: req.user });
});

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
