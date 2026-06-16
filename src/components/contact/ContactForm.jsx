import { useState } from "react";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message sent successfully!");
  };

  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800">

          <h2 className="text-3xl font-bold text-white mb-8">

            Send Us A Message

          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white"
            />

            <select
              name="service"
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white"
            >

              <option>Select Service</option>

              <option>Website Development</option>

              <option>Graphic Design</option>

              <option>Telecommunications</option>

              <option>Video Editing</option>

              <option>Digital Solutions</option>

            </select>

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your project"
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white"
            />

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-white font-semibold"
            >

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactForm;