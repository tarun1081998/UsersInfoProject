import React from "react";
import { useHistory } from "react-router";
import UserTable from "./UserTable";
import './Home.css';
function Home(){
    const history = useHistory();
    const handleClick = () => {
        history.push("/adduser")
      }
    return (
        <section className="container">
            <button onClick={handleClick}>Add user</button>
              <UserTable />
        </section>
        
    );
}
export default Home