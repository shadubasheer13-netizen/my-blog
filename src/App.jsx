import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Post from "./Post"
import AddPost from "./AddPost"

function App(){
  const [posts,setPosts] = useState([])

  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element = {<Home posts={posts} />}/>
      <Route path="/post/:id" element = {<Post posts={posts} />}/>
      <Route path="/new" element = {<AddPost setPosts={setPosts} />}/> 
     </Routes>
    </BrowserRouter>
  )
}
export default App