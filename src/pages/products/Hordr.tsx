import { useState } from "react";
import {
  Zap,
  Users,
  GitBranch,
  GitMerge,
  Database,
  TimerOff,
  GitCommitHorizontal,
  RotateCw,
  ChevronRight,
  X,
  ArrowRight,
  Terminal,
  Github,
} from "lucide-react";

const problems = [
  {
    title: "Isolation",
    description:
      "Two agents touching the same files step on each other. Git worktrees fix it, but setting them up, branching, merging, and cleaning up is tedious.",
  },
  {
    title: "Dispatch",
    description:
      "Which task should each agent work next? Dependency chains (--blocked-by) must be respected. Status must propagate up the tree. A crashed agent needs re-dispatch.",
  },
  {
    title: "Merging",
    description:
      "Parallel branches conflict. Someone has to resolve them, verify, and land the code.",
  },
  {
    title: "Context",
    description:
      "Each agent needs the right prompt — not just the task, but the role, the conventions, and the definition of done.",
  },
];

const modes = [
  {
    icon: Zap,
    name: "Single-bean",
    tagline: "hordr run <bean>",
    description:
      "One agent, one task, fire-and-forget. The simplest possible thing: worktree + pane + agent. No team coordination.",
    example: "hordr run hordr-XXXX",
    features: ["Fire-and-forget", "Isolated worktree", "One task, one commit"],
  },
  {
    icon: Users,
    name: "Fleet",
    tagline: "hordr fleet create <milestone>",
    description:
      "A team of agents working a milestone in parallel. Each epic gets its own worktree (lane); tasks within an epic are serialized. Driven by hordr fleet check — by hand or via cron.",
    example: "hordr fleet create hordr-MS",
    features: [
      "Parallel epic lanes",
      "Serialized task chains",
      "Stateless check loop",
    ],
  },
];

const principles = [
  {
    icon: Database,
    title: "Beans is the control surface",
    description:
      "Every status, dependency, and assignment lives in .beans/. Hordr reads it; it never mirrors it — eliminating an entire class of state-sync bugs.",
  },
  {
    icon: GitBranch,
    title: "Isolation via worktrees",
    description:
      "Every agent works in its own git worktree. No file conflicts, no stash juggling, no wait-your-turn. Parallel epics are truly parallel.",
  },
  {
    icon: GitMerge,
    title: "Lazy creation = dependency resolution",
    description:
      "Worktrees are created only when an epic unblocks, branched from an integration branch that already contains the blocker's merged code. No explicit merge-forward.",
  },
  {
    icon: TimerOff,
    title: "No timeouts",
    description:
      "Agent wall-clock is unpredictable. A stuck agent might be thinking, waiting on you, or genuinely hung. Hordr never kills an agent for taking too long — the human decides.",
  },
  {
    icon: GitCommitHorizontal,
    title: "One task = one commit",
    description:
      "Each task produces exactly one commit (code + bean status flip together). Rollup status changes land as a separate chore(beans) commit. Clean provenance, reviewable history.",
  },
  {
    icon: RotateCw,
    title: "Stateless check loop",
    description:
      "hordr fleet check is idempotent and PID-lock guarded. Run it once or a thousand times — the result is the same. No long-running daemon.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Plan the work",
    description: "Decompose into beans: milestone → epics → tasks. A human planning session produces the tree.",
  },
  {
    step: 2,
    title: "Start the fleet",
    description: "hordr fleet create spins up the integration branch and one lane per unblocked epic.",
  },
  {
    step: 3,
    title: "Check advances the fleet",
    description: "hordr fleet check dispatches, self-heals crashed panes, merges completed epics, and creates newly-unblocked lanes.",
  },
  {
    step: 4,
    title: "Finish",
    description: "hordr fleet finish 3-tier merges the integration branch into primary and tears down every worktree.",
  },
];

const mergeTiers = [
  {
    tier: "Tier 1",
    command: "git merge --ff-only",
    description: "Clean fast-forward. No merge commit.",
  },
  {
    tier: "Tier 2",
    command: "git merge --no-ff",
    description: "Merge commit.",
  },
  {
    tier: "Tier 3",
    command: "conflict in-progress",
    description: "Spawn a merger agent in the target worktree to resolve, commit, and stop.",
  },
];

const comparison = [
  {
    feature: "Isolation",
    hordr: "Per-epic worktrees",
    manual: "Manual branching & stash juggling",
  },
  {
    feature: "Dispatch",
    hordr: "Automatic, respects --blocked-by",
    manual: "You pick the next task",
  },
  {
    feature: "Merging",
    hordr: "3-tier, merger agent on conflict",
    manual: "Resolve conflicts yourself",
  },
  {
    feature: "Crashed agent",
    hordr: "Self-heals on next check",
    manual: "You notice, you restart",
  },
  {
    feature: "State",
    hordr: "Beans (committed) + SQLite (process)",
    manual: "Your head or a spreadsheet",
  },
  {
    feature: "Long-running process",
    hordr: "None — cron a one-pass check",
    manual: "A daemon you babysit",
  },
];

