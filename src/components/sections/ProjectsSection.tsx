import { motion } from "framer-motion";
import { ArrowUpRight, Code2, PlayCircle } from "lucide-react";
import type { Project } from "@/data/content";
import ShinyText from "../ui/shiny-text";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className=" py-30 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* <SectionHeading
          eyebrow="Projects"
          title="Recent builds with impact and personality"
          description="These projects reflect my approach to product development: useful features, thoughtful UX, and a backend that stays practical and scalable."
        /> */}
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tighter">
            <ShinyText text="Projects" className="mx-3" />
            {/* <ShinyText text="Me" color="#00A6C2" /> */}
          </h1>
        </div>
        <p className="flex justify-center text-xl mb-10">
          These projects reflect my approach to product development: useful
          features, thoughtful UX, and a backend that stays practical and
          scalable.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-500">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-200"
                  >
                    <Code2 className="mr-2 h-4 w-4" /> GitHub
                  </a>
                ) : null}
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" /> Live demo
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
