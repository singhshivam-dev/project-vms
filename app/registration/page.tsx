import Image from 'next/image';
<<<<<<< HEAD

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
  { n: "01", title: "Scan the QR", desc: "Open any UPI app and scan the QR code to make your payment." },
  { n: "02", title: "Take a Screenshot", desc: "Capture your payment confirmation screen once the transaction is complete." },
  { n: "03", title: "Send on WhatsApp", desc: "Send the screenshot along with your full name and email to either number below." },
];

export default function RegistrationPage() {
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
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fu1 { animation: fadeUp .7s .1s ease both; }
        .fu2 { animation: fadeUp .7s .25s ease both; }
        .fu3 { animation: fadeUp .7s .4s ease both; }
        .fu4 { animation: fadeUp .7s .55s ease both; }

        @keyframes float {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-14px); }
        }
        .orb { animation: float 8s ease-in-out infinite; }

        /* QR glow */
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
          border-radius:16px; padding:22px 28px;
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
          border-radius:18px; padding:28px 24px;
          transition: border-color .25s, transform .25s;
        }
        .step-card:hover {
          border-color: rgba(245,158,11,0.3);
          transform: translateY(-4px);
        }
      `}</style>

      <main style={{ background:'#09090b', color:'#fafafa', minHeight:'100vh', fontFamily:"'DM Sans',sans-serif" }}>

        {/* ── HERO ── */}
        <section style={{ position:'relative', overflow:'hidden', padding:'88px 2rem 100px' }}>
          {/* orbs */}
          <div className="orb" style={{
            position:'absolute', top:'-15%', right:'-8%', width:500, height:500, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(245,158,11,0.11) 0%, transparent 70%)', pointerEvents:'none',
          }} />
          <div style={{
            position:'absolute', bottom:'-10%', left:'-5%', width:380, height:380, borderRadius:'50%',
            background:'radial-gradient(circle, rgba(37,211,102,0.07) 0%, transparent 70%)', pointerEvents:'none',
          }} />
          {/* grid lines */}
          <div style={{
            position:'absolute', inset:0, pointerEvents:'none',
            backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
            backgroundSize:'60px 60px',
          }} />

          <div style={{ maxWidth:900, margin:'0 auto', textAlign:'center', position:'relative', zIndex:1 }}>
            <div className="fu1" style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.25)',
              borderRadius:20, padding:'5px 14px', marginBottom:28,
            }}>
              <span style={{ width:6, height:6, borderRadius:'50%', background:'#F59E0B', display:'block' }} className="pulse-dot" />
              <span style={{ fontSize:11, color:'#F59E0B', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase' }}>
                Registration & Payment
              </span>
            </div>

            <h1 className="font-display fu2" style={{
              fontSize:'clamp(38px,6vw,68px)', lineHeight:1.05,
              letterSpacing:'-0.02em', marginBottom:20, marginTop:0,
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

            <p className="fu3" style={{ fontSize:16, lineHeight:1.7, color:'#a1a1aa', maxWidth:520, margin:'0 auto' }}>
              Complete your registration in minutes — scan, pay, and send us your receipt on WhatsApp.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding:'0 2rem 80px' }}>
          <div style={{ maxWidth:900, margin:'0 auto' }}>
            <p style={{ fontSize:11, color:'#F59E0B', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:28, textAlign:'center' }}>
              How It Works
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16 }}>
              {steps.map((s) => (
                <div key={s.n} className="step-card">
                  <div style={{
                    width:40, height:40, borderRadius:10,
                    background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.2)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:12, fontWeight:700, color:'#F59E0B', marginBottom:16,
                  }}>
                    {s.n}
                  </div>
                  <h3 style={{ fontSize:15, fontWeight:600, marginBottom:8, marginTop:0, letterSpacing:'-0.01em' }}>{s.title}</h3>
                  <p style={{ fontSize:13, color:'#71717a', lineHeight:1.65, margin:0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN CARD ── */}
        <section style={{ padding:'0 2rem 100px' }}>
          <div style={{ maxWidth:760, margin:'0 auto' }}>
            <div style={{
              background:'rgba(255,255,255,0.025)',
              border:'1px solid rgba(255,255,255,0.08)',
              borderRadius:28, padding:'48px 40px',
              display:'flex', flexDirection:'column', alignItems:'center', gap:40,
            }}>

              {/* QR */}
              <div>
                <p style={{ fontSize:11, color:'#52525b', letterSpacing:'0.1em', textTransform:'uppercase', textAlign:'center', marginBottom:20 }}>
                  Scan to Pay
                </p>
                <div className="qr-card" style={{
                  background:'#fff',
                  borderRadius:20, padding:16,
                  border:'1px solid rgba(245,158,11,0.2)',
                }}>
                  <div style={{ position:'relative', width:240, height:240 }}>
                    <Image
                      src="/QR.jpeg"
                      alt="Payment QR Code"
                      fill
                      className="object-contain"
                      style={{ borderRadius:10 }}
                      priority
                    />
                  </div>
                </div>
                <p style={{ fontSize:12, color:'#52525b', textAlign:'center', marginTop:14 }}>
                  Supports PhonePe · GPay · Paytm · UPI
                </p>
              </div>

              {/* Divider */}
              <div style={{ width:'100%', display:'flex', alignItems:'center', gap:16 }}>
                <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.06)' }} />
                <span style={{ fontSize:11, color:'#3f3f46', letterSpacing:'0.08em', textTransform:'uppercase', whiteSpace:'nowrap' }}>
                  Then send receipt on WhatsApp
                </span>
                <div style={{ flex:1, height:1, background:'rgba(255,255,255,0.06)' }} />
              </div>

              {/* WhatsApp buttons */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, width:'100%' }}>
                {contactNumbers.map((num) => (
                  <a
=======
import React from 'react';

// Defining the shape of our contact data
interface ContactNumber {
  label: string;
  value: string;
}

export default function RegistrationPage() {
  const contactNumbers: ContactNumber[] = [
    { label: "Number 1", value: "9203732776" },
    { label: "Number 2", value: "9755032776" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
     

      {/* Hero Header */}
      <header className="bg-sky-900 py-20 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Registration & Payment
          </h1>
          <p className="text-sky-100 text-lg opacity-90">
            Complete your registration by following the payment instructions below.
          </p>
        </div>
      </header>

      {/* Payment Card */}
      <main className="max-w-4xl mx-auto px-6 -mt-12 mb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-14 border border-slate-100">
          <div className="flex flex-col items-center">
            
            {/* QR Code Container */}
            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-sky-200 mb-10 group transition-colors hover:border-sky-400">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <Image 
                  src="/QR.jpeg" 
                  alt="Payment QR Code" 
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Instruction Text */}
            <div className="text-center space-y-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
                Pay on this QR code and send receipt on WhatsApp with your details on numbers below
              </h2>

              {/* WhatsApp Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
                {contactNumbers.map((num) => (
                  <a 
>>>>>>> 1fe99da1edc35182851257ac3a604f478a3f0c9d
                    key={num.value}
                    href={`https://wa.me/${num.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
