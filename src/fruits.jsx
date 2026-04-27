import { useState } from "react";

function List(params) {
    const Fruits = ["Apple", "Banana", "Mango", "Orange"]

    return(
        
         <ul >
          {Fruits.map((fruit,index) =>(
            
            <li key={index}>{fruit}</li>
           
          ))} 
         </ul>     <BrowserRouter>
      <Routes> 
       <Route path="/" element = {<Home posts={posts} />}/>
       <Route path="/post/:id" element = {<Post posts={posts} />}/>
       <Route path="/new" element = {<AddPost setPosts={setPosts} />}/> 
      </Routes>
     </BrowserRouter>
        
    )
}
export default List