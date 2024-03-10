const jwt = require("jsonwebtoken");

export const verifyToken = (req, res) => {
  const { token } = req.params;

  // Verifying the JWT token
  jwt.verify(token, "ourSecretKey", function (err, decoded) {
    if (err) {
      console.log(err);
      res.send(
        "Email verification failed, possible the link is invalid or unexpired"
      );
    } else {
      res.send("Email verified successfully");
    }
  });
};