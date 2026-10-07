import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/growth-nexus-logo-v2.png";
import heroVideo from "@/assets/hero-video.mp4";
import dashboardSales from "@/assets/dashboard-sales.jpg";
import dashboardScale from "@/assets/dashboard-scale.jpg";
import creativeSaltys from "@/assets/creative-saltys.jpeg";
import creativeEveryCine from "@/assets/creative-everycine.jpeg";
import basedInUae from "@/assets/based-in-uae.jpeg";
import imgRealEstate from "@/assets/whatwedo-realestate.jpeg";
import imgBeauty from "@/assets/whatwedo-beauty.jpeg";
import imgHealthcare from "@/assets/whatwedo-healthcare.jpeg";
import imgFinance from "@/assets/whatwedo-finance.jpeg";
import why1 from "@/assets/why-1-uae.jpeg";
import why2 from "@/assets/why-2-data.jpeg";
import why3 from "@/assets/why-3-leadgen.jpeg";
import why4 from "@/assets/why-4-performance.jpeg";
import why5 from "@/assets/why-5-creative.jpeg";
import why6 from "@/assets/why-6-reporting.jpeg";
import why7 from "@/assets/why-7-automation.jpeg";
import why8 from "@/assets/why-8-conversion.jpeg";
import process1 from "@/assets/process-1-audit.jpeg";
import process2 from "@/assets/process-2-creative.jpeg";
import process3 from "@/assets/process-3-launch.jpeg";
import process4 from "@/assets/process-4-scale.jpeg";

