"use client";

<<<<<<< HEAD
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const navLinks = [
  { href: "/",            label: "Home" },
  { href: "/services",    label: "Services" },
  { href: "/registration",label: "Registration" },
  { href: "/about",       label: "About" },
  { href: "/contact",     label: "Contact" },
];

const socials = [
  {
    href:  "https://www.linkedin.com/company/velji-management-services/",
    icon:  <FaLinkedin size={16} />,
    label: "LinkedIn",
  },
  {
    href:  "https://www.instagram.com/vmspvt.ltd",
    icon:  <FaInstagram size={16} />,
    label: "Instagram",
  },
  {
    href:  "https://chat.whatsapp.com/KxMvP8DboYTDFu4bAnaflJ",
    icon:  <FaWhatsapp size={16} />,
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        .vms-footer {
          font-family: 'DM Sans', sans-serif;
          background: #09090b;
          border-top: 1px solid rgba(255,255,255,0.07);
          color: #a1a1aa;
        }

        .vms-footer-top {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 2rem 48px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 48px;
        }

        /* Brand col */
        .vms-footer-brand {}
        .vms-footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 18px;
        }
        .vms-footer-logo-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #F59E0B;
          flex-shrink: 0;
          animation: fpulse 2s ease-in-out infinite;
        }
        @keyframes fpulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.4; transform:scale(1.6); }
        }
        .vms-footer-wordmark {
          font-family: 'DM Serif Display', serif;
          font-size: 18px;
          color: #fafafa;
          letter-spacing: -0.01em;
        }
        .vms-footer-tagline {
          font-size: 13px;
          line-height: 1.7;
          color: #71717a;
          max-width: 300px;
          margin-bottom: 24px;
        }

        /* Social icons */
        .vms-socials {
          display: flex;
          gap: 8px;
        }
        .vms-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 9px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #71717a;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .vms-social-btn:hover {
          background: rgba(245,158,11,0.1);
          border-color: rgba(245,158,11,0.3);
          color: #F59E0B;
        }

        /* Nav col */
        .vms-footer-col-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fafafa;
          margin-bottom: 18px;
        }
        .vms-footer-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .vms-footer-nav-link {
          font-size: 13px;
          color: #71717a;
          text-decoration: none;
          transition: color 0.2s;
        }
        .vms-footer-nav-link:hover { color: #fafafa; }

        /* Contact col */
        .vms-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .vms-contact-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .vms-contact-label {
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #52525b;
        }
        .vms-contact-value {
          font-size: 13px;
          color: #a1a1aa;
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.5;
        }
        a.vms-contact-value:hover { color: #F59E0B; }

        /* Bottom bar */
        .vms-footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .vms-footer-copy {
          font-size: 12px;
          color: #3f3f46;
        }
        .vms-footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(245,158,11,0.07);
          border: 1px solid rgba(245,158,11,0.15);
          border-radius: 6px;
          padding: 4px 10px;
          font-size: 11px;
          color: #78716c;
          letter-spacing: 0.04em;
        }
        .vms-footer-badge span {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #F59E0B;
          display: inline-block;
        }

        /* CTA strip */
        .vms-footer-cta-strip {
          max-width: 1200px;
          margin: 0 auto 0;
          padding: 0 2rem 48px;
        }
        .vms-footer-cta-inner {
          border-radius: 18px;
          background: rgba(245,158,11,0.05);
          border: 1px solid rgba(245,158,11,0.15);
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .vms-footer-cta-text {
          font-size: 14px;
          color: #a1a1aa;
          max-width: 420px;
          line-height: 1.6;
        }
        .vms-footer-cta-text strong {
          color: #fafafa;
          font-weight: 600;
        }
        .vms-footer-cta-btn {
          font-size: 13px;
          font-weight: 600;
          color: #09090b;
          background: #F59E0B;
          text-decoration: none;
          padding: 10px 22px;
          border-radius: 10px;
          white-space: nowrap;
          transition: background 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .vms-footer-cta-btn:hover {
          background: #FBBF24;
          box-shadow: 0 0 20px rgba(245,158,11,0.3);
        }

        @media (max-width: 767px) {
          .vms-footer-top {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 48px 1.5rem 36px;
          }
          .vms-footer-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .vms-footer-cta-btn { width: 100%; text-align: center; }
          .vms-footer-bottom { flex-direction: column; align-items: flex-start; }
          .vms-footer-cta-strip { padding: 0 1.5rem 40px; }
        }
      `}</style>

      <footer className="vms-footer">

        {/* ── Top grid ── */}
        <div className="vms-footer-top">

          {/* Brand */}
          <div className="vms-footer-brand">
            <Link href="/" className="vms-footer-logo">
              <span className="vms-footer-logo-dot" />
              <span className="vms-footer-wordmark">VMS</span>
            </Link>
            <p className="vms-footer-tagline">
              Connecting talent with opportunity across every industry — IT, engineering, manufacturing, logistics, hospitality, retail, and more. Freshers to leadership, we place them all.
            </p>
            <div className="vms-socials">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vms-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="vms-footer-col-title">Quick Links</p>
            <nav className="vms-footer-nav">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="vms-footer-nav-link">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="vms-footer-col-title">Contact</p>
            <div className="vms-contact-list">
              <div className="vms-contact-item">
                <span className="vms-contact-label">Email</span>
                <a href="mailto:info@veljimanagement.com" className="vms-contact-value">
                  info@veljimanagement.com
                </a>
              </div>
              <div className="vms-contact-item">
                <span className="vms-contact-label">Phone</span>
                <a href="tel:+919203732776" className="vms-contact-value">
                  9203732776
                </a>
                <a href="tel:+919755032776" className="vms-contact-value">
                  9755032776
                </a>
              </div>
              <div className="vms-contact-item">
                <span className="vms-contact-label">Address</span>
                <span className="vms-contact-value">
                  Shakti Complex, Tilak Marg,<br />
                  Near New Bus Stand, Rajgarh<br />
                  Dhar, Madhya Pradesh — 454116
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA strip ── */}
        <div className="vms-footer-cta-strip">
          <div className="vms-footer-cta-inner">
            <p className="vms-footer-cta-text">
              <strong>Looking to hire or find a job?</strong>{" "}
              Share your requirements and our team will reach out within 48 hours.
            </p>
            <Link href="/contact" className="vms-footer-cta-btn">
              Get in Touch →
            </Link>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="vms-footer-bottom">
          <p className="vms-footer-copy">
            © 2026 Velji Management Services. All rights reserved.
          </p>
          <div className="vms-footer-badge">
            <span />
            Recruitment Services · Pan-India
          </div>
        </div>

      </footer>
    </>
  );
}
=======
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F2125] text-gray-300 pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center text-center gap-10">

        {/* 🔹 DESCRIPTION */}
        <p className="max-w-4xl text-gray-400 leading-relaxed text-sm md:text-base">
          Velji Management Services connects talent with opportunities across every industry.
We provide job placements for IT & Software, Engineering, Manufacturing, Logistics, Hospitality, Retail, Construction, Administration and more — supporting freshers, skilled professionals and non-skilled workers alike.
        </p>

        {/* 🔹 CONTACT SECTION */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-base font-medium">
          <span className="text-gray-200">
            Contact Now: <span className="font-semibold">info@veljimanagement.com</span>
          </span>
          <span className="text-gray-200">
            For Jobs & Business: <span className="font-semibold"> 9203732776 / 9755032776</span>
          </span>
          <span className="text-gray-200">
          <span className="font-semibold"></span>
          </span>
        </div>

        {/* DIVIDER LINE */}
        <div className="w-full border-t border-gray-600 pt-6"></div>

        {/* 🔹 SOCIAL + COPYRIGHT */}
        <div className="flex flex-col items-center gap-6">
          {/* SOCIAL ICONS */}
          {/* <div className="flex gap-6 text-2xl">
            <Link href="#" className="hover:text-white transition"><FaLinkedin /></Link>
            <Link href="#" className="hover:text-white transition"><FaXTwitter /></Link>
            <Link href="#" className="hover:text-white transition"><FaInstagram /></Link>
            <Link href="#" className="hover:text-white transition"><FaFacebook /></Link>
            <Link href="#" className="hover:text-white transition"><FaYoutube /></Link>
          </div> */}

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-xs md:text-sm">
            © 2026 Velji Management Services. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
>>>>>>> 1fe99da1edc35182851257ac3a604f478a3f0c9d
