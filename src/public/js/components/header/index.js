let Component = () => null;

if (__LANGUAGE__ === "vi") {
 Component = require("./vi");
} else {
 Component = require("./en");
}

module.exports = Component;