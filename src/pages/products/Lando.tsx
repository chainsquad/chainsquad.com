"use client";

import {
  Bot,
  ArrowRight,
  CheckCircle2,
  Zap,
  DollarSign,
  Link,
  Settings,
  Cpu,
  MessageSquare,
  Code2,
  Sparkles,
  Shield,
} from "lucide-react";

const problems = [
  {
    title: "Agents can't get paid",
    description:
      "Your AI agent provides value—research, coding, analysis—but there's no way for it to accept payment. You're stuck manually invoicing or giving services away.",
  },
  {
    title: "No agent-to-agent commerce",
    description:
      "Autonomous agents need to pay each other for services. Current payment systems require human intervention, forms, approvals, and bank accounts.",
  },
  {
    title: "Subscription infrastructure is heavy",
    description:
      "Building recurring billing means databases, webhooks, status tracking, retry logic. Overkill when agents just need a simple payment link.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Share a URL",
    description:
      "Your service agent generates a subscription link. That's it. No API integration, no merchant account, no code deployment.",
    icon: Link,
  },
  {
    step: 2,
    title: "Customer subscribes",
    description:
      "The customer agent visits the link, sees what's being offered, and sets up recurring payments through Tributary.",
    icon: Bot,
  },
  {
    step: 3,
    title: "Get paid automatically",
    description:
      "Payments execute on schedule. No chasing invoices, no manual renewals, no payment processing. Just recurring revenue.",
    icon: DollarSign,
  },
];

const agentServices = [
  {
    icon: Code2,
    title: "Code Generation",
    description: "AI coding assistants that write, review, or refactor code",
    price: "$0.01-0.10 per request",
  },
  {
    icon: MessageSquare,
    title: "Research & Analysis",
    description: "Agents that search, summarize, and synthesize information",
    price: "$5-50 per month",
  },
  {
    icon: Cpu,
    title: "Compute & Infrastructure",
    description: "API access, model inference, data processing services",
    price: "Pay per usage",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    description: "Writing, image generation, video synthesis agents",
    price: "$10-100 per month",
  },
  {
    icon: Settings,
    title: "Automation & Orchestration",
    description: "Workflow automation, task scheduling, monitoring agents",
    price: "$20-200 per month",
  },
  {
    icon: Shield,
    title: "Security & Monitoring",
    description: "Threat detection, compliance checking, audit agents",
    price: "$50-500 per month",
  },
];

const benefits = [
  {
    title: "Zero infrastructure",
    description: "No backend, no database, no webhooks. Just a URL.",
  },
  {
    title: "Autonomous payments",
    description: "Agents pay agents without human intervention.",
  },
  {
    title: "Recurring revenue",
    description: "Set it once, get paid automatically every billing cycle.",
  },
  {
    title: "Instant setup",
    description:
      "Generate a link in seconds. Start accepting payments immediately.",
  },
  {
    title: "On-chain transparency",
    description:
      "Every payment verified on Solana. No disputes, no chargebacks.",
  },
  {
    title: "Non-custodial",
    description:
      "Funds flow directly to your wallet. No middleman holding your money.",
  },
];

export default function LandoPage() {
  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <section className="mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="border-border/50 bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
              Agent Commerce
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tighter">
              <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
                Stripe for AI Agents
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Your AI agent provides a service. Another AI agent pays for it.
              Automated, recurring, on-chain. No humans required.
            </p>
            <div className="flex gap-3">
              <a
                href="/products/tributary"
                className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all h-11 px-6"
              >
                Tributary Protocol
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center rounded-none font-medium text-sm h-11 px-6"
              >
                Agent Services
              </a>
            </div>
          </div>

          <div className="border border-border/50 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Bot className="h-8 w-8 text-primary" />
              <div>
                <div className="font-bold">Agent Economy</div>
                <div className="text-sm text-muted-foreground">
                  Machine-to-machine commerce
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Service Agent</div>
                    <div className="text-xs text-muted-foreground">
                      Provides value
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">→</div>
              </div>
              <div className="flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center justify-between p-4 bg-muted/10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Customer Agent</div>
                    <div className="text-xs text-muted-foreground">
                      Pays automatically
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">→</div>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border/30">
              Recurring payments via Tributary
            </div>
          </div>
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">The Problem</h2>
        <p className="text-lg text-muted-foreground mb-8">
          AI agents provide real value. They should get paid for it.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="border border-border/50 p-6 space-y-4"
            >
              <h3 className="font-bold text-lg">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Three steps. No infrastructure. Just a URL.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {howItWorks.map((step) => (
            <div
              key={step.step}
              className="border border-border/50 p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section id="services" className="mb-24">
        <h2 className="text-3xl font-bold mb-4">What Agents Sell</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Any service an AI agent can provide, Lando can monetize.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentServices.map((service) => (
            <div
              key={service.title}
              className="border border-border/50 hover:border-primary/50 transition-all p-6 space-y-3"
            >
              <service.icon className="h-6 w-6 text-primary" />
              <h3 className="font-bold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
              <div className="pt-3 border-t border-border/30">
                <div className="text-xs font-mono text-muted-foreground">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Why Lando</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Built for the autonomous agent economy.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-3 p-4">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="font-medium">{benefit.title}</div>
                <div className="text-sm text-muted-foreground">
                  {benefit.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section className="mb-24">
        <div className="border border-border/50 p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold">The Future is Autonomous</h2>
              <p className="text-sm text-muted-foreground">
                Agents paying agents
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            The AI economy is coming. Millions of agents providing services to
            each other—coding, research, content, compute, automation. They need
            a way to transact without humans in the loop. Lando is the payment
            infrastructure for that future.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border/30">
            <div>
              <div className="text-3xl font-bold mb-1">0</div>
              <div className="text-sm text-muted-foreground">
                Human intervention required
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">1</div>
              <div className="text-sm text-muted-foreground">
                URL to get started
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">∞</div>
              <div className="text-sm text-muted-foreground">
                Agents that can transact
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="border border-border/50 p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Monetize Your Agent</h2>
          <p className="text-muted-foreground mb-6">
            Turn your AI service into recurring revenue
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/products/tributary"
              className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
            >
              Tributary Protocol
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/products/payments"
              className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center rounded-none font-medium text-sm h-11 px-6"
            >
              Payments SDK
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/tributary-so"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a
              href="https://docs.tributary.so"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a
              href="mailto:team@tributary.so"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
