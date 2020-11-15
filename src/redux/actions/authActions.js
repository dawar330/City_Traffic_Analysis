export const Signin = (crds) => {
    
    return(dispatch , getstate , {getFirebase , getFirestore}) => {
        
        const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
        crds.email,
        crds.password

    ).then(()=>{
        dispatch({ type: "login_Succes", crds});
        }).catch((err)=>{
            
            dispatch({ type: "login_Error", err});
      
        })
    
}
}
export const signUp = (newUser) => {
    return (dispatch ,getState, {getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('Users').doc(resp.user.uid).set({
                Name : newUser.fullname,
                UserName : newUser.username
            })
        }).then(() => {
            dispatch ({type : "SignUp_Succes"})
        }).catch((err) => {
            dispatch ({type : "SignUp_Error", err})
        })
    }
}
export const signOut = () => {
    return (dispatch ,getState, {getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        
        firebase.auth().signOut().then(() => {
           dispatch ({type : "SignOut_Succes"})
        })
    }
}
