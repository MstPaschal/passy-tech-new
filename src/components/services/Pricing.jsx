const plans = [
  {
    title: "Starter",
    price: "Starting from ₦50,000",
    features: [
      "Business Website",
      "Responsive Design",
      "Basic SEO",
      "Contact Form"
    ]
  },
  {
    title: "Professional",
    price: "Starting from ₦150,000",
    features: [
      "Custom Design",
      "Admin Dashboard",
      "Advanced SEO",
      "Training Included"
    ]
  },
  {
    title: "Enterprise",
    price: "Custom Quote",
    features: [
      "Large Scale Systems",
      "Custom Features",
      "Priority Support",
      "Dedicated Team"
    ]
  }
];

function Pricing() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-white">

            Pricing Plans

          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl"
            >

              <h3 className="text-white text-2xl font-semibold mb-4">
                {plan.title}
              </h3>

              <p className="text-cyan-400 text-3xl font-bold mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3">

                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-slate-300"
                  >
                    ✓ {feature}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;