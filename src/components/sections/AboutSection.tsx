import { motion } from "framer-motion";
import { Cpu, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import type { AboutContent } from "@/data/content";

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="Designing useful products with clarity and craft"
          description="I enjoy moving from idea to product, creating interfaces that feel fast and backend systems that remain dependable under real use."
        />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70"
          >
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              {content.intro}
            </p>
            <div className="mt-6 space-y-4">
              {content.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/70"
                >
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-cyan-400/20 bg-linear-to-br from-cyan-500/15 via-slate-950 to-blue-500/10 p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 text-cyan-400">
              <Cpu className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em]">
                What I enjoy building
              </p>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              <p>Modern interfaces that feel intuitive from the first click.</p>
              <p>
                Reliable APIs and backend orchestration that support real
                product use cases.
              </p>
              <p>
                AI features that feel useful, fast, and thoughtfully integrated
                into user journeys.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
