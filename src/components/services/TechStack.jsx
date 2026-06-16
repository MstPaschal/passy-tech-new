const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Firebase",
  "WordPress",
  "Figma",
  "Adobe Photoshop",
  "Adobe Premiere Pro"
];

function TechStack() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white mb-12">

          Technologies We Use

        </h2>

        <div className="flex flex-wrap justify-center gap-5">

          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-slate-800 px-6 py-3 rounded-full border border-slate-700 text-white"
            >
              {tech}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TechStack;