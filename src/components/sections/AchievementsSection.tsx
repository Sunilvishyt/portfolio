import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Achievement } from "@/data/content";

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({
  achievements,
}: AchievementsSectionProps) {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="A track record shaped by curiosity and momentum"
          description="Beyond code, I’ve grown through communities, hackathons, and creative experiences that strengthened both my collaboration and problem-solving mindset."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-7 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-cyan-400/10 p-2 text-cyan-500">
                  <Trophy className="h-4 w-4" />
                </div>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
