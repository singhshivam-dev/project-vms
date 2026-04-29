import Image from "next/image";
import Link from "next/link";

// ── TOP ROW — Leadership
const leadershipTeam = [
  { name: "Jhanak Bhabhar",  position: "Director",           image: "/Jhanak.jpg"     },
  { name: "KP Singh Rajput", position: "Manager",            image: "/KPSingh.png"    },
  { name: "Shivam Singh",    position: "Software Developer", image: "/Shivam.jpg"     },
];

// ── BOTTOM ROW — Field team
const fieldTeam = [
  { name: "Vinita Bhabhar",  position: "Computer Operator", image: "/Vinita.jpg"      },
  { name: "Ravi Narwal",     position: "Field Manager",     image: "/RaviN.jpeg"      },
  { name: "Krishna Dawar",   position: "Team Leader",       image: "/KrishnaDa.jpeg"  },
  { name: "Lakhan Bhabhar",  position: "Field Supervisor",  image: "/LakhanBh.jpeg"   },
];

const stats = [
  { v: "500+",      l: "Placements Made"    },
  { v: "8+",        l: "Industries Served"  },
  { v: "All Types", l: "Recruitment Models" },
  { v: "Pan-India", l: "Coverage"           },
];

const values = [
  {
    title:  "Our Vision",
    desc:   "To be the most trusted recruitment partner, bridging the gap between exceptional talent and forward-thinking organizations across India.",
    icon:   "◎",
    accent: "#0EA5E9",
    border: "rgba(14,165,233,0.15)",
  },
  {
    title:  "Our Mission",
    desc:   "To deliver transparent, efficient, and quality-driven recruitment services that empower businesses to build strong teams and help candidates find meaningful careers.",
    icon:   "◉",
    accent: "#10B981",
    border: "rgba(16,185,129,0.15)",
  },
  {
    title:  "Our Values",
    desc:   "Integrity, commitment, and excellence in every interaction. We believe in building long-term relationships based on trust, respect, and consistent delivery.",
    icon:   "◆",
    accent: "#F59E0B",
    border: "rgba(245,158,11,0.15)",
  },
];

