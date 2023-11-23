import express from "express";
const router = express();

// http://localhost:3005/api/v1/auth/login
router.post("/login", (req, res) => {
  // logic
});

// http://localhost:3005/api/v1/auth/register
router.post("/register", (req, res) => {
  // register logic
});

export default router;
