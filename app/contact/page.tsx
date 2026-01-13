import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="relative overflow-hidden bg-linear-to-br from-sky-900 via-sky-800 to-slate-900 text-white">
  <div className="mx-auto flex max-w-6xl flex-col items-center lg:items-start gap-12 px-4 py-20 lg:flex-row lg:py-28">
    <div className="relative z-10 max-w-xl space-y-6 text-center lg:text-left">
      <p className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide">
              Contact Us
            </p>
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        Contact Us
      </h1>

      <p className="text-base leading-relaxed text-sky-100 sm:text-lg">
        Welcome to VMS. Feel free to enquire about Management solutions, recruitment
        services, or business collaboration.
      </p>

      <p className="text-base leading-relaxed text-sky-100 sm:text-lg">
        Get answers to your questions.<br /> Contact Now!
      </p>
    </div>
  </div>

  {/* Soft background glow */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.20),transparent_55%)]" />
</section>


      {/* ===================== CONTACT DETAILS SECTION ===================== */}
      <section className="bg-white py-16 px-6">
        <div className="mx-auto max-w-4xl space-y-10">

          <h2 className="text-3xl font-bold text-slate-800 text-center underline">
            Get in Touch
          </h2>

          {/* CONTACT ITEMS */}
          <div className="space-y-6 text-slate-700 text-lg">

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-sky-700 shrink-0" />
              <p>
                <span className="font-semibold">Velji Management Services</span><br />
                Shakti Complex, Tilak Marg, Near New Bus Stand,<br />Rajgarh Dhar, Madhya Pradesh, 454116
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-sky-700 shrink-0" />
              <p>
                <span className="font-semibold">Phone:</span><br />
                +91 9203732776 / 9755032776
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-sky-700 shrink-0" />
              <p>
                <span className="font-semibold">Email:</span><br />
                info@veljimanagement.com
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