const faqs = [
  {
    q: "Is hordr a planner?",
    a: "No. Decomposition (milestone → epics → tasks) happens externally in a human planning session. Hordr executes the tree; it doesn't design it.",
  },
  {
    q: "Does it run a daemon?",
    a: "No. hordr fleet check is a stateless one-pass command. Cron it for autonomy; run it by hand when watching. The pure dispatch functions are the value — the process wrapping them was ceremony.",
  },
  {
    q: "How does it know what an agent did?",
    a: "It doesn't parse agent output. It reads bean status — the universal control surface. The agent's pane is the agent's business.",
  },
  {
    q: "What happens when branches conflict?",
    a: "A 3-tier merge escalation: fast-forward, then a merge commit, then a merger agent spawned in the target worktree where the conflicted merge is left in-progress. Conflicts are escalated, never silently auto-resolved. The next check detects completion and finishes the teardown.",
  },
  {
    q: "What if an agent crashes?",
    a: "The next hordr fleet check inspects the lane: if the bean is completed it proceeds; if the pane is gone and the bean isn't completed, it resets the task to todo for re-dispatch. No wall-clock timeouts — the human decides what's truly stuck.",
  },
  {
    q: "Which coding agents does it support?",
    a: "Any harness on your PATH: opencode, Claude Code, Codex, and more. Hordr is harness-agnostic — roles map to a persona + binary at dispatch time. Different roles can even use different harnesses.",
  },
  {
    q: "Where does state live?",
    a: "A strict boundary. Work-state (bodies, types, statuses, assignments, tree structure) lives in beans, in-repo and committed. Process state (which panes and worktrees exist) lives in machine-scoped SQLite, never committed. Crash recovery = re-derive from beans.",
  },
  {
    q: "One task really equals one commit?",
    a: "Exactly. Code and the bean status flip land together in a single commit. When a task completion triggers ancestry rollup (parent feature or epic flipping to completed), those .beans/ changes land as a separate chore(beans): rollup status changes commit. Clean, reviewable history.",
  },
];

export default function HordrPage() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <section className="mb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="border-border/50 bg-muted/20 text-muted-foreground px-3 py-1.5 text-sm border">
              Coding Agent Fleet Orchestration
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug tracking-tighter">
              Coding agent fleets,{" "}
              <span className="bg-linear-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent">
                fully orchestrated
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              One agent in isolation is easy. A team of five working the same
              codebase is a full-time job. Hordr orchestrates the fleet —
              worktrees, dispatch, merging, context — so you stop babysitting.
            </p>
            <div className="flex gap-3">
              <a
                href="https://hordr.chainsquad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground shadow-2xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-hidden transition-all h-11 px-6"
              >
                Visit hordr.chainsquad.com
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                onClick={() => {
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border/50 p-6 col-span-2">
              <div className="text-sm text-muted-foreground mb-2">
                Operating modes
              </div>
              <div className="text-4xl font-bold">2</div>
              <div className="text-xs text-muted-foreground mt-1">
                Single-bean · Fleet
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs text-muted-foreground mt-1">
                Daemons to run
              </div>
            </div>
            <div className="border border-border/50 p-6">
              <div className="text-3xl font-bold font-mono">1:1:1</div>
              <div className="text-xs text-muted-foreground mt-1">
                Milestone → fleet → branch
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
          Doing it by hand for one agent is fine. For a fleet of five, it's a
          full-time job.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <h2 className="text-3xl font-bold mb-4">Two Modes, One Tool</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Fire-and-forget a single task, or run a whole team on a milestone.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {modes.map((mode) => (
            <div
              key={mode.name}
              className="border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <mode.icon className="h-10 w-10 text-primary" />
                  <span className="text-xs font-mono text-muted-foreground bg-muted/20 px-2 py-1 rounded">
                    {mode.tagline}
                  </span>
                </div>
                <h3 className="font-bold text-2xl">{mode.name}</h3>
                <p className="text-muted-foreground">{mode.description}</p>
                <div className="pt-4 border-t border-border/30 space-y-3">
                  <div className="font-mono text-sm text-primary">
                    {mode.example}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mode.features.map((feature) => (
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
        <h2 className="text-3xl font-bold mb-4">Core Design Principles</h2>
        <p className="text-lg text-muted-foreground mb-8">
          A dumb dispatcher that owns only what beans structurally cannot
          express.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="border border-border/50 p-6"
            >
              <principle.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="font-bold mb-2">{principle.title}</h3>
              <p className="text-sm text-muted-foreground">
                {principle.description}
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
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
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
              <GitMerge className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold">The Merge Model</h2>
              <p className="text-sm text-muted-foreground">
                3-tier escalation for both epic → integration and integration →
                primary
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            On any successful tier, the source worktree is removed and the
            source branch is deleted — only on success, never on conflict.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {mergeTiers.map((tier) => (
              <div
                key={tier.tier}
                className="border border-border/30 p-4 space-y-2"
              >
                <div className="text-xs font-mono text-muted-foreground">
                  {tier.tier}
                </div>
                <div className="font-mono text-sm text-primary">
                  {tier.command}
                </div>
                <div className="text-sm text-muted-foreground">
                  {tier.description}
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
        <h2 className="text-3xl font-bold mb-4">Hordr vs Babysitting</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Orchestration vs. manual coordination.
        </p>
        <div className="border border-border/50 overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30">
              What
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-r border-border/30 text-primary">
              Hordr
            </div>
            <div className="p-4 bg-muted/20 font-medium text-sm border-b border-border/30">
              By hand
            </div>
            {comparison.map((row) => (
              <div key={row.feature} className="contents">
                <div className="p-4 text-sm border-b border-r border-border/30 bg-muted/5">
                  {row.feature}
                </div>
                <div className="p-4 text-sm border-b border-r border-border/30 font-medium">
                  {row.hordr}
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
          <h2 className="text-2xl font-bold mb-4">Stop babysitting your agents</h2>
          <p className="text-muted-foreground mb-6">
            Plan the work. Hordr runs the fleet.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://hordr.chainsquad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground shadow-2xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
            >
              <Terminal className="h-4 w-4" />
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/herdr/hordr"
              target="_blank"
              rel="noopener noreferrer"
              className="border bg-background hover:bg-muted/80 text-foreground inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm h-11 px-6"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://hordr.chainsquad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a
              href="https://github.com/herdr/hordr"
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
