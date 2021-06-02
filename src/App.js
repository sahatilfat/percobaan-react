import React, { component, createContext, useReducer, useState } from "react";
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
import HooksReducer from "./Components/Hooks/Functional/HooksReducer";
import HooksUseEffects from "./Components/Hooks/Functional/HooksUseEffects";
import ProductComp from "./Components/Hooks/Functional/ProductComp";
import Tagihan from "./Components/Hooks/Functional/Tagihan";
import NavbarComp from "./Components/NavbarComp";

export const keranjangContext = createContext();

const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan * state.jumlah + state.hargasatuan,
      };
    case "kurang":
      if (state.jumlah > 0) {
        return {
          ...state,
          jumlah: state.jumlah - 1,
          hargatotal: state.hargatotal - state.hargasatuan,
        };
      }
    default:
      return state;
  }
};

const App = () => {
  const [value, setValue] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ value, setValue }}>
          <NavbarComp />
          <keranjangContext.Provider
            value={{ keranjangState: count, keranjangDispatch: dispatch }}
          >
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
              <Route exact path="/reducer" component={HooksReducer} />
              <Route exact path="/tagihan" component={Tagihan} />
            </Switch>
          </keranjangContext.Provider>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
