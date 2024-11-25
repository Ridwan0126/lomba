import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  // Helper function to get active menu item from pathname
  const getActiveItem = (pathname) => {
    switch (pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/materi":
        return "materi";
      case "/tugas":
        return "Tugas";
      case "/kuy-point":
        return "Kuy Point";
      case "/forum":
        return "Forum";
      case "/settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  // Helper function to handle navigation
  const handleSetActiveItem = (menuItem) => {
    const pathMap = {
      Dashboard: "/dashboard",
      Materi: "/materi",
      Tugas: "/tugas",
      "Kuy Point": "/kuy-point",
      Forum: "/forum",
      Settings: "/settings",
    };

    const path = pathMap[menuItem];
    if (path) {
      navigate(path);
    }
  };

  const activeItem = getActiveItem(location.pathname);

  const handleLogout = () => {
    setIsLogoutDialogOpen(true);
  };

  const confirmLogout = () => {
    // Perform logout actions here (e.g., clear session, remove tokens)
    // For this example, we'll just navigate to the login page
    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={handleSetActiveItem}
        onLogout={handleLogout}
      />
      <main className="flex-1 overflow-auto">
        <Navbar
          pageTitle={activeItem}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onLogout={handleLogout}
        />
        <div className="p-4 sm:p-6">
          {React.cloneElement(children, { searchQuery })}
        </div>
      </main>

      <AlertDialog
        open={isLogoutDialogOpen}
        onOpenChange={setIsLogoutDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Yakin ingin keluar?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda akan keluar dari akun admin PilahYuk. Pastikan semua tugas
              telah tersimpan sebelum melanjutkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-blue-500 text-white hover:bg-blue-600">
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmLogout}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Keluar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DashboardLayout;
