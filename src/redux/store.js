

import {persistStore} from "redux-persist";
import {rootReducer} from "./rootReducer";
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';
import fbConfig from '../config/fbConfig';
import {createStore, applyMiddleware, compose} from 'redux';



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase , getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  
  )
);

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
export const persistor = persistStore(store);



export default store;
