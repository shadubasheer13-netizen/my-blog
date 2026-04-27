import { Link } from "react-router-dom";

function Home({posts}){
  if (posts.length===0) {
    return (
    <>
     <h1>NO POSTES YET</h1>
     <Link to={"/new"}>ADD YOUR POST</Link>
    </>
    )
  }
  return(
    <>
    <h1>MY BLOG</h1>
    <Link to={"/new"}>ADD NEW POST</Link>
    {posts.map((post,index) =>(
      <div key={index}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to={`/post/${index}`}>RAED MORE</Link>
      </div>
    ))} </>
  )
}
export default Home