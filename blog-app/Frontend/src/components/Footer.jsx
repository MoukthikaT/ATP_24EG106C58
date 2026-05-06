import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 py-6 font-sans shadow-inner w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-blue-300">
          Crafted with 💙 using React & Tailwind
        </p>
      </div>
    </footer>
  );
}

export default Footer;
