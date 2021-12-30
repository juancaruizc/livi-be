const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const reviewsRouter = require("./reviews/reviews-router");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/reviews", reviewsRouter);

module.exports = server;
