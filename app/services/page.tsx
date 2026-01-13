import Image from "next/image";
import Link from "next/link";

const serviceCategories = [
  {
    category: "Our Expertise",
    tagline: "",
    services: [
      {
        title: "Operations Management",
        desc: "",
        icon: "📋",
      },
      {
        title: "Manpower & Facility Management",
        desc: "",
        icon: "👷‍♂️",
      },
      {
        title: "Product & Dispatch Coordination",
        desc: "",
        icon: "🚚",
      },
      {
        title: "Supply Chain & Vendor Management",
        desc: "",
        icon: "📦",
      },
      {
        title: "Project Execution",
        desc: "",
        icon: "🛠️",
      },
      {
        title: "HR & Admin Outsourcing",
        desc: "",
        icon: "💼",
      },
    ],
  },
  {
    category: "Permanent Recruitment",
    tagline: "Long-term hiring solutions for building stable teams",
    services: [
      {
        title: "Mid to Senior Level Hiring",
        desc: "Experienced professionals for management and leadership roles across functions.",
        icon: "👔",
      },
      {
        title: "Entry Level Recruitment",
        desc: "Fresh talent and junior professionals ready to grow with your organization.",
        icon: "🎓",
      },
      {
        title: "Specialized Role Hiring",
        desc: "Niche skill sets and domain experts for critical business functions.",
        icon: "🎯",
      },
    ],
  },
  {
    category: "Contract & Temporary Staffing",
    tagline: "Flexible workforce solutions for dynamic business needs",
    services: [
      {
        title: "Project-Based Hiring",
        desc: "Skilled professionals for fixed-term projects with defined timelines.",
        icon: "📋",
      },
      {
        title: "Seasonal Staffing",
        desc: "Workforce scaling for peak seasons, festivals, and high-demand periods.",
        icon: "📅",
      },
      {
        title: "Contract-to-Hire",
        desc: "Evaluate candidates on contract before transitioning to permanent roles.",
        icon: "🔄",
      },
    ],
  },
  {
    category: "Bulk & Blue-Collar Hiring",
    tagline: "High-volume recruitment with speed and quality",
    services: [
      {
        title: "Manufacturing & Plant Hiring",
        desc: "Operators, technicians, and skilled workers for production facilities.",
        icon: "🏭",
      },
      {
        title: "Warehouse & Logistics",
        desc: "Warehouse staff, delivery personnel, and supply chain workforce.",
        icon: "📦",
      },
      {
        title: "Field & Support Staff",
        desc: "Sales executives, delivery agents, and on-ground support teams.",
        icon: "🚚",
      },
    ],
  },
  {
    category: "IT & Technology Recruitment",
    tagline: "Specialized hiring for the digital workforce",
    services: [
      {
        title: "Software Development",
        desc: "Developers, engineers, and programmers across all tech stacks and platforms.",
        icon: "💻",
      },
      {
        title: "Data & Analytics",
        desc: "Data scientists, analysts, and business intelligence professionals.",
        icon: "📊",
      },
      {
        title: "Infrastructure & DevOps",
        desc: "System admins, cloud engineers, and infrastructure specialists.",
        icon: "⚙️",
      },
      {
        title: "Product & Design",
        desc: "Product managers, UI/UX designers, and digital experience experts.",
        icon: "🎨",
      },
    ],
  },
  {
    category: "Non-IT & Support Functions",
    tagline: "Core business roles across all departments",
    services: [
      {
        title: "Sales & Marketing",
        desc: "Business development, marketing professionals, and sales teams.",
        icon: "📈",
      },
      {
        title: "Finance & Accounting",
        desc: "Accountants, financial analysts, and finance operations staff.",
        icon: "💰",
      },
      {
        title: "Human Resources",
        desc: "HR generalists, talent acquisition, and people operations roles.",
        icon: "👥",
      },
      {
        title: "Operations & Administration",
        desc: "Office managers, admin staff, and operations coordinators.",
        icon: "🏢",
      },
    ],
  },
  {
    category: "Executive Search & Leadership Hiring",
    tagline: "Strategic recruitment for critical leadership positions",
    services: [
      {
        title: "C-Suite & Leadership",
        desc: "CEOs, CXOs, and senior leadership roles across industries.",
        icon: "👨‍💼",
      },
      {
        title: "Department Heads",
        desc: "Functional heads for sales, operations, technology, and more.",
        icon: "🎖️",
      },
      {
        title: "Board & Advisory Roles",
        desc: "Board members, advisors, and strategic consultants.",
        icon: "🤝",
      },
    ],
  },
];

