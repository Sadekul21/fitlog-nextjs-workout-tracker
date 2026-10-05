import Image from "next/image";

import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-[#2a2e2e] bg-[#090b0b]">

      <div className="fitlog-container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">

          <Image
            src={logo}
            alt="FitLog logo"
            className="h-8 w-8 object-contain"
          />

          <span className="font-black">
            FITLOG
          </span>

        </div>

        <p className="text-sm text-gray-500">
          © 2026 FitLog — Workout
          Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
