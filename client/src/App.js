import { Route, Routes } from "react-router-dom";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./components/about/About";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Login />}></Route>
        <Route
          path="/settings"
          element={user ? <Setting /> : <Login />}
        ></Route>
        <Route path="/post/:Id" element={<Single />}></Route>
      </Routes>
    </>
  );
}
export default App;
A2Ozq0eX3jHOPVks
karm