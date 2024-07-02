import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import OpenAiAsk from "./components/openAi/OpenAiAsk";
import Landingpage from "./components/landingpage/Landingpage";
import GeminiAiAsk from "./components/gemini/GeminiAsk";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/openadvisor" element={<OpenAiAsk />} />
      <Route path="/geminiadvisor" element={<GeminiAiAsk />} />
    </Routes>
    </>
  );
}

export default App;
