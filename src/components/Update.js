import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Update = () => {

  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [mail,setMail] = useState("");

  const navigate = useNavigate();
  
  useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setMail(localStorage.getItem("mail"));
  },[]);

  const handleSubmit = async (e) => {
      e.preventDefault();

      const body = {
        name : name,
        mail : mail,
      }

      try{
        const response = await axios.put(`https://66d743a1006bfbe2e650591b.mockapi.io/user/${id}`,body);
        console.log(response)

      }

      catch(error){
        console(error)
      }

      navigate("/read")

  }

  return (
    <div>
      <h1 style={{textAlign : "center"}}>Update the Data</h1>
      <form className="form">
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <input type="text" placeholder="Email" value={mail} onChange={(e)=>setMail(e.target.value)}/><br/>
                <button className="btn btn-primary" onClick={handleSubmit}>Update</button>
            </form>
    </div>
  )
}

export default Update
