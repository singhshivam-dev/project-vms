import Image from "next/image";
import Link from "next/link";

<<<<<<< HEAD
// ── TOP ROW — Leadership
const leadershipTeam = [
  { name: "Jhanak Bhabhar",  position: "Director",           image: "/Jhanak.jpg" },
  { name: "KP Singh Rajput", position: "Manager",            image: "/KPSingh.png"  },
  { name: "Shivam Singh",    position: "Software Developer", image: "/Shivam.jpg" },
];

// ── BOTTOM ROW — Field team
const fieldTeam = [
  { name: "Vinita Bhabhar",  position: "Computer Operator",  image: "/Vinita.jpg" },
  { name: "Ravi Narwal",    position: "Field Manager",    image: "/RaviN.jpeg"    },
  { name: "Krishna Dawar",  position: "Team Leader",      image: "/KrishnaDa.jpeg"},
  { name: "Lakhan Bhabhar", position: "Field Supervisor",  image: "/LakhanBh.jpeg" },
=======
const teamMembers = [
  {
    name: "Ravi Narwal",
    position: "Field manager",
    image: "/RaviN.jpeg",
  },
  {
    name: "Jyoti Sindra",
    position: "Supervisor",
    image: "/JyotiSi.jpeg",
  },
  {
    name: "Krishna Dawar",
    position: "Team leader",
    image: "/KrishnaDa.jpeg",
  },
  {
    name: "Lakhan Bhabhar",
    position: "Field supervisor",
    image: "/LakhanBh.jpeg",
  },
>>>>>>> 1fe99da1edc35182851257ac3a604f478a3f0c9d
];

const values = [
  {
    title: "Our Vision",
<<<<<<< HEAD
    desc:  "To be the most trusted recruitment partner, bridging the gap between exceptional talent and forward-thinking organizations across India.",
    icon:  "◎",
    accent: "#0EA5E9",
  },
  {
    title: "Our Mission",
    desc:  "To deliver transparent, efficient, and quality-driven recruitment services that empower businesses to build strong teams and help candidates find meaningful careers.",
    icon:  "◉",
    accent: "#10B981",
  },
  {
    title: "Our Values",
    desc:  "Integrity, commitment, and excellence in every interaction. We believe in building long-term relationships based on trust, respect, and consistent delivery.",
    icon:  "◆",
    accent: "#F59E0B",
  },
];

// ── Reusable member card
function MemberCard({ member, large = false }: {
  member: { name: string; position: string; image: string };
  large?: boolean;
}) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
      background: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 20, padding: large ? "32px 24px" : "24px 20px",
      textAlign: "center",
      transition: "border-color .25s, transform .25s, box-shadow .25s",
    }}
      className="member-card"
    >
      {/* Photo ring */}
      <div style={{
        width: large ? 120 : 100, height: large ? 120 : 100,
        borderRadius: "50%", flexShrink: 0, position: "relative",
        border: "2px solid rgba(245,158,11,0.3)",
        background: "rgba(255,255,255,0.04)",
        overflow: "hidden",
      }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
        {/* Fallback initial shown via CSS if image errors — Next.js will use the image */}
      </div>

      <div>
        <p style={{ fontSize: large ? 15 : 14, fontWeight: 600, color: "#f4f4f5", marginBottom: 4, letterSpacing: "-0.01em" }}>
          {member.name}
        </p>
        <p style={{ fontSize: 12, color: "#F59E0B", fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0 }}>
          {member.position}
        </p>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #09090b; }
        .font-display { font-family: 'DM Serif Display', serif; }

        @keyframes pulseDot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.45; transform:scale(1.6); }
        }
        .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fu1 { animation: fadeUp .7s .1s ease both; }
        .fu2 { animation: fadeUp .7s .25s ease both; }
        .fu3 { animation: fadeUp .7s .4s ease both; }

        @keyframes float {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-16px); }
        }
        .orb  { animation: float 8s ease-in-out infinite; }
        .orb2 { animation: float 10s 2s ease-in-out infinite; }

        .text-gradient {
          background: linear-gradient(135deg,#F59E0B,#FCD34D,#F59E0B);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        .member-card:hover {
          border-color: rgba(245,158,11,0.35) !important;
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.4);
        }

        .value-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 32px 28px;
          transition: border-color .25s, transform .25s;
        }
        .value-card:hover { transform: translateY(-5px); }

        .prose-p {
          font-size: 15px; line-height: 1.8;
          color: #a1a1aa; margin: 0 0 18px;
        }
        .prose-p:last-child { margin-bottom: 0; }

        @media (max-width: 767px) {
          .leadership-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .field-grid       { grid-template-columns: repeat(2, 1fr) !important; }
          .values-grid      { grid-template-columns: 1fr !important; }
          .about-grid       { grid-template-columns: 1fr !important; }
          .cta-inner        { flex-direction: column !important; }
        }
      `}</style>

      <main style={{ background: "#09090b", color: "#fafafa", minHeight: "100vh", fontFamily: "'DM Sans',sans-serif" }}>

        {/* ── HERO ── */}
        <section style={{ position: "relative", overflow: "hidden", padding: "88px 2rem 96px" }}>
          <div className="orb" style={{
            position: "absolute", top: "-15%", right: "-8%", width: 520, height: 520, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(245,158,11,0.1) 0%,transparent 70%)", pointerEvents: "none",
          }} />
          <div className="orb2" style={{
            position: "absolute", bottom: "-10%", left: "-5%", width: 380, height: 380, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(14,165,233,0.07) 0%,transparent 70%)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="fu1" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)",
              borderRadius: 20, padding: "5px 14px", marginBottom: 28,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F59E0B", display: "block" }} className="pulse-dot" />
              <span style={{ fontSize: 11, color: "#F59E0B", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                About Us
              </span>
            </div>

            <h1 className="font-display fu2" style={{
              fontSize: "clamp(40px,6vw,72px)", lineHeight: 1.05,
              letterSpacing: "-0.02em", marginBottom: 22, marginTop: 0, maxWidth: 720,
            }}>
              People who put{" "}
              <span className="text-gradient font-display" style={{ fontStyle: "italic" }}>people first.</span>
            </h1>

            <p className="fu3" style={{ fontSize: 16, lineHeight: 1.75, color: "#a1a1aa", maxWidth: 520 }}>
              Velji Management Services — your trusted recruitment partner for building exceptional teams across industries.
            </p>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section style={{ padding: "0 2rem 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "start" }}>
              <div>
                <p style={{ fontSize: 11, color: "#F59E0B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                  Who We Are
                </p>
                <h2 className="font-display" style={{ fontSize: "clamp(26px,3vw,42px)", lineHeight: 1.1, letterSpacing: "-0.02em", marginTop: 0, marginBottom: 28 }}>
                  Built on trust,<br />driven by results.
                </h2>

                <p className="prose-p">
                  Velji Management Services is a dedicated recruitment company committed to connecting the right talent with the right opportunities. Since inception, we have helped organizations across industries meet their workforce requirements through strategic and efficient hiring solutions.
                </p>
                <p className="prose-p">
                  Whether it's permanent recruitment, contract staffing, bulk hiring, or executive search — we provide tailored solutions that align with your business goals, culture, and timelines. Our expertise spans IT, non-IT, and blue-collar roles.
                </p>
                <p className="prose-p">
                  What sets us apart is our commitment to quality, transparency, and long-term partnerships. We don't just fill positions — we help build teams that drive business success.
                </p>
              </div>

              {/* Stats card */}
              <div style={{
                background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 24, padding: 32, position: "sticky", top: 88,
              }}>
                <p style={{ fontSize: 11, color: "#71717a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
                  By the numbers
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[
                    { v: "500+",       l: "Placements Made"   },
                    { v: "8+",         l: "Industries Served" },
                    { v: "All Types",  l: "Recruitment Models"},
                    { v: "Pan-India",  l: "Coverage"          },
                  ].map((s) => (
                    <div key={s.l} style={{
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 14, padding: "20px 16px", textAlign: "center",
                    }}>
                      <p className="font-display" style={{ fontSize: 28, color: "#F59E0B", margin: "0 0 4px", lineHeight: 1 }}>{s.v}</p>
                      <p style={{ fontSize: 11, color: "#71717a", margin: 0 }}>{s.l}</p>
                    </div>
                  ))}
                </div>

                {/* Location pill */}
                <div style={{
                  marginTop: 20, padding: "14px 18px", borderRadius: 12,
                  background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)",
                  fontSize: 12, color: "#a1a1aa", lineHeight: 1.6,
                }}>
                  <span style={{ color: "#F59E0B", fontWeight: 600 }}>◎ Headquarters</span><br />
                  Shakti Complex, Tilak Marg,<br />
                  Rajgarh Dhar, Madhya Pradesh — 454116
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section style={{
          padding: "80px 2rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.01)",
        }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 48 }}>
              <p style={{ fontSize: 11, color: "#F59E0B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                Our Team
              </p>
              <h2 className="font-display" style={{ fontSize: "clamp(26px,3.5vw,46px)", letterSpacing: "-0.02em", marginTop: 0, marginBottom: 10 }}>
                Meet the people behind VMS
              </h2>
              <p style={{ fontSize: 14, color: "#71717a", maxWidth: 460 }}>
                Dedicated professionals working together to deliver exceptional recruitment solutions.
              </p>
            </div>

            {/* Leadership row */}
            <div style={{ marginBottom: 12 }}>
              <p style={{ fontSize: 10, color: "#52525b", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 20, height: 1, background: "#3f3f46", display: "inline-block" }} />
                Leadership & Core Team
              </p>
              <div
                className="leadership-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}
              >
                {leadershipTeam.map((m) => <MemberCard key={m.name} member={m} large />)}
              </div>
            </div>

            {/* Divider
            <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "28px 0" }} /> */}

            {/* Field team row */}
            <div>
              <p style={{ fontSize: 10, color: "#52525b", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                
              </p>
              <div
                className="field-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 50, maxWidth: 1200 }}
              >
                {fieldTeam.map((m) => <MemberCard key={m.name} member={m} />)}
              </div>
            </div>

          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ padding: "80px 2rem" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 11, color: "#F59E0B", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                What Drives Us
              </p>
              <h2 className="font-display" style={{ fontSize: "clamp(26px,3.5vw,46px)", letterSpacing: "-0.02em", marginTop: 0, marginBottom: 10 }}>
                Vision, Mission & Values
              </h2>
              <p style={{ fontSize: 14, color: "#71717a", maxWidth: 400, margin: "0 auto" }}>
                The principles that guide every placement, every partnership, every day.
              </p>
            </div>

            <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {values.map((v, i) => (
                <div key={v.title} className="value-card" style={{ borderColor: i === 0 ? "rgba(14,165,233,0.15)" : i === 1 ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.15)" }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${v.accent}15`, border: `1px solid ${v.accent}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, color: v.accent, marginBottom: 20,
                  }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#f4f4f5", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "0 2rem 100px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="cta-inner" style={{
              borderRadius: 24, position: "relative", overflow: "hidden",
              background: "linear-gradient(135deg,#1a1200,#0f0f12,#0a1628)",
              border: "1px solid rgba(245,158,11,0.2)",
              padding: "52px 52px",
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 36,
            }}>
              <div style={{
                position: "absolute", top: -60, right: -60, width: 320, height: 320, borderRadius: "50%",
                background: "radial-gradient(circle,rgba(245,158,11,0.12) 0%,transparent 70%)", pointerEvents: "none",
              }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <h2 className="font-display" style={{ fontSize: "clamp(22px,3vw,40px)", letterSpacing: "-0.02em", marginTop: 0, marginBottom: 12 }}>
                  Ready to work with us?
                </h2>
                <p style={{ fontSize: 15, color: "#a1a1aa", margin: 0, lineHeight: 1.65, maxWidth: 440 }}>
                  Whether you're building a team or finding your next opportunity, let's start the conversation.
                </p>
              </div>
              <div style={{ display: "flex", gap: 12, position: "relative", zIndex: 1, flexShrink: 0, flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  fontSize: 13, fontWeight: 700, color: "#09090b", background: "#F59E0B",
                  textDecoration: "none", padding: "13px 24px", borderRadius: 12,
                  boxShadow: "0 0 30px rgba(245,158,11,0.25)", whiteSpace: "nowrap",
                }}>
                  Contact Us →
                </Link>
                <Link href="/services" style={{
                  fontSize: 13, fontWeight: 600, color: "#a1a1aa",
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                  textDecoration: "none", padding: "13px 24px", borderRadius: 12, whiteSpace: "nowrap",
                }}>
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
=======
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
      <section className="relative overflow-hidden bg-linear-to-br from-sky-900 via-sky-800 to-slate-900 text-white">
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
        <div className="overflow-hidden rounded-3xl border border-sky-100 bg-linear-to-r from-sky-900 via-sky-800 to-sky-900 px-6 py-10 text-white sm:px-10 sm:py-12">
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
                href="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-center font-semibold text-sky-900 shadow-sm transition hover:bg-slate-100"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/50 bg-transparent px-5 py-2.5 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
>>>>>>> 1fe99da1edc35182851257ac3a604f478a3f0c9d
  );
};

export default About;