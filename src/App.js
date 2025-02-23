import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuthChange = (newValue) => {
    console.log("Auth changing to:", newValue);
    setIsAuth(newValue);
  };

  return (
    <Router>
      <nav>
        <Navbar isAuth={isAuth} />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={handleAuthChange} />} />
        <Route
          path="/logout"
          element={<Logout setIsAuth={handleAuthChange} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
