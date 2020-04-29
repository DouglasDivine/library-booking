import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./views/Layout";
import ManageBook from "./components/ManageBook";
import { LayoutProvider } from "./libs/LayoutStore";

const App = () => {
  return (
    <LayoutProvider>
      <Router>
        <Layout>
          <Route path="/manage-books" component={ManageBook} />
        </Layout>
      </Router>
    </LayoutProvider>
  );
};

export default App;
