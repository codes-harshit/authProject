import { Loader } from "lucide-react";
import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const { isLoading, error, forgotPassword } = useAuthStore();
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      toast.success("Reset Password Email sent successfully");
      Navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-4xl">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
      <form
        onSubmit={handleForgotPassword}
        className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-4xl"
      >
        <Input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="text-gray-600 text-center  mb-1.5 text-sm">
          The reset password link will be sent shortly if the email is
          registered.
        </p>
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button
          className="w-80 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="w-6 h-6 animate-spin mx-auto" />
          ) : (
            "Send Reset Link"
          )}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
