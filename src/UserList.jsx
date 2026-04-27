import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Write(params) {
    const [name,setName] = useState("")
    const [users,setUsers] = useState([])

    const reffuse = useRef(null)
    function handleSubmit(params) {
        const newName = name

        if (!name) {
            return
        } 
        setUsers((prev)=>[...prev,newName])
        setName("")
    }
    useEffect(()=>{
        reffuse.current.focus()
    },[])
        
    
    return(
        <ul> 
         
         <input type="text" ref={reffuse} value={name} onChange={(e)=>setName(e.target.value)}/>

         <button onClick={handleSubmit}>click</button>

         {users.map((name,index)=>(
            <li key={index}>{name}</li>
         ))}
        </ul>
    )
}
export default Write