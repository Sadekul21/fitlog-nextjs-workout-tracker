import Image from "next/image";
import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="border-b border-[#2a2e2e]">
      <div className="fitlog-container grid min-h-[520px] lg:grid-cols-2">

        {/* LEFT */}
        <div className="flex flex-col justify-center py-16 lg:pr-16">

          <p className="mb-4 text-xs font-black tracking-[0.3em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="fitlog-title max-w-[620px] text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-[550px] leading-7 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-8">
            <a
              href="#library"
              className="inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 text-sm font-black text-black hover:bg-white"
            >
              ↓ BROWSE WORKOUTS
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[520px]">
          <Image
            src={banner}
            alt="FitLog workout banner"
            fill
            priority
            className="object-contain object-right-bottom"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
