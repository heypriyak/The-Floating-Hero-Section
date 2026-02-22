import { CheckSquare, FileText, Gavel, Receipt, Scale, ShieldCheck } from "lucide-react";
import { FloatingCard } from "@/components/FloatingCard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eff7ff] via-white to-[#f6f9ff] text-zinc-900 dark:from-[#0c1628] dark:via-[#0a101c] dark:to-[#0d1422] dark:text-zinc-100">
      <div className="blob blob-left" />
      <div className="blob blob-right" />

      <main className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-12">
        <section className="relative z-10 mx-auto max-w-xl animate-fade-in-up text-center lg:mx-0 lg:text-left">
          <div className="mb-6 flex justify-center lg:hidden">
            <ThemeToggle />
          </div>

          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-zinc-700 ring-1 ring-zinc-900/10 backdrop-blur-sm dark:bg-zinc-900/70 dark:text-zinc-200 dark:ring-white/10">
            <Scale className="h-3.5 w-3.5" />
            LEGAL WORK PLATFORM
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-100">
            Your legal work,
            <br />
            organized at a glance.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-300">
            Keep matters, billing, documents, and tasks aligned in one elegant workflow built for modern legal teams.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button className="cursor-pointer rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950">
              Start Free Trial
            </button>
            <button className="cursor-pointer rounded-xl border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-800 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-zinc-950">
              Book Demo
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:hidden">
            <FloatingCard tone="blue" rotation={-3} icon={Receipt} label="Billing" />
            <FloatingCard tone="orange" rotation={4} icon={Gavel} label="Matters" />
            <FloatingCard tone="dark" rotation={-4} icon={CheckSquare} label="Tasks" />
          </div>
        </section>

        <section className="relative z-10 hidden h-[480px] w-full animate-fade-in-up [animation-delay:120ms] md:block sm:h-[560px]">
          <div className="absolute right-[5%] top-[2%] hidden lg:block">
            <ThemeToggle />
          </div>

          <div className="absolute left-[12%] top-[30%] animate-float-slow">
            <FloatingCard tone="blue" rotation={-8} icon={Receipt} label="Billing" />
          </div>

          <div className="absolute right-[10%] top-[8%] animate-float-medium">
            <FloatingCard tone="orange" rotation={10} icon={Gavel} label="Matters" />
          </div>

          <div className="absolute left-[35%] top-[8%] animate-float-fast">
            <FloatingCard tone="dark" rotation={-7} icon={CheckSquare} label="Tasks" />
          </div>

          <div className="absolute left-[18%] top-[55%] hidden animate-float-medium md:block">
            <FloatingCard tone="teal" rotation={8} icon={FileText} label="Documents" />
          </div>

          <div className="absolute right-[5%] top-[48%] hidden animate-float-slow lg:block">
            <FloatingCard tone="white" rotation={-6} icon={ShieldCheck} label="Compliance" />
          </div>

          <div className="absolute left-[24%] top-[70%] animate-float-fast sm:left-[30%]">
            <FloatingCard variant="portal" tone="white" rotation={3} title="John Doe" subtitle="Portal">
              <div className="mt-3 h-2 w-32 rounded-full bg-zinc-200 dark:bg-zinc-700" />
              <div className="mt-2 h-2 w-24 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            </FloatingCard>
          </div>
        </section>
      </main>
    </div>
  );
}
