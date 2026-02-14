"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { addToWaitlist } from "@/lib/n8n";
import { Mail, Phone, MapPin, Send, Check, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await addToWaitlist({
        name,
        email,
        company,
        projectType,
        message,
        type: "contact",
      });
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="py-20">
          <h1 className="mb-4 text-3xl font-bold leading-snug tracking-tighter md:text-4xl">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to build the future? Let's discuss how ChainSquad can help
            bring your vision to reality.
          </p>
        </section>

        <div
          className="font-mono text-sm text-muted-foreground/30 select-none"
          aria-hidden="true"
        >
          //
        </div>

        {/* Contact Info */}
        <section className="py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-none border border-border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-none border border-border bg-muted/20">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-medium">Email</h3>
              <a
                href="mailto:info@chainsquad.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                info@chainsquad.com
              </a>
              <p className="text-sm text-muted-foreground">
                We'll respond within 24 hours
              </p>
            </div>

            <div className="space-y-4 rounded-none border border-border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-none border border-border bg-muted/20">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-medium">Phone</h3>
              <a
                href="tel:+499131691580"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                +49 9131/691 580
              </a>
              <p className="text-sm text-muted-foreground">
                Mon-Fri 9:00 - 18:00 CET
              </p>
            </div>

            <div className="space-y-4 rounded-none border border-border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-none border border-border bg-muted/20">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-medium">Location</h3>
              <div className="text-muted-foreground">
                Hirtenweg 14
                <br />
                91054 Buckenhof
                <br />
                Germany
              </div>
              <p className="text-sm text-muted-foreground">
                VAT ID: DE308896775
              </p>
            </div>
          </div>
        </section>

        <div
          className="font-mono text-sm text-muted-foreground/30 select-none"
          aria-hidden="true"
        >
          //
        </div>

        {/* Contact Form */}
        <section className="py-16">
          <div className="mb-8 max-w-2xl space-y-3">
            <h2 className="text-xl font-semibold">Send us a message</h2>
            <p className="text-muted-foreground">
              Tell us about your project and we'll get back to you with a
              proposal.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    disabled={loading}
                    className="bg-input/30 border-input placeholder:text-muted-foreground/50 h-11 w-full border px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    disabled={loading}
                    className="bg-input/30 border-input placeholder:text-muted-foreground/50 h-11 w-full border px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your company"
                  disabled={loading}
                  className="bg-input/30 border-input placeholder:text-muted-foreground/50 h-11 w-full border px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="project-type" className="text-sm font-medium">
                  Project Type
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  disabled={loading}
                  className="bg-input/30 border-input h-11 w-full border px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select project type</option>
                  <option value="blockchain">Blockchain Development</option>
                  <option value="smart-contracts">Smart Contracts</option>
                  <option value="full-stack">Full-Stack Web Development</option>
                  <option value="ai-llm">AI & LLM Integration</option>
                  <option value="security">Security Audit</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  placeholder="Tell us about your project..."
                  disabled={loading}
                  className="bg-input/30 border-input placeholder:text-muted-foreground/50 w-full border px-4 py-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !name || !email || !message}
                className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 h-11 px-6"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
              {error && <p className="text-sm text-destructive">{error}</p>}
            </form>
          ) : (
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3 rounded-none border border-border bg-muted/20 p-6">
                <div className="bg-primary text-primary-foreground h-16 w-16 flex items-center justify-center">
                  <Sparkles className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-lg font-medium">Message sent.</p>
                  <p className="text-muted-foreground">
                    We'll be in touch soon.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-2 font-medium">Alternative Contact</h3>
            <p className="text-sm text-muted-foreground">
              For immediate assistance, you can also reach us directly at{" "}
              <a
                href="mailto:info@chainsquad.com"
                className="text-primary hover:underline"
              >
                info@chainsquad.com
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:+4917645653255"
                className="text-primary hover:underline"
              >
                +49 176/456 532 55
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
