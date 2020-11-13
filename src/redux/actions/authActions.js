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
