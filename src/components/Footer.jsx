import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

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

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/portfolio"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-white font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-4 text-xl">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="mailto:contact.passytechnologies@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                <Mail size={20} />
              </a>

            </div>

          </div>

          <div>

            <h3 className="text-white font-semibold mb-4">
              Contact Info
            </h3>

            <div className="space-y-3 text-slate-400">

              <p>Anambra, Nigeria</p>

              <p>contact.passytechnologies@gmail.com</p>

              <p>+234 703 236 9453</p>

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