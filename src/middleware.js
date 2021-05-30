const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./config");

module.exports = {
  loggedIn: (req, res, next) => {
    try {
      // kodel po authorization ?
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, jwtSecret);
      req.userData = decodedToken;
      next();
    } catch (e) {
      console.log(e);
      return res.status(401).send({ error: "Validation failed" });
    }
  },
};
