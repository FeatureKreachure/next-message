"use client"
import React from "react";

const AuthBlock = () => {
  return (
    <div>
      <form className="authBlock flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="" id="" placeholder="username"/>
        <input type="password" name="" id="" placeholder="password"/>
        <p>already have an account? register</p>
      </form>
    </div>
  );
};

export default AuthBlock;
