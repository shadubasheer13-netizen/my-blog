import { useState } from "react";

function Bg(params) {
    const [isDark,setIsDark] = useState(false)

    function handleSubmit(params) {
        setIsDark(!isDark)
    }

    return(
        <div style={{backgroundColor:isDark?"black":"whitesmoke",height:"100vh",width:"100vh"}}>

        <button onClick={handleSubmit}>color maattiyaaloo</button>

    </div>)
}
export default Bg