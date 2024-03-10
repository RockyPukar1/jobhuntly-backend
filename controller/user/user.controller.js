const User = require("../../model/user.model");

class UserController {
  register = async (req, res) => {
    try {
      const { fullName, email, password, status } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create a new user
      const user = await User.create({ fullName, email, password, status });

      //   Generate a JWT token
      const token = user.generateJWT();

      // Send a reponse with the user and token
      res.status(201).json({
        data: user,
        token: token,
        success: true,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };

  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const validUser = user.checkPassword(password);
      if (!validUser) {
        return res.status(500).json({ message: "Invalid email or password" });
      }
      //   Generate a JWT token
      const token = user.generateJWT();

      // Send a response with the user and token
      res.status(200).json({ validUser, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
}

const { register, login } = new UserController();
module.exports = { register, login };
