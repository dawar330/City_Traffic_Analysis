
const initState = {
    Vardens : []  
}
  const wardenreducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_Varden':
            console.log("Varden Added", action.Vardens)
            return state;
        case 'ADD_varden_Error':
            console.log("Varden Added error", action.err)
            return state;
        default: 
            return state;

        
    }  

}
export default wardenreducer