import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
// import { ParticleText } from "../ui/name-title";
import ShinyText from "../ui/shiny-text";
import ShimmerButton from "../ui/shimmer-button";

interface HeroContent {
  name: string;
  role: string;
  location: string;
  intro: string;
}

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.2),_transparent_35%)]" />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        />
      </div>

      <div className="mx-auto flex flex-col gap-12 lg:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* <ParticleText text="Sunil Vishwakarma" /> */}
          <ShinyText
            text="Sunil Vishwakarma"
            className="text-6xl font-extrabold "
            color="#00a9f5"
          />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            {content.role}
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            <MapPin className="h-4 w-4" /> {content.location}
          </p>

          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {content.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <ShimmerButton text="Download Resume" />
            {/* <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-200"
            >
              Download Resume
            </a> */}
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur xl:p-10"
        >
          <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Focus
            </p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
              <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
                <p className="font-medium text-white">
                  Product-minded engineering
                </p>
                <p className="mt-1 text-slate-400">
                  Building interfaces and systems that feel seamless and scale
                  thoughtfully.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
                <p className="font-medium text-white">
                  AI-first experimentation
                </p>
                <p className="mt-1 text-slate-400">
                  Exploring helpful automation, retrieval flows, and modern
                  AI-assisted workflows.
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
