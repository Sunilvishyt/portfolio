import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SocialLink } from "@/data/content";

interface ContactSectionProps {
  socials: SocialLink[];
}

export function ContactSection({ socials }: ContactSectionProps) {
  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-linear-to-br from-cyan-500/15 via-slate-950 to-blue-500/10 p-8 shadow-2xl shadow-cyan-950/20 sm:p-10 lg:p-12">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let’s build something memorable"
            description="If you’re looking for a developer who enjoys thoughtful product experiences, polished interfaces, and practical systems, I’d love to connect."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-700/70 bg-slate-950/50 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {social.label}
                </a>
              );
            })}
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            {/* <p className="text-sm text-slate-400">
              Open to freelance, collaboration, and ambitious projects.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
