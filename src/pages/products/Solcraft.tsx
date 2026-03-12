import { useState } from "react";
import { addToWaitlist } from "@/lib/n8n";
import {
  Code2,
  Zap,
  Layers,
  Workflow,
  FileCode,
  CheckCircle2,
  ChevronRight,
  X,
  ArrowRight,
  Terminal,
  Sparkles,
  BookOpen,
  Globe,
  Shield,
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [isAgentOpen, setIsAgentOpen] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await addToWaitlist({
        email,
        type: "waitlist",
      });
      setIsSubmitted(true);
      console.log("Waitlist signup:", email);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleAgent = (id: number) => {
    setIsAgentOpen(isAgentOpen === id ? null : id);
  };

  const agents = [
    {
      id: 1,
      number: "01",
      name: "Monorepo Setup",
      icon: Layers,
      description:
        "Bootstrap complete Solana monorepo with pnpm workspaces, TypeScript strict config, Anchor.toml, and proper folder structure. Sets foundation for professional development.",
      duration: "~15 min",
      tags: ["Setup", "Monorepo", "Workspace", "TypeScript"],
      outputs: [
        "pnpm-workspace.yaml",
        "tsconfig.json",
        "Anchor.toml",
        ".gitignore",
        "package.json",
      ],
    },
    {
      id: 2,
      number: "02",
      name: "Project Description",
      icon: FileCode,
      description:
        "Iterative refinement of your project idea through structured conversation. Discovery → Draft → Iteration → Polish. Creates comprehensive PROJECT.md that serves as single source of truth for developers, investors, and collaborators.",
      duration: "10-30 min",
      tags: ["Discovery", "Documentation", "Requirements"],
      outputs: ["PROJECT.md"],
    },
    {
      id: 3,
      number: "03",
      name: "SDK Builder",
      icon: Code2,
      description:
        "Production-ready TypeScript SDK with @solana/web3.js. Type-safe API surface, PDA derivation helpers, instruction builders, account fetchers, error handling, and comprehensive testing utilities. Returns TransactionInstruction for clean transaction assembly.",
      duration: "~1 hour",
      tags: ["TypeScript", "SDK", "API", "Type-Safe"],
      outputs: [
        "ProgramSdk",
        "PDA helpers",
        "Instruction builders",
        "Account fetchers",
      ],
    },
    {
      id: 4,
      number: "04",
      name: "Anchor Contract",
      icon: Shield,
      description:
        "Secure Solana smart contracts using Anchor framework. Modular architecture with proper account validation, PDA management, security patterns, and comprehensive error handling. Includes event emission and gas optimization.",
      duration: "~2 hours",
      tags: ["Rust", "Anchor", "Smart Contracts", "Security", "PDA"],
      outputs: [
        "Program state structs",
        "Instruction handlers",
        "Error codes",
        "Events",
      ],
    },
    {
      id: 5,
      number: "05",
      name: "Testing",
      icon: CheckCircle2,
      description:
        "Comprehensive integration tests covering success paths, error cases, edge cases, state transitions, token transfers, and permissions. SDK-first approach using typed helpers and test fixtures.",
      duration: "~1 hour",
      tags: ["Testing", "Coverage", "Jest", "Anchor Test"],
      outputs: [
        "Test suites",
        "Test utilities",
        "Mock data",
        "Coverage reports",
      ],
    },
    {
      id: 6,
      number: "06",
      name: "App Builder",
      icon: Terminal,
      description:
        "React application with Solana SDK and wallet adapter integration. Includes wallet connection, transaction handling, balance displays, form components, custom hooks, and error boundaries. Vite + Tailwind CSS + shadcn/ui.",
      duration: "~2 hours",
      tags: [
        "React",
        "Next.js",
        "Vite",
        "Wallet Adapter",
        "Hooks",
        "Components",
      ],
      outputs: [
        "React app",
        "Wallet integration",
        "Custom hooks",
        "UI components",
      ],
    },
    {
      id: 7,
      number: "07",
      name: "Documentation",
      icon: BookOpen,
      description:
        "MkDocs documentation site with Material theme. Comprehensive developer guide with architecture diagrams, API reference, quick start, troubleshooting, and contribution guidelines. Auto-generated from code.",
      duration: "~1.5 hours",
      tags: ["MkDocs", "Material Theme", "API Docs", "Developer Guide"],
      outputs: ["docs/ site", "API reference", "Architecture diagrams"],
    },
    {
      id: 8,
      number: "08",
      name: "README Generator",
      icon: Globe,
      description:
        "Absurdly thorough README.md files with complete setup instructions, tech stack, prerequisites, environment variables, available scripts, troubleshooting, and contribution guidelines. Assumes fresh machine with zero prior knowledge.",
      duration: "~30 min",
      tags: ["README", "Onboarding", "Documentation"],
      outputs: ["README.md", "Getting Started guide", "Development workflow"],
    },
  ];

  const faqs = [
    {
      q: "How does this compare to OpenHands or Devin?",
      a: "We're specialized for Solana development. While they're general-purpose coding agents, we deeply understand Anchor, Solana programs, PDAs, CPIs, gas optimization, and blockchain security. We're also much simpler to use - one command, no Docker or Kubernetes required.",
    },
    {
      q: "Can I use it with other blockchains?",
      a: "Initially we're Solana-focused. This specialization allows us to understand Solana's unique patterns, security vulnerabilities, and optimization strategies at a level a generalist agent can't match. We may expand to other chains later based on demand.",
    },
    {
      q: "How much will it cost?",
      a: "The core agent will be open source (MIT license). We're exploring a freemium model with personalized agents that learn your specific codebase and coding style. Pricing will be transparent and affordable for individual developers.",
    },
    {
      q: "Will my code be private?",
      a: "Yes. Your code runs locally on your machine. We don't have a cloud service that sees your repositories. When using external models through your own API keys, your code is only shared with the model provider you choose.",
    },
    {
      q: "How does the pipeline work?",
      a: "Start with a rough project idea. Agent 02 helps refine it into a comprehensive PROJECT.md. Then Agent 01 sets up the monorepo. Agents 03 & 04 build SDK and contracts in parallel. Agent 05 tests everything. Agent 06 builds your React app. Agent 07 generates docs. Agent 08 creates your README. You go from idea to production-ready application in ~4-6 hours.",
    },
    {
      q: "What makes this different from manual Solana development?",
      a: "Speed: Automated agent execution vs weeks of manual work. Consistency: Every agent follows Solana best practices and security patterns. Completeness: All agents work together to ensure nothing is missed. Zero to hero: You can start with zero knowledge and get a full application.",
    },
    {
      q: "When will it be available?",
      a: "We're in active development. Join the waitlist to get early access when we launch our beta. Early adopters will get free access to premium features.",
    },
  ];

  const pipelineSteps = [
    {
      step: 1,
      title: "Your Project Idea",
      description: "Describe what you want to build",
      icon: Sparkles,
    },
    {
      step: 2,
      title: "Project Discovery",
      description: "Agent refines requirements through iterative conversation",
      icon: FileCode,
    },
    {
      step: 3,
      title: "Monorepo Setup",
      description: "Bootstrap complete project structure with workspaces",
      icon: Layers,
    },
    {
      step: 4,
      title: "Smart Contract Development",
      description: "Anchor framework with Rust implementation",
      icon: Shield,
    },
    {
      step: 5,
      title: "SDK Construction",
      description: "TypeScript SDK for program interaction",
      icon: Code2,
    },
    {
      step: 6,
      title: "Comprehensive Testing",
      description: "Integration tests with full coverage",
      icon: CheckCircle2,
    },
    {
      step: 7,
      title: "App Development",
      description: "React app with wallet integration",
      icon: Terminal,
    },
    {
      step: 8,
      title: "Documentation Generation",
      description: "MkDocs site with API reference",
      icon: BookOpen,
    },
    {
      step: 9,
      title: "Onboarding Materials",
      description: "Complete README for developers",
      icon: Globe,
    },
  ];

  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <section className="mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="border-border/50 bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
              AI-Powered Development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tighter">
              Solana App Development,{" "}
              <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
                Automated
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Eight specialized AI agents work sequentially to build complete
              Solana projects from a single description. Zero to
              production-ready in hours, not weeks.
            </p>
            <div className="flex gap-3">
              <a
                className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 h-11 px-6"
                onClick={() => {
                  document
                    .getElementById("agents")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore the Pipeline
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none h-11 px-6"
                onClick={() => {
                  document
                    .getElementById("waitlist")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Join Waitlist
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 border-l-2 border-primary/20 pl-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Workflow className="text-2xl" />8 Agents, One Goal
            </h2>
            <div className="space-y-6">
              {pipelineSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-mono text-sm font-bold shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-base mb-1 flex items-center gap-2">
                        {step.icon && (
                          <step.icon className="h-5 w-5 text-primary" />
                        )}
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section id="agents" className="mb-24">
        <h2 className="text-3xl font-bold mb-8">The 8 Agents</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Click on any agent to see details and outputs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => toggleAgent(agent.id)}
              className="border border-border/50 hover:border-primary/50 cursor-pointer transition-all group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <agent.icon className="h-6 w-6 text-primary" />
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-muted-foreground">
                        {agent.number}
                      </span>
                      <span className="font-bold text-lg">{agent.name}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded">
                    {agent.duration}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground flex-1">
                  {agent.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground bg-muted/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isAgentOpen === agent.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-border/30 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground/70">
                        Delivers:
                      </span>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-6">
                      {agent.outputs.map((output, idx) => (
                        <li key={idx}>{output}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <div className="border border-border/50 p-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Why Choose Solcraft?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <div className="flex gap-3 mb-2">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Zero to Hero</h3>
                  <p className="text-sm text-muted-foreground">
                    Start with zero Solana knowledge. We teach you as we build.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 mb-2">
                <Workflow className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Hours, Not Weeks</h3>
                  <p className="text-sm text-muted-foreground">
                    What takes weeks of manual work, we do in hours. Complete
                    apps built in 4-6 hours.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Layers className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Best Practices, Every Time</h3>
                  <p className="text-sm text-muted-foreground">
                    Each agent encodes Solana best practices. Security patterns,
                    gas optimization, proper PDA derivation - all built in.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 mb-2">
                <FileCode className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Type-Safe & Tested</h3>
                  <p className="text-sm text-muted-foreground">
                    TypeScript SDK with full type safety. Comprehensive test
                    coverage. Production-ready code from start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mb-24">
        <div className="border border-border/50 p-12">
          <h2 className="text-2xl font-bold mb-4">Join Early Access</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Get notified when we launch beta. Early adopters get free access to
            premium features.
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-input/30 border-input placeholder:text-muted-foreground/50 h-11 w-full border px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 h-11 px-6"
                  disabled={loading || !email}
                >
                  Join Waitlist
                  <ChevronRight className="h-4 w-4" />
                </button>
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>
            </form>
          ) : (
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-medium">
                You're on the list! We'll be in touch soon.
              </span>
            </div>
          )}
          <p className="text-xs text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">FAQ</h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border/50">
              <button
                onClick={() =>
                  setActiveSection(activeSection === idx ? null : idx)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/10 transition-colors"
              >
                <span className="font-medium flex-1">{faq.q}</span>
                {activeSection === idx ? (
                  <X className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              {activeSection === idx && (
                <div className="pt-6 pb-6 px-6 text-sm text-muted-foreground border-t border-border/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
