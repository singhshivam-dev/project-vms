"use client";

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
            Contact Now: <span className="font-semibold">info@vms.com</span>
          </span>
          <span className="text-gray-200">
            For Jobs: <span className="font-semibold">954 669 5565</span>
          </span>
          <span className="text-gray-200">
            For Businesses: <span className="font-semibold">686 875 8544</span>
          </span>
        </div>

        {/* DIVIDER LINE */}
        <div className="w-full border-t border-gray-600 pt-6"></div>

        {/* 🔹 SOCIAL + COPYRIGHT */}
        <div className="flex flex-col items-center gap-6">
          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-2xl">
            <Link href="#" className="hover:text-white transition"><FaLinkedin /></Link>
            <Link href="#" className="hover:text-white transition"><FaXTwitter /></Link>
            <Link href="#" className="hover:text-white transition"><FaInstagram /></Link>
            <Link href="#" className="hover:text-white transition"><FaFacebook /></Link>
            <Link href="#" className="hover:text-white transition"><FaYoutube /></Link>
          </div>

          {/* COPYRIGHT */}
          <p className="text-gray-500 text-xs md:text-sm">
            © 2025 Velji Management Services. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
