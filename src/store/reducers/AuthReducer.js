
const AuthReducer = (state = {} , action) => {
    switch(action.type) {
        case ('SIGN_IN') : {
            return state
        }
        case ('SIGN_IN_ERR') : {
            return state
        }
        case ('SIGN_UP') : {
            console.log('sign up reducer')
            return state
        }
        case ('SIGN_UP_ERR') : {
            console.log('sign up error in reducer')
            return state
        }
        default : 
            return state
        
    }
}
export default AuthReducer;