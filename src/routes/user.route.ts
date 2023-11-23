import express from "express";
const router = express();

// create
router.post("/", (req, res) => {

});

// read/fetch => all users
router.get("/", (req, res) => {

});

// detail of user
router.get("/:id", (req, res) => {
  const { id } = req.params;  
})

export default router;
