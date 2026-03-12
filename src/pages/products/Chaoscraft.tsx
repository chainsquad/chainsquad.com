"use client";

import { useState } from "react";
import {
  Sparkles,
  Zap,
  Users,
  Star,
  Play,
  CheckCircle2,
  ChevronRight,
  X,
  ArrowRight,
  CreditCard,
  Terminal,
  Globe,
  Trophy,
  Heart,
  MessageSquare,
} from "lucide-react";

const problems = [
  {
    title: "Your ideas die in notes apps",
    description:
      "You have 47 ideas saved. Zero built. Coding takes weeks, costs thousands, and you don't know where to start. Those ideas deserve better.",
  },
  {
    title: "Watching code come to life is rare magic",
    description:
      "When was the last time you saw an idea become reality in real-time? That feeling of creation—gone. Buried under setup, configs, and boilerplate.",
  },
  {
    title: "Building alone is boring",
    description:
      "Solo development is a lonely journey. No one sees your progress. No one celebrates your wins. No shared experience. Just you and endless Stack Overflow tabs.",
  },
];

const howItWorks = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Submit Your Idea",
    description:
      "120 characters. Anything goes. Dancing robot? Sure. Sound effects button? Why not.",
    example: '"Add a dancing robot that tells jokes"',
  },
  {
    step: 2,
    icon: CreditCard,
    title: "Pay $1",
    description:
      "One dollar. No subscription. No hidden fees. Just pure, unfiltered chaos.",
    example: "$1 = One star in the galaxy",
  },
  {
    step: 3,
    icon: Play,
    title: "Watch AI Build Live",
    description:
      "Real-time terminal stream. See the code being written. Every commit, every test, every merge.",
    example: "Planner → Developer → Verifier → Merged",
  },
  {
    step: 4,
    icon: Star,
    title: "Your Star Goes Live",
    description:
      "Feature deployed. Star appears in the galaxy. Shareable card generated. You're now part of history.",
    example: "galaxy.repo.fun updates instantly",
  },
];

const whyYouWouldPay = [
  {
    icon: Globe,
    title: "Visibility",
    description:
      "Every feature = visible star forever. Like the Million Dollar Homepage, but a galaxy.",
  },
  {
    icon: Sparkles,
    title: "Recognition",
    description:
      "Shareable feature cards. Post to Twitter. Flex your contribution.",
  },
  {
    icon: Heart,
    title: "Permanence",
    description:
      "Git history remembers. Your feature lives forever. Immortalized in code.",
  },
  {
    icon: Terminal,
    title: "Entertainment",
    description:
      "Watch AI build YOUR idea in real-time. It's like a live coding stream, but you're the client.",
  },
  {
    icon: Zap,
    title: "Surprise",
    description:
      "Pay $2 for blind builds. Don't see the code until it's live. Mystery feature delivery.",
  },
  {
    icon: Trophy,
    title: "Competition",
    description:
      "Leaderboards, daily quests, badges. Most creative, weirdest, most lines built.",
  },
];

const stats = [
  { value: "$1", label: "Per feature", sublabel: "One star in the galaxy" },
  { value: "120", label: "Characters max", sublabel: "Keeps it simple" },
  { value: "4-6", label: "Hours to live", sublabel: "Not weeks, not months" },
  { value: "∞", label: "Permanence", sublabel: "Git history forever" },
];

const whatYouGet = [
  "Real-time build stream",
  "Shareable feature card",
  "Permanent git history",
  "Star in the visual galaxy",
  "Feature signature (add a message)",
  "Priority queue options",
  "Daily quest participation",
  "Community recognition",
];

