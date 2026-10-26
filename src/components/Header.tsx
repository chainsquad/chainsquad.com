import { Link, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect } from "react";

const navItems = [
  { label: "Why", href: "why" },
  { label: "Contact", href: "contact" },
];

export function Header() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");
    sessionStorage.setItem("scrollTo", id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const section = sessionStorage.getItem("scrollTo");
    if (section) {
      sessionStorage.removeItem("scrollTo");
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <header className="border-b border-primary py-6">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
        <Link className="inline-flex text-primary" to="/">
          <span className="font-semibold text-xs uppercase tracking-[0.3em]">
            ChainSquad
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-muted-foreground text-xs uppercase tracking-[0.12em]">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="transition-colors hover:text-foreground hover:cursor-pointer"
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
