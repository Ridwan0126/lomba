import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./component/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";
import LoginPage from "./pages/LoginPage/LoginPage";
import Forum from "./pages/Forum/Forum";
import Materi from "./pages/Materi/Materi";
import DetailMateri from "./pages/DetailMateri/DetailMateri";
import Tugas from "./pages/Tugas/Tugas";
import LiveClass from "./pages/LiveClass/LiveClass";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<DashboardLayout><Dashboard /></DashboardLayout>}
        />
        <Route path="/materi" element={<DashboardLayout><Materi /></DashboardLayout>} />
        <Route path="/materi/:id" element={<DashboardLayout><DetailMateri /></DashboardLayout>} />
        <Route
          path="/tugas"
          element={<DashboardLayout><Tugas /></DashboardLayout>}
        />
        <Route
          path="/liveClass"
          element={<DashboardLayout><LiveClass /></DashboardLayout>}
        />
        <Route
          path="/forum"
          element={<DashboardLayout><Forum /></DashboardLayout>}
        />
        <Route
          path="/settings"
          element={<DashboardLayout><Settings /></DashboardLayout>}
        />
      </Routes>
    </Router>
  );
};

export default App;
