"use client";
import React from "react";

const AuthBlock = () => {
  return (
    <div className="border-2 border-sky-600 rounded-lg">
      <form
        className="flex flex-col gap-3 bg-neutral-500 text-white p-4 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="border border-white rounded-md px-3 py-2 bg-neutral-700 text-white"
          placeholder="Username"
        />
        <input
          type="password"
          className="border border-white rounded-md px-3 py-2 bg-neutral-700 text-white"
          placeholder="Password"
        />
        <p className="text-gray-300">Already have an account? <span className="">Register</span></p>
        <button className="bg-sky-600 rounded-md px-3 py-2 hover:bg-sky-500 duration-200">Login</button>
      </form>
    </div>
  );
};

export default AuthBlock;
