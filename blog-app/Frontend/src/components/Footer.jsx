import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100 py-10 w-full">
      
      {/* Wrapper for proper spacing */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          
          {/* Branding */}
          <div>
            <h2 className="text-lg font-bold mb-3">MyBlog</h2>
            <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
            <p className="text-blue-300 mt-2">
              Crafted with 💙 using React & Tailwind
            </p>
          </div>

          {/* Careers & Certifications */}
          <div>
            <h3 className="font-semibold mb-2">Explore Careers</h3>
            <ul className="space-y-1 text-blue-200">
              <li><a href="/careers/data-scientist" className="hover:text-yellow-400">Data Scientist</a></li>
              <li><a href="/careers/full-stack" className="hover:text-yellow-400">Full Stack Developer</a></li>
              <li><a href="/careers/cloud-engineer" className="hover:text-yellow-400">Cloud Engineer</a></li>
            </ul>

            <h3 className="font-semibold mt-6 mb-2">Certifications</h3>
            <ul className="space-y-1 text-blue-200">
              <li><a href="/certs/aws" className="hover:text-yellow-400">AWS Cloud Practitioner</a></li>
              <li><a href="/certs/azure" className="hover:text-yellow-400">Azure Fundamentals</a></li>
              <li><a href="/certs/kubernetes" className="hover:text-yellow-400">Kubernetes Essentials</a></li>
            </ul>
          </div>

          {/* Companies & About */}
          <div>
            <h3 className="font-semibold mb-2">Top Companies</h3>
            <p className="text-blue-200 leading-6">
              <a href="/companies/novatech" className="hover:text-yellow-400">NovaTech</a> ·{" "}
              <a href="/companies/brightworks" className="hover:text-yellow-400">BrightWorks</a> ·{" "}
              <a href="/companies/zenithsoft" className="hover:text-yellow-400">ZenithSoft</a> ·{" "}
              <a href="/companies/cloudedge" className="hover:text-yellow-400">CloudEdge</a>
            </p>

            <h3 className="font-semibold mt-6 mb-2">About</h3>
            <ul className="space-y-1 text-blue-200">
              <li><a href="/about" className="hover:text-yellow-400">About us</a></li>
              <li><a href="/careers" className="hover:text-yellow-400">Careers</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="/blog" className="hover:text-yellow-400">Blog</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;