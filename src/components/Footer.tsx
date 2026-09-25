import React from 'react';

const Footer = () => {
    return (
    <footer className="w-full bg-gray-100 mt-4">
      {/* Main Footer */}
      <div className="mx-auto max-w-[83rem] px-6 py-10 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 ">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-fuchsia-500 text-[9px] font-bold text-white">
                DS
              </div>

              <h2 className="text-sm font-semibold text-gray-800">
                Dev Stack
              </h2>
            </div>

            <p className="mt-2 max-w-sm text-[10px] leading-4 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-5 text-[10px] text-gray-500">
              <a href="#" className="hover:text-gray-800">
                GitHub
              </a>

              <a href="#" className="hover:text-gray-800">
                Twitter
              </a>

              <a href="#" className="hover:text-gray-800">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-3 text-[10px] font-semibold uppercase text-gray-800">
              Product
            </h3>

            <ul className="space-y-2 text-[10px] text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-[10px] font-semibold uppercase text-gray-800">
              Company
            </h3>

            <ul className="space-y-2 text-[10px] text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-[10px] font-semibold uppercase text-gray-800">
              Legal
            </h3>

            <ul className="space-y-2 text-[10px] text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 border-t border-gray-100 pt-5">
          <div className="flex flex-col justify-between gap-3 text-[9px] text-gray-400 sm:flex-row">
            <p>© 2026 Dev Stack. All rights reserved.</p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-gray-800">
                Privacy
              </a>

              <a href="#" className="hover:text-gray-800">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;