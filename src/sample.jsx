import { useState } from "react"



function Hide(){
   const [istoggle,setIsToggle] = useState(false)
   
   function handleSubmit(){
    setIsToggle(!istoggle)
   }
   return(
      <>
    {istoggle && <h1>hello from toggle</h1>}
    <button onClick={handleSubmit}>{istoggle ? "hide" :"show"}</button>
    </>
   )
}

export default Hide