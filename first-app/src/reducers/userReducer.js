async function UserReducer(state =  [] , action) 
{  
    switch (action.type) {    
        case 'GET_USERS_LIST':
            var url ="https://localhost:5001/User";   
            await fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                state=data.users
            })
            return state
        case 'ADD_USER':
            var requestOption = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action.data)
            }    
            url = "https://localhost:5001/User";
            await fetch(url,requestOption)
            break
        case 'UPDATE_USER':
            var requestOption1 = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action.data)
            }     
            url = "https://localhost:5001/User/"+action.id;
            await fetch(url,requestOption1)
            break
        default:      
        return state  
    }
}

export default UserReducer