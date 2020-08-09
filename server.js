const express = require("express");
const path = require("path");
const PORT = 3001;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
