export const createvarden = (Vardens) => {
    return(dispatch , getstate , {getFirebase , getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("Vardens").add({
        ...Vardens

    }).then(()=>{
        dispatch({ type: "ADD_Varden", Vardens});
        }).catch((err)=>{
            dispatch({ type: "ADD_Varden_Error", err});
      
        })
    
}
}