import {
  Phone,
  Mail,
  MapPin,
  MessageCircle
} from "lucide-react";

function ContactInfo() {
  return (
    <section className="py-20 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-800 p-8 rounded-2xl">
            <Phone className="text-cyan-400 mb-4" size={36} />
            <h3 className="text-white font-semibold mb-2">
              Call Us
            </h3>
            <p className="text-slate-400">
              +234 703 236 9453
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <Mail className="text-cyan-400 mb-4" size={36} />
            <h3 className="text-white font-semibold mb-2">
              Email
            </h3>
            <p className="text-slate-400">
              contact.passytechnologies.com
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <MapPin className="text-cyan-400 mb-4" size={36} />
            <h3 className="text-white font-semibold mb-2">
              Location
            </h3>
            <p className="text-slate-400">
              Nigeria
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <MessageCircle
              className="text-cyan-400 mb-4"
              size={36}
            />
            <h3 className="text-white font-semibold mb-2">
              WhatsApp
            </h3>
            <p className="text-slate-400">
              Available 24/7
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;