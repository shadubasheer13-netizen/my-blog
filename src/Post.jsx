import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Post ({posts}){
    const {id} = useParams()
    const post = posts[id]
    if (!post) {
        return <h2>nothing to read</h2>
    }
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to={"/"}>GO TO 🥸🥸 HOME</Link>
        </div>
    )
}
export default Post