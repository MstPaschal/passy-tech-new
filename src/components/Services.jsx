import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  Video,
  Wifi,
  Megaphone,
  Briefcase
} from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development" },
  { icon: Palette, title: "Graphic Design" },
  { icon: Video, title: "Video Editing" },
  { icon: Wifi, title: "Digital Solutions" },
  { icon: Megaphone, title: "Marketing" },
  { icon: Briefcase, title: "IT Consulting" }
];

function Services() {

  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((s, i) => {

            const Icon = s.icon;

            return (

              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  bg-slate-900/60
                  backdrop-blur-xl
                  border border-slate-800
                  rounded-3xl
                  p-8
                  hover:border-cyan-500
                  transition
                "
              >

                <Icon className="text-cyan-400 mb-4" size={40} />

                <h3 className="text-white text-xl font-semibold">
                  {s.title}
                </h3>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Services;