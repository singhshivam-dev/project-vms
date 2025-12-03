"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row md:items-center md:justify-between px-4 py-6 gap-4">
        
        {/* LOGO + NAME */}
        <div className="flex items-center gap-4 md:border-none pb-3 md:pb-0 w-full md:w-auto justify-between md:justify-start">
          {/* Enable later
          <Image
            src="/vms-blue-Photoroom.png"
            alt="Velji Manpower Services logo"
            width={65}
            height={65}
            priority
          />
          */}
          <span className="font-bold uppercase text-black text-xl md:text-3xl leading-tight">
            Velji Manpower Services
          </span>

          {/* MOBILE MENU BUTTON (moved inside row for cleaner spacing) */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={32} color="black" /> : <Menu size={32} color="black" />}
          </button>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-12 text-lg font-semibold text-black border-none">
          <Link href="/workforce-solutions" className="hover:text-[#01559B] transition-colors">
            Our Services
          </Link>
          <Link href="/insights" className="hover:text-[#01559B] transition-colors">
            Contact Us
          </Link>
          <Link href="/about-us" className="hover:text-[#01559B] transition-colors">
            About Us
          </Link>
        </nav>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      {open && (
        <div className="flex flex-col items-start gap-5 bg-white px-6 pb-6 text-lg font-semibold md:hidden text-black border-t pt-5">
          <Link href="/workforce-solutions" className="hover:text-[#01559B] transition-colors">
            Our Services
          </Link>
          <Link href="/insights" className="hover:text-[#01559B] transition-colors">
            Contact Us
          </Link>
          <Link href="/about-us" className="hover:text-[#01559B] transition-colors">
            About Us
          </Link>
        </div>
      )}
    </header>
  );
}
