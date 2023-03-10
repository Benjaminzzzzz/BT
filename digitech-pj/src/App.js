import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashbord from "./Screens/Dashbord";
import DataRecord from "./Screens/DataRecord";
import Statistic from "./Screens/Statistic";
import ProblemReport from "./Screens/ProblemReport";
//import Navbar from "./Component/Navbar";
import Pie from "./Component/Pie";
import Login from "./Screens/Login";
import Bar from "./Component/Bar";
import Table from "./Component/Table";
function App() {
  return ( 
    <Router>

      <Routes>
        

      <Route path="/1" element={<Table/>}  /> 
      <Route path="/2" element={<Bar/>}  /> 
      <Route path="/" element={<Pie/>}  />
      <Route path="/login" element={<Login/>}  />
        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/DataRecord Form" element={<DataRecord />} />
        <Route path="/Statistic" element={<Statistic />} />
        <Route path="/Problem" element={<ProblemReport />} />
      </Routes>
    </Router>
  );
}

export default App;
