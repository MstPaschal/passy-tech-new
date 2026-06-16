import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "School Management System",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  },
  {
    title: "Church Website",
    category: "Website Design",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b"
  },
  {
    title: "Business Branding",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766"
  },
  {
    title: "E-Commerce Store",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  },
  {
    title: "Promo Video",
    category: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
  },
  {
    title: "VTU Platform",
    category: "Telecommunications",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
  }
];

function ProjectsGrid() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 group"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-6">

                <span className="text-cyan-400 text-sm">

                  {project.category}

                </span>

                <h3 className="text-white text-2xl font-semibold mt-2">

                  {project.title}

                </h3>

                <button className="mt-5 flex items-center gap-2 text-cyan-400">

                  View Project
                  <ExternalLink size={16} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProjectsGrid;