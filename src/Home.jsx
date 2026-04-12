import { Link } from "react-router-dom";

function Home({posts}){
  if (posts.length===0) {
    return (
    <>
     <h1>Post onnum illadeey😅😅<br />Enthengilum ezhuth👈👈</h1>
     <Link to={"/new"}>add now</Link>
    </>
    )
  }
  return(
    <>
    <h1>MY BLOG</h1>
    <Link to={"/new"}>Add Here</Link>
    {posts.map((post,index) =>(
      <div key={index}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Link to={`/post/${index}`}>Read More</Link>
      </div>
    ))} </>
  )
}
export default Home