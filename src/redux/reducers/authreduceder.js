
const initState = {
    
}
  const authreducer = (state = initState, action) => {
    switch (action.type) {
        case 'login_Succes':
            console.log("Logged_in")
            return {
                ...state,
                autherror: null
            }
        case 'login_Error':
            console.log("login error", action.err)
            return {
                ...state,
                autherror: "loginFailed"
            }
        default: 
            return state;

        
    }  

}
export default authreducer