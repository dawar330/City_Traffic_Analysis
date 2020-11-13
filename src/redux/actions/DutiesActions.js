export const createDuty = (Duty) => {
    
    return(dispatch , getstate , {getFirebase , getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("VardenDuties").add({
        ...Duty

    }).then(()=>{
        dispatch({ type: "ADD_Duty", Duty});
        }).catch((err)=>{
            dispatch({ type: "ADD_Duty_Error", err});
      
        })
    
}
}

export const DeletevardenDuty = (ID) => {
    return(dispatch , getstate , {getFirebase , getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("VardenDuties").doc(ID).delete().then(()=>{
        dispatch({ type: "Delete_Duty", ID});
        }).catch((err)=>{
            dispatch({ type: "Delete_Duty_Error", err});
      
        })
    
}
}