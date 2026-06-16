import { motion } from "framer-motion";

const projects = [
  "School Website",
  "Business Branding",
  "E-Commerce Store",
  "Video Editing",
  "Tech Startup UI",
  "Landing Pages"
];

function Portfolio() {

  return (
    <section className="py-28 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="
                bg-slate-800
                rounded-3xl
                p-10
                border border-slate-700
                hover:border-cyan-500
                cursor-pointer
              "
            >

              <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl mb-6" />

              <h3 className="text-white text-xl font-semibold">
                {p}
              </h3>

              <p className="text-slate-400 mt-2">
                View project →
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;