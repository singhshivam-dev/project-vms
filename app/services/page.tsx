import Link from "next/link";

const serviceCategories = [
  {
    category: "Our Expertise",
    tagline: "Operational excellence across every function",
    accent: "#F59E0B",
    services: [
      { title: "Operations Management", icon: "◈" },
      { title: "Manpower & Facility Management", icon: "⬡" },
      { title: "Product & Dispatch Coordination", icon: "◎" },
      { title: "Supply Chain & Vendor Management", icon: "⬢" },
      { title: "Project Execution", icon: "◉" },
      { title: "HR & Admin Outsourcing", icon: "◆" },
    ],
  },
  {
    category: "Permanent Recruitment",
    tagline: "Long-term hiring solutions for building stable, high-performing teams.",
    accent: "#0EA5E9",
    services: [
      { title: "Mid to Senior Level Hiring", desc: "Experienced professionals for management and leadership roles across functions.", icon: "◈" },
      { title: "Entry Level Recruitment", desc: "Fresh talent and junior professionals ready to grow with your organization.", icon: "◎" },
      { title: "Specialized Role Hiring", desc: "Niche skill sets and domain experts for critical business functions.", icon: "⬡" },
    ],
  },
  {
    category: "Contract & Temporary Staffing",
    tagline: "Flexible workforce solutions for dynamic business needs.",
    accent: "#10B981",
    services: [
      { title: "Project-Based Hiring", desc: "Skilled professionals for fixed-term projects with defined timelines.", icon: "◉" },
      { title: "Seasonal Staffing", desc: "Workforce scaling for peak seasons, festivals, and high-demand periods.", icon: "◈" },
      { title: "Contract-to-Hire", desc: "Evaluate candidates on contract before transitioning to permanent roles.", icon: "◆" },
    ],
  },
  {
    category: "Bulk & Blue-Collar Hiring",
    tagline: "High-volume recruitment with speed and quality.",
    accent: "#F97316",
    services: [
      { title: "Manufacturing & Plant Hiring", desc: "Operators, technicians, and skilled workers for production facilities.", icon: "⬢" },
      { title: "Warehouse & Logistics", desc: "Warehouse staff, delivery personnel, and supply chain workforce.", icon: "◎" },
      { title: "Field & Support Staff", desc: "Sales executives, delivery agents, and on-ground support teams.", icon: "⬡" },
    ],
  },
  {
    category: "IT & Technology Recruitment",
    tagline: "Specialized hiring for the digital workforce.",
    accent: "#8B5CF6",
    services: [
      { title: "Software Development", desc: "Developers, engineers, and programmers across all tech stacks and platforms.", icon: "◈" },
      { title: "Data & Analytics", desc: "Data scientists, analysts, and business intelligence professionals.", icon: "◉" },
      { title: "Infrastructure & DevOps", desc: "System admins, cloud engineers, and infrastructure specialists.", icon: "⬡" },
      { title: "Product & Design", desc: "Product managers, UI/UX designers, and digital experience experts.", icon: "◆" },
    ],
  },
  {
    category: "Non-IT & Support Functions",
    tagline: "Core business roles across all departments.",
    accent: "#F43F5E",
    services: [
      { title: "Sales & Marketing", desc: "Business development, marketing professionals, and sales teams.", icon: "◎" },
      { title: "Finance & Accounting", desc: "Accountants, financial analysts, and finance operations staff.", icon: "◈" },
      { title: "Human Resources", desc: "HR generalists, talent acquisition, and people operations roles.", icon: "◉" },
      { title: "Operations & Administration", desc: "Office managers, admin staff, and operations coordinators.", icon: "⬢" },
    ],
  },
  {
    category: "Executive Search & Leadership Hiring",
    tagline: "Strategic recruitment for critical leadership positions.",
    accent: "#F59E0B",
    services: [
      { title: "C-Suite & Leadership", desc: "CEOs, CXOs, and senior leadership roles across industries.", icon: "◆" },
      { title: "Department Heads", desc: "Functional heads for sales, operations, technology, and more.", icon: "◈" },
      { title: "Board & Advisory Roles", desc: "Board members, advisors, and strategic consultants.", icon: "◉" },
    ],
  },
];

