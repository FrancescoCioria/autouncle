const path = require("path");

module.exports = {
  ROOT: __dirname,
  ENTRY: `${__dirname}/src/setup/index.js`,
  // BUILD: path.resolve(__dirname, "web", "./docs"),
  NODE_MODULES: path.resolve(__dirname, "../node_modules")
};
