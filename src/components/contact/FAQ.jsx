const faqs = [
  {
    q: "How long does a website take?",
    a: "Most websites are completed within 1–4 weeks."
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes, we provide ongoing maintenance and support."
  },
  {
    q: "Can you redesign existing websites?",
    a: "Absolutely. We can modernize and improve any website."
  }
];

function FAQ() {
  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">

          Frequently Asked Questions

        </h2>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >

              <h3 className="text-white font-semibold mb-3">
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

export default FAQ;