import React from "react";
// import pages
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
// import styles
import GlobalStyle from "./components/GlobalStyle";
// Router
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
