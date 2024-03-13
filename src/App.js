import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import As from "./components/as/As";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/as" element={<As />} />
      </Routes>
    </div>
  );
}

export default App;
