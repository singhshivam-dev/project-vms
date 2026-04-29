import Link from "next/link";

const services = [
  { title: "Permanent Recruitment",    desc: "End-to-end hiring for mid to senior level roles across IT and non-IT sectors.", number: "01", accent: "#0EA5E9" },
  { title: "Bulk / Blue-Collar Hiring",desc: "High-volume hiring with quick turnaround for plant, warehouse & field roles.",   number: "02", accent: "#10B981" },
  { title: "Executive Search",         desc: "Focused leadership hiring for business-critical C-suite and director roles.",     number: "03", accent: "#8B5CF6" },
  { title: "IT & Tech Recruitment",    desc: "Specialized hiring for developers, engineers and digital transformation roles.",  number: "04", accent: "#F43F5E" },
  { title: "Non-IT & Support Functions",desc: "Sales, operations, finance, HR and support roles across all industries.",       number: "05", accent: "#F97316" },
];

const industries = [
  "IT & ITES","Manufacturing","FMCG & Retail","Logistics & Supply Chain",
  "Healthcare","BFSI","E-commerce","Hospitality","Pharmaceuticals","Real Estate",
];

const stats = [
  { value: "500+", label: "Placements Made"   },
  { value: "8+",   label: "Industries Served" },
  { value: "48hr", label: "Avg. Turnaround"   },
  { value: "100%", label: "Client Focused"    },
];

const processSteps = [
  { step: "01", title: "Understand",      desc: "We deep dive into your role, culture, budget and timelines.", icon: "◎" },
  { step: "02", title: "Source & Screen", desc: "Targeted sourcing, shortlisting and multi-level screening.",  icon: "⬡" },
  { step: "03", title: "Coordinate",      desc: "Scheduling, follow-ups and feedback with all stakeholders.",  icon: "◈" },
  { step: "04", title: "Onboard",         desc: "Offer negotiation, joining coordination and check-ins.",      icon: "◉" },
];

