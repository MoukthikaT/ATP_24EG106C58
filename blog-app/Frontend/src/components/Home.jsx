import React from "react";
import { NavLink } from "react-router";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full text-center px-4">
      
      <h1 className="text-5xl font-bold text-blue-700 mb-6">
        Welcome to MyBlog
      </h1>

      <p className="text-lg text-blue-600 mb-8 max-w-2xl">
        A platform where users can read articles, authors can share their
        knowledge, and admins keep everything running smoothly.
      </p>

      <div className="flex justify-center gap-6">
        <NavLink
          to="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Get Started
        </NavLink>

        <NavLink
          to="/login"
          className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-semibold"
        >
          Login
        </NavLink>
      </div>

    </div>
  );
}

export default Home;
