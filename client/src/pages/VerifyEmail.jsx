import React, { useState } from "react";
import Input from "../components/Input";

const VerifyEmail = () => {
  const [code, setCode] = useState("");
  const isLoading = false;

  const handleVerify = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-4xl">
      <h1 className="text-2xl font-bold mb-4">Verify Email</h1>
      <form
        onSubmit={handleVerify}
        className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-4xl"
      >
        <Input
          type="text"
          placeholder="Enter your 6 digit code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button
          className="w-80 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="w-6 h-6 animate-spin mx-auto" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default VerifyEmail;
