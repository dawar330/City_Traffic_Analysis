const initState = {
    Duties : []  
}
  const VardenDutiesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_Duty':
            console.log("Varden Duty Added", action.Vardens)
            return state;
        case 'ADD_Duty_Error':
            console.log("Varden Duty error", action.err)
            return state;
        case 'Delete_Duty_Error':
                console.log("Varden Duty delete error", action.err)
            return state;
        case 'Delete_Duty':
                console.log("Varden Duty Deleted", action.Vardens)
            return state;
        
        default: 
            return state;

        
    }  

}
export default VardenDutiesReducer