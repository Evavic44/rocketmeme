/**
 * ----------- MEMEFY ----------
 */

if(process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// create app
const app = express();

// connect to db
require("./utils/db")(DB_URI);

// initialize middlewares
app.use(express.json());
app.use(cors());

// initialize routes
app.use("/meme", require("./routes/meme.route"));
app.use("/auth", require("./routes/auth.route"));

// start server
app.listen(port, () => console.log(`[API] Server started on port - ${port}`));