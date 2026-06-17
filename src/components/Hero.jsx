import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0">

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[200px] opacity-30" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-30" />

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* TRUST BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">

              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

              <span className="text-cyan-300 text-sm">
                Trusted by businesses across Nigeria
              </span>

            </div>

            <p className="text-cyan-400 font-semibold mb-4">
              PASSY TECHNOLOGIES
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">

              Transforming Ideas Into

              <span className="block text-cyan-400">
                Digital Experiences
              </span>

              That Drive Results

            </h1>

            <p className="text-slate-400 mt-6 text-lg max-w-xl">

              We build websites, create stunning brand identities,
              design graphics, edit professional videos and deliver
              digital solutions that help businesses grow faster.

            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 px-7 py-4 rounded-xl text-white font-semibold flex items-center gap-2 transition"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/services"
                className="border border-slate-700 px-7 py-4 rounded-xl text-white hover:bg-slate-800 transition"
              >
                View Services
              </Link>

            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-white">
                  120+
                </h3>

                <p className="text-slate-400">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  80+
                </h3>

                <p className="text-slate-400">
                  Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  5+
                </h3>

                <p className="text-slate-400">
                  Years Experience
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">

              <h3 className="text-2xl font-bold text-white mb-8">
                Our Expertise
              </h3>

              <div className="space-y-5">

                <div className="bg-slate-800/60 rounded-2xl p-5">

                  <h4 className="text-white font-semibold">
                    Web Development
                  </h4>

                  <p className="text-slate-400 text-sm mt-2">
                    Corporate, School, Business and E-commerce Websites.
                  </p>

                </div>

                <div className="bg-slate-800/60 rounded-2xl p-5">

                  <h4 className="text-white font-semibold">
                    Graphic Design
                  </h4>

                  <p className="text-slate-400 text-sm mt-2">
                    Branding, Flyers, Social Media and Marketing Materials.
                  </p>

                </div>

                <div className="bg-slate-800/60 rounded-2xl p-5">

                  <h4 className="text-white font-semibold">
                    Telecommunications
                  </h4>

                  <p className="text-slate-400 text-sm mt-2">
                    Data, Airtime, Digital Services and Technology Solutions.
                  </p>

                </div>

                <div className="bg-slate-800/60 rounded-2xl p-5">

                  <h4 className="text-white font-semibold">
                    Video Editing
                  </h4>

                  <p className="text-slate-400 text-sm mt-2">
                    Professional video editing for brands and businesses.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* FLOATING TAGS */}
      <div className="hidden lg:block">

        <div className="absolute top-32 right-20 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/20 text-cyan-300">
          Web Design
        </div>

        <div className="absolute bottom-32 right-12 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/20 text-purple-300">
          Branding
        </div>

        <div className="absolute top-72 right-[500px] px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/20 text-blue-300">
          Telecom
        </div>

      </div>

    </section>
  );
}

export default Hero;