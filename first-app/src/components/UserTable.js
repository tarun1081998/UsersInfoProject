import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import './UserTable.css'
function UserTable(){
    const history = useHistory();
    const dispatch = useDispatch();
    const User = useSelector(store=>store)
    const [user,setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const handleEdit = (index) => {
        history.push(`/edituser/${index.target.id}`)
    }
    

    useEffect(()=>{
        User.then((r)=>setUser(r))
        setIsLoading(false)
    },[User])
    useEffect(()=>{
        dispatch({type: "GET_USERS_LIST"});
    },[])
    
    return(
        isLoading ? 
        <h3>Loading...</h3>
        ?
        user?.length > 0 && isLoading===false ? 
        (<div>
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>City</th>
                        <th>Mobile Number</th>
                        <th>Edit</th>
                    </tr>
                    {user.map((user,index) => 
                    <tr key={index}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        {/* <td>{user.dob.getDate()+"-"+(user.dob.getMonth()+1)+"-"+user.dob.getYear()}</td> */}
                        <td>{user.dob}</td>
                        <td>{user.city}</td>
                        <td>{user.mnumber}</td>
                        <td><button onClick={handleEdit} id={user.id}>Edit</button></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        ) : isLoading === true ? 
        (
            <h3>Loading....</h3>
        ): (
            <h3>No Data Found. Click add user to add data{user}</h3>
        )
        
    );
    
}
export default UserTable;