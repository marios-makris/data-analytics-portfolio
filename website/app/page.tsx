
const projects = [
  {
    number: "01",
    title: "Greek Foreign Trade Analysis",
    category: "ECONOMICS · INTERNATIONAL TRADE",
    description:
      "An analytical exploration of Greece's international trade, uncovering patterns and insights from import and export data.",
    status: "FEATURED PROJECT",
  },
  {
    number: "02",
    title: "More projects coming soon",
    category: "DATA ANALYTICS",
    description:
      "New projects and data-driven explorations will be featured here.",
    status: "COMING SOON",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#171717]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="#" className="text-lg font-bold tracking-tight">
          DATA BY <span className="text-[#315B8A]">MARIOS MAKRIS.</span>
        </a>
        <div className="hidden gap-8 text-sm md:flex">
          <a href="#projects" className="hover:text-[#315B8A]">Projects</a>
          <a href="#about" className="hover:text-[#315B8A]">About</a>
          <a href="#contact" className="hover:text-[#315B8A]">Contact</a>
        </div>
        <span className="text-xs tracking-widest">EN / GR</span>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-36">
        <p className="mb-8 text-xs font-semibold tracking-[0.25em] text-[#315B8A]">
          DATA ANALYST · PERSONAL PORTFOLIO
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
          Turning data into
          <br />
          meaningful insights.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-[#66635D]">
          Exploring data, identifying patterns and transforming
          information into clear, meaningful insights.
        </p>
        <a
          href="#projects"
          className="mt-10 inline-flex border-b border-[#315B8A] pb-2 text-sm font-semibold text-[#315B8A]"
        >
          EXPLORE MY WORK ↗
        </a>
      </section>

      <section id="projects" className="border-t border-[#DCD8CF]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#77736B]">
                SELECTED WORK
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Projects.</h2>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs tracking-[0.2em] text-[#77736B]">ABOUT ME</p>
        <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-snug">
          Curious about data. Focused on finding the story behind it.
        </h2>
        <p className="mt-6 max-w-xl leading-8 text-[#66635D]">
          I am Marios Makris, building my skills in data analytics
          through practical projects and continuous learning.
        </p>
      </section>

      <footer id="contact" className="border-t border-[#DCD8CF]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-10 md:flex-row">
          <span className="font-semibold">DATA BY MARIOS MAKRIS.</span>
          <span className="text-sm text-[#77736B]">
            Data Analytics · Visualization · Insights
          </span>
          <a
            href="https://github.com/marios-makris"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#315B8A]"
          >
            GITHUB ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
