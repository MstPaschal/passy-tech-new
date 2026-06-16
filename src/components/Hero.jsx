import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {

  return (
    <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[200px] opacity-30" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-30" />

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-cyan-400 font-semibold mb-4">
              PASSY TECHNOLOGIES
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">

              We Build
              <span className="text-cyan-400"> Digital Products </span>
              That Grow Businesses

            </h1>

            <p className="text-slate-400 mt-6 text-lg">

              Websites, branding, graphics, video editing and digital solutions
              designed to help your business stand out and convert more customers.

            </p>

            <div className="flex gap-4 mt-10">

              <button className="bg-cyan-500 hover:bg-cyan-600 px-7 py-4 rounded-xl text-white font-semibold flex items-center gap-2">

                Start a Project
                <ArrowRight size={18} />

              </button>

              <button className="border border-slate-700 px-7 py-4 rounded-xl text-white hover:bg-slate-800">

                View Services

              </button>

            </div>

          </motion.div>

          {/* RIGHT VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl">

              <div className="space-y-6">

                <div className="flex items-center justify-between">

                  <span className="text-white">Web Development</span>
                  <span className="text-cyan-400">95%</span>

                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full">
                  <div className="w-[95%] bg-cyan-500 h-2 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white">Design</span>
                  <span className="text-cyan-400">90%</span>

                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full">
                  <div className="w-[90%] bg-purple-500 h-2 rounded-full"></div>
                </div>

                <div className="flex items-center justify-between">

                  <span className="text-white">Branding</span>
                  <span className="text-cyan-400">88%</span>

                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full">
                  <div className="w-[88%] bg-cyan-500 h-2 rounded-full"></div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;