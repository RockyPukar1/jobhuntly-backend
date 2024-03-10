const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["applicant", "company"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt
    .hash(this.password, 10)
    .then((hashed) => {
      this.password = hashed;
      next();
    })
    .catch((err) => next(err));
});

UserSchema.methods.generateJWT = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

UserSchema.methods.checkPassword = function (password) {
  const validPass = bcrypt.compareSync(password, this.password);
  return validPass;
};

module.exports = mongoose.model("User", UserSchema);
