require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db/connect'); // Make sure this matches

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  await connectToDatabase(); // Call it here
});
