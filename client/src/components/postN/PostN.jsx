import "./postN.css";
import PostNs from "../postNs/PostNs";

export default function PostN({ posts }) {
  return (
    <div className="postn">
      {posts.map((p, id) => {
        return <PostNs key={id} posts={p} />;
      })}
    </div>
  );
}
