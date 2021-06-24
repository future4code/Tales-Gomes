import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { AdminPage } from "./pages/AdminPage"


function App() {
  return (
    <BrowserRouter>
    <Switch>
       <AdminPage />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
