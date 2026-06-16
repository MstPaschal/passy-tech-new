import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phoneNumber = "2347032369453";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      bg-green-500
      hover:bg-green-600
      p-4
      rounded-full
      shadow-xl
      transition-all
      duration-300
      hover:scale-110
      "
    >

      <FaWhatsapp
        size={30}
        className="text-white"
      />

    </a>
  );
}

export default WhatsAppButton;