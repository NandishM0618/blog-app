import { Link } from "react-router-dom";
import "./postNs.css";

export default function PostNs({ posts }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="postns">
      {posts.photo && (
        <img src={PF + posts.photo} alt="post2" className="postImg" />
      )}
      <div className="postnsInfo">
        <div className="postCats">
          {posts.categories.map((c) => {
            return <span className="postCat">{c.name}</span>;
          })}
          <Link to={`/post/${posts._id}`} className="link">
            <span className="postTitle">{posts.title}</span>
          </Link>
          <hr />
          <span className="postDate">
            {new Date(posts.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{posts.desc.substring(0, 400)}....</p>
      </div>
    </div>
  );
}
