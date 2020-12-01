/**
 * Entry application component used to compose providers and render Routes.
 * */

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import  {Routes}  from "../app/Routes";

import { LayoutSplashScreen, MaterialThemeProvider } from "../_metronic/layout";

export default function App({ store, basename }) {
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
