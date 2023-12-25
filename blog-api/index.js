const express = require("express");
const bodyParser = require("body-parser");
const { getDatabaseConnection } = require("./utils/db");
const blogRoutes = require("./routes/blogRoutes");
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());

console.log(process.env.DB_URL)
mongoose.connect("mongodb+srv://kumarambuj1997:Sunny123@blog.xbbvnl0.mongodb.net/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection

db.on('error', (err) => {
  console.error(`MongoDB Connection Error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use("/api/v1", blogRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});

// localhost:4000/api/v1/posts

{
    "title":"dfdhfgjd",
    "content":"dfdjhgfjhdfd"
}