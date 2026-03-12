import { useState } from "react";
import {
  Github,
  Heart,
  Zap,
  Shield,
  Clock,
  DollarSign,
  Link2,
  CheckCircle2,
  ChevronRight,
  X,
  ArrowRight,
  Globe,
  Users,
  TrendingUp,
  Wallet,
} from "lucide-react";

const problems = [
  {
    title: "Sustainable funding is a myth",
    description:
      "Your open source project has 10K stars but $0 in monthly recurring revenue. One-time donations spike and vanish. No predictability. No stability. Just hope.",
  },
  {
    title: "Traditional platforms extract rent",
    description:
      "Patreon takes 5-12%. GitHub Sponsors requires manual renewals. Supporters forget, revenue drops. You're chasing donations instead of building.",
  },
  {
    title: "Web3 solutions are fragmented",
    description:
      "Ethereum gas fees eat small donations. Existing Web3 platforms are custodial (your funds, their risk) or require manual approvals every month. Friction kills generosity.",
  },
];

const howItWorks = [
  {
    step: 1,
    icon: Wallet,
    title: "Connect Wallet",
    description:
      "Connect your Solana wallet (Phantom, Backpack, etc.). Authorize Tributary as delegate for USDC. One-time setup.",
    detail: "Non-custodial delegation",
  },
  {
    step: 2,
    icon: Github,
    title: "Select Repository",
    description:
      "Choose the GitHub project you want to support. Any public repo works.",
    detail: "Any public GitHub repo",
  },
  {
    step: 3,
    icon: Link2,
    title: "Get Your Badge",
    description:
      "Add a contribute.so badge to your README or profile. Supporters click, subscribe, and donations flow automatically every month.",
    detail: "Set once, receive forever",
  },
  {
    step: 4,
    icon: TrendingUp,
    title: "Transparent Donations",
    description:
      "Every donation recorded on-chain. Verifiable, auditable, immutable. Supporters see their impact. You see your revenue.",
    detail: "Full blockchain transparency",
  },
];

const features = [
  {
    icon: Heart,
    title: "Recurring USDC Donations",
    description:
      "Monthly automated donations. No manual transfers. No renewal emails. Supporters set it once, you get paid forever.",
  },
  {
    icon: Shield,
    title: "Non-Custodial Security",
    description:
      "Funds stay in supporters' wallets until payment moment. No platform risk. No frozen accounts. Your money, your control.",
  },
  {
    icon: Zap,
    title: "Solana Speed",
    description:
      "Sub-cent transaction fees. 400ms settlement. 65,000 TPS. Small donations finally make economic sense.",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description:
      "GitHub, Twitter, Discord today. LinkedIn, YouTube, Twitch + 5 more coming. One badge, everywhere your supporters are.",
  },
  {
    icon: DollarSign,
    title: "1% Protocol Fee",
    description:
      "Not 5-12% like Patreon. Not $5-50 gas fees like Ethereum. 1% protocol fee. That's it. Keep what you earn.",
  },
  {
    icon: Users,
    title: "Developer-First",
    description:
      "Built by developers, for developers. TypeScript SDK, React components, comprehensive docs. Self-service setup in minutes.",
  },
];

const comparison = [
  {
    feature: "Platform fee",
    contribute: "1%",
    patreon: "5-12%",
    github: "0% + Stripe",
  },
  {
    feature: "Recurring automation",
    contribute: "✅ Automatic",
    patreon: "✅ Automatic",
    github: "❌ Manual",
  },
  { feature: "Non-custodial", contribute: "✅", patreon: "❌", github: "❌" },
  {
    feature: "Transaction cost",
    contribute: "<$0.001",
    patreon: "2.9% + $0.30",
    github: "2.9% + $0.30",
  },
  {
    feature: "Blockchain transparency",
    contribute: "✅ On-chain",
    patreon: "❌",
    github: "❌",
  },
  {
    feature: "Multi-platform",
    contribute: "✅ (12 planned)",
    patreon: "❌",
    github: "GitHub only",
  },
  { feature: "Developer SDK", contribute: "✅", patreon: "❌", github: "❌" },
  { feature: "Crypto-native", contribute: "✅", patreon: "❌", github: "❌" },
];

const whoItsFor = [
  {
    title: "Open Source Maintainers",
    description: "You maintain popular repos. You deserve sustainable income.",
    items: [
      "Projects with active communities",
      "Maintainers tired of burnout",
      "Teams seeking predictable revenue",
      "Developers wanting to go full-time OSS",
    ],
  },
  {
    title: "Multi-Platform Creators",
    description:
      "You build across GitHub, Twitter, Discord. Unify your funding.",
    items: [
      "Developers with Twitter followings",
      "Community builders on Discord",
      "Content creators with codebases",
      "Teachers sharing open curriculum",
    ],
  },
  {
    title: "Supporters & Sponsors",
    description: "You believe in open source. Automate your giving.",
    items: [
      "Companies funding dependencies",
      "Individuals supporting projects",
      "DAOs funding infrastructure",
      "Teams with giving budgets",
    ],
  },
];

