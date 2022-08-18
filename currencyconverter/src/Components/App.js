import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "../pages/Home/Home";
import Converter from "../pages/Converter/Converter";
import NotFound from "../pages/NotFound/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/converter" exact component={Converter} />
        <Route path="/1" component={NotFound} />
      </Switch>
    </Layout>
  );
}
export default App;
