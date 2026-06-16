import {
  Globe,
  Palette,
  Wifi,
  Video,
  Megaphone,
  Briefcase
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern business websites, school portals, e-commerce platforms and custom web applications."
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Logos, flyers, banners, social media graphics and complete brand identity design."
  },
  {
    icon: Wifi,
    title: "Telecommunications",
    description:
      "Data subscriptions, airtime vending, cable TV renewals and utility payments."
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video editing, motion graphics and promotional content."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Social media marketing, advertising campaigns and lead generation."
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description:
      "Technology strategy, software recommendations and business automation."
  }
];

function ServiceCards() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
              >

                <Icon
                  size={48}
                  className="text-cyan-400 mb-5"
                />

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-400">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default ServiceCards;