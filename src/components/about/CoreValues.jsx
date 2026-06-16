import {
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Trophy
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Integrity"
  },
  {
    icon: Lightbulb,
    title: "Innovation"
  },
  {
    icon: ShieldCheck,
    title: "Reliability"
  },
  {
    icon: Trophy,
    title: "Excellence"
  }
];

function CoreValues() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-white">

            Our Core Values

          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (
              <div
                key={index}
                className="bg-slate-800 rounded-2xl p-8 text-center"
              >

                <Icon
                  size={45}
                  className="text-cyan-400 mx-auto mb-4"
                />

                <h3 className="text-white text-xl font-semibold">

                  {value.title}

                </h3>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default CoreValues;