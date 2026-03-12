import { useState } from "react";
import {
  Wallet,
  Repeat,
  Bot,
  UserCircle,
  CheckCircle2,
  ChevronRight,
  X,
  ArrowRight,
  Clock,
  Zap,
  Shield,
  CreditCard,
  Settings,
  TrendingUp,
} from "lucide-react";

const problems = [
  {
    title: "Allowances are manual",
    description:
      "Every week you remember (or forget) to send money. Bank transfers take days. Cash gets lost. There's no automation.",
  },
  {
    title: "Agent budgets need control",
    description:
      "AI agents need funds to operate, but you can't give unlimited access. You need caps, limits, and auditability without micro-managing every transaction.",
  },
  {
    title: "Traditional banking is slow",
    description:
      "Setting up recurring transfers requires bank accounts, standing orders, verification. International? Forget it. Crypto is faster but needs infrastructure.",
  },
];

const models = [
  {
    icon: UserCircle,
    name: "Subscriptions",
    tagline: "For kids & humans",
    description:
      "Fixed recurring payments on autopilot. Weekly, bi-weekly, monthly—you set it once, payments happen forever. Perfect for allowances.",
    example: "$50/week → child wallet",
    features: ["Automatic execution", "Fixed schedule", "Set and forget"],
  },
  {
    icon: Bot,
    name: "Pay-as-you-go",
    tagline: "For AI agents",
    description:
      "Budget pool with on-demand claims. Agents pull funds when needed, up to a max per claim. You set limits, they decide timing.",
    example: "$500/month budget, $50 max per claim",
    features: ["On-demand claims", "Per-claim caps", "Period budgets"],
  },
];

const features = [
  {
    icon: Wallet,
    title: "Connect & Create",
    description:
      "Connect your wallet, enter recipient address, set amount. Done in 60 seconds.",
  },
  {
    icon: Repeat,
    title: "Automated Execution",
    description:
      "Tributary protocol handles payments. No cron jobs, no servers, no maintenance.",
  },
  {
    icon: Shield,
    title: "Bounded Spending",
    description:
      "Set caps per claim. Agents can't drain the wallet even if compromised.",
  },
  {
    icon: Settings,
    title: "Full Control",
    description: "Pause, resume, or cancel anytime. Your funds, your rules.",
  },
];

const useCases = [
  {
    title: "Kids' Allowances",
    items: [
      "Weekly pocket money on autopilot",
      "No more forgotten transfers",
      "Teach them about crypto early",
      "International—no bank delays",
    ],
  },
  {
    title: "AI Agent Budgets",
    items: [
      "Autonomous agents with spending limits",
      "On-demand fund access",
      "Per-claim caps prevent abuse",
      "Audit trail on-chain",
    ],
  },
  {
    title: "Team Members",
    items: [
      "Recurring payments to collaborators",
      "Predictable cash flow",
      "No invoicing overhead",
      "Instant settlement",
    ],
  },
  {
    title: "Subscription Services",
    items: [
      "Pay for services in USDC",
      "Non-custodial recurring billing",
      "Cancel anytime—no lock-in",
      "Transparent on-chain",
    ],
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Connect Wallet",
    description: "Phantom, Solflare, or any Solana wallet",
    time: "10 seconds",
  },
  {
    step: 2,
    title: "Enter Recipient",
    description: "Child's wallet, agent's address, or anyone",
    time: "15 seconds",
  },
  {
    step: 3,
    title: "Set Amount & Schedule",
    description: "$50/week or $500/month budget",
    time: "20 seconds",
  },
  {
    step: 4,
    title: "Approve Once",
    description: "Sign token delegation—protocol handles the rest",
    time: "15 seconds",
  },
];

const comparison = [
  {
    feature: "Setup time",
    allowly: "1 minute",
    traditional: "Days (bank verification)",
  },
  {
    feature: "Execution",
    allowly: "Automatic",
    traditional: "Manual transfer",
  },
  {
    feature: "International",
    allowly: "Instant",
    traditional: "3-5 business days",
  },
  { feature: "Agent access", allowly: "Built-in", traditional: "Impossible" },
  {
    feature: "Infrastructure",
    allowly: "None",
    traditional: "Bank account required",
  },
  {
    feature: "Custodial risk",
    allowly: "Zero",
    traditional: "Bank holds funds",
  },
];

