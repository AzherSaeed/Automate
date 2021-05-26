
export default function Validate(value) {
    let error = {};

    if(!value.email){
        
    }else if (!/\S+@\S+\.\S+/.test(value.email)) {
        error.email = 'Email address is required'
    }

    if(!value.password) {
        error.password = 'Password is required'
    }else if (value.password.length < 7) {
        error.password = 'Password need to be more then 10 characters'
    }
    

    return error;
}
