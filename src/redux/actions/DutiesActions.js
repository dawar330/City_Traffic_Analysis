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

export const GetDuties = () => {
    return(dispatch , getstate , {getFirebase , getFirestore}) => {
    const firebase = getFirebase();
    const firestore= getFirestore();
    var Duties=[]
    
    const items =  firestore.collection("VardenDuties").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            Duties.push({...doc.data(),id:doc.id});
        });
    })
   
    .then(() =>{
        
        dispatch ({type : "Get_Duties",Duties})
    }).catch((err) => {
        dispatch ({type : "Get_Duties_Error", err})
    })
    
   
    
}
}