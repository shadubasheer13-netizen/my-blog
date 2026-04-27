import { useRef } from "react";

function Focus(params) {
    const usereff = useRef(null)
    function handleSubmit(params) {
        usereff.current.focus()
    }


    return(<>

        <input type="text" ref={usereff}  />
        <button onClick={handleSubmit}> focus</button>

   </> )
}
export default Focus