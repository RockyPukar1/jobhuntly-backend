const express = require("express");
const { verifyToken } = require("../../middleware/verify-token.middleware");

const app = express.Router();

app.get("verify/:token", verifyToken);
