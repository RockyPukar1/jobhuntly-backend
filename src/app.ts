import express from "express";
const app = express();

// import routes
import routes from "./routes";

// /url defination
// http://localhost:3005/api/v1
app.use("/api/v1", routes);

app.listen(3005, "localhost", () => {
  console.log("Server is listening to port 3005");
});
