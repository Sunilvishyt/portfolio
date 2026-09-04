"use client";

// 1. Import useMemo from React
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ShinyText from "./shiny-text";
import { heroContent, resumeLink } from "@/data/content";
import ShimmerButton from "./shimmer-button";
import { CircleArrowDown } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
  const paths = useMemo(() => {
    return Array.from({ length: 36 }, (_, i) => {
      // Create a deterministic pseudo-random duration based on the index 'i'
      // This looks random but always returns the exact same number for the same 'i'
      const pseudoRandomFactor = Math.sin(i + 1) * 10000;
      const deterministicRandom =
        pseudoRandomFactor - Math.floor(pseudoRandomFactor);
      const duration = 20 + deterministicRandom * 10;

      return {
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
        duration: duration,
      };
    });
  }, [position]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-screen text-slate-950 dark:text-[#42c3ff]"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths() {
  return (
    <section id="home">
      <div className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
        <div className="absolute inset-0">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>

        <div className="relative z-10  container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
              <ShinyText text="Sunil Vishwakarma" />
            </h1>

            <div className="flex justify-center px-4">
              <p className="text-xl max-w-2xl break-words">
                {heroContent.role}
              </p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
              <div
                className="inline-block group relative mt-8 bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* <a href="" className="sty"> */}
                <Button
                  variant="ghost"
                  className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
                  onClick={() => (window.location.hash = "about")}
                >
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                    Learn More
                  </span>
                </Button>
              </div>
              <ShimmerButton
                text="Download Resume"
                href={resumeLink}
                icon={CircleArrowDown}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