const marqueeItems = [
  "Permanent Hiring","Contract Staffing","Bulk Recruitment","Executive Search",
  "IT Talent","Leadership Roles","Blue Collar Hiring","Verified Profiles",
];

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #09090b; margin: 0; }
        .font-display { font-family: 'DM Serif Display', serif; }

        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .marquee-inner { display:flex; width:max-content; animation:marquee 20s linear infinite; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        .fu1 { animation:fadeUp .7s .10s ease both; }
        .fu2 { animation:fadeUp .7s .25s ease both; }
        .fu3 { animation:fadeUp .7s .40s ease both; }
        .fu4 { animation:fadeUp .7s .55s ease both; }
        .fu0 { animation:fadeUp .7s ease both; }

        @keyframes float { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-20px) scale(1.04)} }
        .orb  { animation:float 7s ease-in-out infinite; }
        .orb2 { animation:float 9s 2s ease-in-out infinite; }

        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.5)} }
        .pulse-dot { animation:pulseDot 2s ease-in-out infinite; }

        .service-card { transition:transform .3s ease,border-color .3s,box-shadow .3s; }
        .service-card:hover { transform:translateY(-6px); box-shadow:0 20px 60px rgba(0,0,0,.5); }

        .glass { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.08); backdrop-filter:blur(12px); }

        .text-gradient {
          background:linear-gradient(135deg,#F59E0B 0%,#FCD34D 50%,#F59E0B 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }

        /* ── Layout classes ── */
        .hero-grid       { display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
        .industries-grid { display:grid; grid-template-columns:1fr 2fr; gap:60px; align-items:center; }
        .process-grid    { display:grid; grid-template-columns:repeat(4,1fr); gap:2px; position:relative; }
        .cta-grid        { display:grid; grid-template-columns:1.2fr 1fr; gap:48px; align-items:center; }

        .process-line {
          position:absolute; top:26px; left:12.5%; right:12.5%; height:1px;
          background:linear-gradient(90deg,transparent,rgba(245,158,11,.35),rgba(245,158,11,.35),transparent);
          z-index:0;
        }

        /* ── Shared section padding ── */
        .sp  { padding:100px 2rem; }
        .sps { padding:80px 2rem; }

        /* ─────────── TABLET 768–1023 ─────────── */
        @media(min-width:768px) and (max-width:1023px){
          .hero-grid       { grid-template-columns:1fr; gap:40px; }
          .hero-stats      { display:block; }
          .float-badge     { display:none; }
          .industries-grid { grid-template-columns:1fr; gap:28px; }
          .process-grid    { grid-template-columns:1fr 1fr; gap:16px; }
          .process-line    { display:none; }
          .cta-grid        { grid-template-columns:1fr; gap:28px; }
          .cta-box         { padding:44px 36px !important; }
          .sp              { padding:72px 1.75rem; }
          .sps             { padding:56px 1.75rem; }
        }

        /* ─────────── MOBILE <768 ─────────── */
        @media(max-width:767px){
          .hero-section    { padding:56px 1.25rem 52px !important; min-height:unset !important; }
          .hero-grid       { grid-template-columns:1fr; gap:36px; }
          .hero-stats      { display:none; }          /* hidden; stats baked inline */
          .float-badge     { display:none; }
          .hero-btns       { flex-direction:column !important; }
          .hero-btns a     { width:100%; justify-content:center !important; }
          .trust-row       { gap:12px !important; }
          .industries-grid { grid-template-columns:1fr; gap:24px; }
          .process-grid    { grid-template-columns:1fr 1fr; gap:14px; }
          .process-line    { display:none; }
          .cta-grid        { grid-template-columns:1fr; gap:24px; }
          .cta-box         { padding:32px 22px !important; border-radius:18px !important; }
          .svc-header      { flex-direction:column !important; align-items:flex-start !important; }
          .sp              { padding:60px 1.25rem; }
          .sps             { padding:48px 1.25rem; }
        }
      `}</style>

      <main style={{ background:'#09090b', color:'#fafafa', fontFamily:"'DM Sans',sans-serif" }}>

        {/* ── HERO ── */}
        <section className="hero-section" style={{
          position:'relative', overflow:'hidden',
          minHeight:'90vh', display:'flex', alignItems:'center',
          padding:'80px 2rem',
        }}>
          <div className="orb" style={{ position:'absolute',top:'-10%',right:'-5%',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,158,11,.12) 0%,transparent 70%)',pointerEvents:'none' }} />
          <div className="orb2" style={{ position:'absolute',bottom:'-20%',left:'-10%',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(14,165,233,.08) 0%,transparent 70%)',pointerEvents:'none' }} />
          <div style={{ position:'absolute',inset:0,pointerEvents:'none',backgroundImage:'linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)',backgroundSize:'60px 60px' }} />

          <div style={{ maxWidth:1200,margin:'0 auto',width:'100%',position:'relative',zIndex:1 }}>
            <div className="hero-grid">

              {/* Left content */}
              <div>
                <div className="fu1" style={{ display:'inline-flex',alignItems:'center',gap:8,background:'rgba(245,158,11,.1)',border:'1px solid rgba(245,158,11,.25)',borderRadius:20,padding:'5px 14px',marginBottom:22 }}>
                  <span style={{ width:6,height:6,borderRadius:'50%',background:'#F59E0B',display:'block' }} className="pulse-dot" />
                  <span style={{ fontSize:11,color:'#F59E0B',fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase' }}>Recruitment · All Hiring Types</span>
                </div>

                <h1 className="font-display fu2" style={{ fontSize:'clamp(34px,6vw,76px)',lineHeight:1.05,letterSpacing:'-.02em',marginBottom:18,marginTop:0 }}>
                  We connect the{' '}
                  <span className="text-gradient font-display" style={{ fontStyle:'italic' }}>right talent</span>
                  <br />to the right roles.
                </h1>

                <p className="fu3" style={{ fontSize:15,lineHeight:1.75,color:'#a1a1aa',maxWidth:480,marginBottom:28 }}>
                  Velji Management Services delivers end-to-end recruitment — from entry-level to C-suite, IT to blue-collar. Structured, transparent, and built around your hiring goals.
                </p>

                <div className="fu4 hero-btns" style={{ display:'flex',gap:12,flexWrap:'wrap',marginBottom:32 }}>
                  <Link href="/contact" style={{ display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,background:'#F59E0B',color:'#09090b',padding:'13px 28px',borderRadius:12,fontWeight:700,fontSize:14,textDecoration:'none',boxShadow:'0 0 36px rgba(245,158,11,.22)' }}>
                    Hire Talent →
                  </Link>
                  <Link href="/contact" style={{ display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.12)',color:'#fafafa',padding:'13px 28px',borderRadius:12,fontWeight:600,fontSize:14,textDecoration:'none' }}>
                    Submit Your Resume
                  </Link>
                </div>

                <div className="fu0 trust-row" style={{ display:'flex',gap:20,flexWrap:'wrap' }}>
                  {["Screened Profiles","IT & Non-IT","Bulk Hiring"].map(t=>(
                    <div key={t} style={{ display:'flex',alignItems:'center',gap:7,fontSize:12,color:'#71717a' }}>
                      <span style={{ color:'#22c55e',fontSize:14 }}>✓</span>{t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — stats card (hidden on mobile via CSS) */}
              <div className="hero-stats" style={{ position:'relative' }}>
                <div className="glass" style={{ borderRadius:24,padding:32,position:'relative' }}>
                  <p style={{ fontSize:11,color:'#71717a',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:24 }}>Why companies choose VMS</p>
                  <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:16 }}>
                    {stats.map(s=>(
                      <div key={s.label} style={{ background:'rgba(255,255,255,.04)',borderRadius:16,padding:'20px 16px',border:'1px solid rgba(255,255,255,.06)' }}>
                        <p className="font-display" style={{ fontSize:34,color:'#F59E0B',marginBottom:4,marginTop:0,lineHeight:1 }}>{s.value}</p>
                        <p style={{ fontSize:11,color:'#71717a',margin:0 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ position:'absolute',top:-1,right:-1,width:80,height:80,borderRadius:'0 24px 0 80px',background:'linear-gradient(135deg,rgba(245,158,11,.3),transparent)',pointerEvents:'none' }} />
                </div>

                <div className="float-badge orb2" style={{ position:'absolute',bottom:-20,left:-20,background:'#1a1a1f',border:'1px solid rgba(245,158,11,.3)',borderRadius:14,padding:'12px 18px',display:'flex',alignItems:'center',gap:10,boxShadow:'0 20px 40px rgba(0,0,0,.4)' }}>
                  <span style={{ fontSize:20 }}>⚡</span>
                  <div>
                    <p style={{ fontSize:13,fontWeight:600,margin:0,color:'#fafafa' }}>Fast Placement</p>
                    <p style={{ fontSize:11,color:'#71717a',margin:0 }}>48hr avg. response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,.06)',borderBottom:'1px solid rgba(255,255,255,.06)',background:'rgba(245,158,11,.04)',padding:'14px 0',overflow:'hidden' }}>
          <div className="marquee-inner">
            {[...marqueeItems,...marqueeItems].map((item,i)=>(
              <span key={i} style={{ fontSize:12,color:'#71717a',letterSpacing:'.1em',textTransform:'uppercase',padding:'0 40px',whiteSpace:'nowrap',display:'flex',alignItems:'center',gap:40 }}>
                {item}<span style={{ color:'#F59E0B',fontSize:8 }}>◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── SERVICES ── */}
        <section className="sp" id="services">
          <div style={{ maxWidth:1200,margin:'0 auto' }}>
            <div className="svc-header" style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:44,flexWrap:'wrap',gap:16 }}>
              <div>
                <p style={{ fontSize:11,color:'#F59E0B',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10 }}>What We Do</p>
                <h2 className="font-display" style={{ fontSize:'clamp(26px,4vw,50px)',lineHeight:1.1,letterSpacing:'-.02em',marginTop:0,marginBottom:8 }}>Recruitment Services</h2>
                <p style={{ color:'#71717a',fontSize:15,maxWidth:360,margin:0 }}>Specialized hiring models. One consistent standard.</p>
              </div>
              <Link href="/contact" style={{ fontSize:13,color:'#F59E0B',padding:'10px 18px',border:'1px solid rgba(245,158,11,.3)',borderRadius:10,textDecoration:'none',whiteSpace:'nowrap',alignSelf:'flex-start' }}>
                Discuss a requirement →
              </Link>
            </div>

            <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))',gap:16 }}>
              {services.map(s=>(
                <div key={s.title} className="service-card" style={{ background:'rgba(255,255,255,.02)',border:'1px solid rgba(255,255,255,.07)',borderRadius:20,padding:24,cursor:'default',position:'relative',overflow:'hidden' }}>
                  <div style={{ position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${s.accent},transparent)` }} />
                  <div style={{ display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:16 }}>
                    <span style={{ fontSize:11,color:'#3f3f46',fontWeight:700,letterSpacing:'.05em' }}>{s.number}</span>
                    <div style={{ width:34,height:34,borderRadius:9,background:`${s.accent}20`,border:`1px solid ${s.accent}30`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,color:s.accent }}>◈</div>
                  </div>
                  <h3 style={{ fontSize:15,fontWeight:600,marginBottom:8,marginTop:0,letterSpacing:'-.01em' }}>{s.title}</h3>
                  <p style={{ fontSize:13,color:'#71717a',lineHeight:1.65,margin:0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section className="sps" style={{ background:'linear-gradient(180deg,transparent,rgba(245,158,11,.04),transparent)',borderTop:'1px solid rgba(255,255,255,.05)',borderBottom:'1px solid rgba(255,255,255,.05)' }}>
          <div style={{ maxWidth:1200,margin:'0 auto' }}>
            <div className="industries-grid">
              <div>
                <p style={{ fontSize:11,color:'#F59E0B',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10 }}>Sectors</p>
                <h2 className="font-display" style={{ fontSize:'clamp(24px,3.5vw,42px)',lineHeight:1.1,letterSpacing:'-.02em',marginTop:0,marginBottom:12 }}>Industries<br />We Serve</h2>
                <p style={{ fontSize:14,color:'#71717a',lineHeight:1.7,margin:0 }}>From high-growth tech to large-scale manufacturing, we hire across all major sectors.</p>
              </div>
              <div style={{ display:'flex',flexWrap:'wrap',gap:10 }}>
                {industries.map((item,i)=>(
                  <span key={item} style={{ padding:'9px 16px',borderRadius:10,border:`1px solid ${i%3===0?'rgba(245,158,11,.2)':'rgba(255,255,255,.08)'}`,background:i%3===0?'rgba(245,158,11,.08)':'rgba(255,255,255,.03)',fontSize:13,color:i%3===0?'#FCD34D':'#a1a1aa',fontWeight:500 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="sp" id="process">
          <div style={{ maxWidth:1200,margin:'0 auto' }}>
            <div style={{ textAlign:'center',marginBottom:52 }}>
              <p style={{ fontSize:11,color:'#F59E0B',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10 }}>How It Works</p>
              <h2 className="font-display" style={{ fontSize:'clamp(26px,4vw,50px)',lineHeight:1.1,letterSpacing:'-.02em',marginTop:0,marginBottom:12 }}>Our Hiring Process</h2>
              <p style={{ color:'#71717a',fontSize:15,maxWidth:400,margin:'0 auto' }}>A transparent, structured approach from first conversation to onboarding.</p>
            </div>

            <div className="process-grid">
              <div className="process-line" />
              {processSteps.map((step,i)=>(
                <div key={step.step} style={{ position:'relative',zIndex:1,padding:'0 8px' }}>
                  <div style={{ width:52,height:52,borderRadius:'50%',background:i===0?'#F59E0B':'rgba(255,255,255,.04)',border:`1px solid ${i===0?'#F59E0B':'rgba(255,255,255,.1)'}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,color:i===0?'#09090b':'#a1a1aa',marginBottom:18,boxShadow:i===0?'0 0 28px rgba(245,158,11,.4)':'none' }}>
                    {step.icon}
                  </div>
                  <p style={{ fontSize:10,color:'#3f3f46',letterSpacing:'.08em',marginBottom:6 }}>{step.step}</p>
                  <h3 style={{ fontSize:15,fontWeight:600,marginBottom:8,marginTop:0,letterSpacing:'-.01em' }}>{step.title}</h3>
                  <p style={{ fontSize:13,color:'#71717a',lineHeight:1.65,margin:0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="sp" id="contact">
          <div style={{ maxWidth:1100,margin:'0 auto' }}>
            <div className="cta-box" style={{ borderRadius:24,overflow:'hidden',position:'relative',background:'linear-gradient(135deg,#1a1200 0%,#0f0f12 50%,#0a1628 100%)',border:'1px solid rgba(245,158,11,.2)',padding:'56px 52px' }}>
              <div style={{ position:'absolute',top:-60,right:-60,width:280,height:280,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,158,11,.15) 0%,transparent 70%)',pointerEvents:'none' }} />
              <div className="cta-grid" style={{ position:'relative',zIndex:1 }}>
                <div>
                  <p style={{ fontSize:11,color:'#F59E0B',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:12 }}>Get Started</p>
                  <h2 className="font-display" style={{ fontSize:'clamp(22px,3.5vw,42px)',lineHeight:1.1,letterSpacing:'-.02em',marginTop:0,marginBottom:12 }}>Ready to hire or explore opportunities?</h2>
                  <p style={{ fontSize:15,color:'#a1a1aa',lineHeight:1.7,marginBottom:0 }}>Share your hiring requirement or resume. Our team will reach out promptly.</p>
                </div>
                <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
                  <Link href="/contact" style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#F59E0B',color:'#09090b',padding:'14px 24px',borderRadius:12,fontWeight:700,fontSize:14,textDecoration:'none',boxShadow:'0 0 36px rgba(245,158,11,.28)' }}>
                    Enquire for Recruitment →
                  </Link>
                  <Link href="/contact" style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',color:'#a1a1aa',padding:'14px 24px',borderRadius:12,fontWeight:500,fontSize:14,textDecoration:'none' }}>
                    Submit Your Resume
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

export default Home;