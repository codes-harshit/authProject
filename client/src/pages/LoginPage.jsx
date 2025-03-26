import React, { useState } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/home");
      toast.success("Login successful");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-4xl">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-4xl"
      >
        <Input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-80 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="w-6 h-6 animate-spin mx-auto" />
          ) : (
            "Login"
          )}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
      <div className="flex items-center justify-center gap-2 text-sm mt-4">
        <p className="text-gray-600">Don't have an account?</p>
        <Link to="/signup" className="text-blue-500 hover:underline">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
