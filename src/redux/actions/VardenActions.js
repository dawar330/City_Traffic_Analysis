export const createvarden = (newUser) => {
    return(dispatch , getstate , {getFirebase , getFirestore}) => {
    const firebase = getFirebase();
    const firestore= getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
        newUser.Email,
        'hello123'
    ).then((resp) => {
        return firestore.collection('Users').doc(resp.user.uid).set({
            FirstName : newUser.FirstName,
            LastName : newUser.LastName,
            Email : newUser.Email,
            Age : newUser.Age,
            Rank : newUser.Rank,
            Designation : newUser.Designation,
            isAdmin : false
        })
    }).then(() => {
        dispatch ({type : "ADD_Varden"})
    }).catch((err) => {
        dispatch ({type : "ADD_varden_Error", err})
    })
    
}
}