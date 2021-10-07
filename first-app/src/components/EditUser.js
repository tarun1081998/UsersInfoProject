import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
function EditUser (){
    const {id} = useParams();
    const User = useSelector(store=>store)
    const [error, setError] = useState(false)
    const [isEdited, setIsEdited] = useState(false)
    const dispatch = useDispatch();
    const [ userToEdit, setUserToEdit] = useState({
        fname: "",
        lname: "",
        dob: null,
        city: "",
        mnumber: 0,
    }) 
    const [user, setUser] =useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const history = useHistory();
    const goBack = () =>{
        history.push("/")
    }
    
    useEffect(()=>{
        User.then((res)=>{setUser(res)})
    },[User])

    useEffect(()=>{
            user?.forEach((u)=>{
                if(u.id.toString()===id){
                    setUserToEdit(u)
                }
            })
    },[user, id])

    useEffect(()=>{
        if(userToEdit.fname!==""){
            setIsLoading(false)
        }
    },[userToEdit])

    const inputsHandler = (e) =>{
        setError(false)
        setUserToEdit( {...userToEdit,[e.target.name]: e.target.value} )
        
        
    }

    const handleValidation = () => {
        if(userToEdit.fname==='' || userToEdit.fname===null){
            setError(true)
            return false
        }
        if(userToEdit.lname==='' || userToEdit.lname===null){
            setError(true)
            return false
        }
        if(userToEdit.dob===null){
            setError(true)
            return false
        }
        if(userToEdit.city==='' || userToEdit.city===null){
            setError(true)
            return false
        }
        if(userToEdit.mnumber===null){
            setError(true)
            return false
        }
        return true
    }
    const submitButton = () =>{
        if(handleValidation()){
            dispatch({type:'UPDATE_USER',data: userToEdit,id: parseInt(id)})
            setIsEdited(true)
        }
        
    }
    return (
        isEdited ? 
            <div className="addUser">
                 <button onClick={goBack}>Go Back</button>
                 <br/>
                 <h3>User is edited. Go Back!!</h3>
             </div>
        :
        isLoading === false 
        ? (
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
            value={userToEdit.fname}/>

            <br/>
            <label for="lname">Last Name</label>
            <br/>
            <input 
            type="text" 
            name="lname" 
            onChange={inputsHandler} 
            placeholder="First Name" 
            value={userToEdit.lname}/>

            <br/>
            <label for="dob">D.O.B.</label>
            <br/>
            <input 
            type="datetime-local" 
            name="dob" 
            onChange={inputsHandler} 
            placeholder="DOB" 
            value={userToEdit.dob}/>

            <br/>
            <label for="city">City</label>
            <br/>
            <input 
            type="text" 
            name="city" 
            onChange={inputsHandler} 
            placeholder="City" 
            value={userToEdit.city}/>

            <br/>
            <label for="mNumber">Mobile mNumber</label>
            <br/>
            <input 
            type="mNumber" 
            name="mNumber" 
            onChange={inputsHandler} 
            placeholder="Mobile mNumber" 
            value={userToEdit.mnumber}/>

            <br/>

            <button onClick={submitButton}>Submit Now</button>
        </div>
        )
        :
        (
            <h3>Loading</h3>
        )
        
    );
}
export default EditUser;