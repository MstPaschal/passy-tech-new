import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await emailjs.send(
        "service_3d6n9w6",
        "template_4aqatuo",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.message
        },
        "gx5b94BNiWR4Um0j3"
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: ""
      });

    } catch (error) {

      console.error(error);

      alert("Failed to send message");

    }
  };

  return (
    <section className="py-24 bg-slate-950">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-cyan-400 font-semibold mb-3">
            CONTACT US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's Build Something Amazing
          </h2>

          <p className="text-slate-400 mt-4">
            Tell us about your project and we'll get back to you shortly.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="
            bg-slate-900/60
            backdrop-blur-xl
            border
            border-slate-800
            rounded-3xl
            p-8
            md:p-10
          "
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block text-slate-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-500
                "
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-500
                "
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-500
                "
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">
                Service Needed
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-cyan-500
                "
              >
                <option value="">
                  Select Service
                </option>

                <option>
                  Website Development
                </option>

                <option>
                  Graphic Design
                </option>

                <option>
                  Video Editing
                </option>

                <option>
                  Branding
                </option>

                <option>
                  Digital Marketing
                </option>

              </select>
            </div>

          </div>

          <div className="mt-6">

            <label className="block text-slate-300 mb-2">
              Budget Range
            </label>

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="
                w-full
                bg-slate-800
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-500
              "
            >
              <option value="">
                Select Budget
              </option>

              <option>₦50,000 - ₦100,000</option>
              <option>₦100,000 - ₦300,000</option>
              <option>₦300,000 - ₦500,000</option>
              <option>₦500,000+</option>

            </select>

          </div>

          <div className="mt-6">

            <label className="block text-slate-300 mb-2">
              Project Description
            </label>

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="
                w-full
                bg-slate-800
                border
                border-slate-700
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-500
              "
            />

          </div>

          <button
            type="submit"
            className="
              mt-8
              bg-cyan-500
              hover:bg-cyan-600
              text-white
              px-8
              py-4
              rounded-xl
              flex
              items-center
              gap-2
              transition
            "
          >

            Send Message

            <Send size={18} />

          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactForm;