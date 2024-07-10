import logo from "./logo.svg";
import "./App.css";

// components
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import FillData from "./components/FillData";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filldata" element={<FillData />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/linechart" element={<LineChart />} />
        <Route path="/piechart" element={<PieChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
