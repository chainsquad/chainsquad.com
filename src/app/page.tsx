import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Code, Zap, Shield, Server, Workflow, Users, Trophy, Bot, MessageSquare, Factory, User, Cpu, Cloud, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-5xl px-4">
        {/* Hero Section */}
        <section className="py-20">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-16">
            <div className="flex flex-col items-start gap-4 text-left">
              <h1 className="text-3xl font-bold leading-snug tracking-tighter md:text-4xl">
                Building production-ready Web2/Web3 systems and autonomous AI agents since 2016
              </h1>
              <p className="text-xl text-muted-foreground">
                German technology consultancy turning cutting-edge AI and blockchain technology into production reality
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@chainsquad.com"
                  className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 h-11 px-6"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
                <a
                  href="#services"
                  className="border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 h-11 px-6"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="font-mono text-sm text-muted-foreground">Hackathon Wins</div>
                <div className="text-2xl font-bold flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  2
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-sm text-muted-foreground">Projects</div>
                <div className="text-2xl font-bold">26+</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-sm text-muted-foreground">Exits</div>
                <div className="text-2xl font-bold">4</div>
              </div>
              <div className="space-y-2">
                <div className="font-mono text-sm text-muted-foreground">Founded</div>
                <div className="text-2xl font-bold">2016</div>
              </div>
            </div>
          </div>
        </section>

        <div className="font-mono text-sm text-muted-foreground/30 select-none" aria-hidden="true">//</div>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="mb-8 max-w-2xl space-y-3">
            <h2 className="text-xl font-semibold">About ChainSquad</h2>
            <p className="text-muted-foreground">
              ChainSquad GmbH is a German technology consultancy founded in 2016 by Dr.-Ing. Fabian Schuh. We combine foundational engineering principles with forward-thinking approaches to AI automation, blockchain development, and distributed systems. Building with the best in the industry, we deliver production-grade solutions across Web2, Web3, and AI agent ecosystems.
            </p>
          </div>
        </section>

        <div className="font-mono text-sm text-muted-foreground/30 select-none" aria-hidden="true">//</div>

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="mb-8 max-w-2xl space-y-3">
            <h2 className="text-xl font-semibold">What We Do</h2>
            <p className="text-muted-foreground">
              Comprehensive development and automation services spanning Web2, Web3, and autonomous AI agents
            </p>
          </div>

          {/* AI Agents Section */}
          <div className="mb-12">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <Bot className="h-5 w-5 text-primary" />
              Autonomous AI Agents
            </h3>
            <div className="mb-6 text-sm text-muted-foreground">
              We build and operate production AI agents that automate workflows and handle complex tasks autonomously.
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2 rounded-none border border-border bg-muted/20 p-4">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Social Media Outreach</h4>
                <p className="text-sm text-muted-foreground">
                  Automated content creation and engagement across platforms
                </p>
              </div>
              <div className="space-y-2 rounded-none border border-border bg-muted/20 p-4">
                <Workflow className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Communications Intake</h4>
                <p className="text-sm text-muted-foreground">
                  Pre-processing and triaging of incoming communications
                </p>
              </div>
              <div className="space-y-2 rounded-none border border-border bg-muted/20 p-4">
                <Factory className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Coding Factory</h4>
                <p className="text-sm text-muted-foreground">
                  Automated code generation and development workflows
                </p>
              </div>
              <div className="space-y-2 rounded-none border border-border bg-muted/20 p-4">
                <User className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Personal Assistance</h4>
                <p className="text-sm text-muted-foreground">
                  Beyond coding - full personal and business support
                </p>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-border bg-muted/20">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="font-medium">Web2 & Web3 Development</h3>
              <p className="text-sm text-muted-foreground">
                Full-stack development: TypeScript, JavaScript, Python, C++, Graphene stack
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-border bg-muted/20">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-medium">AI & Automation</h3>
              <p className="text-sm text-muted-foreground">
                Multi-agent orchestration with CrewAI, OpenClaw, and n8n
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-border bg-muted/20">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-medium">Blockchain Engineering</h3>
              <p className="text-sm text-muted-foreground">
                L1 blockchain implementation, smart contracts, and dApp architecture
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-border bg-muted/20">
                <Cloud className="h-5 w-5" />
              </div>
              <h3 className="font-medium">Infrastructure & Deployment</h3>
              <p className="text-sm text-muted-foreground">
                On-prem, dedicated, and cloud compute with HashiCorp stack
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-border bg-muted/20">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-medium">C++ & Low-Level Systems</h3>
              <p className="text-sm text-muted-foreground">
                High-performance native code for critical infrastructure
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-none border border-border bg-muted/20">
                <Server className="h-5 w-5" />
              </div>
              <h3 className="font-medium">DevOps & Orchestration</h3>
              <p className="text-sm text-muted-foreground">
                Ansible, Pulumi, Terraform, Consul, Vault, Nomad
              </p>
            </div>
          </div>
        </section>

        <div className="font-mono text-sm text-muted-foreground/30 select-none" aria-hidden="true">//</div>

        {/* Tech Stack Section */}
        <section id="stack" className="py-16">
          <div className="mb-8 max-w-2xl space-y-3">
            <h2 className="text-xl font-semibold">Our Technology Stack</h2>
            <p className="text-muted-foreground">
              Production-proven tools and frameworks we use to build reliable systems
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* AI & Automation */}
            <div className="space-y-3 rounded-none border border-border p-5">
              <h3 className="mb-2 font-semibold">AI & Automation</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">CrewAI</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">OpenClaw</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">n8n</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">LangChain</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">RAG Systems</span>
              </div>
            </div>

            {/* Development */}
            <div className="space-y-3 rounded-none border border-border p-5">
              <h3 className="mb-2 font-semibold">Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">TypeScript</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">JavaScript</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Python</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">C++</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Rust</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Graphene</span>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="space-y-3 rounded-none border border-border p-5">
              <h3 className="mb-2 font-semibold">Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Consul</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Vault</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Nomad</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text text-sm">Ansible</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Pulumi</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Terraform</span>
              </div>
            </div>

            {/* Deployment Models */}
            <div className="space-y-3 rounded-none border border-border p-5">
              <h3 className="mb-2 font-semibold">Deployment Models</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Cloud</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">On-Premise</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Dedicated</span>
              </div>
            </div>

            {/* Blockchain */}
            <div className="space-y-3 rounded-none border border-border p-5">
              <h3 className="mb-2 font-semibold">Blockchain & Web3</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Solana</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Anchor</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">Graphene</span>
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-3 rounded-none border border-border p-5">
              <h3 className="mb-2 font-semibold">Agent & Automation</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">CrewAI</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">OpenClaw</span>
                <span className="rounded-none border border-border bg-muted/10 px-3 py-1 text-sm">n8n</span>
              </div>
            </div>
          </div>
        </section>

        <div className="font-mono text-sm text-muted-foreground/30 select-none" aria-hidden="true">//</div>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16">
          <div className="mb-8 max-w-2xl space-y-3">
            <h2 className="text-xl font-semibold">Portfolio Highlights</h2>
            <p className="text-muted-foreground">
              Current active projects and notable exits
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-none border border-border p-6">
              <span className="border-border bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
                Active
              </span>
              <h3 className="font-medium">Lucky Swaps</h3>
              <p className="text-sm text-muted-foreground">
                Co-founder via BlockOps (2024-present) – DeFi trading platform
              </p>
            </div>
            <div className="space-y-4 rounded-none border border-border p-6">
              <span className="border-border bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
                Active
              </span>
              <h3 className="font-medium">Juju Research Labs Inc</h3>
              <p className="text-sm text-muted-foreground">
                CEO & Founder (2024-present) – Research and development initiatives
              </p>
            </div>
            <div className="space-y-4 rounded-none border border-border p-6">
              <span className="border-border bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
                Active
              </span>
              <h3 className="font-medium">relay.md</h3>
              <p className="text-sm text-muted-foreground">
                CEO (2023-present) – SaaS tool for Obsidian, actively operational
              </p>
            </div>
            <div className="space-y-4 rounded-none border border-border p-6">
              <span className="border-border bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
                Exit
              </span>
              <h3 className="font-medium">Steemit Inc</h3>
              <p className="text-sm text-muted-foreground">
                Lead Python Developer, Advisor (2015-2019) – Successful exit
              </p>
            </div>
            <div className="space-y-4 rounded-none border border-border p-6">
              <span className="border-border bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
                Exit
              </span>
              <h3 className="font-medium">Maker DAO</h3>
              <p className="text-sm text-muted-foreground">
                Advisor, whitepaper review (2015-2016) – Successful exit
              </p>
            </div>
            <div className="space-y-4 rounded-none border border-border p-6">
              <span className="border-border bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
                Exit
              </span>
              <h3 className="font-medium">Cryptonomex Inc</h3>
              <p className="text-sm text-muted-foreground">
                Community Manager, Technical Lead (2014-2017) – Successful exit
              </p>
            </div>
          </div>
        </section>

        <div className="font-mono text-sm text-muted-foreground/30 select-none" aria-hidden="true">//</div>

        {/* CTA Section */}
        <section className="py-16">
          <div className="rounded-none border border-border bg-muted/20 p-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">Ready to Build Production Systems?</h2>
            <p className="mb-8 text-muted-foreground">
              Let's discuss how ChainSquad can help bring your AI and Web3 vision to reality
            </p>
            <a
              href="mailto:info@chainsquad.com"
              className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 h-11 px-6"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
