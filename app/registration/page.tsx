import Image from 'next/image';
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
                    key={num.value}
                    href={`https://wa.me/${num.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-sky-900 hover:bg-sky-950 text-white p-6 rounded-2xl transition-all transform hover:-translate-y-1 shadow-lg group"
                  >
                    <span className="text-sky-300 text-[10px] uppercase tracking-[0.2em] font-black mb-2 group-hover:text-white transition-colors">
                      WhatsApp {num.label}
                    </span>
                    <span className="text-xl md:text-2xl font-mono font-bold">
                      {num.value}
                    </span>
                  </a>
                ))}
              </div>

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
  );
}