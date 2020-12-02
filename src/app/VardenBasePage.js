import React, {useState,Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";
import {getUser} from "../redux/actions/authActions"
import UserProfilepage from "./pages/UserProfile/UserProfilePage";
import {EmergencyPage} from "./pages/EmergencyPage";
import { connect, shallowEqual, useSelector } from "react-redux";
import { getFirebase } from "react-redux-firebase";
import { db } from "../config/fbConfig";


 function VardenBasePage(props) {

    const {User} = props    
    // const {id} = useSelector(
    //     ({firebase}) => ({
    //         id: firebase.auth ,
    //     }),
    //     shallowEqual
    // );
    
    
    // var docRef = db.collection("Users").doc(id.uid);
    // const [ User , setUser] =  useState([]);
    // React.useEffect(()=>{
    //     docRef.get().then(function(doc) {
    //         if (doc.exists) {
    //           setUser(doc.data());
    //         } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //         }
    //       }).catch(function(error) {
    //         console.log("Error getting document:", error);
    //       }); 
    // },[])
    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/user-profile"/>
                }
                <Route path="/user-profile" component={() => <UserProfilepage User={User} />}/>
                <ContentRoute path="/EmergencyNumbers" component={EmergencyPage}/>
                
                <Redirect to="error/error-v1"/>
 
            </Switch>
        </Suspense>
    );
}

export default (VardenBasePage)