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
        <h1>CREATE YOUR BLOG POST</h1>
        <input
        type="text"
        placeholder="TITLE"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
        <textarea
        placeholder="CONTENT"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleSubmit}>SAVE </button>
       </div> 
    )
}
export default AddPost