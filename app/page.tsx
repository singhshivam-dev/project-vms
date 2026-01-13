import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Permanent Recruitment",
    desc: "End-to-end hiring for mid to senior level roles across IT and non-IT.",
    icon: "/file.svg",
  },
  {
    title: "Contract & Temporary Staffing",
    desc: "Flexible workforce solutions for project-based and seasonal requirements.",
    icon: "/window.svg",
  },
  {
    title: "Bulk / Blue-Collar Hiring",
    desc: "High-volume hiring with quick turnaround for plant, warehouse & field roles.",
    icon: "/globe.svg",
  },
  {
    title: "Executive Search",
    desc: "Focused leadership hiring for critical business roles.",
    icon: "/file.svg",
  },
  {
    title: "IT & Tech Recruitment",
    desc: "Specialized hiring for developers, engineers and digital roles.",
    icon: "/window.svg",
  },
  {
    title: "Non-IT & Support Functions",
    desc: "Sales, operations, finance, HR and other support roles across industries.",
    icon: "/globe.svg",
  },
];

const industries = [
  "IT & ITES",
  "Manufacturing",
  "FMCG & Retail",
  "Logistics & Supply Chain",
  "Healthcare",
  "BFSI",
  "E-commerce",
  "Hospitality",
];

const processSteps = [
  {
    step: "01",
    title: "Understand Requirements",
    desc: "We deep dive into your role, skills, budget and timelines.",
  },
  {
    step: "02",
    title: "Source & Screen",
    desc: "Targeted sourcing, shortlisting and initial screening of candidates.",
  },
  {
    step: "03",
    title: "Interview Coordination",
    desc: "Scheduling, follow-ups and feedback management with all stakeholders.",
  },
  {
    step: "04",
    title: "Offer & Onboarding Support",
    desc: "Offer negotiation, joining coordination and post-joining check-ins.",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-br from-sky-900 via-sky-800 to-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-20 lg:flex-row lg:py-24">
          {/* Left content */}
          <div className="relative z-10 max-w-xl space-y-6">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              Recruitment Services · All Types of Hiring
            </p>
            
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Velji Management Services
            </h1>

            <p className="text-base leading-relaxed text-sky-100 sm:text-lg">
              We are a recruitment services company helping organizations hire
              the right talent across IT, non-IT and blue-collar roles. From
              entry-level to leadership positions, we connect the right people
              to the right opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-sm transition hover:bg-slate-100"
              >
                Hire Talent
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Find Jobs
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-sky-100/90">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Permanent & Contract Hiring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>IT & Non-IT Roles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span>Screened & Verified Candidates</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative z-10 w-full max-w-md lg:max-w-lg">
            <div className="relative h-64 w-full rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-md sm:h-80 lg:h-96">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-900/70">
                <Image
  src="/vms-logo-name.jpeg"
  alt="Velji Management Services"
  fill
  className="object-contain"
/>

              </div>
            </div>
          </div>
        </div>

        {/* subtle gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)]" />
      </section>

      {/* ABOUT SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
              Recruitment Partner for All Your Hiring Needs
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Velji Management Services provides end-to-end recruitment services
              for organizations of all sizes. Whether you need to ramp up your
              workforce quickly, hire niche talent, or build long-term teams, we
              support you with structured and transparent hiring.
            </p>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              We work closely with HR and business teams to understand the role,
              culture fit and timelines, and then manage the complete hiring
              cycle — sourcing, screening, coordination and joining support.
            </p>

            <div className="mt-4 grid gap-3 text-sm text-slate-800 sm:grid-cols-2">
              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                <span>All types of recruitment – permanent, contract & bulk.</span>
              </div>
              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span>Structured shortlisting and multi-level screening.</span>
              </div>
              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                <span>Dedicated coordination for interviews & offers.</span>
              </div>
              <div className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-700" />
                <span>Focus on long-term relationships with clients & candidates.</span>
              </div>
            </div>
          </div>

          {/* Small stats card */}
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-800">
              Why Companies Work With Us
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-sky-50 px-3 py-4">
                <p className="text-xl font-bold text-sky-900">All</p>
                <p className="text-xs text-slate-600">Types of recruitment</p>
              </div>
              <div className="rounded-xl bg-emerald-50 px-3 py-4">
                <p className="text-xl font-bold text-emerald-800">End-to-End</p>
                <p className="text-xs text-slate-600">Hiring support</p>
              </div>
              <div className="rounded-xl bg-amber-50 px-3 py-4">
                <p className="text-xl font-bold text-amber-800">IT & Non-IT</p>
                <p className="text-xs text-slate-600">Role coverage</p>
              </div>
              <div className="rounded-xl bg-slate-50 px-3 py-4">
                <p className="text-xl font-bold text-slate-800">Screened</p>
                <p className="text-xs text-slate-600">Verified profiles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
                Recruitment Services We Provide
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-700 sm:text-base">
                From single role mandates to bulk hiring drives, we support
                organizations across different hiring models and role types.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-sky-50">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-sky-900 sm:text-base">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
            Industries We Serve
          </h2>
          <p className="max-w-xl text-sm text-slate-700 sm:text-base">
            Velji Management Services supports hiring requirements across multiple
            sectors. Below are some of the key industries we cater to.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {industries.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-800 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="mb-6 space-y-2">
            <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
              How Our Recruitment Process Works
            </h2>
            <p className="max-w-xl text-sm text-slate-700 sm:text-base">
              A simple and transparent hiring process designed to save time for
              both employers and candidates.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-xs font-semibold text-sky-800">
                  {step.step}
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-700">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20"
      >
        <div className="overflow-hidden rounded-3xl border border-sky-100 bg-linear-to-r from-sky-900 via-sky-800 to-sky-900 px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Looking to hire or explore opportunities?
              </h2>
              <p className="text-sm leading-relaxed text-sky-100 sm:text-base">
                Share your hiring requirements or resume with us. Our team at
                Velji Management Services will connect with you and guide you
                through the next steps.
              </p>
              <p className="text-xs text-sky-100/90">
                {/* Your senior can replace this line with actual contact details */}
                You can update this section later with your official email,
                phone number, or enquiry form link.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <Link href="/contact" className="rounded-full bg-white px-5 py-2.5 font-semibold text-sky-900 shadow-sm transition hover:bg-slate-100">
                Enquire for Recruitment
              </Link>
              <Link href="/contact" className="rounded-full border border-white/50 bg-transparent px-5 py-2.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
                Share Your Resume At
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
