import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen 
                  bg-[rgba(10, 10, 10, 0.6)] backdrop-blur-md z-40 
                  flex flex-col items-center justify-center 
                  transition-all duration-300 ease-in-out 
                  ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      role="menu"
      aria-hidden={!menuOpen}
      onKeyDown={handleKeyDown}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <nav className="flex flex-col items-center w-full">
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                       ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            role="menuitem"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};
