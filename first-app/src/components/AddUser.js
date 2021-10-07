

import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import './AddUser.css'

function AddUser(props) {

    const history = useHistory();
    const dispatch = useDispatch();
    const [isUserAdded, setIsUserAdded] = useState(false)

    const [inputField , setInputField] = useState({
        fname: '',
        lname: '',
        dob: null,
        city: '',
        mnumber: null
    })
    const [error, setError] = useState(false)

    const inputsHandler = (e) =>{
        setError(false)
        setInputField( {...inputField,[e.target.name]: e.target.value} )
    }

    const handleValidation = () => {
        if(inputField.fname===''){
            setError(true)
            return false
        }
        if(inputField.lname===''){
            setError(true)
            return false
        }
        if(inputField.dob===null){
            setError(true)
            return false
        }
        if(inputField.city===''){
            setError(true)
            return false
        }
        if(inputField.mnumber===null){
            setError(true)
            return false
        }
        return true
    }

    const submitButton = () =>{
        if(handleValidation()){
            dispatch({type: "ADD_USER",data:inputField})
            setIsUserAdded(true)
        }
        
    }

    const goBack = () =>{
        history.push("/")
    }

    return (
        isUserAdded ? 
        <div className="addUser">
        <button onClick={goBack}>Go Back</button>
        <br/>
        <h3>User Added Successfully!!</h3>
    </div>
    :
        <div className="addUser">
            <button onClick={goBack}>Go Back</button>
            <br/>

            {error && <h4>Fill all details</h4> }

            <label for="fname">First Name</label>
            <br/>
            <input 
            type="text" 
            name="fname" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={inputField.fname}
            required/>

            <br/>
            <label for="lname">Last Name</label>
            <br/>
            <input 
            type="text" 
            name="lname" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={inputField.lname}
            required/>

            <br/>
            <label for="dob">D.O.B.</label>
            <br/>
            <input 
            type="datetime-local" 
            name="dob" 
            onChange={inputsHandler} 
            placeholder="DOB" 
            value={inputField.dob}
            required/>

            <br/>
            <label for="city">City</label>
            <br/>
            <input 
            type="text" 
            name="city" 
            onChange={inputsHandler} 
            placeholder="City" 
            value={inputField.city}
            required/>

            <br/>
            <label for="mnumber">Mobile Number</label>
            <br/>
            <input 
            type="number" 
            name="mnumber" 
            onChange={inputsHandler} 
            placeholder="Mobile Number" 
            value={inputField.mnumber}
            required/>

            <br/>

            <button onClick={submitButton}>Submit Now</button>
        </div>
    )
}

export default AddUser