const industries = [
  { name: "IT & ITES" },
  { name: "Manufacturing" },
  { name: "FMCG & Retail" },
  { name: "Logistics & Supply Chain" },
  { name: "Healthcare" },
  { name: "BFSI" },
  { name: "E-commerce" },
  { name: "Hospitality" },
  { name: "Education" },
  { name: "Real Estate" },
  { name: "Pharmaceuticals" },
  { name: "Automotive" },
];

const whyUs = [
  { title: "Comprehensive Coverage", desc: "All types of roles from labor to leadership across all industries and geographies.", icon: "◎" },
  { title: "Fast Turnaround", desc: "Quick sourcing and screening with efficient coordination for faster closures.", icon: "⚡" },
  { title: "Quality First", desc: "Thoroughly screened and verified candidates who match your requirements.", icon: "◉" },
  { title: "Industry Expertise", desc: "Deep understanding of sector-specific hiring needs and talent pools.", icon: "◈" },
  { title: "End-to-End Support", desc: "From sourcing to onboarding, we manage the complete hiring lifecycle.", icon: "⬡" },
  { title: "Transparent Process", desc: "Clear communication, regular updates, and honest feedback throughout.", icon: "◆" },
];

const accentClass: Record<string, string> = {
  "#F59E0B": "service-card-amber",
  "#0EA5E9": "service-card-sky",
  "#10B981": "service-card-emerald",
  "#F97316": "service-card-orange",
  "#8B5CF6": "service-card-violet",
  "#F43F5E": "service-card-rose",
};

