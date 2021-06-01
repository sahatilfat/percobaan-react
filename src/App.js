import React, { component, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { CartContext } from "./CartContext";
import AboutComp from "./Components/AboutComp";
import EditComp from "./Components/Class/EditComp";
import ListComp from "./Components/Class/ListComp";
import TambahComp from "./Components/Class/TambahComp";
import DetailComp from "./Components/DetailComp";
import HomePage from "./Components/HomePage";
import KelasComp from "./Components/Hooks/Class/KelasComp";
import HooksComp from "./Components/Hooks/Functional/HooksComp";
import HooksUseEffects from "./Components/Hooks/Functional/HooksUseEffects";
import ProductComp from "./Components/Hooks/Functional/ProductComp";
import NavbarComp from "./Components/NavbarComp";

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ value, setValue }}>
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
            <Route exact path="/useeffects" component={HooksUseEffects} />
            <Route exact path="/produk" component={ProductComp} />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
