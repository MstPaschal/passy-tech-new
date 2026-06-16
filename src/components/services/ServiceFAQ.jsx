const faqs = [
  {
    q: "Do you build custom websites?",
    a: "Yes, every website is tailored to the client's needs."
  },
  {
    q: "Do you offer website maintenance?",
    a: "Yes, we provide ongoing support and maintenance."
  },
  {
    q: "Can you redesign existing websites?",
    a: "Absolutely, we can modernize any website."
  }
];

function ServiceFAQ() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl text-center text-white font-bold mb-12">

          Service FAQs

        </h2>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl"
            >

              <h3 className="text-white font-semibold mb-2">
                {faq.q}
              </h3>

              <p className="text-slate-400">
                {faq.a}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServiceFAQ;