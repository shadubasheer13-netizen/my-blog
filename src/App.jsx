import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todo from "./todo";

function App(){
  const [posts,setPosts] = useState([])

  return(
    <>


     <Todo/>
    </>
  )
}
export default App  