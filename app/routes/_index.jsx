import { Link } from "react-router";
import { posts } from "../data/posts";

function Home() {
  return (
    <div className="page-card">
      <h2>Home Feed</h2>
      <p>Click a post title to read the full blog post.</p>

      <div className="post-list">
        {posts.map((post) => (
          <Link className="post-link" key={post.id} to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 45)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
