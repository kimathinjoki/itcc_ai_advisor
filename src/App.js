import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import OpenAiAsk from "./components/openAi/OpenAiAsk";
import Landingpage from "./components/landingpage/Landingpage";
import GeminiAiAsk from "./components/gemini/GeminiAsk";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

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
    </Routes>
    </>
  );
}

export default App;