// ── Reusable member card
function MemberCard({ member, large = false }: {
  member: { name: string; position: string; image: string };
  large?: boolean;
}) {
  return (
    <div className="member-card" style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
      background: "rgba(255,255,255,0.025)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 20,
      padding: large ? "32px 24px" : "24px 20px",
      textAlign: "center",
    }}>
      <div style={{
        width: large ? 120 : 100, height: large ? 120 : 100,
        borderRadius: "50%", flexShrink: 0, position: "relative",
        border: "2px solid rgba(245,158,11,0.3)",
        background: "rgba(255,255,255,0.04)",
        overflow: "hidden",
      }}>
        <Image src={member.image} alt={member.name} fill className="object-cover" />
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

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #09090b; }
        .font-display { font-family: 'DM Serif Display', serif; }

        /* ── Text gradient ── */
        .text-gradient {
          background: linear-gradient(135deg, #F59E0B, #FCD34D, #F59E0B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Animations ── */
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: .45; transform: scale(1.6); }
        }
        .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu1 { animation: fadeUp .7s .1s ease both; }
        .fu2 { animation: fadeUp .7s .25s ease both; }
        .fu3 { animation: fadeUp .7s .4s ease both; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-16px); }
        }
        .orb  { animation: float 8s ease-in-out infinite; }
        .orb2 { animation: float 10s 2s ease-in-out infinite; }

        /* ── Cards ── */
        .member-card {
          transition: border-color .25s, transform .25s, box-shadow .25s;
        }
        .member-card:hover {
          border-color: rgba(245,158,11,0.35) !important;
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.4);
        }

        .value-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px 28px;
          transition: border-color .25s, transform .25s;
        }
        .value-card:hover { transform: translateY(-5px); }

        /* ── Common ── */
        .container { max-width: 1200px; margin: 0 auto; }
        .section-label {
          font-size: 11px;
          color: #F59E0B;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(245,158,11,0.1);
          border: 1px solid rgba(245,158,11,0.25);
          border-radius: 20px;
          padding: 5px 14px;
          margin-bottom: 28px;
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #F59E0B;
          display: block;
          flex-shrink: 0;
        }
        .badge-text {
          font-size: 11px;
          color: #F59E0B;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .prose-p {
          font-size: 15px;
          line-height: 1.8;
          color: #a1a1aa;
          margin-bottom: 18px;
        }
        .prose-p:last-child { margin-bottom: 0; }

        /* ── Layouts ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: start;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .field-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .cta-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 36px;
        }
        .cta-buttons {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .stats-card { position: static !important; }

          .leadership-grid { grid-template-columns: repeat(2, 1fr); }
          .field-grid       { grid-template-columns: repeat(2, 1fr); }
          .values-grid      { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .leadership-grid { grid-template-columns: 1fr; }

          .cta-strip {
            flex-direction: column;
            align-items: flex-start;
          }
          .cta-buttons {
            width: 100%;
            flex-direction: column;
          }
          .cta-btn {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>

      <main style={{ background: "#09090b", color: "#fafafa", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── HERO ── */}
        <section style={{ position: "relative", overflow: "hidden", padding: "clamp(56px, 8vw, 88px) clamp(1rem, 4vw, 2rem) clamp(60px, 8vw, 96px)" }}>

          <div className="orb" style={{
            position: "absolute", top: "-15%", right: "-8%",
            width: "clamp(260px, 40vw, 520px)", height: "clamp(260px, 40vw, 520px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div className="orb2" style={{
            position: "absolute", bottom: "-10%", left: "-5%",
            width: "clamp(200px, 30vw, 380px)", height: "clamp(200px, 30vw, 380px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div className="badge fu1">
              <span className="badge-dot pulse-dot" />
              <span className="badge-text">About Us</span>
            </div>

            <h1 className="font-display fu2" style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 22,
              maxWidth: 720,
            }}>
              People who put{" "}
              <span className="text-gradient font-display" style={{ fontStyle: "italic" }}>people first.</span>
            </h1>

            <p className="fu3" style={{ fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.75, color: "#a1a1aa", maxWidth: 520 }}>
              Velji Management Services — your trusted recruitment partner for building exceptional teams across industries.
            </p>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section style={{ padding: "0 clamp(1rem, 4vw, 2rem) clamp(48px, 6vw, 80px)" }}>
          <div className="container">
            <div className="about-grid">

              {/* Left — prose */}
              <div>
                <p className="section-label" style={{ marginBottom: 16 }}>Who We Are</p>
                <h2 className="font-display" style={{
                  fontSize: "clamp(24px, 3vw, 42px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: 28,
                }}>
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

              {/* Right — stats card */}
              <div
                className="stats-card"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 24,
                  padding: "clamp(20px, 4vw, 32px)",
                  position: "sticky",
                  top: 88,
                }}
              >
                <p style={{ fontSize: 11, color: "#71717a", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
                  By the numbers
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {stats.map((s) => (
                    <div key={s.l} style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 14, padding: "20px 16px", textAlign: "center",
                    }}>
                      <p className="font-display" style={{ fontSize: 28, color: "#F59E0B", marginBottom: 4, lineHeight: 1 }}>{s.v}</p>
                      <p style={{ fontSize: 11, color: "#71717a" }}>{s.l}</p>
                    </div>
                  ))}
                </div>

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
          padding: "clamp(48px, 6vw, 80px) clamp(1rem, 4vw, 2rem)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.01)",
        }}>
          <div className="container">
            <div style={{ marginBottom: 48 }}>
              <p className="section-label" style={{ marginBottom: 12 }}>Our Team</p>
              <h2 className="font-display" style={{ fontSize: "clamp(24px, 3.5vw, 46px)", letterSpacing: "-0.02em", marginBottom: 10 }}>
                Meet the people behind VMS
              </h2>
              <p style={{ fontSize: 14, color: "#71717a", maxWidth: 460 }}>
                Dedicated professionals working together to deliver exceptional recruitment solutions.
              </p>
            </div>

            {/* Leadership row */}
            <div style={{ marginBottom: 20 }}>
              <p style={{
                fontSize: 10, color: "#52525b", letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 16,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ width: 20, height: 1, background: "#3f3f46", display: "inline-block" }} />
                Leadership & Core Team
              </p>
              <div className="leadership-grid">
                {leadershipTeam.map((m) => <MemberCard key={m.name} member={m} large />)}
              </div>
            </div>

            {/* Field team row */}
            <div>
              <div className="field-grid">
                {fieldTeam.map((m) => <MemberCard key={m.name} member={m} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ padding: "clamp(48px, 6vw, 80px) clamp(1rem, 4vw, 2rem)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p className="section-label" style={{ marginBottom: 12 }}>What Drives Us</p>
              <h2 className="font-display" style={{ fontSize: "clamp(24px, 3.5vw, 46px)", letterSpacing: "-0.02em", marginBottom: 10 }}>
                Vision, Mission & Values
              </h2>
              <p style={{ fontSize: 14, color: "#71717a", maxWidth: 400, margin: "0 auto" }}>
                The principles that guide every placement, every partnership, every day.
              </p>
            </div>

            <div className="values-grid">
              {values.map((v) => (
                <div key={v.title} className="value-card" style={{ borderColor: v.border }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${v.accent}15`, border: `1px solid ${v.accent}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 18, color: v.accent, marginBottom: 20,
                  }}>
                    {v.icon}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#f4f4f5", marginBottom: 12, letterSpacing: "-0.01em" }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "0 clamp(1rem, 4vw, 2rem) clamp(60px, 8vw, 100px)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{
              borderRadius: 24, position: "relative", overflow: "hidden",
              background: "linear-gradient(135deg, #1a1200, #0f0f12, #0a1628)",
              border: "1px solid rgba(245,158,11,0.2)",
              padding: "clamp(28px, 5vw, 52px)",
            }}>
              <div style={{
                position: "absolute", top: -60, right: -60,
                width: 320, height: 320, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              <div className="cta-strip" style={{ position: "relative", zIndex: 1 }}>
                <div>
                  <h2 className="font-display" style={{
                    fontSize: "clamp(20px, 3vw, 40px)",
                    letterSpacing: "-0.02em",
                    marginBottom: 12,
                  }}>
                    Ready to work with us?
                  </h2>
                  <p style={{ fontSize: 15, color: "#a1a1aa", lineHeight: 1.65, maxWidth: 440 }}>
                    Whether you're building a team or finding your next opportunity, let's start the conversation.
                  </p>
                </div>

                <div className="cta-buttons">
                  <Link href="/contact" className="cta-btn" style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, color: "#09090b",
                    background: "#F59E0B", textDecoration: "none",
                    padding: "13px 24px", borderRadius: 12,
                    boxShadow: "0 0 30px rgba(245,158,11,0.25)",
                    whiteSpace: "nowrap",
                  }}>
                    Contact Us →
                  </Link>
                  <Link href="/services" className="cta-btn" style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 600, color: "#a1a1aa",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                    textDecoration: "none", padding: "13px 24px", borderRadius: 12,
                    whiteSpace: "nowrap",
                  }}>
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default About;