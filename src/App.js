import React from "react";
// import pages
import AboutUs from "./pages/AboutUs";
// import styles
import GlobalStyle from "./components/GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <h1>e-Learning</h1>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
};

export default App;
