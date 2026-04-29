import Image from 'next/image';

interface ContactNumber {
  label: string;
  value: string;
  display: string;
}

const contactNumbers: ContactNumber[] = [
  { label: "Number 1", value: "919203732776", display: "9203732776" },
  { label: "Number 2", value: "919755032776", display: "9755032776" },
];

const steps = [
  { n: "01", title: "Scan the QR",        desc: "Open any UPI app and scan the QR code to make your payment." },
  { n: "02", title: "Take a Screenshot",  desc: "Capture your payment confirmation once the transaction is done." },
  { n: "03", title: "Send on WhatsApp",   desc: "Send the screenshot with your full name and email to either number below." },
];

export default function RegistrationPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        /* ── Overflow fix — stops orbs/wide elements from creating horizontal scroll ── */
        html, body { overflow-x: hidden; max-width: 100vw; }

        body { font-family: 'DM Sans', sans-serif; background: #09090b; margin: 0; }
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
        .fu1 { animation: fadeUp .7s .10s ease both; }
        .fu2 { animation: fadeUp .7s .25s ease both; }
        .fu3 { animation: fadeUp .7s .40s ease both; }

        @keyframes float {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-14px); }
        }
        .orb { animation: float 8s ease-in-out infinite; }

        @keyframes qrGlow {
          0%,100% { box-shadow: 0 0 24px rgba(245,158,11,0.15); }
          50%      { box-shadow: 0 0 48px rgba(245,158,11,0.32); }
        }
        .qr-card { animation: qrGlow 4s ease-in-out infinite; }

        .wa-btn {
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:6px; text-decoration:none;
          background: rgba(37,211,102,0.1);
          border: 1px solid rgba(37,211,102,0.25);
          border-radius:16px; padding:20px 16px;
          transition: background .2s, border-color .2s, transform .2s, box-shadow .2s;
        }
        .wa-btn:hover {
          background: rgba(37,211,102,0.17);
          border-color: rgba(37,211,102,0.5);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .step-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius:18px; padding:24px 20px;
          transition: border-color .25s, transform .25s;
        }
        .step-card:hover {
          border-color: rgba(245,158,11,0.3);
          transform: translateY(-4px);
        }

        /* ── Layout classes ── */
        .hero-pad   { padding: 80px 2rem 88px; }
        .steps-pad  { padding: 0 2rem 72px; }
        .card-pad   { padding: 0 2rem 88px; }
        .main-card  { padding: 44px 40px; }
        .steps-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:14px; }
        .wa-grid    { display:grid; grid-template-columns:1fr 1fr; gap:14px; width:100%; }
        .qr-size    { width:220px; height:220px; }

        /* divider label — wraps on mobile instead of causing overflow */
        .divider-label {
          font-size:11px; color:#3f3f46; letter-spacing:.08em;
          text-transform:uppercase; white-space:nowrap;
        }

        /* ── TABLET 768–1023 ── */
        @media(min-width:768px) and (max-width:1023px){
          .hero-pad  { padding: 64px 1.75rem 72px; }
          .steps-pad { padding: 0 1.75rem 56px; }
          .card-pad  { padding: 0 1.75rem 72px; }
        }

        /* ── MOBILE <768 ── */
        @media(max-width:767px){
          .hero-pad        { padding: 52px 1.25rem 60px; }
          .steps-pad       { padding: 0 1.25rem 52px; }
          .card-pad        { padding: 0 1.25rem 64px; }
          .main-card       { padding: 28px 20px !important; border-radius: 20px !important; }
          .qr-size         { width: 180px !important; height: 180px !important; }
          .wa-grid         { grid-template-columns: 1fr !important; gap: 10px; }
          .wa-btn          { padding: 18px 16px !important; }
          .wa-num          { font-size: 20px !important; }
          .divider-label   { white-space: normal; text-align: center; font-size: 10px; }
          .steps-grid      { grid-template-columns: 1fr; }
        }
      `}</style>

      <main style={{ background:'#09090b', color:'#fafafa', minHeight:'100vh', fontFamily:"'DM Sans',sans-serif", overflowX:'hidden' }}>

        {/* ── HERO ── */}
        <section className="hero-pad" style={{ position:'relative', overflow:'hidden' }}>
          {/* Orbs — contained by overflow:hidden on section */}
          <div className="orb" style={{
            position:'absolute', top:'-15%', right:'-8%',
            width:500, height:500, borderRadius:'50%',
            background:'radial-gradient(circle,rgba(245,158,11,0.11) 0%,transparent 70%)',
            pointerEvents:'none',
          }} />
          <div style={{
            position:'absolute', bottom:'-10%', left:'-5%',
            width:380, height:380, borderRadius:'50%',
            background:'radial-gradient(circle,rgba(37,211,102,0.07) 0%,transparent 70%)',
            pointerEvents:'none',
          }} />
          {/* Grid lines */}
          <div style={{
            position:'absolute', inset:0, pointerEvents:'none',
            backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
            backgroundSize:'60px 60px',
          }} />

          <div style={{ maxWidth:860, margin:'0 auto', textAlign:'center', position:'relative', zIndex:1 }}>
            {/* Badge */}
            <div className="fu1" style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.25)',
              borderRadius:20, padding:'5px 14px', marginBottom:24,
            }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'#F59E0B', display:'block' }} className="pulse-dot" />
              <span style={{ fontSize:11, color:'#F59E0B', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase' }}>
                Registration & Payment
              </span>
            </div>

            <h1 className="font-display fu2" style={{
              fontSize:'clamp(32px,6vw,64px)', lineHeight:1.07,
              letterSpacing:'-0.02em', marginBottom:18, marginTop:0,
            }}>
              One step away from your{' '}
              <span style={{
                fontStyle:'italic',
                background:'linear-gradient(135deg,#F59E0B,#FCD34D,#F59E0B)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>
                next opportunity.
              </span>
            </h1>

            <p className="fu3" style={{ fontSize:15, lineHeight:1.75, color:'#a1a1aa', maxWidth:480, margin:'0 auto' }}>
              Complete your registration in minutes — scan, pay, and send us your receipt on WhatsApp.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="steps-pad">
          <div style={{ maxWidth:900, margin:'0 auto' }}>
            <p style={{ fontSize:11, color:'#F59E0B', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:24, textAlign:'center' }}>
              How It Works
            </p>
            <div className="steps-grid">
              {steps.map((s) => (
                <div key={s.n} className="step-card">
                  <div style={{
                    width:38, height:38, borderRadius:10,
                    background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.2)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:12, fontWeight:700, color:'#F59E0B', marginBottom:14,
                  }}>
                    {s.n}
                  </div>
                  <h3 style={{ fontSize:15, fontWeight:600, marginBottom:7, marginTop:0, letterSpacing:'-0.01em' }}>{s.title}</h3>
                  <p style={{ fontSize:13, color:'#71717a', lineHeight:1.65, margin:0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN CARD ── */}
        <section className="card-pad">
          <div style={{ maxWidth:720, margin:'0 auto' }}>
            <div className="main-card" style={{
              background:'rgba(255,255,255,0.025)',
              border:'1px solid rgba(255,255,255,0.08)',
              borderRadius:28,
              display:'flex', flexDirection:'column', alignItems:'center', gap:36,
            }}>

              {/* QR */}
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                <p style={{ fontSize:11, color:'#52525b', letterSpacing:'0.1em', textTransform:'uppercase', textAlign:'center', marginBottom:18, marginTop:0 }}>
                  Scan to Pay
                </p>
                <div className="qr-card" style={{
                  background:'#fff', borderRadius:18, padding:14,
                  border:'1px solid rgba(245,158,11,0.2)',
                }}>
                  <div className="qr-size" style={{ position:'relative' }}>
                    <Image
                      src="/QR.jpeg"
                      alt="Payment QR Code"
                      fill
                      style={{ objectFit:'contain', borderRadius:8 }}
                      priority
                    />
                  </div>
                </div>
                <p style={{ fontSize:12, color:'#52525b', textAlign:'center', marginTop:12, marginBottom:0 }}>
                  PhonePe · GPay · Paytm · UPI
                </p>
              </div>

              {/* Divider */}
              <div style={{ width:'100%', display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.06)', minWidth:0 }} />
                <span className="divider-label">Then send receipt on WhatsApp</span>
                <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.06)', minWidth:0 }} />
              </div>

              {/* WhatsApp buttons */}
              <div className="wa-grid">
                {contactNumbers.map((num) => (
                  <a
                    key={num.value}
                    href={`https://wa.me/${num.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wa-btn"
                  >
                    <span style={{ fontSize:10, color:'rgba(37,211,102,0.7)', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:700 }}>
                      WhatsApp {num.label}
                    </span>
                    <span className="wa-num" style={{ fontFamily:'monospace', fontSize:22, fontWeight:700, color:'#fafafa', letterSpacing:'0.04em' }}>
                      {num.display}
                    </span>
                    <span style={{ fontSize:11, color:'#52525b' }}>Tap to open WhatsApp →</span>
                  </a>
                ))}
              </div>

              {/* Note */}
              <div style={{
                width:'100%',
                background:'rgba(245,158,11,0.05)',
                border:'1px solid rgba(245,158,11,0.15)',
                borderRadius:14, padding:'16px 18px',
                display:'flex', gap:12, alignItems:'flex-start',
              }}>
                <span style={{ fontSize:16, flexShrink:0, marginTop:2 }}>◎</span>
                <p style={{ fontSize:13, color:'#a1a1aa', lineHeight:1.7, margin:0 }}>
                  Please include your{' '}
                  <strong style={{ color:'#fafafa', fontWeight:600 }}>Full Name</strong> and{' '}
                  <strong style={{ color:'#fafafa', fontWeight:600 }}>Email Address</strong>{' '}
                  when sending the payment screenshot. This helps us process your registration quickly.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}