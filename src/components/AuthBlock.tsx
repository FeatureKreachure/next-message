"use client";
import React from "react";

const AuthBlock = () => {
  return (
    <div>
      <form
        className="flex flex-col gap-3 bg-slate-500 text-white p-4 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="border border-white rounded-md px-3 py-2 bg-slate-700 text-white"
          placeholder="Username"
        />
        <input
          type="password"
          className="border border-white rounded-md px-3 py-2 bg-slate-700 text-white"
          placeholder="Password"
        />
        <p className="text-gray-300">Already have an account? Register</p>
      </form>
    </div>
  );
};

export default AuthBlock;
