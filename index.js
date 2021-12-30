require("dotenv").config();

const server = require("./api/server");

const PORT = process.env.PORT;

server.get("/", (req, res) =>
  res.send(`Welcome to the Livi API (the fake one)`)
);

server.listen(PORT, () => console.log(`listening on port:${PORT}`));
