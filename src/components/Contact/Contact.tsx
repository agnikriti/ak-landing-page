'use client'

import { useState } from "react";
import { toast } from "sonner";
import { FaWhatsapp, FaMagnifyingGlass, FaHandshake } from "react-icons/fa6";
import { tinos, dmSans, ubuntu } from "@/lib/fonts";

type FormState = {
  name: string;
  email: string;
  mobile: string;
  title: string;
  quote: string;
  description: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMPTY_FORM: FormState = { name: "", email: "", mobile: "", title: "", quote: "", description: "" };

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.09 12.5a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
    </svg>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("loading");
    try {
      const res = await fetch("https://agnikriti.onrender.com/api/internet_services/v1/sendProposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          email: form.email,
          mobile: form.mobile,
          quote: Number(form.quote) || 0,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitStatus("success");
        toast.success(data.message || "Proposal sent successfully!");
        setForm(EMPTY_FORM);
      } else {
        setSubmitStatus("error");
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="bg-blue-50 dark:bg-[#030a16] px-10 py-16 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-xl space-y-6">
            <h2 className={`${tinos.className} text-3xl md:text-4xl font-bold text-[#0f172a] dark:text-[#f5ede0] leading-[1.1]`}>
              Let&apos;s build something <br /> exceptional together.
            </h2>
            <div className="w-10 h-[2px] bg-orange-500 mt-3" />
            <p className={`${ubuntu.className} text-lg text-[#64748b] dark:text-[#94a3b8] font-light leading-relaxed`}>
              Whether you have a fully-formed idea or just the spark of a project, we&apos;re here to help you navigate the digital landscape with precision and craft.
            </p>
          </div>

          <div className="flex flex-col gap-8 pt-4">
            <div className="group flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-[#ece7e0] dark:bg-[#112240] border border-black/5 dark:border-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <PhoneIcon />
              </div>
              <div>
                <p className={`${ubuntu.className} text-[10px] uppercase tracking-widest text-[#475569] dark:text-[#64748b] font-bold`}>Call Us Directly</p>
                <p className={`${tinos.className} text-xl font-bold text-[#0f172a] dark:text-[#f5ede0]`}>+91 7045273671</p>
              </div>
            </div>
            <a
              href="https://wa.me/917045273671"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#ece7e0] dark:bg-[#112240] border border-black/5 dark:border-white/5 flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <FaWhatsapp size={22} />
              </div>
              <div>
                <p className={`${ubuntu.className} text-[10px] uppercase tracking-widest text-[#475569] dark:text-[#64748b] font-bold`}>WhatsApp Chat</p>
                <p className={`${tinos.className} text-xl font-bold text-[#0f172a] dark:text-[#f5ede0]`}>Chat with us</p>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
          <div className="lg:col-span-3 h-full bg-blue-50 dark:bg-[#0a192f]/80 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[60px] rounded-full -mr-16 -mt-16" />

            <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                <div className="relative space-y-2">
                  <label className={`${ubuntu.className} text-[10px] uppercase tracking-[0.25em] text-[#0a192f] dark:text-[#94a3b8] font-bold ml-1 block`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 px-1 py-3 text-[#0f172a] dark:text-[#f5ede0] text-[15px] focus:outline-none focus:border-[#0a192f] transition-all duration-300 placeholder:text-[#94a3b8] dark:placeholder:text-[#3a4a6a]"
                    placeholder="Sunil Goyal"
                  />
                </div>
                <div className="relative space-y-2">
                  <label className={`${ubuntu.className} text-[10px] uppercase tracking-[0.25em] text-[#0a192f] dark:text-[#94a3b8] font-bold ml-1 block`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 px-1 py-3 text-[#0f172a] dark:text-[#f5ede0] text-[15px] focus:outline-none focus:border-[#0a192f] transition-all duration-300 placeholder:text-[#94a3b8] dark:placeholder:text-[#3a4a6a]"
                    placeholder="sunil@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                <div className="relative space-y-2">
                  <label className={`${ubuntu.className} text-[10px] uppercase tracking-[0.25em] text-[#0a192f] dark:text-[#94a3b8] font-bold ml-1 block`}>
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleFormChange}
                    required
                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 px-1 py-3 text-[#0f172a] dark:text-[#f5ede0] text-[15px] focus:outline-none focus:border-[#0a192f] transition-all duration-300 placeholder:text-[#94a3b8] dark:placeholder:text-[#3a4a6a]"
                    placeholder="e.g. 9876543210"
                  />
                </div>
                <div className="relative space-y-2">
                  <label className={`${ubuntu.className} text-[10px] uppercase tracking-[0.25em] text-[#0a192f] dark:text-[#94a3b8] font-bold ml-1 block`}>
                    Project Subject
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleFormChange}
                    required
                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 px-1 py-3 text-[#0f172a] dark:text-[#f5ede0] text-[15px] focus:outline-none focus:border-[#0a192f] transition-all duration-300 placeholder:text-[#94a3b8] dark:placeholder:text-[#3a4a6a]"
                    placeholder="e.g. E-commerce Platform"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                <div className="relative space-y-2">
                  <label className={`${ubuntu.className} text-[10px] uppercase tracking-[0.25em] text-[#0a192f] dark:text-[#94a3b8] font-bold ml-1 block`}>
                    Budget (₹)
                  </label>
                  <input
                    type="number"
                    name="quote"
                    value={form.quote}
                    onChange={handleFormChange}
                    min={0}
                    className="w-full bg-transparent border-b border-black/20 dark:border-white/20 px-1 py-3 text-[#0f172a] dark:text-[#f5ede0] text-[15px] focus:outline-none focus:border-[#0a192f] transition-all duration-300 placeholder:text-[#94a3b8] dark:placeholder:text-[#3a4a6a]"
                    placeholder="e.g. 250000"
                  />
                </div>
              </div>

              <div className="relative space-y-2">
                <label className={`${ubuntu.className} text-[10px] uppercase tracking-[0.25em] text-[#0a192f] dark:text-[#94a3b8] font-bold ml-1 block`}>
                  Tell Us About Your Idea
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  rows={3}
                  required
                  className="w-full bg-transparent border-b border-black/20 dark:border-white/20 px-1 py-3 text-[#0f172a] dark:text-[#f5ede0] text-[15px] focus:outline-none focus:border-[#0a192f] transition-all duration-300 resize-none placeholder:text-[#94a3b8] dark:placeholder:text-[#3a4a6a]"
                  placeholder="Tell us about your vision and goals..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitStatus === "loading"}
                  className={`
                    ${dmSans.className}
                    cursor-pointer
                    inline-flex items-center
                    px-8 py-3
                    bg-[#0a192f] dark:bg-orange-500
                    text-white text-sm tracking-[0.1em] font-semibold uppercase
                    rounded-[30px]
                    transition-all duration-300
                    hover:bg-[#112240] hover:shadow-[0_0_30px_rgba(10,25,47,0.5)] dark:hover:bg-orange-600 dark:hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]
                    active:scale-95
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#0a192f] dark:disabled:hover:bg-orange-500 disabled:hover:shadow-none
                  `}
                >
                  {submitStatus === "loading" ? "Sending..." : "Send your proposal"}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 h-full flex flex-col gap-8">
            <div className="flex-1 p-6 md:p-10 border border-black/10 dark:border-white/5 bg-blue-50 dark:bg-[#112240]/20 rounded-[32px] space-y-5 flex flex-col justify-center group hover:bg-blue-50 dark:hover:bg-[#112240]/30 shadow-2xl transition-all duration-500">
              <h4 className={`${tinos.className} text-lg font-bold text-[#0f172a] dark:text-[#f5ede0] flex items-center gap-3`}>
                <FaMagnifyingGlass size={16} className="text-orange-500 shrink-0" />
                Analysis
              </h4>
              <div className="w-8 h-[2px] bg-orange-500" />
              <p className={`${ubuntu.className} text-base text-[#64748b] dark:text-[#94a3b8] leading-relaxed`}>
                Once you submit your proposal, our team will review your requirements and reach out within 24 hours to schedule a discovery call.
              </p>
            </div>

            <div className="flex-1 p-6 md:p-10 border border-black/10 dark:border-white/5 bg-blue-50 dark:bg-[#112240]/20 rounded-[32px] space-y-5 flex flex-col justify-center group hover:bg-blue-50 dark:hover:bg-[#112240]/30 shadow-2xl transition-all duration-500">
              <h4 className={`${tinos.className} text-lg font-bold text-[#0f172a] dark:text-[#f5ede0] flex items-center gap-3`}>
                <FaHandshake size={16} className="text-orange-500 shrink-0" />
                Commitment
              </h4>
              <div className="w-8 h-[2px] bg-orange-500" />
              <p className={`${ubuntu.className} text-base text-[#64748b] dark:text-[#94a3b8] leading-relaxed`}>
                We prioritize transparency in pricing and delivery. Your data is handled with strict confidentiality and professional integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
