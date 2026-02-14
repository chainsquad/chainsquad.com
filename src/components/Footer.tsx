export function Footer() {
  return (
    <footer className="container mx-auto mt-auto max-w-5xl px-4">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-border/50 py-6 md:flex-row">
        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <span className="font-semibold uppercase tracking-[0.3em]">
            CHAINSQUAD
          </span>
          <span className="text-muted-foreground/50">
            © 2026 ChainSquad GmbH
          </span>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
          <a
            href="mailto:info@chainsquad.com"
            className="transition-colors hover:text-foreground"
          >
            info@chainsquad.com
          </a>
        </div>
      </div>
    </footer>
  );
}
