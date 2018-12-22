const Header = require("../header");
const Subheading = require("../subheading");
const Paragraph = require("../paragraph");

require.ensure(["react", "react-dom"], require => { // lazy loading...
 const React = require("react");
 const ReactDOM = require("react-dom");

 const App = () => {
  return (
   <div>
    <Header /> // different for each language but always be here
    <Subheading /> // could be here or not
    <Paragraph /> // always the same 
   </div>
  );
 };

 ReactDOM.render(<App />, document.getElementById("root"));
});