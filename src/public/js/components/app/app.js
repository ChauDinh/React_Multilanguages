const Header = require("../header/Header");
const Subheading = require("../subheading/Subheading");
const Paragraph = require("../paragraph/Paragraph");

require.ensure(["react", "react-dom"], require => {
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