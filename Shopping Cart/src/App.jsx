import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Car from "./Pages/Cart/Car";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Car />} />
      </Routes>
    </div>
  );
}

export default App;