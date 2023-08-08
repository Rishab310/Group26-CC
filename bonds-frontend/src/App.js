import { AdminDashboard } from './components/AdminDashboard/AdminDashboard';
import { ManagerDashboard } from './components/ManagerDashboard/ManagerDashboard';
import Tables from './components/tables/Tables';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import { useState } from 'react';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/adminDashboard" element={<AdminDashboard />} />
              <Route exact path="/managerDashboard" element={<ManagerDashboard />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
