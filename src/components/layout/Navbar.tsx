import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import type { NavLink } from "@/data/content";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  navLinks: NavLink[];
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export function Navbar({ navLinks, theme, onToggleTheme }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          className="text-lg font-semibold tracking-[0.2em] text-slate-900 dark:text-slate-100"
        >
          SV
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-cyan-500 dark:text-slate-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* <Button
          variant="ghost"
          size="icon"
          onClick={onToggleTheme}
          className="rounded-full"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button> */}
      </div>
    </motion.header>
  );
}
