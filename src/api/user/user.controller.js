const User = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require("../../helpers/error/handle.error");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const userDuplicado = await User.findOne({ username: newUser.username });
    if (userDuplicado) return next("User alredy exists");

    const newUserDB = newUser.save();
    return res.json({
      status: 201,
      message: "usuario registrado",
      data: newUserDB,
    });
  } catch (error) {
    return next(setError(500, "User register fail"));
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ username: req.body.username });
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password = null;
      const token = jwt.sign(
        {
          id: userInfo._id,
          username: userInfo.username,
        },
        req.app.get("secretKey"),
        { expiresIn: "1h" }
      );
      return res.json({
        status: 200,
        message: "welcome user",
        user: userInfo,
        token: token,
      });
    } else {
      return next("Incorrect user or password");
    }
  } catch (error) {
    return next(setError(500, "User login fail"));
  }
};

module.exports = { register, login };
