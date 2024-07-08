import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import OpenAiAsk from "./components/openAi/OpenAiAsk";
import Landingpage from "./components/landingpage/Landingpage";
import GeminiAiAsk from "./components/gemini/GeminiAsk";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import About from "./components/temp/About";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/openadvisor" element={<OpenAiAsk />} />
      <Route path="/geminiadvisor" element={<GeminiAiAsk />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </>
  );
}

export default App;
