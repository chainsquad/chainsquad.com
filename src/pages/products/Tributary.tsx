import { useState } from "react";
import {
  Droplets,
  Shield,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  X,
  ArrowRight,
  Link,
  Repeat,
  Milestone,
  Gauge,
  Users,
  Bot,
  Building,
  Heart,
} from "lucide-react";

const problems = [
  {
    title: "Recurring payments are broken",
    description:
      "Traditional payment processors hold your funds for days, charge hidden fees, and require complex merchant accounts. Web3 has no native subscription infrastructure.",
  },
  {
    title: "Payment infrastructure is heavy",
    description:
      "Building a billing system means webhooks, databases, status tracking, fraud detection, chargebacks, and constant maintenance. It's weeks of work for a simple subscription.",
  },
  {
    title: "Custodial risk everywhere",
    description:
      "Every payment processor holds your funds. Every platform is a single point of failure. Your money isn't really yours until it hits your bank—days later.",
  },
];

const whoItsFor = [
  {
    icon: Users,
    title: "Creators & Freelancers",
    items: [
      "Newsletter writers with paid subscriptions",
      "Consultants with recurring retainers",
      "Content creators with membership tiers",
      "Coaches with ongoing client programs",
    ],
  },
  {
    icon: Building,
    title: "SaaS Companies",
    items: [
      "Startups launching MVPs without payment engineering",
      "Tools testing market fit before custom billing",
      "Products wanting Web3 payment options",
      "APIs with subscription access",
    ],
  },
  {
    icon: Bot,
    title: "AI & Agent Services",
    items: [
      "LLM providers with usage-based billing",
      "AI agents monetizing through other agents",
      "API services with variable consumption",
      "Compute and infrastructure costs",
    ],
  },
  {
    icon: Heart,
    title: "Organizations",
    items: [
      "Nonprofits accepting recurring donations",
      "Member associations with dues",
      "DAOs with treasury inflows",
      "Collectives pooling resources",
    ],
  },
];

const products = [
  {
    id: "protocol",
    icon: Droplets,
    name: "Tributary Protocol",
    tagline: "The payment rails",
    description:
      "Non-custodial recurring payments on Solana. Three payment types—subscriptions, milestones, pay-as-you-go—all automated via token delegation.",
    features: [
      "1% protocol fee",
      "400ms settlement",
      "Non-custodial by design",
      "Audited smart contracts",
    ],
    link: "https://docs.tributary.so",
    linkText: "Documentation",
  },
  {
    id: "payments",
    icon: CreditCard,
    name: "Payments SDK",
    tagline: "Stripe-compatible checkout",
    description:
      "Zero API keys. No backend required. Generate checkout links programmatically with full TypeScript support and real-time status tracking.",
    features: [
      "Zero API keys",
      "Pure frontend",
      "Stripe-compatible API",
      "Real-time status",
    ],
    link: "/products/payments",
    linkText: "Learn More",
  },
  {
    id: "checkout",
    icon: Link,
    name: "Checkout",
    tagline: "Hosted payment pages",
    description:
      "Generate a link, share it anywhere, collect recurring payments. No code required. Perfect for creators, newsletters, and anyone who just wants to get paid.",
    features: [
      "No code required",
      "Share anywhere",
      "Instant setup",
      "Customizable",
    ],
    link: "https://checkout.tributary.so",
    linkText: "Try It",
  },
  {
    id: "lando",
    icon: Bot,
    name: "Lando",
    tagline: "Agent commerce",
    description:
      "Stripe for AI agents. Service agents generate subscription URLs, customer agents pay automatically. The future of machine-to-machine payments.",
    features: [
      "Agent-to-agent payments",
      "URL-based setup",
      "Tributary-powered",
      "Zero infrastructure",
    ],
    link: "/products/lando",
    linkText: "Learn More",
  },
];

const paymentTypes = [
  {
    icon: Repeat,
    name: "Subscriptions",
    description: "Fixed recurring payments—daily, weekly, monthly, yearly.",
    example: "$29/month for SaaS access",
  },
  {
    icon: Milestone,
    name: "Milestones",
    description: "Project-based payments with up to 4 phases.",
    example: "$500 on signing, $500 on delivery",
  },
  {
    icon: Gauge,
    name: "Pay-as-you-go",
    description: "Usage-based billing with period limits.",
    example: "$0.002 per API call, $100/month max",
  },
];

const comparison = [
  { feature: "Setup time", tributary: "Seconds", traditional: "Days (KYC)" },
  { feature: "Backend required", tributary: "No", traditional: "Yes" },
  { feature: "Fees", tributary: "1%", traditional: "2.9% + 30¢" },
  { feature: "Settlement", tributary: "Instant", traditional: "2-7 days" },
  { feature: "Chargebacks", tributary: "None", traditional: "Risk" },
  { feature: "Custodial risk", tributary: "None", traditional: "Yes" },
];

const whatYouDontNeed = [
  "Merchant account setup",
  "KYC/AML verification",
  "Payment processor integration",
  "Credit card handling",
  "Bank account linking",
  "PCI compliance",
  "Chargeback management",
  "Fraud detection systems",
  "Recurring billing infrastructure",
  "Database for subscriptions",
  "Webhook handlers",
];

