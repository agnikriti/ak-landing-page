import { tinos, ubuntu } from "@/lib/fonts";

const WHY_US_POINTS = [
  "We know how delicate trust is — it's the last thing you should worry about.",
  "A partner you can rely on, present at every stage of your journey.",
  "Build your online presence with ease and full confidence.",
];

const PRICING_POINTS = [
  "Pricing that won't burn a hole in your pocket — guaranteed.",
  "Every business has different needs and budgets, and we get that.",
  "Flexible plans designed to fit your specific requirements.",
];

const ABOUT_POINTS = [
  "We are a team of professionals who are helping businesses thrive in the digital landscape.",
  "We are here to help your firm navigate the challenges of building and scaling your online presence with trust and ease.",
  "We are committed to providing the best possible service and support at every step.",
  "Our plans are tailored plans for businesses of all sizes — from early startups to large enterprises.",
];

export function About() {
  return (
    <section id="about" className="bg-blue-50 dark:bg-[#030a16] px-10 py-24 border-y border-[#e5e0d8] dark:border-[#1e293b]">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className={`${tinos.className} text-3xl font-bold leading-tight text-[#0f172a] dark:text-[#f5ede0]`}>
              What is <br />
              Agnikriti?
            </h2>
            <div className="w-10 h-[2px] bg-orange-500 mt-3" />
          </div>

          <ul className={`${ubuntu.className} text-[16px] font-light leading-relaxed text-[#334155] dark:text-[#a8b2d1] space-y-3 list-none`}>
            {ABOUT_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group">
          <div className="space-y-8">
            <div className="relative z-10 p-10 border border-[#e5e0d8] dark:border-[#1e293b] bg-blue-100 dark:bg-[#112240] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 hover:bg-blue-100/80 dark:hover:bg-[#112240]/80 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0a192f]/10 dark:bg-orange-500/10 blur-3xl -mr-16 -mt-16" />
              <div className="space-y-5 relative z-20">
                <h3 className={`${tinos.className} text-xl font-bold text-[#0f172a] dark:text-[#f5ede0]`}>Why us?</h3>
                <div className="w-8 h-[2px] bg-orange-500" />
                <ul className={`${ubuntu.className} text-base font-light leading-relaxed text-[#64748b] dark:text-[#94a3b8] space-y-3 list-none`}>
                  {WHY_US_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="pricing" className="relative z-10 p-10 border border-[#e5e0d8] dark:border-[#1e293b] bg-blue-100 dark:bg-[#0f172a] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 hover:bg-blue-100/80 dark:hover:bg-[#0f172a]/80 hover:-translate-y-1">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl -ml-16 -mb-16" />
              <div className="space-y-5 relative z-20">
                <h3 className={`${tinos.className} text-xl font-bold text-[#0f172a] dark:text-[#f5ede0]`}>But what about the pricing?</h3>
                <div className="w-8 h-[2px] bg-orange-500" />
                <ul className={`${ubuntu.className} text-base font-light leading-relaxed text-[#64748b] dark:text-[#94a3b8] space-y-3 list-none`}>
                  {PRICING_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 blur-3xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-500" />
        </div>

      </div>
    </section>
  );
}
