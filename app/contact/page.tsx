import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const contactItems = [
  {
    icon: <MapPin size={18} />,
    label: "Address",
    lines: [
      "Shakti Complex, Tilak Marg,",
      "Near New Bus Stand, Rajgarh",
      "Dhar, Madhya Pradesh — 454116",
    ],
    action: { href: "https://share.google/zkyRSmzHT1De6oGXC", text: "Open in Maps →" },
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    lines: ["+91 9203732776", "+91 9755032776"],
    action: { href: "tel:+919203732776", text: "Call now →" },
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    lines: ["info@veljimanagement.com"],
    action: { href: "mailto:info@veljimanagement.com", text: "Send email →" },
  },
];

const socials = [
  {
    href: "https://www.linkedin.com/company/velji-management-services/",
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    desc: "Follow us on LinkedIn",
    color: "rgba(10,102,194,0.15)",
    border: "rgba(10,102,194,0.3)",
    hover: "rgba(10,102,194,0.25)",
  },
  {
    href: "https://www.instagram.com/vmspvt.ltd",
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    desc: "@vmspvt.ltd",
    color: "rgba(225,48,108,0.1)",
    border: "rgba(225,48,108,0.25)",
    hover: "rgba(225,48,108,0.2)",
  },
  {
    href: "https://chat.whatsapp.com/KxMvP8DboYTDFu4bAnaflJ",
    icon: <FaWhatsapp size={18} />,
    label: "WhatsApp Group",
    desc: "Join our community",
    color: "rgba(37,211,102,0.1)",
    border: "rgba(37,211,102,0.25)",
    hover: "rgba(37,211,102,0.2)",
  },
];

