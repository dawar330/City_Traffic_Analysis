export const Signin = (crds) => {
    
    return(dispatch , getstate , {getFirebase , getFirestore}) => {
        console.log('signingin')
        const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
        crds.email,
        crds.password

    ).then(()=>{
        dispatch({ type: "login_Succes", crds});
        })
    
}
}
