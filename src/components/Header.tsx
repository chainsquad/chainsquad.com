import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const navItems = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

const products = [
  {
    label: "Tributary",
    href: "/products/tributary",
    description: "Automated recurring payments",
  },
  {
    label: "Allowly",
    href: "/products/allowly",
    description: "Web3 allowances on autopilot",
  },
  {
    label: "Contribute",
    href: "/products/contribute",
    description: "Recurring donations for GitHub developers",
  },
  {
    label: "Lando",
    href: "/products/lando",
    description: "Agent commerce on Solana",
  },
  {
    label: "Solcraft",
    href: "/products/solcraft",
    description: "AI-powered Solana development",
  },
  {
    label: "Chaoscraft",
    href: "/products/chaoscraft",
    description: "AI-powered collaborative Site Generator",
  },
  {
    label: "Polycode",
    href: "/products/polycode",
    description: "Agentic PM lead development factory",
  },
];

export function Header() {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    navigate("/");

    // Store where to scroll in sessionStorage
    sessionStorage.setItem("scrollTo", id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const section = sessionStorage.getItem("scrollTo");
    if (section) {
      sessionStorage.removeItem("scrollTo");
      // Small timeout to ensure the page has rendered
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <header className="py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <Link className="inline-flex text-primary" to="/">
          <span className="font-semibold text-xs uppercase tracking-[0.3em]">
            CHAINSQUAD
          </span>
        </Link>
        <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:items-center md:justify-end md:gap-6">
          <nav className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs uppercase tracking-[0.12em]">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="transition-colors hover:text-foreground hover:cursor-pointer"
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 transition-colors hover:text-foreground">
                PRODUCTS
                <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-background border border-border shadow-lg min-w-48 py-2">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      to={product.href}
                      className="block px-4 py-2 hover:bg-muted/50 transition-colors"
                    >
                      <div className="text-xs uppercase tracking-[0.12em] text-foreground">
                        {product.label}
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 normal-case tracking-normal">
                        {product.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
