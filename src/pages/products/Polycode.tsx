"use client";

import { useState } from "react";
import {
  Bot,
  Zap,
  GitBranch,
  Shield,
  CheckCircle2,
  ChevronRight,
  X,
  ArrowRight,
  Workflow,
  Bug,
  Sparkles,
  Lock,
  Github,
  Clock,
  Users,
  Code2,
} from "lucide-react";

const problems = [
  {
    title: "Software workflows are manual chaos",
    description:
      "Bug fixes, features, and security patches require coordination across multiple steps. Developers waste hours on orchestration instead of actual coding.",
  },
  {
    title: "Agent coordination is hard",
    description:
      "Multi-agent systems need clear handoffs, context passing, and state management. Building this from scratch means weeks of infrastructure work.",
  },
  {
    title: "GitHub automation is painful",
    description:
      "Webhooks, token management, multi-repo access, label-based triggers—integrating AI agents with GitHub requires deep platform knowledge.",
  },
];

const workflows = [
  {
    icon: Bug,
    name: "Bug Fix Crew",
    description:
      "Triage → Investigate → Fix → Test → Verify → PR. Complete bug resolution from report to merge.",
    steps: [
      "Triage & classify",
      "Root cause analysis",
      "Implement fix",
      "Regression tests",
      "Verify fix",
      "Create PR",
    ],
    duration: "~30 min",
  },
  {
    icon: Sparkles,
    name: "Feature Development",
    description:
      "Plan → Implement → Test → Review. Break down features into user stories and ship incrementally.",
    steps: [
      "Decompose into stories",
      "Implement each story",
      "Integration tests",
      "Code review",
    ],
    duration: "~2-4 hours",
  },
  {
    icon: Shield,
    name: "Security Audit",
    description:
      "Scan → Prioritize → Fix → Re-verify. Find vulnerabilities and patch them with confidence.",
    steps: [
      "Security scan",
      "Prioritize findings",
      "Implement fixes",
      "Re-run audit",
    ],
    duration: "~1-2 hours",
  },
];

const agents = [
  {
    icon: Bot,
    name: "Triager",
    role: "Bug Report Triager",
    description: "Analyzes bug reports, reproduces issues, classifies severity",
  },
  {
    icon: Code2,
    name: "Investigator",
    role: "Root Cause Investigator",
    description: "Traces bugs to root cause and proposes fix approach",
  },
  {
    icon: GitBranch,
    name: "Developer",
    role: "Feature Developer",
    description: "Implements features with high code quality and tests",
  },
  {
    icon: CheckCircle2,
    name: "Tester",
    role: "Integration Tester",
    description: "Ensures features work together with comprehensive tests",
  },
  {
    icon: Shield,
    name: "Scanner",
    role: "Security Scanner",
    description: "Performs comprehensive security analysis",
  },
  {
    icon: Lock,
    name: "Reviewer",
    role: "Code Reviewer",
    description: "Reviews PRs for quality and best practices",
  },
];

const features = [
  {
    icon: Github,
    title: "GitHub App Integration",
    description:
      "Install once, automate everywhere. Webhook-driven workflows triggered by labels.",
  },
  {
    icon: Workflow,
    title: "CrewAI Framework",
    description:
      "Battle-tested multi-agent orchestration. Sequential task execution with context passing.",
  },
  {
    icon: GitBranch,
    title: "Multi-Repo Support",
    description:
      "Manage issues across repositories. Push to any repo where the app is installed.",
  },
  {
    icon: Zap,
    title: "Label-to-Flow Mapping",
    description:
      "Add a label, trigger a workflow. 'bug' label → bug fix crew. 'feature' label → feature dev crew.",
  },
];

const comparison = [
  { feature: "Setup time", polycode: "Minutes", manual: "Days/weeks" },
  {
    feature: "Agent coordination",
    polycode: "Automatic",
    manual: "Manual handoffs",
  },
  {
    feature: "GitHub integration",
    polycode: "Built-in",
    manual: "Build yourself",
  },
  { feature: "Multi-repo", polycode: "Native", manual: "Complex setup" },
  {
    feature: "State management",
    polycode: "Handled",
    manual: "Custom database",
  },
  {
    feature: "Webhook handling",
    polycode: "Included",
    manual: "Build API endpoints",
  },
];

