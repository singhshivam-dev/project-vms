import Link from "next/link";

const serviceCategories = [
  {
    category: "Our Expertise",
    tagline: "Operational excellence across every function",
    accent: "#F59E0B",
    services: [
      { title: "Operations Management",          icon: "◈" },
      { title: "Manpower & Facility Management", icon: "⬡" },
      { title: "Product & Dispatch Coordination",icon: "◎" },
      { title: "Supply Chain & Vendor Management",icon: "⬢" },
      { title: "Project Execution",              icon: "◉" },
      { title: "HR & Admin Outsourcing",         icon: "◆" },
    ],
  },
  {
    category: "Permanent Recruitment",
    tagline: "Long-term hiring solutions for building stable, high-performing teams.",
    accent: "#0EA5E9",
    services: [
      { title: "Mid to Senior Level Hiring", desc: "Experienced professionals for management and leadership roles.", icon: "◈" },
      { title: "Entry Level Recruitment",    desc: "Fresh talent and junior professionals ready to grow.", icon: "◎" },
      { title: "Specialized Role Hiring",    desc: "Niche skill sets and domain experts for critical functions.", icon: "⬡" },
    ],
  },
  {
    category: "Contract & Temporary Staffing",
    tagline: "Flexible workforce solutions for dynamic business needs.",
    accent: "#10B981",
    services: [
      { title: "Project-Based Hiring", desc: "Skilled professionals for fixed-term projects with defined timelines.", icon: "◉" },
      { title: "Seasonal Staffing",    desc: "Workforce scaling for peak seasons and high-demand periods.", icon: "◈" },
      { title: "Contract-to-Hire",     desc: "Evaluate candidates on contract before transitioning to permanent roles.", icon: "◆" },
    ],
  },
  {
    category: "Bulk & Blue-Collar Hiring",
    tagline: "High-volume recruitment with speed and quality.",
    accent: "#F97316",
    services: [
      { title: "Manufacturing & Plant Hiring", desc: "Operators, technicians, and skilled workers for production facilities.", icon: "⬢" },
      { title: "Warehouse & Logistics",        desc: "Warehouse staff, delivery personnel, and supply chain workforce.", icon: "◎" },
      { title: "Field & Support Staff",        desc: "Sales executives, delivery agents, and on-ground support teams.", icon: "⬡" },
    ],
  },
  {
    category: "IT & Technology Recruitment",
    tagline: "Specialized hiring for the digital workforce.",
    accent: "#8B5CF6",
    services: [
      { title: "Software Development",    desc: "Developers and engineers across all tech stacks and platforms.", icon: "◈" },
      { title: "Data & Analytics",        desc: "Data scientists, analysts, and business intelligence professionals.", icon: "◉" },
      { title: "Infrastructure & DevOps", desc: "System admins, cloud engineers, and infrastructure specialists.", icon: "⬡" },
      { title: "Product & Design",        desc: "Product managers, UI/UX designers, and digital experience experts.", icon: "◆" },
    ],
  },
  {
    category: "Non-IT & Support Functions",
    tagline: "Core business roles across all departments.",
    accent: "#F43F5E",
    services: [
      { title: "Sales & Marketing",          desc: "Business development, marketing professionals, and sales teams.", icon: "◎" },
      { title: "Finance & Accounting",        desc: "Accountants, financial analysts, and finance operations staff.", icon: "◈" },
      { title: "Human Resources",             desc: "HR generalists, talent acquisition, and people operations roles.", icon: "◉" },
      { title: "Operations & Administration", desc: "Office managers, admin staff, and operations coordinators.", icon: "⬢" },
    ],
  },
  {
    category: "Executive Search & Leadership Hiring",
    tagline: "Strategic recruitment for critical leadership positions.",
    accent: "#F59E0B",
    services: [
      { title: "C-Suite & Leadership",  desc: "CEOs, CXOs, and senior leadership roles across industries.", icon: "◆" },
      { title: "Department Heads",      desc: "Functional heads for sales, operations, technology, and more.", icon: "◈" },
      { title: "Board & Advisory Roles",desc: "Board members, advisors, and strategic consultants.", icon: "◉" },
    ],
  },
];

