import { useLocation } from "react-router-dom";
import "./singlepost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [posts, setPosts] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts/" + path);
      setPosts(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPosts();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${posts._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${posts._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        {posts.photo && (
          <img src={PF + posts.photo} alt="singlepost" className="postImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePosttitle"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {posts.username === user.username && (
              <>
                <div className="singlePostEdit" onClick={handleDelete}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="button2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </div>
                <div
                  className="singlePostEdit"
                  onClick={() => setUpdateMode(true)}
                >
                  Edit
                </div>
              </>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${posts.username}`} className="link">
              <b className="singlePostAuthor">{posts.username}</b>
            </Link>
          </span>
          <span>{new Date(posts.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDescInput">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
