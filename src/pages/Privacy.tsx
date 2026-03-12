import { Shield, Eye, Database, CheckCircle } from "lucide-react";

export default function Privacy() {
  return (
    <main className="mx-auto max-w-5xl px-4">
      <section className="py-20">
        <h1 className="mb-4 text-3xl font-bold leading-snug tracking-tighter md:text-4xl">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground">
          Your privacy matters. We're committed to transparency and protecting
          your personal data under European privacy laws.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: March 2026
        </p>
      </section>

      <div
        className="font-mono text-sm text-muted-foreground/30 select-none"
        aria-hidden="true"
      >
        //
      </div>

      <section className="py-16">
        <div className="mb-8 max-w-2xl space-y-3">
          <h2 className="text-xl font-semibold">Our Privacy Principles</h2>
          <p className="text-muted-foreground">
            As a German company, we adhere to the strictest European data
            protection standards.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-none border border-border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-none border border-border bg-muted/20">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-medium">GDPR Compliant</h3>
            <p className="text-sm text-muted-foreground">
              ChainSquad GmbH operates in full compliance with the General Data
              Protection Regulation (GDPR) and German Federal Data Protection
              Act.
            </p>
          </div>

          <div className="space-y-4 rounded-none border border-border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-none border border-border bg-muted/20">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="font-medium">No Cookies</h3>
            <p className="text-sm text-muted-foreground">
              We don't use cookies or tracking technologies that store data on
              your device. Your browsing remains private.
            </p>
          </div>

          <div className="space-y-4 rounded-none border border-border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-none border border-border bg-muted/20">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-medium">Minimal Analytics</h3>
            <p className="text-sm text-muted-foreground">
              We use our self-hosted Plausible instance for basic usage
              statistics. No personal data is collected or stored.
            </p>
          </div>

          <div className="space-y-4 rounded-none border border-border p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-none border border-border bg-muted/20">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="font-medium">Data Minimization</h3>
            <p className="text-sm text-muted-foreground">
              We only collect data necessary for legitimate business purposes
              and delete it when no longer needed.
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

      <section className="py-16">
        <div className="mb-8 max-w-2xl space-y-3">
          <h2 className="text-xl font-semibold">Data We Collect</h2>
          <p className="text-muted-foreground">
            We collect only what's necessary to provide our services.
          </p>
        </div>

        <div className="max-w-2xl space-y-6">
          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Contact Form Data</h3>
            <p className="text-sm text-muted-foreground">
              When you contact us through our form, we collect your name, email,
              company, and message. This data is used solely to respond to your
              inquiry and is stored securely in our systems.
            </p>
          </div>

          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Anonymous Usage Statistics</h3>
            <p className="text-sm text-muted-foreground">
              Our self-hosted Plausible instance collects anonymous metrics
              like:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Number of visitors</li>
              <li>Pages visited</li>
              <li>Browser type</li>
              <li>Country (approximate)</li>
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              No personal identifiers, IP addresses, or device fingerprints are
              stored. You can opt out by disabling JavaScript or using a content
              blocker.
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

      <section className="py-16">
        <div className="mb-8 max-w-2xl space-y-3">
          <h2 className="text-xl font-semibold">Your Rights</h2>
          <p className="text-muted-foreground">
            Under GDPR, you have comprehensive rights regarding your data.
          </p>
        </div>

        <div className="max-w-2xl space-y-6">
          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Access</h3>
            <p className="text-sm text-muted-foreground">
              Request a copy of all personal data we hold about you.
            </p>
          </div>

          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Rectification</h3>
            <p className="text-sm text-muted-foreground">
              Request correction of inaccurate or incomplete data.
            </p>
          </div>

          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Erasure</h3>
            <p className="text-sm text-muted-foreground">
              Request deletion of your personal data (right to be forgotten).
            </p>
          </div>

          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Portability</h3>
            <p className="text-sm text-muted-foreground">
              Receive your data in a structured, commonly used format.
            </p>
          </div>

          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Objection</h3>
            <p className="text-sm text-muted-foreground">
              Object to processing of your personal data on legitimate grounds.
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

      <section className="py-16">
        <div className="mb-8 max-w-2xl space-y-3">
          <h2 className="text-xl font-semibold">Data Storage & Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to
            protect your data.
          </p>
        </div>

        <div className="max-w-2xl space-y-6">
          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Server Location</h3>
            <p className="text-sm text-muted-foreground">
              Our servers are located in Germany within the European Union,
              ensuring your data remains under GDPR jurisdiction.
            </p>
          </div>

          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Security Measures</h3>
            <p className="text-sm text-muted-foreground">
              We use industry-standard encryption (TLS), secure authentication,
              and regular security audits to protect your data from unauthorized
              access.
            </p>
          </div>

          <div className="rounded-none border border-border bg-muted/20 p-6">
            <h3 className="mb-3 font-medium">Data Retention</h3>
            <p className="text-sm text-muted-foreground">
              Personal data is retained only as long as necessary for the
              purposes for which it was collected, unless required by law to
              retain it longer.
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

      <section className="py-16">
        <div className="mb-8 max-w-2xl space-y-3">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground">
            Questions about your privacy or data rights? We're here to help.
          </p>
        </div>

        <div className="max-w-2xl rounded-none border border-border bg-muted/20 p-6">
          <h3 className="mb-2 font-medium">Data Protection Officer</h3>
          <p className="text-sm text-muted-foreground mb-4">
            ChainSquad GmbH
            <br />
            Hirtenweg 14
            <br />
            91054 Buckenhof
            <br />
            Germany
          </p>
          <p className="text-sm text-muted-foreground">
            Email:{" "}
            <a
              href="mailto:privacy@chainsquad.com"
              className="text-primary hover:underline"
            >
              privacy@chainsquad.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
