import  {useState} from 'react';

const UseForm = (callback , Validate) => {
    const [value , setValue] = useState({email : "" , password : ""})
    const [error , setError] = useState({email : "" , password : ""})

    const handleInputs= event => {
        setValue({
            ...value,
            [event.target.name] : event.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(Validate(value))
        callback()
    }

    return {
        handleInputs,
        handleSubmit,
        value,
        error
    }
}

export default UseForm;
