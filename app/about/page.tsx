import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Rajesh Velji",
    position: "Managing Director",
    image: "/Client.jpeg", // Replace with actual image paths
  },
  {
    name: "Priya Sharma",
    position: "Head of Operations",
    image: "/Client.jpeg",
  },
  {
    name: "Amit Patel",
    position: "Senior Recruitment Manager",
    image: "/Client.jpeg",
  },
  {
    name: "Neha Singh",
    position: "Client Relations Lead",
    image: "/Client.jpeg",
  },
];

const values = [
  {
    title: "Our Vision",
    desc: "To be the most trusted recruitment partner, bridging the gap between exceptional talent and forward-thinking organizations across India.",
    icon: "🎯",
    color: "sky",
  },
  {
    title: "Our Mission",
    desc: "To deliver transparent, efficient, and quality-driven recruitment services that empower businesses to build strong teams and help candidates find meaningful careers.",
    icon: "🚀",
    color: "emerald",
  },
  {
    title: "Our Values",
    desc: "Integrity, commitment, and excellence in every interaction. We believe in building long-term relationships based on trust, respect, and consistent delivery.",
    icon: "💎",
    color: "amber",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide">
              About Us
            </p>
            
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              About Velji Management Services
            </h1>
            
            <p className="text-base leading-relaxed text-sky-100 sm:text-lg">
              Your trusted recruitment partner for building exceptional teams across industries.
            </p>
          </div>
        </div>
        
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_50%)]" />
      </section>

      {/* ABOUT CONTENT SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
            Who We Are
          </h2>
          
          <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            <p>
              Velji Management Services is a dedicated recruitment services company committed to connecting the right talent with the right opportunities. Since our inception, we have been helping organizations across various industries meet their workforce requirements through strategic and efficient hiring solutions.
            </p>
            
            <p>
              We understand that every organization has unique hiring needs. Whether it's permanent recruitment, contract staffing, bulk hiring, or executive search, we provide tailored solutions that align with your business goals, culture, and timelines. Our expertise spans across IT, non-IT, and blue-collar roles, ensuring comprehensive coverage for all your recruitment requirements.
            </p>
            
            <p>
              What sets us apart is our commitment to quality, transparency, and long-term partnerships. We don't just fill positions—we help build teams that drive business success. Our structured approach, deep industry knowledge, and extensive talent network enable us to deliver candidates who are not just qualified, but are the right fit for your organization.
            </p>
            
            <p>
              At Velji Management Services, we believe in the power of people. Every placement we make is an opportunity to change lives—both for the organizations we serve and the candidates who find their next career opportunity through us.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      {/* TEAM SECTION */}
<section className="border-y border-slate-200 bg-white">
  <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
    <div className="mb-8 space-y-2">
      <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
        Meet Our Team
      </h2>
      <p className="max-w-xl text-sm text-slate-700 sm:text-base">
        The dedicated professionals behind Velji Management Services, working together to deliver exceptional recruitment solutions.
      </p>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {teamMembers.map((member) => (
        <div
          key={member.name}
          className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 text-center transition hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-md"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-sky-100 bg-slate-200">

            {/* If image exists show it */}
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            ) : (
              // Fallback initials if no image found
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-sky-100 to-sky-200">
                <span className="text-4xl font-bold text-sky-700">
                  {member.name.charAt(0)}
                </span>
              </div>
            )}

          </div>

          <div className="space-y-1">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              {member.name}
            </h3>
            <p className="text-xs text-sky-700 sm:text-sm">
              {member.position}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* VALUES SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-xl font-semibold text-sky-900 sm:text-2xl">
            What Drives Us
          </h2>
          <p className="max-w-xl text-sm text-slate-700 sm:text-base">
            Our vision, mission, and values guide everything we do at Velji Management Services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className={`group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-${value.color}-50/30 p-6 transition hover:-translate-y-1 hover:border-${value.color}-300 hover:shadow-md`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{value.icon}</span>
                <h3 className={`text-base font-semibold text-${value.color}-900 sm:text-lg`}>
                  {value.title}
                </h3>
              </div>
              
              <p className="text-sm leading-relaxed text-slate-700">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
        <div className="overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-900 px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-3">
              <h2 className="text-xl font-semibold sm:text-2xl">
                Ready to Work With Us?
              </h2>
              <p className="text-sm leading-relaxed text-sky-100 sm:text-base">
                Whether you're looking to build your team or find your next career opportunity, Velji Management Services is here to help. Let's start the conversation.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-full bg-white px-5 py-2.5 text-center font-semibold text-sky-900 shadow-sm transition hover:bg-slate-100"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/50 bg-transparent px-5 py-2.5 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;