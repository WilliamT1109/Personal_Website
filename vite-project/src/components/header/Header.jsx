import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home", icon: "uil uil-estate" },
  { name: "About", href: "#about", icon: "uil uil-user-circle" },
  { name: "Skills", href: "#skills", icon: "uil uil-file-alt" },
  { name: "Experience", href: "#experience", icon: "uil uil-suitcase" },
  { name: "Projects", href: "#projects", icon: "uil uil-clipboard-notes" },
  { name: "Contact", href: "#contact", icon: "uil uil-envelope" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full border-b border-border bg-background">
      <nav
        className={cn(
          "w-full fixed top-0 left-0 z-40 border-border bg-background transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="hidden md:inline text-foreground"> Thibault </span>{" "}
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* mobile nav */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <i className="uil uil-multiply text-xl" />
            ) : (
              <i className="uil uil-bars text-xl" />
            )}{" "}
          </button>
        </div>
      </nav>

      {/* mobile menu - slides from bottom, separate from navbar */}
      <div
        className={cn(
          "fixed left-0 w-full bg-background z-30 px-6 pt-8 pb-16 border-t border-border rounded-t-3xl shadow-[0_-1px_4px_rgba(0,0,0,0.15)] transition-all duration-300 md:hidden",
          isMenuOpen ? "bottom-0" : "-bottom-full"
        )}
      >
        <div className="grid grid-cols-3 gap-8 text-sm text-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className={`${item.icon} text-lg`} />
              <span className="text-xs">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Close button */}
        <i
          className="uil uil-times absolute right-5 bottom-4 text-xl cursor-pointer text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
