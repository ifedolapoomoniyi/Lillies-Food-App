import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ActualDash from "./Pages/ActualDash";
import Profile from "./Pages/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ActualDash/>} />
        <Route path="/profile"  element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
