import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import OpenAiAsk from "./components/openAi/OpenAiAsk";

function App() {
  return (
    <>
    <Navbar/>
    <OpenAiAsk/>
    </>
  );
}

export default App;
