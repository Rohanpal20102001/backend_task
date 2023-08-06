const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const authenticateUser = require("./Middleware/auth");
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(logger("tiny"));
app.use(express.json());

// Database Connection
const db = process.env.MONGO_URI;

mongoose
  .set("strictQuery", true)
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use(authenticateUser);

// Import routes
const characterRoutes = require("./Routes/characterRoute");
const relationRoutes = require("./Routes/relationRoute");

// Use routes
app.use("/api/characters", characterRoutes);
app.use("/api/relations", relationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
