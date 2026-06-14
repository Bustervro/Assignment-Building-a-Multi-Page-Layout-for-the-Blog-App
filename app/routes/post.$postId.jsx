import { useNavigate, useParams } from "react-router";
import { posts } from "../data/posts";

function PostView() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = posts.find((item) => item.id === Number(postId));

  if (!post) {
    return (
      <div className="page-card">
        <h2>Post Not Found</h2>
        <p>The blog post you are looking for does not exist.</p>
        <button onClick={() => navigate("/")}>Return to Feed</button>
      </div>
    );
  }

  return (
    <div className="page-card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <button onClick={() => navigate("/")}>Return to Feed</button>
    </div>
  );
}

export default PostView;
