import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPost({setPosts}){
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const navigate = useNavigate()

    function handleSubmit(){
        const newPost = {
            title:title,
            content:content
        }
    setPosts ((prev) =>[...prev,newPost])
    navigate (`/`)    
    }
    

    return(
       <div> 
        <h1>write here</h1>
        <input
        type="text"
        placeholder="heading"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
        <textarea
        placeholder="story"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSubmit}>save</button>
       </div> 
    )
}
export default AddPost