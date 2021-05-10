const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Authentication for validating the Users
//auth middleware () validates the header the user provides and fins the associated user from there
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // To check if our token is valid
    const decoded = jwt.verify(token, "thisisme");
    // tokens.token will look for a user that has a given token value in one of the array items in the token
    // that is It will find a user with the correct id who has that authentication token still stored
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    // Check if we found a user with the token
    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();

    // To check whether this token is still part of that Tokens Array
  } catch (e) {
    res.status(401).send({ error: "Please Authenticate." });
  }
};

module.exports = auth;
