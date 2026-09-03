import { Suspense, lazy } from "react";
import { useEffect, useState } from "react";
const Navbar = lazy(() => import("@/components/layout/Navbar"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const AchievementsSection = lazy(
  () => import("@/components/sections/AchievementsSection"),
);
const ContactSection = lazy(
  () => import("@/components/sections/ContactSection"),
);
const ProjectsSection = lazy(
  () => import("@/components/sections/ProjectsSection"),
);
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import {
  aboutContent,
  achievements,
  navLinks,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/content";
import { BackgroundPaths } from "./components/ui/background-paths";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    // if (typeof window === "undefined") {
    return "dark";
    // }

    // const storedTheme = window.localStorage.getItem("portfolio-theme");
    // const prefersDark = window.matchMedia(
    //   "(prefers-color-scheme: dark)",
    // ).matches;

    // return storedTheme === "light" || storedTheme === "dark"
    //   ? storedTheme
    //   : prefersDark
    //     ? "dark"
    //     : "light";
  });

  const lenisOptions = {
    lerp: 0.05, // Lower = slower, heavier, and smoother inertial lag (Default is 0.1)
    duration: 1.5, // The smooth scroll animation will last 1.5 seconds
    smoothWheel: true, // Ensures mouse wheel inputs are intercepted and smoothed
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    //add spinner loading in suspence fallback

    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }
    >
      <ReactLenis root options={lenisOptions}>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-600">
          <Navbar
            navLinks={navLinks}
            theme={theme}
            onToggleTheme={() =>
              setTheme((current) => (current === "dark" ? "light" : "dark"))
            }
          />
          <main>
            <BackgroundPaths />

            <section className="px-5">
              <AboutSection content={aboutContent} />
              <SkillsSection skillGroups={skillGroups} />
              <AchievementsSection achievements={achievements} />
              <ProjectsSection projects={projects} />
              <ContactSection socials={socialLinks} />
            </section>
          </main>
        </div>
      </ReactLenis>
    </Suspense>
  );
}

export default App;
