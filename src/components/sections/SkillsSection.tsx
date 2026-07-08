import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SkillGroup } from "@/data/content";
import ShinyText from "../ui/shiny-text";

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
}

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* <SectionHeading
          eyebrow="Skills"
          title="A blend of product thinking and engineering depth"
          description="The stack I use most often is focused on building modern products quickly while keeping the backend foundation reliable."
        /> */}
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
            {/* <ShinyText text="About" className="mx-3" /> */}
            <ShinyText text="Skills" color="#00A6C2" />
          </h1>
        </div>

        <p className="flex justify-center text-xl mb-10">
          A comprehensive overview of my technical expertise and the
          technologies I work with to build modern applications.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-7 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70"
            >
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-600 dark:text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
