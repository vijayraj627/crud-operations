import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Body = () => {

    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [error,setError] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !mail) {
            setError("Name and Email fields cannot be empty");
            return;
        }

        const body = {
            name: name,
            mail: mail,
        };

        try {
            const response = await axios.post('https://66d743a1006bfbe2e650591b.mockapi.io/user', body);
            console.log(response);
        } catch (error) {
            console.error(error);
        }

        navigate("/read")
    };


    return (
        <div className="main">
            <h1 style={{textAlign : "center"}}>Please Fill This & Submit</h1>
            <form className="form">
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="text" placeholder="Email" value={mail} onChange={(e)=>setMail(e.target.value)}/><br/>
                <button className="formSubmit" onClick={handleSubmit}>Submit</button>
            </form>
            {error && <p style={{ color: "red", fontSize : "x-large", textAlign : "center"}}>{error}</p>}
        </div>
    )
}

export default Body;