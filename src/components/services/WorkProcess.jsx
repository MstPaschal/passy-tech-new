const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We understand your goals and project requirements."
  },
  {
    number: "02",
    title: "Planning",
    text: "We create a strategy and roadmap for execution."
  },
  {
    number: "03",
    title: "Development",
    text: "Our team builds and refines your solution."
  },
  {
    number: "04",
    title: "Launch",
    text: "We deploy, monitor and support your project."
  }
];

function WorkProcess() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-white">
            How We Work
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl"
            >

              <span className="text-cyan-400 text-5xl font-bold">
                {step.number}
              </span>

              <h3 className="text-white text-2xl mt-4 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-400">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WorkProcess;