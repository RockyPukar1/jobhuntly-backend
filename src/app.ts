import express from "express";
const app = express();

// import routes
import homeRoutes from "./routes/home.route";

// /url defination
app.use("/", homeRoutes);

app.listen(3005, "localhost", () => {
  console.log("Server is listening to port 3005");
});