const faqs = [
  {
    q: "How does Polycode differ from other AI coding assistants?",
    a: "Polycode orchestrates multiple specialized agents in workflows. Instead of one AI doing everything, you get a triager, investigator, developer, tester, and reviewer working together—each focused on their expertise. This produces higher quality results than a single generalist agent.",
  },
  {
    q: "What's the GitHub App integration for?",
    a: "The GitHub App enables webhook-driven automation. Install it on your repos, map labels to workflows (e.g., 'bug' → bug fix crew), and agents trigger automatically when you add labels to issues. The app handles authentication, token refresh, and multi-repo access.",
  },
  {
    q: "Can I use this without GitHub?",
    a: "Yes. The core CrewAI workflows work independently via CLI. Run 'python main.py bug-fix \"description\"' and agents execute locally. The GitHub App adds automation and webhook triggers for teams.",
  },
  {
    q: "How do agents coordinate?",
    a: "Each workflow is a Crew with sequential tasks. Task outputs become context for the next task. The triager's analysis feeds the investigator, whose findings guide the developer, and so on. CrewAI handles context passing and state management.",
  },
  {
    q: "What can the agents actually do?",
    a: "Agents can analyze codebases, implement fixes, write tests, create PRs, and push to repositories. With custom tools (git, file system, testing frameworks), they can perform any development task. The framework is extensible.",
  },
  {
    q: "Is my code private?",
    a: "Yes. Workflows run locally on your machine or your own infrastructure. When using the GitHub App, authentication uses installation tokens scoped to your repos. No code leaves your environment unless you configure external model providers.",
  },
];

export default function PolycodePage() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <section className="mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="border-border/50 bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
              Multi-Agent Development Automation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tighter">
              Software workflows,{" "}
              <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
                fully automated
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Specialized AI agents work together to fix bugs, ship features,
              and audit security. One label triggers the entire crew.
            </p>
            <div className="flex gap-3">
              <a
                href="#workflows"
                className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all h-11 px-6"
              >
                Explore Workflows
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/yourorg/polycode"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border/50 p-6 col-span-2">
              <div className="text-sm text-muted-foreground mb-2">
                Workflows Available
              </div>
              <div className="text-4xl font-bold">3</div>
              <div className="text-xs text-muted-foreground mt-1">
                Bug fix • Feature dev • Security audit
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold">6+</div>
              <div className="text-xs text-muted-foreground mt-1">
                Specialized agents
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold">∞</div>
              <div className="text-xs text-muted-foreground mt-1">
                Repos supported
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
          Development workflows require coordination. Coordination requires
          time.
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

      <section id="workflows" className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Three Workflows</h2>
        <p className="text-lg text-muted-foreground mb-8">
          From bug report to merged PR. One crew per workflow.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {workflows.map((workflow) => (
            <div
              key={workflow.name}
              className="border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <workflow.icon className="h-8 w-8 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground bg-muted/20 px-2 py-1 rounded">
                    {workflow.duration}
                  </span>
                </div>
                <h3 className="font-bold text-xl">{workflow.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {workflow.description}
                </p>
                <div className="pt-4 border-t border-border/30">
                  <div className="text-xs text-muted-foreground mb-2">
                    Pipeline:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {workflow.steps.map((step, idx) => (
                      <span
                        key={step}
                        className="text-xs font-mono bg-muted/10 px-2 py-1 rounded"
                      >
                        {idx + 1}. {step}
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
        <h2 className="text-3xl font-bold mb-4">Specialized Agents</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Each agent has a single responsibility. Together, they ship code.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="border border-border/50 p-4 text-center"
            >
              <agent.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-sm mb-1">{agent.name}</h3>
              <p className="text-xs text-muted-foreground">{agent.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="font-mono text-sm text-muted-foreground/30 select-none mb-16">
        //
      </div>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Built for GitHub</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Install the app. Map labels to workflows. Done.
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

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-4">Polycode vs Manual</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Automation vs orchestration.
        </p>
        <div className="border border-border/50 overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30">
              Feature
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30 text-primary">
              Polycode
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-border/30">
              Manual
            </div>
            {comparison.map((row) => (
              <div key={row.feature} className="contents">
                <div className="p-4 text-sm border-b border-r border-border/30 bg-muted/5">
                  {row.feature}
                </div>
                <div className="p-4 text-sm border-b border-r border-border/30 font-medium">
                  {row.polycode}
                </div>
                <div className="p-4 text-sm border-b border-border/30 text-muted-foreground">
                  {row.manual}
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
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-medium mb-2">Install GitHub App</h3>
              <p className="text-sm text-muted-foreground">
                One-click install on your repos
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-medium mb-2">Map Labels</h3>
              <p className="text-sm text-muted-foreground">
                "bug" → bug fix crew
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-medium mb-2">Add Label to Issue</h3>
              <p className="text-sm text-muted-foreground">
                Webhook triggers workflow
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground h-10 w-10 flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-medium mb-2">Agents Ship Code</h3>
              <p className="text-sm text-muted-foreground">
                PR lands in your repo
              </p>
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
          <h2 className="text-2xl font-bold mb-4">Start Automating</h2>
          <p className="text-muted-foreground mb-6">
            Install the GitHub App or run workflows locally via CLI.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/apps/polycode"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
            >
              <Github className="h-4 w-4" />
              Install GitHub App
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/yourorg/polycode"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center rounded-none font-medium text-sm h-11 px-6"
            >
              View Documentation
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="#workflows"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Workflows
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a
              href="#agents"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Agents
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a
              href="https://github.com/yourorg/polycode"
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