const faqs = [
  {
    q: "How is this different from GitHub Sponsors?",
    a: "GitHub Sponsors requires manual renewals. Supporters forget. Revenue drops. contribute.so uses automated recurring payments via Solana delegation. Set once, donate forever. Plus: lower fees (1% vs Stripe), on-chain transparency, and multi-platform support.",
  },
  {
    q: "Do supporters need to understand crypto?",
    a: "They need a Solana wallet and USDC. That's the trade-off for non-custodial, automated donations. If your supporters are crypto-native or you're in the Web3 space, this is ideal. For mainstream audiences, GitHub Sponsors may be better.",
  },
  {
    q: "What's the minimum donation amount?",
    a: "Technically, 0.000001 USDC. Practically, $1/month minimum makes sense given the value. Solana's sub-cent fees mean even $1 donations are economical—unlike Ethereum where $5 gas makes micro-donations impossible.",
  },
  {
    q: "How does the Tributary protocol work?",
    a: "Supporters authorize Tributary to withdraw from their USDC token account up to a limit. Payments execute automatically each month within that limit. Funds never leave their wallet until payment moment. Revoke anytime. Non-custodial by design.",
  },
  {
    q: "What happens if a supporter runs out of USDC?",
    a: "Payment fails gracefully. No penalty. The subscription remains active and retries next month. Supporter gets a notification. This is the same as a failed credit card charge on traditional platforms.",
  },
  {
    q: "Can I use this for private repositories?",
    a: "Currently public repos only. The badge system relies on public READMEs. Private repo support may come later based on demand.",
  },
  {
    q: "What platforms are supported?",
    a: "GitHub, Twitter, Discord today. LinkedIn, YouTube, Twitch, Reddit, Farcaster, Lens, Mastodon, Threads, and Telegram coming soon. One contribution link works everywhere.",
  },
  {
    q: "Is the code open source?",
    a: "The Tributary protocol is fully open source (audited by Ottersec and Neodyme). The contribute.so application layer is partially open—core SDK and components are public, while some business logic remains proprietary.",
  },
];

export default function ContributePage() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <section className="mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="border-border/50 bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
              Powered by Tributary Protocol
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tighter">
              Recurring donations,{" "}
              <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
                finally automated
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Sustainable funding for open source. Monthly USDC donations on
              Solana. Non-custodial, transparent, and automated. Add a badge,
              receive recurring revenue forever.
            </p>
            <div className="flex gap-3">
              <a
                href="https://contribute.so"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all h-11 px-6"
              >
                Start Receiving
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
                Protocol Fee
              </div>
              <div className="text-4xl font-bold">1%</div>
              <div className="text-xs text-muted-foreground mt-1">
                vs 5-12% on traditional platforms
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold">&lt;$0.001</div>
              <div className="text-xs text-muted-foreground mt-1">
                Transaction cost
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold">400ms</div>
              <div className="text-xs text-muted-foreground mt-1">
                Settlement time
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
          Open source powers the world. Maintainers power open source. Funding?
          Still broken.
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

      <section id="how-it-works" className="mb-24">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Four steps to sustainable open source funding.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step) => (
            <div
              key={step.step}
              className="border border-border/50 p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
              <div className="pt-4 border-t border-border/30">
                <div className="text-xs font-mono text-muted-foreground">
                  {step.detail}
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
        <h2 className="text-3xl font-bold mb-4">Why contribute.so</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Web2 simplicity, Web3 sovereignty. The best of both worlds.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-border/50 hover:border-primary/50 transition-all p-6"
            >
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
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

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Who It's For</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Anyone building or supporting open source.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {whoItsFor.map((group) => (
            <div key={group.title} className="border border-border/50 p-6">
              <h3 className="font-bold text-lg mb-2">{group.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {group.description}
              </p>
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
        <h2 className="text-3xl font-bold mb-4">The Comparison</h2>
        <p className="text-lg text-muted-foreground mb-8">
          See how we stack up against the alternatives.
        </p>
        <div className="border border-border/50 overflow-hidden">
          <div className="grid grid-cols-4 gap-0">
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30">
              Feature
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30 text-primary">
              contribute.so
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30">
              Patreon
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-border/30">
              GitHub Sponsors
            </div>
            {comparison.map((row, idx) => (
              <div key={row.feature} className="contents">
                <div className="p-4 text-sm border-b border-r border-border/30 bg-muted/5">
                  {row.feature}
                </div>
                <div className="p-4 text-sm border-b border-r border-border/30 font-medium">
                  {row.contribute}
                </div>
                <div className="p-4 text-sm border-b border-r border-border/30 text-muted-foreground">
                  {row.patreon}
                </div>
                <div className="p-4 text-sm border-b border-border/30 text-muted-foreground">
                  {row.github}
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
                Your supporters' funds, their control
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            Traditional platforms hold funds. They can freeze accounts, delay
            payouts, or disappear. contribute.so uses token delegation—funds
            stay in supporters' wallets until the moment of payment. No
            intermediaries. No trust required. Full sovereignty.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">Funds in their wallet</div>
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
                  Every donation verifiable
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
          <h2 className="text-2xl font-bold mb-4">Start Receiving Donations</h2>
          <p className="text-muted-foreground mb-6">
            Add a badge. Get recurring USDC donations. Build sustainable open
            source.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://contribute.so"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
            >
              Start Receiving
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://docs.tributary.so"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center rounded-none font-medium text-sm h-11 px-6"
            >
              Tributary Docs
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="/products/tributary"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Tributary Protocol
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
              href="mailto:team@chainsquad.com"
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
