import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss"; // Standard version
// import "./sass/style.react.rtl.css"; // RTL version
import "./_metronic/_assets/plugins/keenthemes-icons/font/ki.css";
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./_metronic/_assets/plugins/flaticon/flaticon.css";
import "./_metronic/_assets/plugins/flaticon2/flaticon.css";
// Datepicker
import "react-datepicker/dist/react-datepicker.css";
import App from './../src/app/App';
import { Provider} from 'react-redux'
import store, { persistor } from "./redux/store";
import {
  MetronicLayoutProvider,
  MetronicSplashScreenProvider,
  MetronicSubheaderProvider
} from "./_metronic/layout";
const { PUBLIC_URL } = process.env;


ReactDOM.render(
  <MetronicLayoutProvider>
      <MetronicSubheaderProvider>
        <MetronicSplashScreenProvider>
          <Provider store={store}><App store={store} persistor={persistor} basename={PUBLIC_URL} /></Provider>
          
        </MetronicSplashScreenProvider>
      </MetronicSubheaderProvider>
    </MetronicLayoutProvider>
    ,
  document.getElementById('root')
);
