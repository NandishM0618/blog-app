import { useContext, useRef, useState } from "react";
import "./login.css";
import { Context } from "../../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login(params) {
  const userRef = useRef();
  const passRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value,
      });
      if (!res.data) {
        setError("User does not exist");
        dispatch({ type: "LOGIN_FAILURE" });
      } else {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError("Wrong Credentials");
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="enter your username.."
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="enter your password.."
          ref={passRef}
        />
        {error && <span className="loginError">{error}</span>}
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}
