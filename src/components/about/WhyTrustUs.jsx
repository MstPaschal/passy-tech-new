const reasons = [
  "Professional Service Delivery",
  "Affordable Pricing",
  "Experienced Team",
  "Fast Project Turnaround",
  "Dedicated Support",
  "Modern Technologies"
];

function WhyTrustUs() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl text-center font-bold text-white mb-16">

          Why Clients Trust Us

        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((reason, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-white"
            >

              ✓ {reason}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyTrustUs;