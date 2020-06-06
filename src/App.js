import React from "react";
import Home from "./views/Home/Home";
import HowWorks from "./views/HowWorks/HowWorks";
import Resources from "./views/Resources/Resources";
import WhyContribute from "./views/WhyContribute/WhyContribute";

import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ padding: "40px" }}>
          <CacheSwitch>
            <CacheRoute exact path="/" component={Home}></CacheRoute>
            <Route exact path="/how-it-works" component={HowWorks}></Route>
            <Route exact path="/resources" component={Resources}></Route>
            <Route
              exact
              path="/why-contribute"
              component={WhyContribute}
            ></Route>
          </CacheSwitch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
