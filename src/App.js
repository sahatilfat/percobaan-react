import React, { component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AboutComp from "./Components/AboutComp";
import EditComp from "./Components/Class/EditComp";
import ListComp from "./Components/Class/ListComp";
import TambahComp from "./Components/Class/TambahComp";
import DetailComp from "./Components/DetailComp";
import HomePage from "./Components/HomePage";
import KelasComp from "./Components/Hooks/Class/KelasComp";
import HooksComp from "./Components/Hooks/Functional/HooksComp";
import NavbarComp from "./Components/NavbarComp";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutComp} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/detail/:id" component={DetailComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
