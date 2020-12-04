
const initState = {
    Users : []  
}
  const wardenreducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_Varden':
            console.log("Varden Added", action.Vardens)
            return state;
        case 'ADD_varden_Error':
            console.log("Varden Added error", action.err)
            return {
                ...state,
                vardenerr : action.err.message
            }
        case 'Delete_Varden':
            console.log("Delete_Varden")
            return state;
        case 'Delete_Varden_Error':
            console.log("Delete_Varden_Error", action.err)
            return {
                ...state,
                vardenerr : action.err.message
            }
            case 'Get_Varden':
                console.log(action)
                return {
                     Users: action.Vardens
                }
            case 'Get_Varden_Error':
                console.log(action, action.err)
                return {
                    ...state,
                    vardenerr : action.err.message
                }
                case 'GetVardenNameid':
                    console.log(action)
                    return {
                         UsersIds: action.Vardens
                    }
                case 'GetVardenNameid_Error':
                    console.log(action, action.err)
                    return {
                        ...state,
                        vardenerr : action.err.message
                    }
                case 'Admin_Added':
                    console.log(action, action.User)
                    return {
                        ...state,
                            
                     }
                
                case 'Admin_Removed':
                    console.log(action, action.User)
                    return {
                        ...state,
                            
                     }
                
            default: 
            return state;

        
    }  

}
export default wardenreducer