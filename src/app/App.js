/**
 * Entry application component used to compose providers and render Routes.
 * */

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "../app/Routes";

import { LayoutSplashScreen, MaterialThemeProvider } from "../_metronic/layout";

export default function App({ store, persistor, basename }) {
  return (
    /* Provide Redux store */
 
    <Provider store={store}>
       <BrowserRouter basename={basename}>
            <MaterialThemeProvider>
              {/* Provide `react-intl` context synchronized with Redux state.  */}
             
                {/* Render routes with provided `Layout`. */}
                <Routes />
            
            </MaterialThemeProvider>
            </BrowserRouter>
    </Provider>
  );
}
