import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ProofingForm from "@/components/ProofingForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Галереи клиентов",
  description:
    "Введите код галереи, чтобы просматривать, скачивать и делиться фотографиями.",
  // Private client galleries should never be indexed.
  robots: { index: false, follow: false },
};

export default function ProofingPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col justify-center px-5 py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-50">
          Приватная галерея
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.proofing.heading}
        </h1>
        <p className="mt-4 max-w-lg leading-relaxed opacity-70">
          {siteConfig.proofing.body}
        </p>

        <ProofingForm />

        <p className="mt-10 text-sm opacity-60">
          Потеряли код?{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-semibold underline underline-offset-4"
          >
            Напишите мне
          </a>{" "}
          and I will resend it.
        </p>
      </main>
      <Footer />
    </>
  );
}
