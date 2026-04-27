"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services",     label: "Services" },
  { href: "/registration", label: "Registration" },
  { href: "/about",        label: "About" },
  { href: "/contact",      label: "Contact" },
];

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

        .vms-header {
          font-family: 'DM Sans', sans-serif;
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(9,9,11,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .vms-header.scrolled {
          background: rgba(9,9,11,0.96);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .vms-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        /* Logo */
        .vms-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .vms-logo-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #F59E0B;
          flex-shrink: 0;
          animation: pulseDot 2s ease-in-out infinite;
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(1.6); }
        }
        .vms-logo-wordmark {
          font-family: 'DM Serif Display', serif;
          font-size: 18px;
          color: #fafafa;
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .vms-logo-sub {
          font-size: 10px;
          color: #52525b;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-left: 2px;
        }

        /* Desktop nav */
        .vms-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .vms-nav-link {
          position: relative;
          font-size: 13px;
          font-weight: 500;
          color: #a1a1aa;
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
          letter-spacing: -0.01em;
        }
        .vms-nav-link:hover {
          color: #fafafa;
          background: rgba(255,255,255,0.06);
        }
        .vms-nav-link.active {
          color: #F59E0B;
          background: rgba(245,158,11,0.08);
        }
        .vms-nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          border-radius: 2px;
          background: #F59E0B;
        }

        /* CTA button */
        .vms-cta {
          font-size: 13px;
          font-weight: 600;
          color: #09090b;
          background: #F59E0B;
          text-decoration: none;
          padding: 8px 18px;
          border-radius: 10px;
          letter-spacing: -0.01em;
          transition: background 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
          box-shadow: 0 0 0 0 rgba(245,158,11,0);
        }
        .vms-cta:hover {
          background: #FBBF24;
          box-shadow: 0 0 20px rgba(245,158,11,0.35);
        }

        /* Hamburger */
        .vms-burger {
          display: none;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 6px;
          cursor: pointer;
          color: #a1a1aa;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .vms-burger:hover { background: rgba(255,255,255,0.1); color: #fafafa; }

        /* Mobile drawer */
        .vms-drawer {
          background: #0f0f12;
          border-top: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease;
          opacity: 0;
        }
        .vms-drawer.open {
          max-height: 400px;
          opacity: 1;
        }
        .vms-drawer-inner {
          padding: 16px 2rem 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .vms-mobile-link {
          font-size: 15px;
          font-weight: 500;
          color: #a1a1aa;
          text-decoration: none;
          padding: 11px 14px;
          border-radius: 10px;
          transition: color 0.2s, background 0.2s;
          letter-spacing: -0.01em;
        }
        .vms-mobile-link:hover { color: #fafafa; background: rgba(255,255,255,0.05); }
        .vms-mobile-link.active { color: #F59E0B; background: rgba(245,158,11,0.08); }

        .vms-mobile-cta {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #09090b;
          background: #F59E0B;
          text-decoration: none;
          padding: 13px 18px;
          border-radius: 12px;
          text-align: center;
          letter-spacing: -0.01em;
          transition: background 0.2s;
        }
        .vms-mobile-cta:hover { background: #FBBF24; }

        @media (max-width: 767px) {
          .vms-nav  { display: none; }
          .vms-cta-desktop { display: none; }
          .vms-burger { display: flex; }
        }
      `}</style>

      <header className={`vms-header${scrolled ? " scrolled" : ""}`}>
        <div className="vms-inner">

          {/* Logo */}
          <Link href="/" className="vms-logo">
            <img src="favicon-32x32.png" alt="" />
            <span className="vms-logo-wordmark">VMS</span>
            <span className="vms-logo-sub">Velji Management</span>
          </Link>

          {/* Desktop nav */}
          <nav className="vms-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`vms-nav-link${pathname === link.href ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href="/contact" className="vms-cta vms-cta-desktop">
            Hire Talent →
          </Link>

          {/* Mobile hamburger */}
          <button
            className="vms-burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`vms-drawer${open ? " open" : ""}`} aria-hidden={!open}>
          <div className="vms-drawer-inner">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`vms-mobile-link${pathname === link.href ? " active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="vms-mobile-cta">
              Hire Talent →
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
