import { Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <h2 className="text-2xl font-bold text-white">

              Passy
              <span className="text-cyan-400">
                Technologies
              </span>

            </h2>

            <p className="text-slate-400 mt-4">
              Building innovative digital solutions
              for businesses and organizations.
            </p>

          </div>

          <div>

            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>

            </ul>

          </div>

          <div>

            <h3 className="text-white font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4">

              <FaFacebookF className="text-slate-400 hover:text-cyan-400 cursor-pointer" />

              <FaInstagram className="text-slate-400 hover:text-cyan-400 cursor-pointer" />

              <FaLinkedinIn className="text-slate-400 hover:text-cyan-400 cursor-pointer" />

              <Mail className="text-slate-400 hover:text-cyan-400 cursor-pointer" />

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">

          © 2026 Passy Technologies. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;