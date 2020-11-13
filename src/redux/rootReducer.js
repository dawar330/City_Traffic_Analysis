
import {combineReducers} from "redux";
import wardenreducer from './reducers/wardenreducer'
import authreduceder from './reducers/authreduceder'
import VardenDutiesReducer from './reducers/VardenDutiesReducer'
import {firestoreReducer} from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase";


export const rootReducer = combineReducers({
  
  auth: authreduceder,
  profiles: wardenreducer,
  Duties: VardenDutiesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer

});

export default rootReducer; 
