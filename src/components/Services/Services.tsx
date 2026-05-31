import { FaCode, FaWrench, FaLightbulb, FaMobile, FaBrain, FaRocket } from "react-icons/fa6";
import { tinos, ubuntu } from "@/lib/fonts";
import { IconType } from "react-icons";

type Service = {
  icon: IconType;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: FaCode,
    title: "Web & Backend",
    description:
      "We build high-performance web applications backed by robust, scalable architectures, ensuring your digital presence is both beautiful and reliable.",
  },
  {
    icon: FaWrench,
    title: "Maintenance & Support",
    description:
      "Ensuring your platforms stay secure and optimized long after launch with proactive monitoring, regular updates, and technical assistance.",
  },
  {
    icon: FaLightbulb,
    title: "Digital Strategy",
    description:
      "Navigating the complex tech landscape with expert guidance on architecture, tech stacks, and long-term digital growth strategies.",
  },
  {
    icon: FaMobile,
    title: "Mobile Development",
    description:
      "Crafting seamless, native-quality experiences for both Android and iOS that put your business directly in your customers' pockets.",
  },
  {
    icon: FaBrain,
    title: "AI Solutions",
    description:
      "Integrating intelligent features and automation into your workflows to enhance user experience and drive data-driven decision making.",
  },
  {
    icon: FaRocket,
    title: "Ideation & DevOps",
    description:
      "From conceptualizing your vision to automating your deployment pipeline, we ensure your product reaches the market swiftly and securely.",
  },
];

function ServiceCard({ icon: Icon, title, description }: Service) {
  return (
    <div className="group relative overflow-hidden p-10 bg-blue-50 dark:bg-[#112240]/40 backdrop-blur-sm border border-[#e5e0d8] dark:border-white/5 rounded-[32px] hover:shadow-[0_8px_30px_rgba(10,25,47,0.15)] dark:hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0a192f]/10 dark:bg-orange-500/10 blur-3xl -mr-16 -mt-16" />
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 dark:bg-blue-600/10 flex items-center justify-center text-orange-500 dark:text-blue-400 mb-8 group-hover:bg-orange-500 dark:group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative z-10">
        <Icon size={26} />
      </div>
      <h3 className={`${tinos.className} text-lg font-bold text-[#0f172a] dark:text-[#f5ede0] mb-2 relative z-10`}>{title}</h3>
      <div className="w-8 h-[2px] bg-orange-500 mb-4 relative z-10" />
      <p className={`${ubuntu.className} text-[#64748b] dark:text-[#94a3b8] leading-relaxed font-light relative z-10`}>
        {description}
      </p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-blue-50 dark:bg-[#0a192f] px-10 py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-20">
          <h2 className={`${tinos.className} text-3xl md:text-4xl font-bold text-[#0f172a] dark:text-[#f5ede0]`}>
            Digital solutions crafted <br /> with precision.
          </h2>
          <div className="w-10 h-[2px] bg-orange-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}