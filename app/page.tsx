import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-28">
          <div className="flex items-center gap-3">
            <Image
              src="/logo6.png"
              alt="NatureLogic logo"
              width={140}
              height={48}
              className="h-28 w-auto"
              priority
            />
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a
              className="font-headline tracking-tight font-semibold text-primary border-b-2 border-primary pb-1"
              href="#services"
            >
              Services
            </a>
            <a
              className="font-headline tracking-tight font-semibold text-on-surface/60 hover:text-primary transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="font-headline tracking-tight font-semibold text-on-surface/60 hover:text-primary transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="silk-gradient text-white px-6 py-2.5 rounded-xl font-headline font-semibold hover:opacity-80 transition-opacity duration-300"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Aerial view of structured agricultural landscape in the UK, patchwork fields of varying crops, sustainable farming aesthetic."
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9OJAW36Tmu7UE74rnrHcxgt02_LAWtYwLxaa3JfCGNjQ0s0rJc_k4A08VS3yR7CCzzSirysKwzMxJ-ipuZysS-z60xyPJY0NpowSe_bR8cIMheg0ZDOKNdqnHnb6Js_dgZqXNiuPiOTZ5j5Bq9JPLvWgRWOFhzIwP4AzqLyID4M1cpbyEGbPTZhLmpsPrK0hmNvNkqSzR0feqmm6IvWCLGqtP8AK6mEsgHOhZ6BCjf_v48MbWQJAdV0fmZ2pcR3RmKzeU_Usm2AJ2"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-white font-headline text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8">
                Providing Market-leading{" "}
                <span className="text-primary-fixed">Ecological Consultancy</span>{" "}
                and Biodiversity Net Gain Advice
              </h1>
              <p className="text-white/80 text-xl font-body font-light mb-10 leading-relaxed max-w-lg">
                Helping developers and infrastructure companies understand and navigate complex ecological requirements within the UK planning system.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="silk-gradient text-white px-8 py-4 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2"
                  href="#services"
                >
                  Our Services
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="bg-white/10 backdrop-blur-md text-white border border-white/25 px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/20 transition-all"
                  href="#contact"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-surface-container-low" id="services">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="text-secondary font-label tracking-[0.2em] uppercase text-xs mb-4 block font-semibold">
                  What We Do
                </span>
                <h2 className="text-primary font-headline text-4xl font-extrabold tracking-tight mb-4">
                  Our Services
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Deep ecological expertise delivered through modern, technology-enabled processes — helping your project move faster and with greater certainty.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

              {/* Early-stage ecological due diligence - large */}
              <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-xl editorial-shadow group hover:bg-primary transition-colors duration-500">
                <div className="mb-10 text-secondary group-hover:text-primary-fixed">
                  <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    search
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4 group-hover:text-white">
                  Early-stage Ecological Due Diligence
                </h3>
                <p className="text-on-surface-variant group-hover:text-white/75 leading-relaxed">
                  Understanding ecological risk and opportunity early in the planning process, so you can make better-informed decisions about site selection, project design, and programme management.
                </p>
              </div>

              {/* Habitats Regulations Assessment */}
              <div className="md:col-span-5 p-10 rounded-xl editorial-shadow overflow-hidden relative" style={{ background: 'linear-gradient(145deg, #2d4a6b 0%, #1a5c3a 100%)' }}>
                <div className="relative z-10">
                  <div className="mb-10 text-primary-fixed">
                    <span className="material-symbols-outlined text-5xl">
                      account_balance
                    </span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-4">
                    Habitats Regulations Assessment
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Expert HRA support to identify and address potential impacts on European protected sites, keeping your project on track.
                  </p>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <span className="material-symbols-outlined text-[12rem]">
                    eco
                  </span>
                </div>
              </div>

              {/* Protected Species */}
              <div className="md:col-span-5 bg-secondary-container p-10 rounded-xl editorial-shadow group">
                <div className="mb-10 text-primary">
                  <span className="material-symbols-outlined text-5xl">
                    pest_control_rodent
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                  Protected Species Surveys
                </h3>
                <p className="text-on-secondary-container leading-relaxed">
                  Specialist surveys and licensing for bats, Great Crested Newts, reptiles, dormice, badgers, and other legally protected species.
                </p>
              </div>

              {/* Strategic Ecological Advice */}
              <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-xl editorial-shadow group hover:bg-primary transition-colors duration-500">
                <div className="mb-10 text-secondary group-hover:text-primary-fixed">
                  <span className="material-symbols-outlined text-5xl">
                    strategy
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4 group-hover:text-white">
                  Strategic Ecological Advice
                </h3>
                <p className="text-on-surface-variant group-hover:text-white/75 leading-relaxed">
                  High-level ecological strategy combining deep expertise with technology-enabled delivery — helping clients navigate the UK planning system with confidence.
                </p>
              </div>

              {/* Preliminary Ecological Appraisal */}
              <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl editorial-shadow group hover:bg-primary transition-colors duration-500">
                <div className="mb-8 text-secondary group-hover:text-primary-fixed">
                  <span className="material-symbols-outlined text-5xl">
                    park
                  </span>
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 group-hover:text-white">
                  Preliminary Ecological Appraisal
                </h3>
                <p className="text-on-surface-variant group-hover:text-white/75 leading-relaxed text-sm">
                  Baseline habitat and species assessments to inform planning applications and identify ecological constraints at an early stage.
                </p>
              </div>

              {/* Ecological Impact Assessment */}
              <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl editorial-shadow group hover:bg-primary transition-colors duration-500">
                <div className="mb-8 text-secondary group-hover:text-primary-fixed">
                  <span className="material-symbols-outlined text-5xl">
                    analytics
                  </span>
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 group-hover:text-white">
                  Ecological Impact Assessment
                </h3>
                <p className="text-on-surface-variant group-hover:text-white/75 leading-relaxed text-sm">
                  Rigorous assessment of likely significant effects on ecological receptors, supporting Environmental Impact Assessment and planning consent.
                </p>
              </div>

              {/* Invasive Species */}
              <div className="md:col-span-4 bg-surface-container-lowest p-10 rounded-xl editorial-shadow group hover:bg-primary transition-colors duration-500">
                <div className="mb-8 text-secondary group-hover:text-primary-fixed">
                  <span className="material-symbols-outlined text-5xl">
                    grass
                  </span>
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 group-hover:text-white">
                  Invasive Species Surveys
                </h3>
                <p className="text-on-surface-variant group-hover:text-white/75 leading-relaxed text-sm">
                  Identification, mapping, and management planning for invasive non-native species including Japanese Knotweed, Himalayan Balsam, and Giant Hogweed.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 bg-surface" id="about">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Professional ecologist conducting a field survey in UK countryside"
                  className="w-full h-full object-cover"
                  src="/about-image.jpg"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-primary p-12 rounded-xl hidden md:block max-w-xs editorial-shadow">
                <p className="text-primary-fixed text-4xl font-headline font-extrabold mb-2">
                  25+
                </p>
                <p className="text-white/80 font-label tracking-wider text-xs uppercase">
                  Years of Combined Field Expertise
                </p>
              </div>
            </div>
            <div>
              <span className="text-secondary font-label tracking-[0.2em] uppercase text-xs mb-6 block font-semibold">
                About NatureLogic
              </span>
              <h2 className="text-primary font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
                Deep ecological expertise,{" "}
                <span className="italic font-light">delivered differently.</span>
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  NatureLogic is an ecology consultancy founded by experienced ecologists to help developers and infrastructure companies understand and navigate complex ecological requirements within the UK planning system.
                </p>
                <p>
                  We bring together two things that the ecology sector has historically kept apart: deep ecological expertise and modern, technology-enabled delivery. Where most ecology consultancies still operate on manual processes — paper-based field data, slow report turnaround, spreadsheet-driven BNG calculations — NatureLogic is built from the ground up to work differently.
                </p>
                <p>
                  Technology is not an add-on; it is part of how we operate, how we deliver, and how we compete. Our particular strength is high-level ecological strategy — helping clients understand ecological risk and options early in the planning process.
                </p>
              </div>
              <div className="mt-12 pt-12 border-t border-outline-variant/30 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-headline font-bold text-primary text-xl mb-2">
                    CIEEM Certified
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Adhering to the highest codes of professional conduct.
                  </p>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-primary text-xl mb-2">
                    Policy Led
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Expertise in NPPF and local environmental policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-primary" id="contact">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-white font-headline text-4xl font-extrabold tracking-tight mb-6">
                Ready to discuss your project?
              </h2>
              <p className="text-white/70 text-lg font-light mb-12">
                Speak with a lead ecologist today about your site&apos;s requirements. We offer free initial consultations for all new development enquiries.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary-fixed border border-white/20">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Aaron Grainger</h4>
                    <p className="text-white/60">Founder &amp; Director</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary-fixed border border-white/20">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <a href="mailto:aarongrainger@naturelogic.co.uk" className="text-white/60 hover:text-white transition-colors">
                      aarongrainger@naturelogic.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary-fixed border border-white/20">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <a href="tel:07809383255" className="text-white/60 hover:text-white transition-colors">
                      07809 383255
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary-fixed border border-white/20">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      location_on
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Location</h4>
                    <p className="text-white/60">Based in London, operating nationwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-xl editorial-shadow">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-body"
                      placeholder="Jane Smith"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-body"
                      placeholder="jane@company.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase">
                    Project Type
                  </label>
                  <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none appearance-none font-body">
                    <option>Residential Development</option>
                    <option>Infrastructure Project</option>
                    <option>Renewable Energy</option>
                    <option>Biodiversity Net Gain Strategy</option>
                    <option>Protected Species Survey</option>
                    <option>Ecological Due Diligence</option>
                    <option>Invasive Species</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase">
                    Message / Site Details
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none font-body"
                    placeholder="How can we help you?"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  className="w-full silk-gradient text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all font-headline"
                  type="submit"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-16 pb-8" style={{ background: '#0f3522' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
          <div className="md:col-span-1">
            <Image
              src="/logo6.png"
              alt="NatureLogic"
              width={130}
              height={44}
              className="h-9 w-auto mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Expert ecological consultancy and biodiversity net gain advice for developers and infrastructure companies across the UK.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Services
            </h5>
            <ul className="space-y-3">
              {[
                "Early-stage Due Diligence",
                "Strategic Ecological Advice",
                "Preliminary Ecological Appraisal",
                "Ecological Impact Assessment",
                "Protected Species Surveys",
                "Invasive Species Surveys",
                "Habitats Regulations Assessment",
              ].map((service) => (
                <li key={service}>
                  <a className="text-white/50 hover:text-white transition-colors text-sm inline-block" href="#">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Company
            </h5>
            <ul className="space-y-3">
              {["About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a className="text-white/50 hover:text-white transition-colors text-sm inline-block" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Legal
            </h5>
            <ul className="space-y-3">
              <li><a className="text-white/50 hover:text-white transition-colors text-sm inline-block" href="/privacy">Privacy Policy</a></li>
              <li><a className="text-white/50 hover:text-white transition-colors text-sm inline-block" href="/terms">Terms of Service</a></li>
              </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs tracking-wide">
            © 2025 NatureLogic Ltd. UK Registered Company.
          </p>
          <div className="text-xs text-white/30">
            Company No: 16516775
          </div>
        </div>
      </footer>
    </>
  );
}
