
const initState = {
    
    
}
  const authreducer = (state = initState, action) => {
    switch (action.type) {
        case 'login_Succes':
            console.log("logged in")
            return {
                ...state,
                autherror: null
            }
        case 'login_Error':
            
            return {
                ...state,
                autherror: action.err.message
                
            }
        case 'SignUp_Succes':
            console.log("signed up")
            return {
                ...state,
                    autherror: null
                }
        case 'SignUp_Error':
            
                return {
                    ...state,
                    autherror: action.err.message
                }
                case 'Update_Success':
                    console.log(action, action.User)
                    return {
                        ...state,
                       
                    }
        case 'GetUser_Succes':
            console.log(action, action.err)
                return {
                        ...state,
                        User: action.User
                    }
        case 'SignOut_Succes':
                console.log("SignOut Sucess")
                return {
                state
                        }
        default: 
            return state;

        
    }  

}
export default authreducer