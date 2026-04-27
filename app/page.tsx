import Link from "next/link";

const services = [
  {
    title: "Permanent Recruitment",
    desc: "End-to-end hiring for mid to senior level roles across IT and non-IT sectors.",
    number: "01",
    color: "from-amber-500/20 to-amber-600/5",
    accent: "#0EA5E9",
  },
  {
    title: "Bulk / Blue-Collar Hiring",
    desc: "High-volume hiring with quick turnaround for plant, warehouse & field roles.",
    number: "03",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "#10B981",
  },
  {
    title: "Executive Search",
    desc: "Focused leadership hiring for business-critical C-suite and director roles.",
    number: "04",
    color: "from-violet-500/20 to-violet-600/5",
    accent: "#8B5CF6",
  },
  {
    title: "IT & Tech Recruitment",
    desc: "Specialized hiring for developers, engineers and digital transformation roles.",
    number: "05",
    color: "from-rose-500/20 to-rose-600/5",
    accent: "#F43F5E",
  },
  {
    title: "Non-IT & Support Functions",
    desc: "Sales, operations, finance, HR and support roles across all industries.",
    number: "06",
    color: "from-orange-500/20 to-orange-600/5",
    accent: "#F97316",
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
  "Pharmaceuticals",
  "Real Estate",
];

const stats = [
  { value: "500+", label: "Placements Made" },
  { value: "8+", label: "Industries Served" },
  { value: "48hr", label: "Avg. Turnaround" },
  { value: "100%", label: "Client Focused" },
];

const processSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "We deep dive into your role, culture, budget and timelines to align perfectly.",
    icon: "◎",
  },
  {
    step: "02",
    title: "Source & Screen",
    desc: "Targeted sourcing, shortlisting and multi-level screening of candidates.",
    icon: "⬡",
  },
  {
    step: "03",
    title: "Coordinate",
    desc: "Scheduling, follow-ups and feedback management with all stakeholders.",
    icon: "◈",
  },
  {
    step: "04",
    title: "Onboard",
    desc: "Offer negotiation, joining coordination and post-joining check-ins.",
    icon: "◉",
  },
];