const faqs = [
  {
    q: "How does token delegation work?",
    a: "You approve a spending limit to Tributary's smart contracts. Payments execute automatically within that limit. Your funds stay in your wallet until payment—nothing is locked or held by the protocol. Revoke anytime.",
  },
  {
    q: "Do I need to be technical to use this?",
    a: "No. Checkout lets anyone generate payment links with no code. For developers, our Payments SDK provides Stripe-compatible APIs with zero backend requirements.",
  },
  {
    q: "What if my customer doesn't have crypto?",
    a: "They'll need a Solana wallet (Phantom, Backpack, etc.) and USDC. This is a Web3-native solution—for traditional fiat payments, stick with Stripe.",
  },
  {
    q: "How is this different from Helio or other Solana payment tools?",
    a: "Tributary is non-custodial (your funds are never held), supports three payment types (not just subscriptions), and offers a full SDK for developers. It's infrastructure, not just a payment link generator.",
  },
  {
    q: "Is it secure?",
    a: "Yes. Audited by Ottersec and Neodyme. >95% test coverage. Non-custodial by design means no single point of failure. All transactions are on-chain and verifiable.",
  },
];

export default function TributaryPage() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <section className="mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="border-border/50 bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
              Non-Custodial Payment Infrastructure
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tighter">
              Recurring payments,{" "}
              <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
                finally fixed
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Accept subscriptions, milestones, and usage-based payments on
              Solana. No backend, no custody, no hassle. Just automated payments
              that work.
            </p>
            <div className="flex gap-3">
              <a
                href="https://checkout.tributary.so"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all h-11 px-6"
              >
                Create Checkout Link
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
              >
                Explore Products
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border/50 p-6 col-span-2">
              <div className="text-sm text-muted-foreground mb-2">
                Protocol Fee
              </div>
              <div className="text-4xl font-bold">1%</div>
              <div className="text-xs text-muted-foreground mt-1">
                vs 2.9% + 30¢ traditional
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold">400ms</div>
              <div className="text-xs text-muted-foreground mt-1">
                Settlement time
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs text-muted-foreground mt-1">
                Custodial risk
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
          Payment infrastructure hasn't evolved in decades.
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
        <h2 className="text-3xl font-bold mb-4">Three Payment Types</h2>
        <p className="text-lg text-muted-foreground mb-8">
          One protocol, three ways to get paid.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {paymentTypes.map((type) => (
            <div
              key={type.name}
              className="border border-border/50 p-6 space-y-4"
            >
              <type.icon className="h-8 w-8 text-primary" />
              <h3 className="font-bold text-xl">{type.name}</h3>
              <p className="text-sm text-muted-foreground">
                {type.description}
              </p>
              <div className="pt-4 border-t border-border/30">
                <div className="text-xs font-mono text-muted-foreground">
                  {type.example}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section id="products" className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Four Products, One Stack</h2>
        <p className="text-lg text-muted-foreground mb-8">
          From no-code to full SDK—pick your level of integration.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <product.icon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">{product.name}</h3>
                      <div className="text-xs text-muted-foreground">
                        {product.tagline}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-muted/20 px-2 py-1 rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-border/30">
                  <a
                    href={product.link}
                    target={
                      product.link.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      product.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    {product.linkText}
                    <ArrowRight className="h-3 w-3" />
                  </a>
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
        <h2 className="text-3xl font-bold mb-4">Who It's For</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Anyone who wants recurring payments without the infrastructure
          headache.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoItsFor.map((group) => (
            <div key={group.title} className="border border-border/50 p-6">
              <group.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-bold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
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
        <div className="border border-border/50 p-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            What You Don't Need
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {whatYouDontNeed.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <X className="h-4 w-4 text-destructive" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Tributary vs Traditional</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Built for Web3. Designed for simplicity.
        </p>
        <div className="border border-border/50 overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30">
              Feature
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30 text-primary">
              Tributary
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-border/30">
              Stripe/PayPal
            </div>
            {comparison.map((row, idx) => (
              <div key={idx} className="contents">
                <div className="p-4 text-sm border-b border-r border-border/30 bg-muted/5">
                  {row.feature}
                </div>
                <div className="p-4 text-sm border-b border-r border-border/30 font-medium">
                  {row.tributary}
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
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Why Non-Custodial Matters</h2>
              <p className="text-sm text-muted-foreground">
                Your money, your control
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            Traditional payment processors hold your funds. They can freeze
            accounts, delay payouts, or disappear with your money. Tributary
            uses token delegation—funds stay in your wallet until the moment of
            payment. No intermediaries. No trust required.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">Funds in your wallet</div>
                <div className="text-xs text-muted-foreground">
                  Not locked, not held
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">Revoke anytime</div>
                <div className="text-xs text-muted-foreground">
                  Full control always
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">On-chain transparency</div>
                <div className="text-xs text-muted-foreground">
                  Every payment verifiable
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
          <h2 className="text-2xl font-bold mb-4">Start Accepting Payments</h2>
          <p className="text-muted-foreground mb-6">
            No account needed. No approval process. Just start.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://checkout.tributary.so"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
            >
              Create Checkout Link
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://docs.tributary.so"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center rounded-none font-medium text-sm h-11 px-6"
            >
              Read the Docs
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="/products/payments"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Payments SDK
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a
              href="/products/lando"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Lando
            </a>
            <span className="text-muted-foreground/30">•</span>
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
