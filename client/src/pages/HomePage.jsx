import React from "react";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const HomePage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="min-w-xl flex flex-col items-center justify-center bg-gray-100 p-6 rounded-4xl">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Dashboard
        </h1>

        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold">
            Hii!! <span className="font-bold">{user.name}</span>
          </h2>
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-700 border-b pb-2">
            Profile Information
          </p>
          <div className="mt-2 space-y-2">
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Name:</span>{" "}
              <span className="text-gray-700">{user.name}</span>
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Email:</span>{" "}
              <span className="text-gray-700">{user.email}</span>
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-700 border-b pb-2">
            Account Activity
          </p>
          <div className="mt-2 space-y-2">
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Joined:</span>{" "}
              <span className="text-gray-700">
                {formatDate(user.createdAt)}
              </span>
            </p>
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Last Login:</span>{" "}
              <span className="text-gray-700">
                {formatDate(user.lastLogin)}
              </span>
            </p>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default HomePage;