const industries = [
  { name: "IT & ITES", icon: "💻" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "FMCG & Retail", icon: "🛒" },
  { name: "Logistics & Supply Chain", icon: "🚛" },
  { name: "Healthcare", icon: "🏥" },
  { name: "BFSI", icon: "🏦" },
  { name: "E-commerce", icon: "📱" },
  { name: "Hospitality", icon: "🏨" },
  { name: "Education", icon: "📚" },
  { name: "Real Estate", icon: "🏘️" },
  { name: "Pharmaceuticals", icon: "💊" },
  { name: "Automotive", icon: "🚗" },
];

const coverageAreas = [
  "Mumbai", "Delhi NCR", "Bangalore", "Pune", "Hyderabad",
  "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Surat",
  "Lucknow", "Indore", "Chandigarh", "Kochi", "Coimbatore",
];

const Services = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-linear-to-br from-sky-900 via-sky-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide">
              Our Services
            </p>
            
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Complete Recruitment Solutions Across All Industries
            </h1>
            
            <p className="text-base leading-relaxed text-sky-100 sm:text-lg">
              From labor to leadership, IT to non-IT, we provide end-to-end recruitment services across India for organizations of all sizes.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs text-sky-100/90">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Pan-India Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                <span>All Industries & Roles</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span>Entry to Executive Level</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_50%)]" />
      </section>

      {/* SERVICES CATEGORIES */}
      {serviceCategories.map((category, idx) => (
        <section
          key={category.category}
          className={idx % 2 === 0 ? "bg-white border-y border-slate-200" : "bg-slate-50"}
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="mb-8 space-y-2">
              <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
                {category.category}
              </h2>
              <p className="text-sm text-slate-600 sm:text-base">
                {category.tagline}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service) => (
                <div
                  key={service.title}
                  className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{service.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* INDUSTRIES SECTION */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
              Industries We Serve
            </h2>
            <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
              Our recruitment expertise spans across multiple sectors. We understand the unique hiring needs of each industry and deliver candidates who fit your organizational culture and requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-center transition hover:border-sky-300 hover:bg-white hover:shadow-sm"
              >
                <span className="text-2xl">{industry.icon}</span>
                <span className="text-xs font-medium text-slate-800 sm:text-sm">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE SECTION */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
              Pan-India Presence
            </h2>
            <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
              Velji Management Services operates across India, providing recruitment solutions in major cities and tier-2 locations. Our extensive network ensures we can source and place talent wherever you need.
            </p>
          </div>

          {/* <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-sky-900">
              <span className="text-xl">📍</span>
              <span>Key Coverage Areas</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {coverageAreas.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-sky-200 bg-sky-50/50 px-3 py-1.5 text-xs font-medium text-slate-800 sm:text-sm"
                >
                  {city}
                </span>
              ))}
              <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 sm:text-sm">
                + More Cities
              </span>
            </div>

            <p className="mt-4 text-xs text-slate-600 sm:text-sm">
              Looking for recruitment services in other locations? We can help! Our network extends beyond these cities to cover tier-2 and tier-3 markets across India.
            </p>
          </div> */}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
              Why Choose Velji Management Services
            </h2>
            <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
              What makes us your ideal recruitment partner
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <span className="text-2xl">✅</span>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Comprehensive Coverage
                </h3>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  All types of roles from labor to leadership across all industries and geographies.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <span className="text-2xl">⚡</span>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Fast Turnaround
                </h3>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  Quick sourcing and screening with efficient coordination for faster closures.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <span className="text-2xl">🎯</span>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Quality First
                </h3>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  Thoroughly screened and verified candidates who match your requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <span className="text-2xl">💼</span>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Industry Expertise
                </h3>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  Deep understanding of sector-specific hiring needs and talent pools.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <span className="text-2xl">🤝</span>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  End-to-End Support
                </h3>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  From sourcing to onboarding, we manage the complete hiring lifecycle.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
              <span className="text-2xl">📊</span>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Transparent Process
                </h3>
                <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                  Clear communication, regular updates, and honest feedback throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
        <div className="overflow-hidden rounded-3xl border border-sky-100 bg-linear-to-r from-sky-900 via-sky-800 to-sky-900 px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Ready to Find the Right Talent?
              </h2>
              <p className="text-sm leading-relaxed text-sky-100 sm:text-base">
                Share your hiring requirements with us. Whether you need one role filled or a complete team built, Velji Management Services is ready to help.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-center font-semibold text-sky-900 shadow-sm transition hover:bg-slate-100"
              >
                Discuss Your Needs
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/50 bg-transparent px-5 py-2.5 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;