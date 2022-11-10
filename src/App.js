import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Navigation/Layout";

function App() {

  return (
    <Layout >

      <Switch>
        <Route path="/Works" exact>
          <Works />
        </Route>

        <Route path="/About" exact>
          <About />
        </Route>

        <Route path="/Contact" exact>
          <Contact />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
