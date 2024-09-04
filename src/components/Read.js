import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {

    const [data, setData] = useState([]);

    const [error, setError] = useState("");

    const [filteredData, setFilteredData] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {

        try{
            const response = await fetch("https://66d743a1006bfbe2e650591b.mockapi.io/user");

            const json = await response.json();
    
            setFilteredData(json);

            setData(json);
        }
        catch(error){
            setError("Data Not Found. Please goto home page")
        }
        
    }

    const updateItem = (id,name,mail) =>{
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("mail", mail);
        navigate("/update")
    }

    const deleteItem = async (id) => {

        try{
            const remove = await axios.delete(`https://66d743a1006bfbe2e650591b.mockapi.io/user/${id}`)
            fetchData();
        }

        catch(error){
            console.log(error)
        }
    }

    const handleCreate = () => {
        navigate("/")
    }

    const hanldeChange = (e) => {
        const inputValue = e.target.value
        const filter= data.filter((item,i)=>(
            item.name.toLowerCase().includes(inputValue)
        ))

        if(inputValue === ""){
            setFilteredData(data);
        }
        else{
            setFilteredData(filter);
        }
    }   
    return (
        <div className="read">
            <h1>Read Operations</h1>
            <button className="btn btn-primary btn-lg create" onClick={handleCreate}>Add</button>
            <input type="text" className="form-control search" placeholder="Search here" onChange={(e)=>hanldeChange(e)}/>
            <table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                {
                    filteredData.map((item)=>(
                        <tbody key={item.id}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.mail}</td>
                                <td><button className="btn btn-warning" onClick={()=>updateItem(item.id,item.name,item.mail)}>Update</button></td>
                                <td><button className="btn btn-danger" onClick={()=>deleteItem(item.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    ))
                    }
            </table>
            {<p>{error}</p>}
        </div>
    )
}

export default Read;