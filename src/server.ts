import { chalkError, chalkSuccess, chalkWarning } from "./tools/chalk";
import connect from "./db";
import logger from "./tools/winston";
import products from "./models/products";
import shoppingCart from "./models/cart.model";
import { total, printProducts, generateShopMessage } from "./controller/repo";
import { printDutiesNames } from "./controller/dutiess.controller";

import app from "./app";

const mainMarket = () => {
  printProducts(products);
  generateShopMessage(shoppingCart, products);
  total(shoppingCart, products);
};

const mainDuties = () => {};

// mainMarket();
mainDuties();

connect();

const port = 5853;

app.listen(port, () => {
  console.log(`Server running on port ${chalkSuccess(port)}`);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(
    chalkError("Unhandled Rejection at:", promise, "reason:", reason)
  );
  // Application specific logging, throwing an error, or other logic here
});

app.on("error", (err) => {
  console.log(chalkError("Express error:", err));
  // Application specific logging, throwing an error, or other logic here
});
process.on("uncaughtException", (err) => {
  console.log(chalkError("Uncaught Exception:", err));
  // Application specific logging, throwing an error, or other logic here
});

process.on("SIGINT", () => {
  logger.warn("SIGINT signal received.");
  process.exit();
});

process.on("SIGTERM", () => {
  logger.warn("SIGTERM signal received.");
  process.exit();
});
