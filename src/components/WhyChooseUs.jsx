import {
  ShieldCheck,
  Clock3,
  Headphones,
  Rocket
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "We deliver projects on time without compromising quality."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every project goes through thorough testing and review."
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our team is always available to assist and guide you."
  },
  {
    icon: Clock3,
    title: "Reliable Services",
    description:
      "Dependable technology solutions for businesses of all sizes."
  }
];

function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-cyan-400 font-semibold mb-2">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-bold text-white">
            We Deliver Results
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300"
              >

                <Icon
                  size={42}
                  className="text-cyan-400 mb-5"
                />

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;