const faqs = [
  {
    q: "How is this different from a bank standing order?",
    a: "Bank transfers require bank accounts, verification, and days to settle. Allowly uses USDC on Solana—instant settlement, no bank needed, works globally. Plus, banks don't support on-demand claims for AI agents.",
  },
  {
    q: "Do I need to run a server or cron job?",
    a: "No. Allowly is a pure frontend app. Tributary protocol handles payment execution on-chain. You set the policy once, the blockchain does the rest. Zero infrastructure.",
  },
  {
    q: "What's the difference between subscription and pay-as-you-go?",
    a: "Subscription: Fixed amount on a schedule (e.g., $50 every Monday). Pay-as-you-go: Budget pool that recipients claim from on-demand, up to a max per claim (e.g., $500 monthly budget, $50 max per claim).",
  },
  {
    q: "Can AI agents really use this?",
    a: "Yes. With the pay-as-you-go model, agents receive a policy that lets them claim funds up to the per-claim cap. They don't need your approval for each claim—just stay within the limits you set.",
  },
  {
    q: "Is my money safe?",
    a: "Funds stay in your wallet until payment moment. Tributary uses token delegation, not custody. You can revoke approval anytime. On-chain transparency shows every transaction.",
  },
  {
    q: "What if I want to stop payments?",
    a: "Pause or cancel anytime from the dashboard. Pause temporarily stops payments. Cancel ends the policy permanently. Both are instant, on-chain transactions.",
  },
  {
    q: "Do I need USDC?",
    a: "Yes. Allowly uses USDC on Solana. If you or your recipient don't have USDC, you'll need to get some first (exchanges, on-ramps, etc.). This is a web3-native tool.",
  },
  {
    q: "What's Tributary?",
    a: "Tributary is the non-custodial payment protocol that powers Allowly. It handles recurring payments, on-demand claims, and all the blockchain logic. Allowly is just a simple UI on top of Tributary's SDK.",
  },
];

export default function AllowlyPage() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <section className="mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="border-border/50 bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
              Web3 Allowances on Autopilot
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tighter">
              Pocket money,{" "}
              <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
                the web3 way
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Recurring allowances for kids and AI agents. Set it once, forget
              forever. No infrastructure, no servers, no manual transfers.
            </p>
            <div className="flex gap-3">
              <a
                href="#models"
                className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all h-11 px-6"
              >
                Choose Your Model
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border/50 p-6 col-span-2">
              <div className="text-sm text-muted-foreground mb-2">
                Setup Time
              </div>
              <div className="text-4xl font-bold">60 seconds</div>
              <div className="text-xs text-muted-foreground mt-1">
                Connect wallet → create allowance
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs text-muted-foreground mt-1">
                Servers needed
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold">2</div>
              <div className="text-xs text-muted-foreground mt-1">
                Payment models
              </div>
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
          Recurring payments shouldn't require manual work or infrastructure.
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

      <section id="models" className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Two Models, One Tool</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Subscriptions for predictable payments. Pay-as-you-go for flexible
          budgets.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model) => (
            <div
              key={model.name}
              className="border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <model.icon className="h-10 w-10 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground bg-muted/20 px-2 py-1 rounded">
                    {model.tagline}
                  </span>
                </div>
                <h3 className="font-bold text-2xl">{model.name}</h3>
                <p className="text-muted-foreground">{model.description}</p>
                <div className="pt-4 border-t border-border/30 space-y-3">
                  <div className="font-mono text-sm text-primary">
                    {model.example}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {model.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-muted/20 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
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
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Everything you need, nothing you don't.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="border border-border/50 p-6">
              <feature.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section id="how-it-works" className="mb-24">
        <div className="border border-border/50 p-12">
          <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-primary text-primary-foreground h-12 w-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.description}
                </p>
                <span className="text-xs font-mono text-muted-foreground/70">
                  ~{item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Who's getting paid?
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="border border-border/50 p-6">
              <h3 className="font-bold mb-4">{useCase.title}</h3>
              <ul className="space-y-2">
                {useCase.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-3 w-3 text-primary mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Allowly vs Traditional</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Web3 automation vs manual banking.
        </p>
        <div className="border border-border/50 overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30">
              Feature
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30 text-primary">
              Allowly
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-border/30">
              Bank Transfer
            </div>
            {comparison.map((row) => (
              <div key={row.feature} className="contents">
                <div className="p-4 text-sm border-b border-r border-border/30 bg-muted/5">
                  {row.feature}
                </div>
                <div className="p-4 text-sm border-b border-r border-border/30 font-medium">
                  {row.allowly}
                </div>
                <div className="p-4 text-sm border-b border-border/30 text-muted-foreground">
                  {row.traditional}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section className="mb-24">
        <div className="border border-border/50 p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                Why Pay-as-you-go for Agents?
              </h2>
              <p className="text-sm text-muted-foreground">
                Give AI autonomy without losing control
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            AI agents need to spend money—API calls, compute, services—but you
            can't approve every transaction. Pay-as-you-go gives them a budget
            pool with per-claim caps. They claim what they need, when they need
            it, but can never exceed the limits you set.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">Autonomous spending</div>
                <div className="text-xs text-muted-foreground">
                  No approval per claim
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">Bounded risk</div>
                <div className="text-xs text-muted-foreground">
                  Per-claim caps limit exposure
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">On-chain audit trail</div>
                <div className="text-xs text-muted-foreground">
                  Every claim visible and verifiable
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

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

      <section className="mb-16">
        <div className="border border-border/50 p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Set Up Your First Allowance
          </h2>
          <p className="text-muted-foreground mb-6">
            Connect wallet. Enter recipient. Set amount. Done.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/human"
              className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
            >
              <UserCircle className="h-4 w-4" />
              Subscriptions (Kids)
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/agent"
              className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
            >
              <Bot className="h-4 w-4" />
              Pay-as-you-go (Agents)
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://tributary.so"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Powered by Tributary
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a
              href="https://github.com/yourorg/allowly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
