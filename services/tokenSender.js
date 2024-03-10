const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ckrp2018@gmail.com",
    pass: "abc123",
  },
});

const token = jwt.sign(
  {
    data: "Token Data",
  },
  "ourSecretKey",
  { expiresIn: "10m" }
);

const mailConfigurations = {
  from: "jobhuntly@noreply.com",
  to: "ckrp2018@gmail.com",
  subject: "Email verififcation",
  text: `Hi! there, You have recently visited our website and entered you email. Please follow the given link to verify you email http://localhost:3005/verify/${token}
    Thanks`,
};

transporter.sendMail(mailConfigurations, function(error, info) {
    if (error) throw Error(error);
    console.log(("Email Sent Successfully"));
    console.log(info);
})