 //import { auth} from 'firebase';

const SignIn = (creds) => {
    return (dispatch  , {getFirebase} ) => {
        console.log(getFirebase)
        const firebase = getFirebase();
         console.log(firebase)
        
        firebase
        .auth()
        .createUserWithEmailAndPassword(creds.email , creds.password)
        .then(() => {
            console.log(creds)
            dispatch({
                type : 'SIGN_IN'
            })
        })
        .catch((err) => {
            console.log('ye sign in err ha' , err)
             dispatch({
                 type : 'SIGN_IN_ERR'
             })
        })
    }
 }
 export default SignIn;

 export const SignUpAction = (creds) => {
    return (dispatch , getState) => {
        console.log('action dispatch ',creds)
    }
 }