// Contact — edit these to your real details.
const WHATSAPP_NUMBER = "971527017089"; // international format, no +
const PHONE_DISPLAY = "+971 52 701 7089";
const PHONE_TEL = "+971527017089";
const EMAIL = "growthnexus.45@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/share/1H4TYWd15T/";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("gn-theme")) as "light" | "dark" | null;
    const initial = stored ?? (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("gn-theme", next); } catch {}
  };

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".gn-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
          } else {
            e.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/growthnexus.45@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (!response.ok) throw new Error("Form submission failed");

      setSent(true);
      form.reset();
    } catch {
      setSent(false);
      alert("Unable to send your message right now. Please try again or contact us on WhatsApp.");
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Growth Nexus, I'd like to discuss a campaign.")}`;

  return (
    <div className="min-h-screen gn-grid-bg" style={{ backgroundColor: "var(--gn-bg-0)", color: "var(--gn-txt-0)" }}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ background: "var(--gn-nav)", borderBottom: "1px solid var(--gn-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          <a href="#home" aria-label="Growth Nexus — back to top" className="flex items-center gap-3">
            <span
              className="h-14 w-14 flex items-center justify-center rounded-full transition-colors"
              style={theme === "dark" ? { background: "#fff", boxShadow: "0 0 12px rgba(96,165,250,0.35)" } : {}}
            >
              <img
                src={logoAsset}
                alt="Growth Nexus logo"
                className="h-11 w-11 object-contain"
              />
            </span>
            <span className="gn-display font-semibold tracking-tight text-lg hidden sm:inline">
              GROWTH <span className="gn-gradient-text">NEXUS</span>
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-8 gn-mono text-[13px]" style={{ color: "var(--gn-txt-1)" }}>
            <a href="#home" className="hover:text-[color:var(--gn-mist)] transition-colors">Home</a>
            <a href="#services" className="hover:text-[color:var(--gn-mist)] transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-[color:var(--gn-mist)] transition-colors">Case Studies</a>
            <a href="#about" className="hover:text-[color:var(--gn-mist)] transition-colors">About</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
              style={{ borderColor: "var(--gn-border)", background: "color-mix(in oklab, var(--gn-mist) 8%, transparent)", color: "var(--gn-txt-0)" }}
            >
              {theme === "dark" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
              )}
            </button>
            <a href="#contact" className="hidden md:inline-flex gn-btn-primary" style={{ padding: ".55rem 1.15rem", fontSize: "13px" }}>
              Contact Us
            </a>
          </div>
          <button aria-label="Menu" onClick={() => setMenuOpen(v => !v)} className="lg:hidden">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-1 px-6 pb-6 gn-mono text-sm" style={{ background: "var(--gn-bg-1)", borderTop: "1px solid var(--gn-border)" }}>
            <a onClick={() => setMenuOpen(false)} href="#home" className="py-3 border-b border-black/5">Home</a>
            <a onClick={() => setMenuOpen(false)} href="#services" className="py-3 border-b border-black/5">Services</a>
            <a onClick={() => setMenuOpen(false)} href="#case-studies" className="py-3 border-b border-black/5">Case Studies</a>
            <a onClick={() => setMenuOpen(false)} href="#about" className="py-3 border-b border-black/5">About</a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="py-3 font-semibold" style={{ color: "var(--gn-mist)" }}>Contact Us</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
          <div className="gn-orb gn-orb-a" style={{ zIndex: 1 }} />
          <div className="gn-orb gn-orb-b" style={{ zIndex: 1 }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: headline */}
          <div className="lg:col-span-8 gn-fade-up">
            <p className="gn-mono text-[12px] tracking-[0.25em] mb-6 text-white/80">
              Scale your business beyond limits
            </p>

            <h1 className="gn-display font-semibold leading-[1.02] tracking-tight text-[9vw] sm:text-[7vw] lg:text-[5.2vw] xl:text-[5rem] text-white drop-shadow-lg">
              <span className="block">More Qualified Leads.</span>
              <span className="block gn-gradient-text-light">Less Wasted Ad Spend.</span>
            </h1>

            <p className="text-base sm:text-lg font-normal mt-6 max-w-2xl text-white/85 leading-relaxed">
              Strategic Facebook and Instagram advertising focused on generating better-quality enquiries through clear offers, effective creative and ongoing optimisation.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S9.3 127.6 7.6 163.5c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 gn-fade-up">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="gn-btn-primary">
                Get a Free Meta Ads Audit
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              </a>
              <a href="#case-studies" className="gn-btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.08)" }}>
                View Case Studies
              </a>
            </div>
          </div>

          {/* Right: vertical meta + stat cards */}
          <div className="lg:col-span-4 flex flex-col gap-5 gn-fade-up">
            <div className="grid grid-cols-2 gap-3">
              <div className="gn-glass-light rounded-2xl p-5 gn-reveal" style={{ transitionDelay: "0.1s" }}>
                <div className="gn-display text-3xl font-semibold text-white">500+</div>
                <div className="gn-mono text-[10px] tracking-widest mt-1 text-white/70">CAMPAIGNS</div>
              </div>
              <div className="gn-glass-light rounded-2xl p-5 gn-reveal" style={{ transitionDelay: "0.2s" }}>
                <div className="gn-display text-3xl font-semibold text-white">5.0★</div>
                <div className="gn-mono text-[10px] tracking-widest mt-1 text-white/70">AVG RATING</div>
              </div>
              <div className="gn-glass-light rounded-2xl p-5 col-span-2 flex items-center justify-between gn-reveal" style={{ transitionDelay: "0.3s" }}>
                <div>
                  <div className="gn-mono text-[10px] tracking-widest text-white/90">Our Services</div>
                  <ul className="mt-2 text-[13px] text-white/95 space-y-0.5 leading-snug">
                    <li>· Meta Ads Management</li>
                    <li>· Lead Generation Campaigns</li>
                    <li>· Sales Conversion Campaigns</li>
                    <li>· ROAS Optimization</li>
                    <li>· Retargeting Campaigns</li>
                    <li>· Campaign Scaling &amp; Performance Tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative border-y py-4 overflow-hidden gn-marquee-glow" style={{ borderColor: "rgba(122,157,150,.15)", background: "rgba(122,157,150,.04)" }}>
        <div className="gn-marquee gn-mono text-sm gap-16 whitespace-nowrap" style={{ color: "var(--gn-txt-1)" }}>
          {[0, 1].map(i => (
            <span key={i} className="flex gap-16 pr-16">
              <span>PERFORMANCE MARKETING</span><span style={{ color: "var(--gn-mist)" }}>◆</span>
              <span>UAE MARKET EXPERTS</span><span style={{ color: "var(--gn-mist)" }}>◆</span>
              <span>DATA-DRIVEN GROWTH</span><span style={{ color: "var(--gn-mist)" }}>◆</span>
              <span>PAID SOCIAL &amp; META ADS</span><span style={{ color: "var(--gn-mist)" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden py-24 px-6 md:px-10">
        <div className="gn-section-orb" style={{ width: 420, height: 420, top: "10%", left: "-160px" }} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            
            <h2 className="gn-display text-4xl md:text-5xl font-semibold mt-6 leading-tight">
              Built for ambitious UAE brands
            </h2>
            <p className="mt-6 leading-relaxed" style={{ color: "var(--gn-txt-1)" }}>
              Growth Nexus is a performance-driven digital advertising agency serving ambitious businesses across the UAE. We don't just run ads — we engineer growth systems: strategy, creative, media buying, and optimization working as one connected machine.
            </p>
            <div className="mt-10 rounded-2xl overflow-hidden gn-reveal" style={{ border: "1px solid var(--gn-border)" }}>
              <div style={{ background: theme === "dark" ? "#0b1424" : "#dde8f7" }}>
                <img
                  src={basedInUae}
                  alt="UAE skyline illustration"
                  className="w-full block"
                  style={theme === "dark" ? { filter: "brightness(0.6) saturate(1.6)", mixBlendMode: "screen", opacity: 0.85 } : { display: "block" }}
                />
              </div>
              <div className="px-5 py-4 flex items-center gap-3" style={{ background: "var(--gn-bg-1)", borderTop: "1px solid var(--gn-border)" }}>
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" style={{ color: "var(--gn-mist)" }}/></svg>
                <span className="gn-mono text-[11px] tracking-widest" style={{ color: "var(--gn-mist)" }}>BASED IN</span>
                <span className="font-semibold">United Arab Emirates</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                top: "2019", sub: "Foundational campaign expertise", offset: "",
                icon: <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-80"><rect x="6" y="10" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="1.6"/><path d="M6 16h28" stroke="currentColor" strokeWidth="1.6"/><path d="M13 6v5M27 6v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><rect x="11" y="21" width="5" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="18" y="21" width="5" height="4" rx="1" fill="currentColor" opacity=".35"/></svg>,
              },
              {
                top: "500+", sub: "Campaigns launched & optimized", offset: "mt-8",
                icon: <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-80"><path d="M7 30 L13 22 L19 25 L26 14 L33 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M28 10h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="13" cy="22" r="2" fill="currentColor" opacity=".5"/><circle cx="19" cy="25" r="2" fill="currentColor" opacity=".4"/><circle cx="26" cy="14" r="2" fill="currentColor" opacity=".6"/></svg>,
              },
              {
                top: "5.0", sub: "Average client rating", offset: "-mt-8",
                icon: <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-80"><path d="M20 7l3.09 6.26L30 14.27l-5 4.87 1.18 6.86L20 22.77l-6.18 3.23L15 19.14l-5-4.87 6.91-1.01L20 7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="currentColor" opacity=".25"/><path d="M20 7l3.09 6.26L30 14.27l-5 4.87 1.18 6.86L20 22.77" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>,
              },
              {
                top: "98%", sub: "Client satisfaction rate", offset: "",
                icon: <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-80"><circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.6"/><path d="M14 20.5c0 0 2 3.5 6 3.5s6-3.5 6-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="15.5" cy="17" r="1.5" fill="currentColor"/><circle cx="24.5" cy="17" r="1.5" fill="currentColor"/></svg>,
              },
            ].map((s, i) => (
              <div key={i} className={`gn-glass rounded-2xl p-6 flex flex-col justify-between h-52 gn-reveal ${s.offset}`} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div style={{ color: "var(--gn-mist)" }}>{s.icon}</div>
                <div>
                  <div className="text-3xl gn-display font-semibold gn-gradient-text">{s.top}</div>
                  <div className="text-sm mt-1" style={{ color: "var(--gn-txt-1)" }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="services" className="relative overflow-hidden py-24 px-6 md:px-10">
        <div className="gn-section-orb" style={{ width: 460, height: 460, top: "20%", right: "-180px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="gn-display text-4xl md:text-5xl font-semibold">
              Why businesses choose <span className="gn-gradient-text">Growth Nexus</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {[
              { num: "01", title: "UAE Market Expertise", desc: "Deep understanding of buyer behavior across Dubai, Abu Dhabi & Sharjah.", img: why1 },
              { num: "02", title: "Data-Driven Advertising", desc: "Every decision backed by real account data, not assumptions.", img: why2 },
              { num: "03", title: "Lead Generation Systems", desc: "Full-funnel systems that turn cold traffic into booked calls.", img: why3 },
              { num: "04", title: "Performance Marketing", desc: "Pay for outcomes, not impressions — ROAS is the north star.", img: why4 },
              { num: "05", title: "Premium Creative Design", desc: "Scroll-stopping ad creative built for each industry's audience.", img: why5 },
              { num: "06", title: "Transparent Reporting", desc: "Live dashboards — you always know where every dirham goes.", img: why6 },
              { num: "07", title: "Growth Automation", desc: "Systems and workflows that scale campaigns without chaos.", img: why7 },
              { num: "08", title: "Conversion Optimization", desc: "Continuous testing on creative, audiences and landing pages.", img: why8 },
            ].map((item) => (
              <div key={item.title} className="gn-glass gn-glow-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform gn-reveal flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 gn-mono font-bold text-xs" style={{ background: "rgba(37,99,235,0.12)", color: "var(--gn-mist)" }}>
                    {item.num}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--gn-txt-1)" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="py-24 px-6 md:px-10 gn-grid-bg">
        <div className="max-w-7xl mx-auto">
          {/* WHAT WE DO */}
          <div className="mt-20">
            <h3 className="gn-display text-2xl md:text-3xl font-semibold mb-8">What We Do</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "Real Estate", desc: "Lead engines for brokers, developers and off-plan launches across the Emirates.", img: imgRealEstate },
                { title: "Beauty & Aesthetics", desc: "Bookings-first campaigns for clinics, salons and aesthetic brands.", img: imgBeauty },
                { title: "Healthcare & Fitness", desc: "Patient acquisition and membership funnels that fill your calendar.", img: imgHealthcare },
                { title: "Financial & Business Services", desc: "Qualified lead systems for finance, insurance and B2B services.", img: imgFinance },
              ].map((c, i) => (
                <div key={c.title} className="gn-glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform gn-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-2">{c.title}</h4>
                    <p className="text-sm" style={{ color: "var(--gn-txt-1)" }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CASE STUDIES */}
          <div id="case-studies" className="mt-20 scroll-mt-24">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 gn-mono" style={{ color: "var(--gn-mist)" }}>◆ Case Studies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "Beauty Salon — Appointment Growth", tag: "BEAUTY / BOOKINGS", url: "/case-beauty.pdf", desc: "A beauty salon needed a steady stream of booked appointments rather than empty chairs. We rebuilt the ad account around a local booking funnel, tested multiple creatives, and optimized for cost per appointment." },
                { title: "Home Finance — Lead Generation", tag: "FINANCE / LEADS", url: "/case-homefinance.pdf", desc: "A home finance provider was struggling to attract qualified borrowers. We launched a lead-generation system combining lookalike audiences, retargeting, and a simplified landing page that improved lead quality and cut cost per lead." },
                { title: "Insurance — Lead Generation", tag: "INSURANCE / LEADS", url: "/case-insurance.pdf", desc: "An insurance brand needed consistent, high-intent leads without increasing the budget. We restructured the campaigns by audience intent, introduced automated lead nurturing, and scaled the winners." },
                { title: "Property — Lead Generation", tag: "REAL ESTATE / LEADS", url: "/case-property.pdf", desc: "A property agency wanted more serious buyer inquiries. We built conversion-focused campaigns targeting in-market audiences, refined the creative by unit type, and delivered qualified leads directly to the sales team." },
                { title: "Amazon Services — B2B Lead Generation", tag: "B2B / LEADS", url: "/case-amazon-b2b.pdf", desc: "A B2B company offering Amazon-related services wanted relevant enquiries from business owners. We kept the structure simple, focused messaging on real business problems, and reviewed performance regularly to reduce spend on weaker variations." },
              ].map((c, i) => (
                <a
                  key={c.title}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="gn-glass gn-glow-card rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform gn-reveal group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div>
                    <span className="gn-mono text-[10px] px-2.5 py-1 rounded-full border" style={{ borderColor: "rgba(122,157,150,.5)", color: "var(--gn-cerulean)" }}>{c.tag}</span>
                    <h4 className="font-semibold text-lg mt-4">{c.title}</h4>
                    <p className="text-sm mt-3 leading-relaxed line-clamp-3" style={{ color: "var(--gn-txt-1)" }}>{c.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 gn-mono text-xs" style={{ color: "var(--gn-mist)" }}>
                    Read more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 gn-mono" style={{ color: "var(--gn-mist)" }}>◆ Live Ad Accounts Performance</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { img: dashboardSales, tag: "META ADS / SALES", label: "AUDIT 01", title: "Multi-City Sales Campaign", m1: "5.1x", m1l: "Peak ROAS", m2: "$8.05", m2l: "Cost / Purchase" },
                { img: dashboardScale, tag: "META ADS / SCALE", label: "AUDIT 02", title: "Multi-City Scale Campaign", m1: "210K+", m1l: "Impressions", m2: "3.85%", m2l: "CTR (link)" },
              ].map((c, i) => (
                <div key={c.title} className="gn-glass rounded-2xl overflow-hidden group gn-reveal gn-zoom" style={{ transitionDelay: `${i * 0.15}s` }}>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 border-t" style={{ borderColor: "rgba(122,157,150,.15)" }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="gn-mono text-[10px] px-2.5 py-1 rounded-full border" style={{ borderColor: "rgba(122,157,150,.5)", color: "var(--gn-cerulean)" }}>{c.tag}</span>
                      <span className="gn-mono text-[10px]" style={{ color: "var(--gn-txt-1)" }}>{c.label}</span>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{c.title}</h4>
                    <div className="flex gap-6 text-sm">
                      <div><span className="font-bold" style={{ color: "var(--gn-mist)" }}>{c.m1}</span> <span style={{ color: "var(--gn-txt-1)" }}>{c.m1l}</span></div>
                      <div><span className="font-bold" style={{ color: "var(--gn-mist)" }}>{c.m2}</span> <span style={{ color: "var(--gn-txt-1)" }}>{c.m2l}</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-xs font-bold tracking-widest uppercase mb-6 gn-mono" style={{ color: "var(--gn-mist)" }}>◆ Premium Creative Asset Layouts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { img: creativeEveryCine, tag: "ENTERTAINMENT / APP INSTALL", label: "ASSET 01", title: "EveryCine — App Install Creative", desc: "High-impact conversion layout that drove low-CPI installs across the Emirates." },
                { img: creativeSaltys, tag: "LEISURE / RESERVATIONS", label: "ASSET 02", title: "Salty's Water Sports — Booking Ad", desc: "Scroll-stopping lifestyle ad built to drive direct reservations." },
              ].map((c, i) => (
                <div key={c.title} className="gn-glass rounded-2xl overflow-hidden group gn-reveal gn-zoom" style={{ transitionDelay: `${i * 0.15}s` }}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 border-t" style={{ borderColor: "rgba(122,157,150,.15)" }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="gn-mono text-[10px] px-2.5 py-1 rounded-full border" style={{ borderColor: "rgba(122,157,150,.5)", color: "var(--gn-cerulean)" }}>{c.tag}</span>
                      <span className="gn-mono text-[10px]" style={{ color: "var(--gn-txt-1)" }}>{c.label}</span>
                    </div>
                    <h4 className="font-semibold text-lg">{c.title}</h4>
                    <p className="text-sm mt-1" style={{ color: "var(--gn-txt-1)" }}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative overflow-hidden py-24 px-6 md:px-10">
        <div className="gn-section-orb" style={{ width: 420, height: 420, bottom: "5%", left: "-160px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            
            <h2 className="gn-display text-4xl md:text-5xl font-semibold mt-6">
              Engineered for <span className="gn-gradient-text">Predictable Growth</span>
            </h2>
            <p className="mt-4" style={{ color: "var(--gn-txt-1)" }}>
              A systematic 4-phase framework to launch, stabilize, and scale performance channels.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Audit & Strategy", desc: "Deep account diagnostic and market modeling to find leakage and margin vectors.", img: process1 },
              { num: "02", title: "Creative Velocity", desc: "Rapid multi-angle production of premium creative built to bypass fatigue.", img: process2 },
              { num: "03", title: "Launch & Stabilize", desc: "Clean deployment within ML-driven structures for stable delivery.", img: process3 },
              { num: "04", title: "Scale & Automate", desc: "Vertical and algorithmic scale with automation locking target ROAS.", img: process4 },
            ].map((p, i) => (
              <div key={p.num} className={`gn-glass rounded-2xl overflow-hidden gn-reveal hover:-translate-y-1 transition-transform ${i % 2 ? "md:mt-8" : ""}`} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <div className="gn-display font-bold text-2xl leading-none" style={{ color: "var(--gn-honey)" }}>{p.num}</div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--gn-txt-1)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative overflow-hidden py-24 px-6 md:px-10 gn-grid-bg">
        <div className="gn-section-orb" style={{ width: 460, height: 460, top: "10%", right: "-180px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            
            <h2 className="gn-display text-4xl md:text-5xl font-semibold mt-6">
              Endorsements from the <span className="gn-gradient-text">Frontlines</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "Growth Nexus built a system that completely transformed our lead flow in Dubai. Cost per qualified lead dropped 42% in 30 days.", n: "Ahmad Al-Mansoori", role: "Real Estate Developer", i: "AH" },
              { q: "We tried multiple regional agencies but none matched their technical and strategic rigor. Highly collaborative and results-focused.", n: "Sarah Radclyffe", role: "Marketing Director", i: "SR" },
              { q: "The live dashboards changed everything. Absolute visibility on ad spend and clear acquisition pathways.", n: "Marcus Keller", role: "CEO, Finance Services UAE", i: "MK" },
            ].map((t, i) => (
              <div key={t.n} className="gn-glow-card rounded-2xl p-8 flex flex-col justify-between gn-reveal" style={{ background: "var(--gn-bg-0)", border: "2px solid var(--gn-border)", boxShadow: "0 8px 32px rgba(37,99,235,0.13), 0 2px 8px rgba(10,15,30,0.10)", transitionDelay: `${i * 0.12}s` }}>
                <div>
                  <div className="flex gap-1 mb-5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="w-5 h-5" viewBox="0 0 20 20" fill="#F59E0B"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <p className="font-semibold text-[1.05rem] leading-relaxed" style={{ color: "var(--gn-txt-0)" }}>"{t.q}"</p>
                </div>
                <div className="mt-8 pt-6 border-t flex items-center gap-3" style={{ borderColor: "var(--gn-border)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ background: "linear-gradient(135deg, #0A0F1E, #2563EB)", color: "#fff" }}>{t.i}</div>
                  <div>
                    <div className="font-bold text-base" style={{ color: "var(--gn-txt-0)" }}>{t.n}</div>
                    <div className="text-xs mt-0.5 font-medium" style={{ color: "var(--gn-mist)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="relative overflow-hidden py-24 px-6 md:px-10">
        <div className="gn-section-orb" style={{ width: 380, height: 380, bottom: "0%", left: "-140px" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="gn-display text-4xl md:text-5xl font-semibold">
              Frequently Asked <span className="gn-gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-5">
            {[
              { q: "How much should I spend on Meta Ads?", a: "Your budget depends on your industry, audience, and goals. We'll recommend a realistic starting budget after reviewing your business." },
              { q: "What do you need from me to get started?", a: "We'll need basic information about your business, your goals, target audience, offer, and access to the required Meta assets. We'll guide you through the entire setup process." },
              { q: "How soon will I see results?", a: "You may start seeing early leads within days, but consistent results usually take 1–2 weeks of testing and optimization." },
            ].map((f, i) => (
              <div key={f.q} className="gn-glass rounded-2xl p-6 gn-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="font-semibold text-lg">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--gn-txt-1)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6 md:px-10 scroll-mt-24 relative overflow-hidden"
        style={{ background: "var(--gn-bg-0)" }}
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(700px 400px at 0% 50%, color-mix(in oklab, var(--gn-mist) 10%, transparent), transparent 60%), radial-gradient(500px 400px at 100% 100%, color-mix(in oklab, var(--gn-honey) 8%, transparent), transparent 55%)" }} />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 relative z-10">
          <div>
            <div className="gn-glass rounded-2xl p-8 mb-8 gn-reveal">
              <h2 className="gn-display text-4xl md:text-5xl font-semibold">
                Ready to Activate Your <span className="gn-gradient-text">Engine?</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: "var(--gn-txt-1)" }}>
                Schedule a free baseline audit. We'll evaluate your current ad accounts and highlight immediate margin recovery targets.
              </p>
            </div>

            <div className="space-y-4">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-4 gn-glass rounded-xl p-4 hover:-translate-y-1 transition-transform gn-reveal" style={{ transitionDelay: "0.05s" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "#25D366" }}>
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm" style={{ color: "var(--gn-txt-1)" }}>Chat instantly — {PHONE_DISPLAY}</div>
                </div>
              </a>

              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-4 gn-glass rounded-xl p-4 hover:-translate-y-1 transition-transform gn-reveal" style={{ transitionDelay: "0.1s" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--gn-cerulean)" }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M22 16.92V21a1 1 0 01-1.11 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.19 4.11 1 1 0 014.18 3h4.09a1 1 0 011 .75 12.34 12.34 0 00.66 2.65 1 1 0 01-.23 1L8 9.09a16 16 0 006 6l1.69-1.69a1 1 0 011-.23 12.34 12.34 0 002.65.66 1 1 0 01.66 1z" stroke="#DCAE1D" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="font-semibold">Call us</div>
                  <div className="text-sm" style={{ color: "var(--gn-txt-1)" }}>{PHONE_DISPLAY}</div>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 gn-glass rounded-xl p-4 hover:-translate-y-1 transition-transform gn-reveal" style={{ transitionDelay: "0.15s" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--gn-mist)" }}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M4 6h16v12H4z M4 6l8 7 8-7" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm" style={{ color: "var(--gn-txt-1)" }}>{EMAIL}</div>
                </div>
              </a>

              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="flex items-center gap-4 gn-glass rounded-xl p-4 hover:-translate-y-1 transition-transform gn-reveal" style={{ transitionDelay: "0.2s" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: "#1877F2" }}>
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.4-2 2-2h2V2.1C16.6 2 15.4 2 14.3 2 11.7 2 10 3.6 10 6.7V10H7v4h3v8h3z"/></svg>
                </div>
                <div>
                  <div className="font-semibold">Facebook</div>
                  <div className="text-sm" style={{ color: "var(--gn-txt-1)" }}>Follow our page</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="gn-glass rounded-3xl p-8 space-y-4 gn-reveal" style={{ transitionDelay: "0.1s" }}>
            <h3 className="gn-display text-2xl font-semibold">Send us a message</h3>
            <p className="text-sm" style={{ color: "var(--gn-txt-1)" }}>
              Send your details directly to our inbox. No email app is required.
            </p>

            <div>
              <label className="text-xs gn-mono tracking-widest" style={{ color: "var(--gn-txt-1)" }}>NAME</label>
              <input required name="name" type="text" className="mt-1 w-full rounded-lg px-4 py-3 border focus:outline-none" style={{ borderColor: "var(--gn-border)", background: "var(--gn-input)", color: "var(--gn-txt-0)" }} placeholder="Your full name" />
            </div>
            <div>
              <label className="text-xs gn-mono tracking-widest" style={{ color: "var(--gn-txt-1)" }}>EMAIL</label>
              <input required name="email" type="email" className="mt-1 w-full rounded-lg px-4 py-3 border focus:outline-none" style={{ borderColor: "var(--gn-border)", background: "var(--gn-input)", color: "var(--gn-txt-0)" }} placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-xs gn-mono tracking-widest" style={{ color: "var(--gn-txt-1)" }}>SERVICE</label>
              <select name="service" className="mt-1 w-full rounded-lg px-4 py-3 border focus:outline-none" style={{ borderColor: "var(--gn-border)", background: "var(--gn-input)", color: "var(--gn-txt-0)" }}>
                <option>Meta Ads Management</option>
                <option>Lead Generation</option>
                <option>Creative Design</option>
                <option>Full Growth System</option>
                <option>Audit & Strategy</option>
              </select>
            </div>
            <div>
              <label className="text-xs gn-mono tracking-widest" style={{ color: "var(--gn-txt-1)" }}>MESSAGE</label>
              <textarea required name="message" rows={4} className="mt-1 w-full rounded-lg px-4 py-3 border focus:outline-none" style={{ borderColor: "var(--gn-border)", background: "var(--gn-input)", color: "var(--gn-txt-0)" }} placeholder="Tell us about your business and goals..." />
            </div>
            <button type="submit" className="gn-btn-primary w-full justify-center">
              {sent ? "Message Sent ✓" : "Send Message"}
            </button>
            <p className="text-xs text-center" style={{ color: "var(--gn-txt-1)" }}>
              Prefer instant? <a href={whatsappHref} target="_blank" rel="noreferrer" className="underline">Message us on WhatsApp</a>.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t px-6 md:px-10 py-14" style={{ borderColor: "var(--gn-border)", background: "var(--gn-bg-1)", color: "var(--gn-txt-1)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span
                className="h-14 w-14 flex items-center justify-center rounded-full transition-colors"
                style={theme === "dark" ? { background: "#fff", boxShadow: "0 0 12px rgba(96,165,250,0.35)" } : {}}
              >
                <img src={logoAsset} alt="Growth Nexus" className="h-11 w-11 object-contain" />
              </span>
              <span className="gn-display font-semibold tracking-tight text-lg" style={{ color: "var(--gn-txt-0)" }}>
                GROWTH <span className="gn-gradient-text">NEXUS</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Performance-driven Meta Ads for ambitious UAE brands. Better leads, less waste.
            </p>
          </div>
          <div>
            <div className="gn-mono text-[11px] tracking-widest mb-3" style={{ color: "var(--gn-txt-0)" }}>CONTACT</div>
            <ul className="space-y-2 text-sm">
              <li><a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp · {PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a></li>
              <li><a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
          <div>
            <div className="gn-mono text-[11px] tracking-widest mb-3" style={{ color: "var(--gn-txt-0)" }}>LEGAL</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:underline">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t text-xs gn-mono flex flex-col md:flex-row justify-between gap-2" style={{ borderColor: "var(--gn-border)" }}>
          <span>Copyright © 2026 Growth Nexus</span>
          <span>All rights reserved</span>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp"
         className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center gn-pulse"
         style={{ background: "#25D366" }}>
        <svg className="w-7 h-7 fill-white" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
      </a>
    </div>
  );
}