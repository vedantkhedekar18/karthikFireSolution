import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-black overflow-hidden min-h-[85vh]" id="home">
      <div className="max-w-[1920px] mx-auto relative">
        <div className="relative flex min-h-[85vh] items-center mh-10">

          {/* LEFT CONTENT */}
          <div
            className="relative z-20 w-full lg:w-[38%] pl-4 lg:pl-8"
            data-aos="fade-right"
          >
            {/* Subtitle */}
            <div className="mb-8">
              <span className="text-red-600 text-[11px] font-semibold tracking-[0.15em] uppercase">
                ● Maharashtra's Certified Fire Protection Experts
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-bold leading-[0.9] tracking-[-0.05em]">
              <span className="block text-white text-[58px] lg:text-[72px] xl:text-[50px]">
                FIRE DOESN'T WAIT.
              </span>

              <span className="block text-red-600 text-[58px] lg:text-[72px] xl:text-[50px] mt-2">
                NEITHER DO WE.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-[500px] text-gray-400 text-[18px] lg:text-[15px] leading-[1.7]">
              End-to-end fire protection systems built for residential,
              commercial and industrial properties from certified
              installation to round-the-clock compliance support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="/brochure.pdf"
                download
                className="bg-red-600 hover:bg-red-700 text-white h-[30px] px-1 rounded-md flex items-center gap-2 text-sm font-semibold transition-all duration-300"
              >
                DOWNLOAD BROCHURE
                <ArrowRight size={18} />
              </a>

              <button className="border border-red-600/40 hover:border-red-600 hover:bg-red-600/10 text-white h-[30px] px-1 rounded-md flex items-center gap-2 text-sm font-semibold transition-all duration-300 padding-left-4px">
                EXPLORE SOLUTIONS
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-[750px]">
              <div>
                <div className="text-red-600 text-[20px] font-bold">5+</div>
                <div className="text-gray-500 text-sm uppercase mt-1">
                  Years Experience
                </div>
              </div>

              <div>
                <div className="text-red-600 text-[20px] font-bold">25+</div>
                <div className="text-gray-500 text-sm uppercase mt-1">
                  Projects Completed
                </div>
              </div>

              <div>
                <div className="text-red-600 text-[20px] font-bold">24/7</div>
                <div className="text-gray-500 text-sm uppercase mt-1">
                  Emergency Response
                </div>
              </div>

              <div>
                <div className="text-red-600 text-[20px] font-bold">100%</div>
                <div className="text-gray-500 text-sm uppercase mt-1">
                  Compliance Guaranteed
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="hidden lg:block absolute bottom top-1 right-[20px] w-[60%] z-5"
            data-aos="fade-left"
          >
            <Image
              src="/building-hero.png"
              alt="3D Building Fire Protection Systems"
              width={1800}
              height={1800}
              priority
              className="w-full h-auto object-contain select-none"
            />
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/[0.04] blur-[220px] rounded-full pointer-events-none" />
    </section>
  );
}