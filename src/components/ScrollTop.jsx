import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollTop() {

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {

    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener(
      "scroll",
      toggleVisibility
    );

    return () =>
      window.removeEventListener(
        "scroll",
        toggleVisibility
      );

  }, []);

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="
        fixed
        bottom-24
        right-6
        bg-cyan-500
        text-white
        p-3
        rounded-full
        shadow-lg
        z-50
        "
      >

        <ChevronUp size={22} />

      </button>
    )
  );
}

export default ScrollTop;