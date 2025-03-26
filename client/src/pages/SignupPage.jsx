import React, { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = false;

  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-4xl">
      <h1 className="text-2xl font-bold mb-4">Create Account</h1>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-4xl"
      >
        <Input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
            "Signup"
          )}
        </button>
      </form>
      <div className="flex items-center justify-center gap-2 text-sm mt-4">
        <p className="text-gray-600">Already have an account?</p>
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
