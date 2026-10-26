import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>&copy; 2026 ChainSquad GmbH</div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/chainsquad"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <Link to="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link to="/legal" className="transition-colors hover:text-foreground">
            Legal
          </Link>
        </div>
        <div className="text-muted-foreground/60">
          Built with ❤️ using neovim.
        </div>
      </div>
    </footer>
  );
}