<<<<<<< HEAD
                    className="wa-btn"
                  >
                    <span style={{ fontSize:10, color:'rgba(37,211,102,0.7)', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:700 }}>
                      WhatsApp {num.label}
                    </span>
                    <span style={{ fontFamily:'monospace', fontSize:22, fontWeight:700, color:'#fafafa', letterSpacing:'0.04em' }}>
                      {num.display}
                    </span>
                    <span style={{ fontSize:11, color:'#52525b' }}>Tap to open WhatsApp →</span>
=======
                    className="flex flex-col items-center justify-center bg-sky-900 hover:bg-sky-950 text-white p-6 rounded-2xl transition-all transform hover:-translate-y-1 shadow-lg group"
                  >
                    <span className="text-sky-300 text-[10px] uppercase tracking-[0.2em] font-black mb-2 group-hover:text-white transition-colors">
                      WhatsApp {num.label}
                    </span>
                    <span className="text-xl md:text-2xl font-mono font-bold">
                      {num.value}
                    </span>
>>>>>>> 1fe99da1edc35182851257ac3a604f478a3f0c9d
                  </a>
                ))}
              </div>

<<<<<<< HEAD
              {/* Note */}
              <div style={{
                width:'100%',
                background:'rgba(245,158,11,0.05)',
                border:'1px solid rgba(245,158,11,0.15)',
                borderRadius:14, padding:'18px 22px',
                display:'flex', gap:14, alignItems:'flex-start',
              }}>
                <span style={{ fontSize:18, flexShrink:0, marginTop:2 }}>◎</span>
                <p style={{ fontSize:13, color:'#a1a1aa', lineHeight:1.65, margin:0 }}>
                  Please include your <strong style={{ color:'#fafafa', fontWeight:600 }}>Full Name</strong> and{' '}
                  <strong style={{ color:'#fafafa', fontWeight:600 }}>Email Address</strong> when sending the payment screenshot. This helps us process your registration quickly.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
=======
              {/* Requirements Note */}
              <div className="pt-8 flex flex-col items-center gap-3">
                <div className="h-1.5 w-16 bg-sky-900 rounded-full"></div>
                <p className="text-slate-500 text-sm italic">
                  *Please mention your <strong>Full Name</strong> and <strong>Email Address</strong> when sending the screenshot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
>>>>>>> 1fe99da1edc35182851257ac3a604f478a3f0c9d
  );
}