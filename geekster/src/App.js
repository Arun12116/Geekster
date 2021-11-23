
import Chat from "./Component/Chat/Chat";
import NavBar from "./Component/Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import "./Component/Home/Home.css"

export default function App() {
  return (
    <>
    
      <NavBar />
      
      <Routes>
        <Route path="/Home" element={<Home />} exact />
      </Routes>
      <Routes>
        <Route path="/chat" element={<Chat />} exact />
      </Routes>
    
    </>
  );
}
