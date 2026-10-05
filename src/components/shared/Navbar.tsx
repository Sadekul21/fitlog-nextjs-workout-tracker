"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

import logo from "@/assets/logo.png";
import { FitlogContext } from "@/context/FitlogContext";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } =
    useContext(FitlogContext);

  const isWorkoutActive =
    pathname === "/" ||
    pathname.startsWith("/workout");

  const isPlanActive =
    pathname.startsWith("/my-plan");

  return (
    <header className="border-b border-[#2a2e2e] bg-[#0d0f0f] sticky top-0 z-50">
      <div className="fitlog-container navbar min-h-[76px] px-0">

        {/* LEFT */}
        <div className="navbar-start">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src={logo}
              alt="FitLog logo"
              className="w-9 h-9 object-contain"
            />

            <span className="font-black text-xl tracking-tight">
              FITLOG
            </span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden md:flex">
          <div className="flex items-center gap-8 text-sm font-bold uppercase">

            <Link
              href="/"
              className={
                isWorkoutActive
                  ? "text-[#ccff00]"
                  : "text-gray-300 hover:text-white"
              }
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={
                isPlanActive
                  ? "text-[#ccff00]"
                  : "text-gray-300 hover:text-white"
              }
            >
              My Plan
            </Link>

          </div>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2">

          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black text-black"
          >
            PLAN {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#ccff00] px-4 py-2 text-xs font-black text-[#ccff00]"
          >
            SAVED {saved.length}
          </Link>

        </div>
      </div>

      {/* MOBILE LINKS */}
      <div className="md:hidden flex justify-center gap-8 pb-4 text-sm font-bold">

        <Link
          href="/"
          className={
            isWorkoutActive
              ? "text-[#ccff00]"
              : "text-gray-300"
          }
        >
          Workout
        </Link>

        <Link
          href="/my-plan"
          className={
            isPlanActive
              ? "text-[#ccff00]"
              : "text-gray-300"
          }
        >
          My Plan
        </Link>

      </div>
    </header>
  );
};

export default Navbar;
