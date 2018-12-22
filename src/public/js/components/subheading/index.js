let Component = () => null;

if (__LANGUAGE__ === "en") Component = require("./en");

module.exports = Component;
