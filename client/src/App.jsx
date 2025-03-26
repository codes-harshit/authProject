import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import { useAuthStore } from "./store/authStore.js";
import { Loader } from "lucide-react";

function App() {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("user", user);
  console.log("Authenticated", isAuthenticated);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      {isCheckingAuth ? (
        <Loader className="animate-spin w-12 h-12 mx-auto" />
      ) : (
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      )}

      <Toaster />
    </div>
  );
}

export default App;