const faqs = [
  {
    q: "Why only 120 characters?",
    a: "Atomic ideas build better. 'Add full auth system' is vague—AI guesses, might fail. 'Add login form' is clear, builds fast, becomes one star. Complex ideas split into multiple requests = more stars = cooler galaxy.",
  },
  {
    q: "What if the AI can't build my idea?",
    a: "Auto-refund. If AI rejects your request (too complex, impossible, unclear), you get your $1 back. Comment posted on Issue explaining why. You resubmit atomic ideas.",
  },
  {
    q: "Can I see the code being written?",
    a: "Yes! Real-time terminal stream. Watch Planner analyze, Developer code, Verifier check, Reviewer approve. Every commit, every test, every merge. Live.",
  },
  {
    q: "What happens after my feature is built?",
    a: "PR merges → GitHub Actions deploys → Your star appears in galaxy.repo.fun → You get shareable feature card → Feature lives forever in git history. Immortalized.",
  },
  {
    q: "Can I pay more to skip the queue?",
    a: "Yes. $5 = Priority (skip 10 items). $10 = Express (skip 50 items). More money = faster build. Simple economics.",
  },
  {
    q: "What's the 'galaxy'?",
    a: "A Three.js visualization where every merged feature = one star. Position from commit hash (deterministic). Color from file types. Size from lines changed. Brightness from recency. Everyone sees the same galaxy.",
  },
  {
    q: "Is this serious or just for fun?",
    a: "Both. It's a real AI agent pipeline (AntFarm + OpenClaw) building real features into a real codebase. But the chaos is the point. What emerges from 1,000 random ideas? We don't know. That's the experiment.",
  },
  {
    q: "What if someone builds something bad?",
    a: "Chaos is intentional. We're not curating. We're documenting emergence. Bad ideas, weird features, broken experiments—all part of the history. The galaxy shows everything.",
  },
];

export default function ChaosCraftPage() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <section className="mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="border-border/50 bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
              Crowd-Sourced AI-Powered Codebase
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tighter">
              Pay $1, plant a star,{" "}
              <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
                watch chaos
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              1,000 people. 1,000 ideas. One AI building it all. Your $1 submits
              a 120-character request, and you watch as AI agents turn your idea
              into code that becomes part of a living galaxy.
            </p>
            <div className="flex gap-3">
              <a
                href="https://repo.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all h-11 px-6"
              >
                Start Building
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://galaxy.repo.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
              >
                View Galaxy
                <Star className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-border/50 p-6">
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground/70 mt-1">
                  {stat.sublabel}
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
        <h2 className="text-3xl font-bold mb-4">The Problem</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ideas die. Not because they're bad—but because building is hard.
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
          From idea to deployed star in 4 steps.
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
                  {step.example}
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
        <h2 className="text-3xl font-bold mb-4">Why Pay $1?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          It's not just code. It's participation in an experiment.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyYouWouldPay.map((reason) => (
            <div
              key={reason.title}
              className="border border-border/50 hover:border-primary/50 transition-all p-6"
            >
              <reason.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
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
            What You Get for $1
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {whatYouGet.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
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
        <div className="border border-border/50 p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold">The Experiment</h2>
              <p className="text-sm text-muted-foreground">
                What happens when 1,000 people build together?
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            We don't know what emerges. A masterpiece? A disaster? The next
            Twitter? A chaotic symphony of features nobody asked for? That's the
            point. ChaosCraft is an experiment in collective creation. You plant
            a star. Others plant stars. Together, we build a galaxy. No
            curation. No filtering. Just pure, unfiltered emergence.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">No curation</div>
                <div className="text-xs text-muted-foreground">
                  Everything ships
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">Documented emergence</div>
                <div className="text-xs text-muted-foreground">
                  Git history tells the story
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              <div>
                <div className="text-sm font-medium">Visual legacy</div>
                <div className="text-xs text-muted-foreground">
                  The galaxy grows forever
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
          <h2 className="text-2xl font-bold mb-4">Plant Your Star</h2>
          <p className="text-muted-foreground mb-6">
            $1. 120 characters. Immortalized in the galaxy forever.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://repo.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
            >
              Start Building
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://galaxy.repo.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center rounded-none font-medium text-sm h-11 px-6"
            >
              View the Galaxy
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/chainsquad/chaoscraft"
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
