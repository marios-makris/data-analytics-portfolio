
"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"EN" | "GR">("EN");
  const isGreek = language === "GR";

  const projects = [
    {
      number: "01",
      title: isGreek
        ? "Ανάλυση Εξωτερικού Εμπορίου της Ελλάδας"
        : "Greek Foreign Trade Analysis",
      category: isGreek
        ? "ΟΙΚΟΝΟΜΙΑ · ΔΙΕΘΝΕΣ ΕΜΠΟΡΙΟ"
        : "ECONOMICS · INTERNATIONAL TRADE",
      description: isGreek
        ? "Ανάλυση του διεθνούς εμπορίου της Ελλάδας για το 2025, με έμφαση στις εξαγωγές, τις εισαγωγές, το εμπορικό ισοζύγιο και τις μηνιαίες τάσεις."
        : "An analytical exploration of Greece's international trade in 2025, examining exports, imports, trade balance and monthly trends.",
      status: isGreek ? "ΕΠΙΛΕΓΜΕΝΟ PROJECT" : "FEATURED PROJECT",
      featured: true,
      link: "https://github.com/marios-makris/data-analytics-portfolio/tree/main/projects/greek-foreign-trade-2025",
    },
    {
      number: "02",
      title: isGreek ? "Περισσότερα projects σύντομα" : "More projects coming soon",
      category: isGreek ? "ΑΝΑΛΥΣΗ ΔΕΔΟΜΕΝΩΝ" : "DATA ANALYTICS",
      description: isGreek
        ? "Νέα projects και αναλύσεις βασισμένες σε δεδομένα θα παρουσιαστούν εδώ."
        : "New projects and data-driven explorations will be featured here.",
      status: isGreek ? "ΣΥΝΤΟΜΑ" : "COMING SOON",
      featured: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#171717]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="#" className="text-lg font-bold tracking-tight">
          DATA BY <span className="text-[#315B8A]">MARIOS MAKRIS.</span>
        </a>

        <div className="hidden gap-8 text-sm md:flex">
          <a href="#projects" className="hover:text-[#315B8A]">
            {isGreek ? "Έργα" : "Projects"}
          </a>
          <a href="#about" className="hover:text-[#315B8A]">
            {isGreek ? "Σχετικά" : "About"}
          </a>
          <a href="#contact" className="hover:text-[#315B8A]">
            {isGreek ? "Επικοινωνία" : "Contact"}
          </a>
        </div>

        <div className="flex gap-2 text-xs tracking-widest">
          <button
            type="button"
            onClick={() => setLanguage("EN")}
            aria-pressed={language === "EN"}
            className={language === "EN" ? "font-bold text-[#315B8A]" : "text-[#77736B]"}
          >
            EN
          </button>
          <span className="text-[#77736B]">/</span>
          <button
            type="button"
            onClick={() => setLanguage("GR")}
            aria-pressed={language === "GR"}
            className={language === "GR" ? "font-bold text-[#315B8A]" : "text-[#77736B]"}
          >
            GR
          </button>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-36">
        <p className="mb-8 text-xs font-semibold tracking-[0.25em] text-[#315B8A]">
          {isGreek
            ? "ΑΝΑΛΥΣΗ ΔΕΔΟΜΕΝΩΝ · ΠΡΟΣΩΠΙΚΟ PORTFOLIO"
            : "DATA ANALYST · PERSONAL PORTFOLIO"}
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
          {isGreek
            ? "Μετατρέπω τα δεδομένα σε ουσιαστική γνώση."
            : "Turning data into meaningful insights."}
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[#66635D]">
          {isGreek
            ? "Εξερευνώ δεδομένα, εντοπίζω μοτίβα και μετατρέπω πληροφορίες σε σαφή και ουσιαστικά συμπεράσματα."
            : "Exploring data, identifying patterns and transforming information into clear, meaningful insights."}
        </p>

        <a
          href="#projects"
          className="mt-10 inline-flex border-b border-[#315B8A] pb-2 text-sm font-semibold text-[#315B8A]"
        >
          {isGreek ? "ΔΕΣ ΤΑ ΕΡΓΑ ΜΟΥ ↗" : "EXPLORE MY WORK ↗"}
        </a>
      </section>

      <section id="projects" className="border-t border-[#DCD8CF]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#77736B]">
                {isGreek ? "ΕΠΙΛΕΓΜΕΝΗ ΔΟΥΛΕΙΑ" : "SELECTED WORK"}
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                {isGreek ? "Έργα." : "Projects."}
              </h2>
            </div>
            <span className="text-sm text-[#77736B]">01 — 02</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="border border-[#DCD8CF] bg-[#FAF9F6] p-7 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-light text-[#315B8A]">
                    {project.number}
                  </span>
                  <span className="text-[10px] tracking-widest text-[#77736B]">
                    {project.status}
                  </span>
                </div>

                <p className="mt-12 text-[10px] tracking-widest text-[#77736B]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#66635D]">
                  {project.description}
                </p>

                {project.featured && (
                  <>
                    <div className="mt-8 border-t border-[#DCD8CF] pt-6">
                      <p className="mb-5 text-xs font-semibold tracking-widest text-[#77736B]">
                        {isGreek ? "ΒΑΣΙΚΑ ΕΥΡΗΜΑΤΑ · 2025" : "KEY FINDINGS · 2025"}
                      </p>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <p className="text-xs text-[#77736B]">
                            {isGreek ? "Εξαγωγές" : "Exports"}
                          </p>
                          <p className="mt-2 text-xl font-semibold text-[#315B8A]">
                            €48.659B
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#77736B]">
                            {isGreek ? "Εισαγωγές" : "Imports"}
                          </p>
                          <p className="mt-2 text-xl font-semibold text-[#315B8A]">
                            €82.475B
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#77736B]">
                            {isGreek ? "Έλλειμμα" : "Trade deficit"}
                          </p>
                          <p className="mt-2 text-xl font-semibold text-[#315B8A]">
                            €33.816B
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex border-b border-[#315B8A] pb-2 text-sm font-semibold text-[#315B8A] hover:text-[#171717]"
                    >
                      {isGreek
                        ? "ΠΡΟΒΟΛΗ PROJECT ΣΤΟ GITHUB ↗"
                        : "VIEW PROJECT ON GITHUB ↗"}
                    </a>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs tracking-[0.2em] text-[#77736B]">
          {isGreek ? "ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ" : "ABOUT ME"}
        </p>

        <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-snug">
          {isGreek
            ? "Με ενδιαφέρουν τα δεδομένα και οι ιστορίες που κρύβονται πίσω τους."
            : "Curious about data. Focused on finding the story behind it."}
        </h2>

        <p className="mt-6 max-w-xl leading-8 text-[#66635D]">
          {isGreek
            ? "Είμαι ο Μάριος Μάκρης και αναπτύσσω τις δεξιότητές μου στην ανάλυση δεδομένων μέσα από πρακτικά projects και συνεχή μάθηση."
            : "I am Marios Makris, building my skills in data analytics through practical projects and continuous learning."}
        </p>
      </section>

      <footer id="contact" className="border-t border-[#DCD8CF]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-10 md:flex-row">
          <span className="font-semibold">DATA BY MARIOS MAKRIS.</span>

          <span className="text-sm text-[#77736B]">
            {isGreek
              ? "Ανάλυση Δεδομένων · Οπτικοποίηση · Συμπεράσματα"
              : "Data Analytics · Visualization · Insights"}
          </span>

          <div className="flex gap-6 text-sm text-[#315B8A]">
            <a
              href="https://github.com/marios-makris"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/marios-makris/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