const Services = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #09090b; }
        .font-display { font-family: 'DM Serif Display', serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.25s ease both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.4s ease both; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner { display: flex; width: max-content; animation: marquee 28s linear infinite; }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.6); }
        }
        .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        .orb { animation: float 8s ease-in-out infinite; }

        .service-card {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-5px);
          border-color: rgba(245,158,11,0.35) !important;
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
        }

        .service-card-amber:hover  { border-color: rgba(245,158,11,0.4) !important; box-shadow: 0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(245,158,11,0.15) !important; }
        .service-card-sky:hover    { border-color: rgba(14,165,233,0.4) !important;  box-shadow: 0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(14,165,233,0.15) !important; }
        .service-card-emerald:hover{ border-color: rgba(16,185,129,0.4) !important;  box-shadow: 0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(16,185,129,0.15) !important; }
        .service-card-orange:hover { border-color: rgba(249,115,22,0.4) !important;  box-shadow: 0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(249,115,22,0.15) !important; }
        .service-card-violet:hover { border-color: rgba(139,92,246,0.4) !important;  box-shadow: 0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(139,92,246,0.15) !important; }
        .service-card-rose:hover   { border-color: rgba(244,63,94,0.4) !important;   box-shadow: 0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(244,63,94,0.15) !important; }

        .why-cell { transition: background 0.2s ease; }
        .why-cell:hover { background: rgba(255,255,255,0.03) !important; }

        .industry-card { transition: all 0.2s ease; }
        .industry-card:hover { background: rgba(245,158,11,0.06) !important; border-color: rgba(245,158,11,0.25) !important; }

        .text-gradient {
          background: linear-gradient(135deg, #F59E0B 0%, #FCD34D 60%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
        }
      `}</style>

      <main style={{ background: '#09090b', color: '#fafafa', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh' }}>

        {/* ─── NAV ───
        <nav style={{
          position: 'sticky', top: 0, zIndex: 50,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(9,9,11,0.85)',
          backdropFilter: 'blur(20px)',
          padding: '0 2rem',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#fafafa' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} className="pulse-dot" />
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18 }}>VMS</span>
              <span style={{ fontSize: 11, color: '#71717a', letterSpacing: '0.08em', marginLeft: 4 }}>VELJI MANAGEMENT</span>
            </Link>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link href="/" style={{ fontSize: 13, color: '#a1a1aa', padding: '6px 14px', borderRadius: 20, textDecoration: 'none' }}>Home</Link>
              <Link href="#industries" style={{ fontSize: 13, color: '#a1a1aa', padding: '6px 14px', borderRadius: 20, textDecoration: 'none' }}>Industries</Link>
              <Link href="#contact" style={{
                fontSize: 13, color: '#09090b', padding: '8px 18px', borderRadius: 20, textDecoration: 'none',
                background: '#F59E0B', fontWeight: 600,
              }}>Get in Touch</Link>
            </div>
          </div>
        </nav> */}

        {/* ─── HERO ─── */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '88px 2rem 80px' }}>
          {/* BG orbs */}
          <div className="orb" style={{
            position: 'absolute', top: '-15%', right: '-8%', width: 560, height: 560, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-10%', left: '-5%', width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', pointerEvents: 'none',
          }} />
          {/* Grid lines */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="fade-up-1" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: 20, padding: '5px 14px', marginBottom: 28,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', display: 'block' }} className="pulse-dot" />
              <span style={{ fontSize: 11, color: '#F59E0B', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Our Services
              </span>
            </div>

            <h1 className="font-display fade-up-2" style={{
              fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', marginBottom: 24, marginTop: 0, maxWidth: 760,
            }}>
              Complete Recruitment<br />
              <span className="text-gradient font-display" style={{ fontStyle: 'italic' }}>Solutions.</span> Every Role.
            </h1>

            <p className="fade-up-3" style={{ fontSize: 16, lineHeight: 1.7, color: '#a1a1aa', maxWidth: 540, marginBottom: 48 }}>
              From labor to leadership, IT to non-IT — end-to-end recruitment services across India for organizations of all sizes.
            </p>

            {/* Stat pills */}
            <div className="fade-up-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { label: "Pan-India Coverage", color: '#22c55e' },
                { label: "All Industries & Roles", color: '#F59E0B' },
                { label: "Entry to Executive Level", color: '#0EA5E9' },
              ].map((t) => (
                <div key={t.label} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 10, padding: '8px 16px', fontSize: 13, color: '#a1a1aa',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.color, display: 'block', flexShrink: 0 }} />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MARQUEE ─── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(245,158,11,0.03)', padding: '13px 0', overflow: 'hidden',
        }}>
          <div className="marquee-inner">
            {[...serviceCategories, ...serviceCategories].map((cat, i) => (
              <span key={i} style={{
                fontSize: 11, color: '#52525b', letterSpacing: '0.1em',
                textTransform: 'uppercase', padding: '0 40px', whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: 40,
              }}>
                {cat.category}
                <span style={{ color: '#F59E0B', fontSize: 7 }}>◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── SERVICE CATEGORIES ─── */}
        {serviceCategories.map((cat, idx) => (
          <section key={cat.category} style={{
            padding: '80px 2rem',
            background: idx % 2 === 0 ? '#09090b' : 'rgba(255,255,255,0.015)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              {/* Section header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    marginBottom: 12,
                  }}>
                    <span style={{ width: 24, height: 2, background: cat.accent, display: 'block', borderRadius: 2 }} />
                    <span style={{ fontSize: 11, color: cat.accent, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="font-display" style={{
                    fontSize: 'clamp(24px, 3vw, 38px)', letterSpacing: '-0.02em',
                    marginTop: 0, marginBottom: 8, lineHeight: 1.1,
                  }}>
                    {cat.category}
                  </h2>
                  {cat.tagline && (
                    <p style={{ fontSize: 14, color: '#71717a', margin: 0 }}>{cat.tagline}</p>
                  )}
                </div>
              </div>

              {/* Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: cat.services.length === 6
                  ? 'repeat(auto-fill, minmax(280px, 1fr))'
                  : 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 16,
              }}>
                {cat.services.map((service) => (
                  <div key={service.title} className={`service-card ${accentClass[cat.accent] ?? ''}`} style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 18, padding: '22px 24px',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    {/* top accent bar */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                      background: `linear-gradient(90deg, ${cat.accent}, transparent)`,
                    }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                      <div style={{
                        width: 38, height: 38, borderRadius: 10,
                        background: `${cat.accent}15`,
                        border: `1px solid ${cat.accent}25`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, color: cat.accent,
                      }}>
                        {service.icon}
                      </div>
                    </div>

                    <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, marginTop: 0, letterSpacing: '-0.01em', color: '#f4f4f5' }}>
                      {service.title}
                    </h3>
                    {'desc' in service && service.desc && (
                      <p style={{ fontSize: 13, color: '#71717a', lineHeight: 1.65, margin: 0 }}>{service.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ─── INDUSTRIES ─── */}
        <section id="industries" style={{
          padding: '100px 2rem',
          background: 'linear-gradient(180deg, transparent, rgba(245,158,11,0.04), transparent)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: 88 }}>
                <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Sectors</p>
                <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginTop: 0, marginBottom: 16 }}>
                  Industries<br />We Serve
                </h2>
                <p style={{ fontSize: 14, color: '#71717a', lineHeight: 1.7, marginBottom: 28 }}>
                  We understand the unique hiring needs of each industry and deliver candidates who fit your organizational culture.
                </p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)',
                  borderRadius: 8, padding: '8px 14px', fontSize: 13, color: '#F59E0B',
                }}>
                  12 Industries →
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                {industries.map((industry, i) => (
                  <div key={industry.name} className="industry-card" style={{
                    background: i % 4 === 0 ? 'rgba(245,158,11,0.06)' : 'rgba(255,255,255,0.025)',
                    border: `1px solid ${i % 4 === 0 ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.07)'}`,
                    borderRadius: 14, padding: '18px 16px',
                  }}>
                    <p style={{
                      fontSize: 14, fontWeight: 500, margin: 0,
                      color: i % 4 === 0 ? '#FCD34D' : '#a1a1aa',
                      letterSpacing: '-0.01em',
                    }}>
                      {industry.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHY VMS ─── */}
        <section style={{ padding: '100px 2rem' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                Our Advantage
              </p>
              <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4vw, 50px)', letterSpacing: '-0.02em', marginTop: 0, marginBottom: 12 }}>
                Why Choose VMS
              </h2>
              <p style={{ color: '#71717a', fontSize: 15, maxWidth: 400, margin: '0 auto' }}>
                What makes us your ideal recruitment partner.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
              {whyUs.map((item, i) => (
                <div key={item.title} className="why-cell" style={{
                  padding: '36px 32px',
                  borderRight: i % 3 !== 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, color: '#F59E0B', marginBottom: 20,
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 10, marginTop: 0, letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#71717a', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section id="contact" style={{ padding: '80px 2rem 100px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{
              borderRadius: 28, position: 'relative', overflow: 'hidden',
              background: 'linear-gradient(135deg, #1a1200, #0f0f12, #0a1628)',
              border: '1px solid rgba(245,158,11,0.2)',
              padding: '64px 60px',
            }}>
              <div style={{
                position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)', pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: -60, left: '25%', width: 500, height: 200, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)', pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Get Started</p>
                  <h2 className="font-display" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.02em', marginTop: 0, marginBottom: 16 }}>
                    Ready to find the right talent?
                  </h2>
                  <p style={{ fontSize: 15, color: '#a1a1aa', lineHeight: 1.65, margin: 0 }}>
                    Whether you need one role filled or a complete team built, we're ready to help. Share your requirement and we'll be in touch.
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Link href="/contact" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#F59E0B', color: '#09090b',
                    padding: '15px 28px', borderRadius: 14, fontWeight: 700,
                    fontSize: 14, textDecoration: 'none', letterSpacing: '-0.01em',
                    boxShadow: '0 0 40px rgba(245,158,11,0.25)',
                  }}>
                    Discuss Your Requirement →
                  </Link>
                  <Link href="/about" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#a1a1aa', padding: '15px 28px', borderRadius: 14, fontWeight: 500,
                    fontSize: 14, textDecoration: 'none',
                  }}>
                    Learn More About VMS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 2rem' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="font-display" style={{ fontSize: 16 }}>VMS</span>
              <span style={{ fontSize: 11, color: '#52525b', letterSpacing: '0.06em' }}>VELJI MANAGEMENT SERVICES</span>
            </div>
            <p style={{ fontSize: 12, color: '#52525b', margin: 0 }}>Recruitment Services · All Hiring Types</p>
            <div style={{ display: 'flex', gap: 20 }}>
              <Link href="/" style={{ fontSize: 12, color: '#52525b', textDecoration: 'none' }}>Home</Link>
              <Link href="#industries" style={{ fontSize: 12, color: '#52525b', textDecoration: 'none' }}>Industries</Link>
              <Link href="#contact" style={{ fontSize: 12, color: '#F59E0B', textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
};

export default Services;