const industries = [
  "IT & ITES","Manufacturing","FMCG & Retail","Logistics & Supply Chain",
  "Healthcare","BFSI","E-commerce","Hospitality","Education","Real Estate",
  "Pharmaceuticals","Automotive",
];

const whyUs = [
  { title: "Comprehensive Coverage", desc: "All role types, all industries, all geographies.", icon: "◎" },
  { title: "Fast Turnaround",        desc: "Quick sourcing and screening for faster closures.", icon: "⚡" },
  { title: "Quality First",          desc: "Screened and verified candidates every time.", icon: "◉" },
  { title: "Industry Expertise",     desc: "Deep understanding of sector-specific talent pools.", icon: "◈" },
  { title: "End-to-End Support",     desc: "From sourcing to onboarding — we own the full cycle.", icon: "⬡" },
  { title: "Transparent Process",    desc: "Clear communication and honest feedback throughout.", icon: "◆" },
];

const accentClass: Record<string, string> = {
  "#F59E0B": "scard-amber",
  "#0EA5E9": "scard-sky",
  "#10B981": "scard-emerald",
  "#F97316": "scard-orange",
  "#8B5CF6": "scard-violet",
  "#F43F5E": "scard-rose",
};

const Services = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #09090b; margin: 0; }
        .font-display { font-family: 'DM Serif Display', serif; }

        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        .fu1{animation:fadeUp .7s .10s ease both}
        .fu2{animation:fadeUp .7s .25s ease both}
        .fu3{animation:fadeUp .7s .40s ease both}

        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .mq-inner{display:flex;width:max-content;animation:marquee 28s linear infinite}

        @keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.6)}}
        .pulse-dot{animation:pulseDot 2s ease-in-out infinite}

        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
        .orb{animation:float 8s ease-in-out infinite}

        .text-gradient{
          background:linear-gradient(135deg,#F59E0B 0%,#FCD34D 60%,#F59E0B 100%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
        }

        /* ── Service cards ── */
        .scard{
          background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07);
          border-radius:18px;padding:22px 20px;position:relative;overflow:hidden;
          transition:transform .25s,border-color .25s,box-shadow .25s;cursor:default;
        }
        .scard:hover{transform:translateY(-5px);box-shadow:0 16px 48px rgba(0,0,0,.4)}
        .scard-amber:hover {border-color:rgba(245,158,11,.4)!important;box-shadow:0 16px 48px rgba(0,0,0,.4),inset 0 0 0 1px rgba(245,158,11,.15)!important}
        .scard-sky:hover   {border-color:rgba(14,165,233,.4)!important; box-shadow:0 16px 48px rgba(0,0,0,.4),inset 0 0 0 1px rgba(14,165,233,.15)!important}
        .scard-emerald:hover{border-color:rgba(16,185,129,.4)!important;box-shadow:0 16px 48px rgba(0,0,0,.4),inset 0 0 0 1px rgba(16,185,129,.15)!important}
        .scard-orange:hover{border-color:rgba(249,115,22,.4)!important; box-shadow:0 16px 48px rgba(0,0,0,.4),inset 0 0 0 1px rgba(249,115,22,.15)!important}
        .scard-violet:hover{border-color:rgba(139,92,246,.4)!important; box-shadow:0 16px 48px rgba(0,0,0,.4),inset 0 0 0 1px rgba(139,92,246,.15)!important}
        .scard-rose:hover  {border-color:rgba(244,63,94,.4)!important;  box-shadow:0 16px 48px rgba(0,0,0,.4),inset 0 0 0 1px rgba(244,63,94,.15)!important}

        /* ── Why VMS cells ── */
        .why-cell{transition:background .2s}
        .why-cell:hover{background:rgba(255,255,255,.03)!important}

        /* ── Industry cards ── */
        .ind-card{transition:all .2s}
        .ind-card:hover{background:rgba(245,158,11,.06)!important;border-color:rgba(245,158,11,.25)!important}

        /* ── Layout classes ── */
        .hero-pad    { padding:80px 2rem 72px }
        .sp          { padding:80px 2rem }
        .ind-grid    { display:grid; grid-template-columns:1fr 2fr; gap:64px; align-items:start }
        .ind-sticky  { position:sticky; top:88px }
        .ind-cards   { display:grid; grid-template-columns:repeat(3,1fr); gap:10px }
        .why-grid    { display:grid; grid-template-columns:repeat(3,1fr); gap:2px }
        .cta-grid    { display:grid; grid-template-columns:1.3fr 1fr; gap:48px; align-items:center }
        .stat-pills  { display:flex; gap:12px; flex-wrap:wrap }
        .cta-box     { padding:56px 52px }

        /* ── TABLET 768–1023 ── */
        @media(min-width:768px) and (max-width:1023px){
          .hero-pad  { padding:64px 1.75rem 56px }
          .sp        { padding:64px 1.75rem }
          .ind-grid  { grid-template-columns:1fr; gap:32px }
          .ind-sticky{ position:static }
          .ind-cards { grid-template-columns:repeat(2,1fr) }
          .why-grid  { grid-template-columns:repeat(2,1fr) }
          .cta-grid  { grid-template-columns:1fr; gap:28px }
          .cta-box   { padding:44px 36px }
        }

        /* ── MOBILE <768 ── */
        @media(max-width:767px){
          .hero-pad  { padding:52px 1.25rem 44px }
          .sp        { padding:52px 1.25rem }
          .ind-grid  { grid-template-columns:1fr; gap:24px }
          .ind-sticky{ position:static }
          .ind-cards { grid-template-columns:repeat(2,1fr); gap:8px }
          .why-grid  { grid-template-columns:1fr }
          .why-cell  { border-right:none!important; border-bottom:1px solid rgba(255,255,255,.06)!important; padding:28px 20px!important }
          .why-cell:last-child { border-bottom:none!important }
          .cta-grid  { grid-template-columns:1fr; gap:24px }
          .cta-box   { padding:32px 22px!important; border-radius:18px!important }
          .stat-pills{ gap:8px }
          .stat-pills > div { font-size:12px!important; padding:7px 12px!important }
        }
      `}</style>

      <main style={{ background:'#09090b', color:'#fafafa', fontFamily:"'DM Sans',sans-serif", minHeight:'100vh' }}>

        {/* ── HERO ── */}
        <section className="hero-pad" style={{ position:'relative', overflow:'hidden' }}>
          <div className="orb" style={{ position:'absolute',top:'-15%',right:'-8%',width:560,height:560,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,158,11,.1) 0%,transparent 70%)',pointerEvents:'none' }} />
          <div style={{ position:'absolute',bottom:'-10%',left:'-5%',width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(139,92,246,.07) 0%,transparent 70%)',pointerEvents:'none' }} />
          <div style={{ position:'absolute',inset:0,pointerEvents:'none',backgroundImage:'linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)',backgroundSize:'60px 60px' }} />

          <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
            <div className="fu1" style={{ display:'inline-flex',alignItems:'center',gap:8,background:'rgba(245,158,11,.1)',border:'1px solid rgba(245,158,11,.25)',borderRadius:20,padding:'5px 14px',marginBottom:24 }}>
              <span style={{ width:6,height:6,borderRadius:'50%',background:'#F59E0B',display:'block' }} className="pulse-dot" />
              <span style={{ fontSize:11,color:'#F59E0B',fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase' }}>Our Services</span>
            </div>

            <h1 className="font-display fu2" style={{ fontSize:'clamp(34px,6vw,72px)',lineHeight:1.05,letterSpacing:'-.02em',marginBottom:20,marginTop:0,maxWidth:720 }}>
              Complete Recruitment<br />
              <span className="text-gradient font-display" style={{ fontStyle:'italic' }}>Solutions.</span> Every Role.
            </h1>

            <p className="fu3" style={{ fontSize:15,lineHeight:1.75,color:'#a1a1aa',maxWidth:500,marginBottom:36 }}>
              From labor to leadership, IT to non-IT — end-to-end recruitment across India for organizations of all sizes.
            </p>

            <div className="fu3 stat-pills">
              {[{label:"Pan-India Coverage",color:'#22c55e'},{label:"All Industries & Roles",color:'#F59E0B'},{label:"Entry to Executive Level",color:'#0EA5E9'}].map(t=>(
                <div key={t.label} style={{ display:'flex',alignItems:'center',gap:8,background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.08)',borderRadius:10,padding:'8px 14px',fontSize:13,color:'#a1a1aa' }}>
                  <span style={{ width:7,height:7,borderRadius:'50%',background:t.color,display:'block',flexShrink:0 }} />
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,.06)',borderBottom:'1px solid rgba(255,255,255,.06)',background:'rgba(245,158,11,.03)',padding:'13px 0',overflow:'hidden' }}>
          <div className="mq-inner">
            {[...serviceCategories,...serviceCategories].map((cat,i)=>(
              <span key={i} style={{ fontSize:11,color:'#52525b',letterSpacing:'.1em',textTransform:'uppercase',padding:'0 40px',whiteSpace:'nowrap',display:'flex',alignItems:'center',gap:40 }}>
                {cat.category}<span style={{ color:'#F59E0B',fontSize:7 }}>◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── SERVICE SECTIONS ── */}
        {serviceCategories.map((cat, idx) => (
          <section key={cat.category} className="sp" style={{ background:idx%2===0?'#09090b':'rgba(255,255,255,.015)',borderBottom:'1px solid rgba(255,255,255,.05)' }}>
            <div style={{ maxWidth:1200,margin:'0 auto' }}>

              {/* Header */}
              <div style={{ marginBottom:36 }}>
                <div style={{ display:'inline-flex',alignItems:'center',gap:8,marginBottom:10 }}>
                  <span style={{ width:22,height:2,background:cat.accent,display:'block',borderRadius:2 }} />
                  <span style={{ fontSize:11,color:cat.accent,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase' }}>
                    {String(idx+1).padStart(2,'0')}
                  </span>
                </div>
                <h2 className="font-display" style={{ fontSize:'clamp(22px,3vw,36px)',letterSpacing:'-.02em',marginTop:0,marginBottom:6,lineHeight:1.1 }}>{cat.category}</h2>
                {cat.tagline && <p style={{ fontSize:14,color:'#71717a',margin:0 }}>{cat.tagline}</p>}
              </div>

              {/* Cards — auto-fill handles most breakpoints; minmax floor lowered for mobile */}
              <div style={{ display:'grid',gridTemplateColumns:`repeat(auto-fill,minmax(${cat.services.length===6?'240px':'260px'},1fr))`,gap:14 }}>
                {cat.services.map(s=>(
                  <div key={s.title} className={`scard ${accentClass[cat.accent]??''}`}>
                    <div style={{ position:'absolute',top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${cat.accent},transparent)` }} />
                    <div style={{ width:36,height:36,borderRadius:9,background:`${cat.accent}15`,border:`1px solid ${cat.accent}25`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:15,color:cat.accent,marginBottom:14 }}>
                      {s.icon}
                    </div>
                    <h3 style={{ fontSize:14,fontWeight:600,marginBottom:7,marginTop:0,letterSpacing:'-.01em',color:'#f4f4f5' }}>{s.title}</h3>
                    {'desc' in s && s.desc && <p style={{ fontSize:13,color:'#71717a',lineHeight:1.65,margin:0 }}>{s.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── INDUSTRIES ── */}
        <section id="industries" className="sp" style={{ background:'linear-gradient(180deg,transparent,rgba(245,158,11,.04),transparent)',borderTop:'1px solid rgba(255,255,255,.05)',borderBottom:'1px solid rgba(255,255,255,.05)' }}>
          <div style={{ maxWidth:1200,margin:'0 auto' }}>
            <div className="ind-grid">

              <div className="ind-sticky">
                <p style={{ fontSize:11,color:'#F59E0B',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10 }}>Sectors</p>
                <h2 className="font-display" style={{ fontSize:'clamp(24px,3vw,40px)',lineHeight:1.1,letterSpacing:'-.02em',marginTop:0,marginBottom:14 }}>
                  Industries<br />We Serve
                </h2>
                <p style={{ fontSize:14,color:'#71717a',lineHeight:1.7,marginBottom:22 }}>
                  We understand each industry's unique hiring needs and deliver candidates who fit your culture.
                </p>
                <div style={{ display:'inline-flex',alignItems:'center',gap:6,background:'rgba(245,158,11,.08)',border:'1px solid rgba(245,158,11,.2)',borderRadius:8,padding:'8px 14px',fontSize:13,color:'#F59E0B' }}>
                  12 Industries →
                </div>
              </div>

              <div className="ind-cards">
                {industries.map((name,i)=>(
                  <div key={name} className="ind-card" style={{ background:i%4===0?'rgba(245,158,11,.06)':'rgba(255,255,255,.025)',border:`1px solid ${i%4===0?'rgba(245,158,11,.2)':'rgba(255,255,255,.07)'}`,borderRadius:14,padding:'16px 14px' }}>
                    <p style={{ fontSize:13,fontWeight:500,margin:0,color:i%4===0?'#FCD34D':'#a1a1aa',letterSpacing:'-.01em' }}>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY VMS ── */}
        <section className="sp">
          <div style={{ maxWidth:1200,margin:'0 auto' }}>
            <div style={{ textAlign:'center',marginBottom:52 }}>
              <p style={{ fontSize:11,color:'#F59E0B',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:10 }}>Our Advantage</p>
              <h2 className="font-display" style={{ fontSize:'clamp(26px,4vw,48px)',letterSpacing:'-.02em',marginTop:0,marginBottom:10 }}>Why Choose VMS</h2>
              <p style={{ color:'#71717a',fontSize:15,maxWidth:380,margin:'0 auto' }}>What makes us your ideal recruitment partner.</p>
            </div>

            <div className="why-grid">
              {whyUs.map((item,i)=>(
                <div key={item.title} className="why-cell" style={{
                  padding:'32px 28px',
                  borderRight:i%3!==2?'1px solid rgba(255,255,255,.06)':'none',
                  borderBottom:i<3?'1px solid rgba(255,255,255,.06)':'none',
                }}>
                  <div style={{ width:42,height:42,borderRadius:11,background:'rgba(245,158,11,.1)',border:'1px solid rgba(245,158,11,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:17,color:'#F59E0B',marginBottom:18 }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize:15,fontWeight:600,marginBottom:8,marginTop:0,letterSpacing:'-.01em' }}>{item.title}</h3>
                  <p style={{ fontSize:13,color:'#71717a',lineHeight:1.65,margin:0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="sp">
          <div style={{ maxWidth:1100,margin:'0 auto' }}>
            <div className="cta-box" style={{ borderRadius:24,position:'relative',overflow:'hidden',background:'linear-gradient(135deg,#1a1200,#0f0f12,#0a1628)',border:'1px solid rgba(245,158,11,.2)' }}>
              <div style={{ position:'absolute',top:-80,right:-80,width:360,height:360,borderRadius:'50%',background:'radial-gradient(circle,rgba(245,158,11,.12) 0%,transparent 70%)',pointerEvents:'none' }} />
              <div className="cta-grid" style={{ position:'relative',zIndex:1 }}>
                <div>
                  <p style={{ fontSize:11,color:'#F59E0B',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:14 }}>Get Started</p>
                  <h2 className="font-display" style={{ fontSize:'clamp(22px,3.5vw,42px)',lineHeight:1.1,letterSpacing:'-.02em',marginTop:0,marginBottom:14 }}>Ready to find the right talent?</h2>
                  <p style={{ fontSize:15,color:'#a1a1aa',lineHeight:1.7,margin:0 }}>One role or a full team — share your requirement and we'll be in touch.</p>
                </div>
                <div style={{ display:'flex',flexDirection:'column',gap:12 }}>
                  <Link href="/contact" style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'#F59E0B',color:'#09090b',padding:'14px 24px',borderRadius:12,fontWeight:700,fontSize:14,textDecoration:'none',boxShadow:'0 0 36px rgba(245,158,11,.25)' }}>
                    Discuss Your Requirement →
                  </Link>
                  <Link href="/about" style={{ display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(255,255,255,.04)',border:'1px solid rgba(255,255,255,.1)',color:'#a1a1aa',padding:'14px 24px',borderRadius:12,fontWeight:500,fontSize:14,textDecoration:'none' }}>
                    Learn More About VMS
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

export default Services;