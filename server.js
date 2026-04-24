const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, ".")));

// Route for the main portfolio page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Catch-all route to serve index.html for single-page app behavior
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║     Portfolio Server Running Successfully  ║
╚════════════════════════════════════════════╝

📍 Local URL: http://localhost:${PORT}

Press Ctrl+C to stop the server
  `);
//   🌐 Network URL: http://<your-ip>:${PORT}
});