const marqueeItems = [
  "Permanent Hiring",
  "Contract Staffing",
  "Bulk Recruitment",
  "Executive Search",
  "IT Talent",
  "Leadership Roles",
  "Blue Collar Hiring",
  "Verified Profiles",
];

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

        * { box-sizing: border-box; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #09090b;
        }

        .font-display {
          font-family: 'DM Serif Display', serif;
        }

        /* Marquee */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        /* Fade in up */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.25s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.4s ease both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.55s ease both; }

        /* Floating orb */
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.04); }
        }
        .orb { animation: float 7s ease-in-out infinite; }
        .orb2 { animation: float 9s 2s ease-in-out infinite; }

        /* Pulse dot */
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }

        /* Card hover */
        .service-card {
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        /* Process step connector */
        .step-line::after {
          content: '';
          position: absolute;
          top: 20px;
          right: -50%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, #3f3f46, transparent);
        }

        /* Grain overlay */
        .grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          border-radius: inherit;
        }

        .glow-amber { box-shadow: 0 0 40px rgba(245, 158, 11, 0.15); }
        .glow-amber-hover:hover { box-shadow: 0 0 50px rgba(245, 158, 11, 0.3); }

        .text-gradient {
          background: linear-gradient(135deg, #F59E0B 0%, #FCD34D 50%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .border-glow {
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        .border-glow:hover {
          border-color: rgba(245, 158, 11, 0.7);
        }

        .glass {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
        }
      `}</style>

      <main style={{ background: '#09090b', color: '#fafafa', fontFamily: "'DM Sans', sans-serif" }}>

        {/* ─── NAV ───
        <nav style={{
          position: 'sticky', top: 0, zIndex: 50,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(9,9,11,0.85)',
          backdropFilter: 'blur(20px)',
          padding: '0 2rem',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} className="pulse-dot" />
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, letterSpacing: '-0.01em' }}>VMS</span>
              <span style={{ fontSize: 11, color: '#71717a', letterSpacing: '0.08em', marginLeft: 4 }}>VELJI MANAGEMENT</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link href="#services" style={{ fontSize: 13, color: '#a1a1aa', padding: '6px 14px', borderRadius: 20, textDecoration: 'none', transition: 'color 0.2s' }}>Services</Link>
              <Link href="#process" style={{ fontSize: 13, color: '#a1a1aa', padding: '6px 14px', borderRadius: 20, textDecoration: 'none' }}>Process</Link>
              <Link href="#contact" style={{
                fontSize: 13, color: '#09090b', padding: '8px 18px', borderRadius: 20, textDecoration: 'none',
                background: '#F59E0B', fontWeight: 600, letterSpacing: '-0.01em',
              }}>Get in Touch</Link>
            </div>
          </div>
        </nav> */}

        {/* ─── HERO ─── */}
        <section style={{
          position: 'relative', overflow: 'hidden',
          minHeight: '90vh', display: 'flex', alignItems: 'center',
          padding: '80px 2rem',
        }}>
          {/* Background orbs */}
          <div className="orb" style={{
            position: 'absolute', top: '-10%', right: '-5%',
            width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div className="orb2" style={{
            position: 'absolute', bottom: '-20%', left: '-10%',
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Grid lines */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

              {/* Left */}
              <div>
                <div className="fade-up-1" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
                  borderRadius: 20, padding: '5px 14px', marginBottom: 28,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', display: 'block' }} className="pulse-dot" />
                  <span style={{ fontSize: 11, color: '#F59E0B', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Recruitment · All Hiring Types
                  </span>
                </div>

                <h1 className="font-display fade-up-2" style={{
                  fontSize: 'clamp(42px, 6vw, 76px)', lineHeight: 1.05,
                  letterSpacing: '-0.02em', marginBottom: 24, marginTop: 0,
                }}>
                  We connect the{' '}
                  <span className="text-gradient font-display" style={{ fontStyle: 'italic' }}>right talent</span>
                  <br />to the right roles.
                </h1>

                <p className="fade-up-3" style={{
                  fontSize: 16, lineHeight: 1.7, color: '#a1a1aa',
                  maxWidth: 480, marginBottom: 36,
                }}>
                  Velji Management Services delivers end-to-end recruitment — from entry-level to C-suite, 
                  IT to blue-collar. Structured, transparent, and built around your hiring goals.
                </p>

                <div className="fade-up-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
                  <Link href="#contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#F59E0B', color: '#09090b',
                    padding: '13px 28px', borderRadius: 12, fontWeight: 700,
                    fontSize: 14, textDecoration: 'none', letterSpacing: '-0.01em',
                    transition: 'all 0.2s',
                  }} className="glow-amber glow-amber-hover">
                    Hire Talent →
                  </Link>
                  <Link href="#contact" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#fafafa',
                    padding: '13px 28px', borderRadius: 12, fontWeight: 600,
                    fontSize: 14, textDecoration: 'none',
                    backdropFilter: 'blur(8px)',
                  }}>
                    Submit Your Resume
                  </Link>
                </div>

                {/* Mini trust row */}
                <div className="fade-up" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                  {["Screened Profiles", "IT & Non-IT", "Bulk Hiring"].map((t) => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: '#71717a' }}>
                      <span style={{ color: '#22c55e', fontSize: 14 }}>✓</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Stats card cluster */}
              <div style={{ position: 'relative' }}>
                {/* Main big card */}
                <div className="glass grain" style={{
                  borderRadius: 24, padding: 32, position: 'relative',
                }}>
                  <p style={{ fontSize: 11, color: '#71717a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24 }}>
                    Why companies choose VMS
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {stats.map((s) => (
                      <div key={s.label} style={{
                        background: 'rgba(255,255,255,0.04)',
                        borderRadius: 16, padding: '20px 16px',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <p className="font-display" style={{ fontSize: 34, color: '#F59E0B', marginBottom: 4, marginTop: 0, lineHeight: 1 }}>{s.value}</p>
                        <p style={{ fontSize: 11, color: '#71717a', margin: 0 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Decorative accent */}
                  <div style={{
                    position: 'absolute', top: -1, right: -1,
                    width: 80, height: 80, borderRadius: '0 24px 0 80px',
                    background: 'linear-gradient(135deg, rgba(245,158,11,0.3), transparent)',
                    pointerEvents: 'none',
                  }} />
                </div>

                {/* Floating badge */}
                <div style={{
                  position: 'absolute', bottom: -20, left: -20,
                  background: '#1a1a1f', border: '1px solid rgba(245,158,11,0.3)',
                  borderRadius: 14, padding: '12px 18px',
                  display: 'flex', alignItems: 'center', gap: 10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                }} className="orb2">
                  <span style={{ fontSize: 20 }}>⚡</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, margin: 0, color: '#fafafa' }}>Fast Placement</p>
                    <p style={{ fontSize: 11, color: '#71717a', margin: 0 }}>48hr avg. response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MARQUEE STRIP ─── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(245,158,11,0.04)',
          padding: '14px 0', overflow: 'hidden',
        }}>
          <div className="marquee-inner">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{
                fontSize: 12, color: '#71717a', letterSpacing: '0.1em',
                textTransform: 'uppercase', padding: '0 40px', whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: 40,
              }}>
                {item}
                <span style={{ color: '#F59E0B', fontSize: 8 }}>◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── SERVICES ─── */}
        <section id="services" style={{ padding: '100px 2rem' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, flexWrap: 'wrap', gap: 20 }}>
              <div>
                <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                  What We Do
                </p>
                <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginTop: 0, marginBottom: 12 }}>
                  Recruitment<br />Services
                </h2>
                <p style={{ color: '#71717a', fontSize: 15, maxWidth: 380 }}>
                  Six specialized hiring models. One consistent standard.
                </p>
              </div>
              <Link href="#contact" style={{
                fontSize: 13, color: '#F59E0B', padding: '10px 20px',
                border: '1px solid rgba(245,158,11,0.3)', borderRadius: 10,
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}>
                Discuss a requirement →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
              {services.map((service) => (
                <div key={service.title} className="service-card" style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20, padding: 28, cursor: 'default',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                    background: `linear-gradient(90deg, ${service.accent}, transparent)`,
                  }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <span style={{ fontSize: 11, color: '#3f3f46', fontWeight: 700, letterSpacing: '0.05em' }}>{service.number}</span>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: `linear-gradient(135deg, ${service.accent}25, transparent)`,
                      border: `1px solid ${service.accent}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 16,
                    }}>
                      ◈
                    </div>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, marginTop: 0, letterSpacing: '-0.01em' }}>{service.title}</h3>
                  <p style={{ fontSize: 13, color: '#71717a', lineHeight: 1.65, margin: 0 }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INDUSTRIES ─── */}
        <section style={{
          padding: '80px 2rem',
          background: 'linear-gradient(180deg, transparent, rgba(245,158,11,0.04), transparent)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Sectors</p>
              <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginTop: 0, marginBottom: 16 }}>
                Industries<br />We Serve
              </h2>
              <p style={{ fontSize: 14, color: '#71717a', lineHeight: 1.65, marginBottom: 0 }}>
                From high-growth tech companies to large-scale manufacturing operations, we hire across all major sectors.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {industries.map((item, i) => (
                <span key={item} style={{
                  padding: '10px 18px', borderRadius: 10,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: i % 3 === 0 ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.03)',
                  fontSize: 13, color: i % 3 === 0 ? '#FCD34D' : '#a1a1aa',
                  fontWeight: 500, letterSpacing: '-0.01em',
                  borderColor: i % 3 === 0 ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.08)',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section id="process" style={{ padding: '100px 2rem' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                How It Works
              </p>
              <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginTop: 0, marginBottom: 16 }}>
                Our Hiring Process
              </h2>
              <p style={{ color: '#71717a', fontSize: 15, maxWidth: 420, margin: '0 auto' }}>
                A transparent, structured approach from first conversation to onboarding.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, position: 'relative' }}>
              {/* Connector line */}
              <div style={{
                position: 'absolute', top: 52, left: '12.5%', right: '12.5%',
                height: 1, background: 'linear-gradient(90deg, transparent, #F59E0B40, #F59E0B40, transparent)',
                zIndex: 0,
              }} />

              {processSteps.map((step, i) => (
                <div key={step.step} style={{ position: 'relative', zIndex: 1, padding: '0 10px' }}>
                  {/* Step number circle */}
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: i === 0 ? '#F59E0B' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${i === 0 ? '#F59E0B' : 'rgba(255,255,255,0.1)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, color: i === 0 ? '#09090b' : '#a1a1aa',
                    marginBottom: 24,
                    boxShadow: i === 0 ? '0 0 30px rgba(245,158,11,0.4)' : 'none',
                  }}>
                    {step.icon}
                  </div>
                  <p style={{ fontSize: 10, color: '#3f3f46', letterSpacing: '0.08em', marginBottom: 8 }}>{step.step}</p>
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 10, marginTop: 0, letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: 13, color: '#71717a', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section id="contact" style={{ padding: '100px 2rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{
              borderRadius: 28, overflow: 'hidden', position: 'relative',
              background: 'linear-gradient(135deg, #1a1200 0%, #0f0f12 50%, #0a1628 100%)',
              border: '1px solid rgba(245,158,11,0.2)',
              padding: '64px 60px',
            }}>
              {/* BG elements */}
              <div style={{
                position: 'absolute', top: -60, right: -60,
                width: 300, height: 300, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: -80, left: '30%',
                width: 400, height: 200, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
                    Get Started
                  </p>
                  <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginTop: 0, marginBottom: 16 }}>
                    Ready to hire or explore opportunities?
                  </h2>
                  <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, marginBottom: 0 }}>
                    Share your hiring requirement or resume with us. Our team will reach out promptly and guide you through the next steps.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <Link href="/contact" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    background: '#F59E0B', color: '#09090b',
                    padding: '15px 28px', borderRadius: 14, fontWeight: 700,
                    fontSize: 14, textDecoration: 'none', letterSpacing: '-0.01em',
                    boxShadow: '0 0 40px rgba(245,158,11,0.3)',
                    transition: 'all 0.2s',
                  }}>
                    Enquire for Recruitment →
                  </Link>
                  <Link href="/contact" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#a1a1aa',
                    padding: '15px 28px', borderRadius: 14, fontWeight: 500,
                    fontSize: 14, textDecoration: 'none',
                  }}>
                    Submit Your Resume
                  </Link>

                  <p style={{ fontSize: 11, color: '#52525b', textAlign: 'center', marginTop: 4 }}>
                    Update this section with official contact details once ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '32px 2rem', textAlign: 'center',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="font-display" style={{ fontSize: 16 }}>VMS</span>
              <span style={{ fontSize: 11, color: '#52525b', letterSpacing: '0.06em' }}>VELJI MANAGEMENT SERVICES</span>
            </div>
            <p style={{ fontSize: 12, color: '#52525b', margin: 0 }}>
              Recruitment Services · All Hiring Types
            </p>
            <div style={{ display: 'flex', gap: 20 }}>
              <Link href="#services" style={{ fontSize: 12, color: '#52525b', textDecoration: 'none' }}>Services</Link>
              <Link href="#process" style={{ fontSize: 12, color: '#52525b', textDecoration: 'none' }}>Process</Link>
              <Link href="#contact" style={{ fontSize: 12, color: '#F59E0B', textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
};

export default Home;
