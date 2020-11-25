const initState = {
    Duties : []  
}
  const VardenDutiesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_Duty':
            console.log("Varden Duty Added")
            return state;
        case 'ADD_Duty_Error':
            console.log("Varden Duty error", action.err)
            return state;
        case 'Delete_Duty_Error':
                console.log("Varden Duty delete error", action.err)
            return state;
        case 'Delete_Duty':
                console.log("Varden Duty Deleted")
            return state;
            case 'Get_Duties':
                console.log(action)
                return {
                    Duties: action.Duties
                }
            case 'Get_Duties_Error':
                console.log(action, action.err)
                return {
                    ...state,
                    Dutieserr : action.err.message
                }
        
        default: 
            return state;

        
    }  

}
export default VardenDutiesReducer