const Contact = () => {
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
        .orb { animation: float 8s ease-in-out infinite; }

        .contact-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 28px 26px;
          transition: border-color .25s, transform .25s;
        }
        .contact-card:hover {
          border-color: rgba(245,158,11,0.3);
          transform: translateY(-4px);
        }

        .social-card {
          display: flex; align-items: center; gap: 16px;
          border-radius: 14px; padding: 18px 20px;
          text-decoration: none;
          transition: transform .2s, box-shadow .2s;
          border: 1px solid;
        }
        .social-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.35);
        }

        .map-frame {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color .3s;
        }
        .map-frame:hover { border-color: rgba(245,158,11,0.3); }

        .action-link {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 12px; color: #F59E0B; text-decoration: none;
          letter-spacing: 0.02em; margin-top: 10px;
          transition: opacity .2s;
        }
        .action-link:hover { opacity: .75; }

        .text-gradient {
          background: linear-gradient(135deg,#F59E0B,#FCD34D,#F59E0B);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
      `}</style>

      <main style={{ background: '#09090b', color: '#fafafa', minHeight: '100vh', fontFamily: "'DM Sans',sans-serif" }}>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: '88px 2rem 96px' }}>
          <div className="orb" style={{
            position: 'absolute', top: '-15%', right: '-8%', width: 520, height: 520, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-10%', left: '-5%', width: 380, height: 380, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div className="fu1" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
              borderRadius: 20, padding: '5px 14px', marginBottom: 28,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', display: 'block' }} className="pulse-dot" />
              <span style={{ fontSize: 11, color: '#F59E0B', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Contact Us
              </span>
            </div>

            <h1 className="font-display fu2" style={{
              fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1.05,
              letterSpacing: '-0.02em', marginBottom: 22, marginTop: 0, maxWidth: 680,
            }}>
              Let's build something{' '}
              <span className="text-gradient font-display" style={{ fontStyle: 'italic' }}>great together.</span>
            </h1>

            <p className="fu3" style={{ fontSize: 16, lineHeight: 1.75, color: '#a1a1aa', maxWidth: 500 }}>
              Enquire about recruitment, management solutions, or business collaboration. We respond fast.
            </p>
          </div>
        </section>

        {/* ── CONTACT + MAP GRID ── */}
        <section style={{ padding: '0 2rem 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 32, alignItems: 'start' }}>

            {/* Left — contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                Reach Us
              </p>

              {contactItems.map((item) => (
                <div key={item.label} className="contact-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#F59E0B', flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#71717a', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {item.label}
                    </span>
                  </div>
                  {item.lines.map((line, i) => (
                    <p key={i} style={{ fontSize: 14, color: i === 0 ? '#e4e4e7' : '#a1a1aa', margin: '0 0 2px', lineHeight: 1.6 }}>
                      {line}
                    </p>
                  ))}
                  <a href={item.action.href} target="_blank" rel="noopener noreferrer" className="action-link">
                    {item.action.text} <ExternalLink size={11} />
                  </a>
                </div>
              ))}
            </div>

            {/* Right — map */}
            <div>
              <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
                Find Us
              </p>
              <div className="map-frame" style={{ height: 420 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.6!2d75.3025!3d22.5985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962ebb0e6f4a3cd%3A0x30d8d31e5d7def2b!2sVelji%20Management%20Services!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Velji Management Services location"
                />
              </div>
              <a
                href="https://share.google/zkyRSmzHT1De6oGXC"
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
                style={{ marginTop: 14, display: 'inline-flex' }}
              >
                Open in Google Maps <ExternalLink size={11} style={{ marginLeft: 4 }} />
              </a>
            </div>
          </div>
        </section>

        {/* ── SOCIAL LINKS ── */}
        <section style={{
          padding: '60px 2rem 80px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(255,255,255,0.01)',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, color: '#F59E0B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                  Connect With Us
                </p>
                <h2 className="font-display" style={{ fontSize: 'clamp(24px,3vw,38px)', letterSpacing: '-0.02em', marginTop: 0, marginBottom: 0 }}>
                  Follow & Stay Updated
                </h2>
              </div>
              <p style={{ fontSize: 13, color: '#71717a', maxWidth: 300, textAlign: 'right', lineHeight: 1.6 }}>
                Get the latest job openings, industry news, and hiring tips.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{
                    background: s.color,
                    borderColor: s.border,
                  }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: 'rgba(255,255,255,0.06)',
                    border: `1px solid ${s.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fafafa', flexShrink: 0,
                  }}>
                    {s.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#fafafa', margin: '0 0 3px' }}>{s.label}</p>
                    <p style={{ fontSize: 12, color: '#71717a', margin: 0 }}>{s.desc}</p>
                  </div>
                  <ExternalLink size={14} style={{ color: '#52525b', marginLeft: 'auto', flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA strip ── */}
        <section style={{ padding: '0 2rem 80px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{
              borderRadius: 24, position: 'relative', overflow: 'hidden',
              background: 'linear-gradient(135deg,#1a1200,#0f0f12,#0a1628)',
              border: '1px solid rgba(245,158,11,0.2)',
              padding: '48px 48px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: 32, flexWrap: 'wrap',
            }}>
              <div style={{
                position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(245,158,11,0.12) 0%,transparent 70%)', pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="font-display" style={{ fontSize: 'clamp(22px,3vw,36px)', letterSpacing: '-0.02em', marginTop: 0, marginBottom: 10 }}>
                  Ready to hire or looking for a job?
                </h2>
                <p style={{ fontSize: 14, color: '#a1a1aa', margin: 0, lineHeight: 1.65, maxWidth: 460 }}>
                  Share your requirement or resume. Our team will get back to you within 48 hours.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12, flexShrink: 0, position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
                <a href="mailto:info@veljimanagement.com" style={{
                  fontSize: 13, fontWeight: 600, color: '#09090b', background: '#F59E0B',
                  textDecoration: 'none', padding: '12px 22px', borderRadius: 12,
                  boxShadow: '0 0 30px rgba(245,158,11,0.25)', whiteSpace: 'nowrap',
                }}>
                  Email Us →
                </a>
                <a href="https://wa.me/919203732776" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: 13, fontWeight: 600, color: '#fafafa',
                  background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)',
                  textDecoration: 'none', padding: '12px 22px', borderRadius: 12, whiteSpace: 'nowrap',
                }}>
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Contact;
