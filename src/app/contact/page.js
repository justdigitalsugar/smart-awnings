import Link from "next/link";

export const metadata = {
  title: "Contact | Smart Awnings & Canopies",
  description: "Contact Smart Awnings & Canopies for surveys, quotations, finance options, repairs and aftercare support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-primary px-4 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div
          className="rounded-2xl border border-white/20 p-6 md:p-10 text-white shadow-[0_24px_55px_rgba(0,0,0,0.28)]"
          style={{ background: "linear-gradient(125deg, #2e0d2e 0%, #190819 60%, #130613 100%)" }}
        >
          <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-white/70">
            Contact
          </p>
          <h1 className="mb-4 text-white">Let&apos;s plan your project</h1>
          <p className="mb-8 text-white/85">
            Get in touch for surveys, quotes, finance information, repairs, or aftercare support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link href="tel:07971917201" className="btn text-center">
              Call 07971 917201
            </Link>
            <Link
              href="mailto:info@smartawnings.co.uk"
              className="btn text-center"
              style={{ backgroundColor: "#ffffff", color: "#280028" }}
            >
              Email Our Team
            </Link>
          </div>

          <Link href="/" className="text-white/80 underline underline-offset-4 text-[0.95rem]">
            Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
