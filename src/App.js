import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import CardDetails from "./components/CardDetails";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/cardsDetails/:id" element={<CardDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
