import PostN from "../../components/postN/PostN";
import "./home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home(params) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      {/* <Main /> */}
      <div className="home">
        <PostN posts={posts} />
      </div>
    </>
  );
}
