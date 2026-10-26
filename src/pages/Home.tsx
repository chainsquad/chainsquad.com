import { useState } from "react";
import { addToWaitlist } from "@/lib/n8n";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { LogoMark } from "@/components/Logo";

const inputClass =
  "bg-background border-input placeholder:text-muted-foreground/50 h-11 w-full border px-4 text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";

const buttonClass =
  "bg-primary text-primary-foreground shadow-2xs hover:bg-primary/90 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none font-medium text-sm outline-hidden transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:-translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 h-11 px-6";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4">
      <section className="py-20 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Closed systems had their century.
            </p>
            <p className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
              We are building the open one.
            </p>
          </div>
          <LogoMark className="h-40 w-auto justify-self-start md:h-52" />
        </div>
      </section>

      <section id="why" className="py-8">
        <h2 className="font-mono text-sm text-muted-foreground">
          Why we exist
        </h2>
        <div className="mt-8 max-w-[60ch] space-y-6">
          <p className="text-xl leading-relaxed tracking-tight md:text-2xl">
            We believe power belongs to people, not intermediaries.
            We exist to make direct, peer-to-peer connection the default.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            Since 2016, ChainSquad builds the software that makes that real.
            Autonomouse protocols, smart contracts, payment infrastructure.
            Built in Germany, running everywhere.
          </p>
          <div className="space-y-3">
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
    <section id="contact" className="py-16 md:py-24">
      <h2 className="font-mono text-sm text-muted-foreground">Contact</h2>

      <div className="mt-8 grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <p className="max-w-[40ch] text-lg leading-relaxed">
            Tell us what you are building.
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a
                href="mailto:info@chainsquad.com"
                className="text-primary hover:underline"
              >
                info@chainsquad.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <a href="tel:+499131691580" className="hover:text-primary transition-colors">
                +49 9131 / 691 580
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Hirtenweg 14, 91054 Buckenhof, Germany
              </span>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="flex items-center gap-3 border border-border bg-muted/20 p-6">
              <p className="text-lg font-medium">Message sent.</p>
              <p className="text-sm text-muted-foreground">
                We will be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
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
                    className={inputClass}
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
                    className={inputClass}
                  />
                </div>
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
                  rows={5}
                  placeholder="What are you building?"
                  disabled={loading}
                  className="w-full border border-input bg-background px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={loading || !name || !email || !message}
                className={buttonClass}
              >
                {loading ? "Sending..." : "Send"}
                {!loading && <Send className="h-4 w-4" />}
              </button>
              {error && <p className="text-sm text-destructive">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
