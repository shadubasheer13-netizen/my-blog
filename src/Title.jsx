import { useState } from "react";
import { useEffect } from "react";

function Title(){
    const [clicked,setClicked] = useState(false)
    useEffect(()=>{
        if (clicked) {
           document.title="hello from useEffect" 
        }
    },[clicked])


    function handleSubmit() {
        setClicked(!clicked)
    }

    return(
        <button onClick={handleSubmit}>change title</button>
    )
}
export default Title