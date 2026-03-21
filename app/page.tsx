export default function Home() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <div className="text-xl font-bold tracking-tighter text-emerald-900 dark:text-emerald-50 font-headline">
            The Ecological Observer
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a
              className="font-headline tracking-tight font-semibold text-emerald-700 dark:text-emerald-300 border-b-2 border-emerald-800 pb-1"
              href="#"
            >
              Services
            </a>
            <a
              className="font-headline tracking-tight font-semibold text-emerald-900/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors"
              href="#"
            >
              About
            </a>
            <a
              className="font-headline tracking-tight font-semibold text-emerald-900/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors"
              href="#"
            >
              Research
            </a>
            <a
              className="font-headline tracking-tight font-semibold text-emerald-900/70 dark:text-emerald-200/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors"
              href="#"
            >
              Case Studies
            </a>
          </div>
          <button className="silk-gradient text-white px-6 py-2.5 rounded-xl font-headline font-semibold hover:opacity-80 transition-opacity duration-300">
            Contact Us
          </button>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Aerial view of structured agricultural landscape in the UK, patchwork fields of varying crops, sustainable farming aesthetic."
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9OJAW36Tmu7UE74rnrHcxgt02_LAWtYwLxaa3JfCGNjQ0s0rJc_k4A08VS3yR7CCzzSirysKwzMxJ-ipuZysS-z60xyPJY0NpowSe_bR8cIMheg0ZDOKNdqnHnb6Js_dgZqXNiuPiOTZ5j5Bq9JPLvWgRWOFhzIwP4AzqLyID4M1cpbyEGbPTZhLmpsPrK0hmNvNkqSzR0feqmm6IvWCLGqtP8AK6mEsgHOhZ6BCjf_v48MbWQJAdV0fmZ2pcR3RmKzeU_Usm2AJ2"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-[0.75rem] font-label tracking-[0.05em] uppercase mb-6">
                UK Registered Consultancy
              </span>
              <h1 className="text-white font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
                Expert Ecology for{" "}
                <span className="text-primary-fixed">Sustainable</span>{" "}
                Development
              </h1>
              <p className="text-emerald-50/90 text-xl font-body mb-10 leading-relaxed max-w-lg">
                Navigating complex environmental regulations with scientific
                precision. We protect biodiversity while enabling your
                project&apos;s success.
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
                  className="bg-surface/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/20 transition-all"
                  href="#"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section: Bento Grid */}
        <section className="py-32 bg-surface-container-low" id="services">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-primary font-headline text-4xl font-extrabold tracking-tight mb-4">
                  Core Ecological Solutions
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Our multi-disciplinary team provides comprehensive surveying
                  and strategic advice across the UK&apos;s most sensitive
                  habitats.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Habitat Surveys */}
              <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-xl editorial-shadow group hover:bg-primary transition-colors duration-500">
                <div className="mb-12 text-primary group-hover:text-primary-fixed">
                  <span
                    className="material-symbols-outlined text-5xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    park
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4 group-hover:text-white">
                  Habitat Surveys
                </h3>
                <p className="text-on-surface-variant group-hover:text-emerald-100/80 mb-8 leading-relaxed">
                  From Preliminary Ecological Appraisals (PEA) to UKHab
                  classifications, we provide the baseline data required for
                  informed planning decisions.
                </p>
                <ul className="space-y-3 mb-10 group-hover:text-white">
                  <li className="flex items-center gap-3 font-label text-sm tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                    PRELIMINARY APPRAISALS
                  </li>
                  <li className="flex items-center gap-3 font-label text-sm tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                    BOTANICAL CLASSIFICATION
                  </li>
                  <li className="flex items-center gap-3 font-label text-sm tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                    ANCIENT WOODLAND ASSESSMENT
                  </li>
                </ul>
                <a
                  className="inline-flex items-center gap-2 text-primary group-hover:text-primary-fixed font-bold border-b-2 border-primary/20 group-hover:border-primary-fixed/20 pb-1"
                  href="#"
                >
                  Learn more
                </a>
              </div>

              {/* Biodiversity Net Gain */}
              <div className="md:col-span-5 bg-tertiary p-10 rounded-xl editorial-shadow overflow-hidden relative">
                <div className="relative z-10">
                  <div className="mb-12 text-primary-fixed">
                    <span className="material-symbols-outlined text-5xl">
                      biotech
                    </span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-white mb-4">
                    Biodiversity Net Gain
                  </h3>
                  <p className="text-tertiary-fixed-dim mb-8 leading-relaxed">
                    Mandatory 10% uplift strategy and Metric 4.0 calculations
                    for developers.
                  </p>
                  <a
                    className="inline-flex items-center gap-2 text-primary-fixed font-bold border-b-2 border-primary-fixed/20 pb-1"
                    href="#"
                  >
                    Explore BNG
                  </a>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <span className="material-symbols-outlined text-[12rem]">
                    eco
                  </span>
                </div>
              </div>

              {/* Protected Species */}
              <div className="md:col-span-5 bg-secondary-container p-10 rounded-xl editorial-shadow group">
                <div className="mb-12 text-primary">
                  <span className="material-symbols-outlined text-5xl">
                    pest_control_rodent
                  </span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-primary mb-4">
                  Protected Species
                </h3>
                <p className="text-on-secondary-container mb-8 leading-relaxed">
                  Expert licensing and mitigation for bats, Great Crested Newts,
                  dormice, and badgers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/50 rounded-full text-[0.65rem] font-bold tracking-tighter uppercase text-primary">
                    BATS
                  </span>
                  <span className="px-3 py-1 bg-white/50 rounded-full text-[0.65rem] font-bold tracking-tighter uppercase text-primary">
                    GCN
                  </span>
                  <span className="px-3 py-1 bg-white/50 rounded-full text-[0.65rem] font-bold tracking-tighter uppercase text-primary">
                    REPTILES
                  </span>
                </div>
              </div>

              {/* Strategic Consultancy */}
              <div className="md:col-span-7 relative h-64 md:h-auto rounded-xl overflow-hidden group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Rolling green hills in the British countryside"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWmZcA7lDhZwGixCq9zFS-cBn3r1lbHjyJyDshvFtq38N0TSzHIpIqlV8BgXGrHJS5pkG-xcSKENLZ6RxuqcaFtBmpZlhhe0WQqK0zwazuONlv2dRUUeU_ZWksIaKRHtXw41t45ihbSF2tus-PIIkU3bIBUO_5ME5FCcOOILC_0mIgXWKbUdLxKC_9zwZO61irLRbFzWS_kK-V2jfa-aiax1iqa4mdKGwHJQBCPiNnn60OIgveqkwA_5wmBMYPXegYhYkQ2n-rnfNY"
                />
                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex flex-col justify-end p-10">
                  <h3 className="text-2xl font-headline font-bold text-white mb-2">
                    Strategic Consultancy
                  </h3>
                  <p className="text-white/80 max-w-sm">
                    Long-term environmental stewardship and land management
                    plans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us: Asymmetric Layout */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Professional ecologist conducting a field survey in UK countryside"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4XYd61tzFAEqhbZ3YS5Da4GNY-u2Ti5LlejDJmvJXysX2gsUw9KJbRG-qfujGaOe3H6N_PuFv5fmBm6a5I0aMnw7pTteF65bXeswYNhuCqUZycZm2h37Owf0ItfkbBoebL2x5cRj3fMtxxtVBLOxXl_djX2j2BtAD8_k0jlbffA_YL1IHZ3IfOA0DlrMGBHF6jsOSGPdj5NX421lpg1Pfn8ib-bObgcPSa8xvS-9DxG-G1Pd6DyLROq-11HcqztU_zDGZcUUYE38A"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-primary-container p-12 rounded-xl hidden md:block max-w-xs editorial-shadow">
                <p className="text-primary-fixed text-4xl font-headline font-extrabold mb-2">
                  15+
                </p>
                <p className="text-white font-label tracking-wider text-xs uppercase">
                  Years of Field Expertise in the UK
                </p>
              </div>
            </div>
            <div>
              <span className="text-primary font-label tracking-[0.2em] uppercase text-xs mb-6 block">
                Our Commitment
              </span>
              <h2 className="text-primary font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
                Expert knowledge, rooted in the{" "}
                <span className="italic font-normal">natural</span> environment.
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  At The Ecological Observer, we believe that development and
                  conservation are not mutually exclusive. Our mission is to
                  provide the high-fidelity data and strategic insight necessary
                  to bridge that gap.
                </p>
                <p>
                  Our team of CIEEM-registered ecologists specializes in
                  navigating the UK&apos;s intricate legislative landscape,
                  ensuring that your projects meet the highest standards of
                  environmental stewardship.
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

        {/* Latest Research: Editorial Cards */}
        <section className="py-32 bg-surface-container">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20 text-center max-w-2xl mx-auto">
              <h2 className="text-primary font-headline text-4xl font-extrabold tracking-tight mb-4">
                Latest Insights
              </h2>
              <p className="text-on-surface-variant">
                Peer-reviewed research and practical application from the front
                lines of UK ecology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <article className="group">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Night-time bat surveying equipment in a forest setting"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq__VM_DAtTjo_NXohSdzbzG8gTmnlkpdur2DSl692OSKDfQ4Walpppug6Mlvlv0BjNlCKUoP43SpUTwco0w2efiab8rr4JHAkBCPBX6_RZKeYUHx21oGIUhHdFbHUDeYYHe7FB-TKXtFvyA3PEjuHf4Lstqf_qKQO2KiiMxQV-V-Whqn_Au89EZA-v2JtxpT2HeYoG0m5Rw9SHcDfu1bFh9KBQcHCbX2ryZEv0R8RaVengYjn8gPXOsdfXyKU-gJIDJzuMz6Uupc5"
                  />
                </div>
                <span className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase mb-3 block">
                  WHITE PAPER — 2024
                </span>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
                  The Impact of Light Pollution on Bat Foraging Corridors in
                  Rural Kent
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
                  Exploring how developmental lighting affects the connectivity
                  of ancient woodland habitats for local bat populations.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-bold text-sm text-primary group-hover:gap-4 transition-all"
                  href="#"
                >
                  Read Full Study{" "}
                  <span className="material-symbols-outlined text-sm">
                    trending_flat
                  </span>
                </a>
              </article>

              <article className="group">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Digital tablet showing ecological mapping data in the field"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFRi2VfXihAsTMmCJb4x9twediCXs3kyqpQbzC63WB_55nXlK0Pz1vlrudDyXIKJkSbv20fvvyFkuxTyRHbOqS1FiHoqUPz9f-MeKsDKLZwRZUoLarlaKzsgYE9CzLyDv1YuRO9-XX5YlpD-44b1-B4yi9GqsHafJ6V1WN4zZPqUYP6dK2Cr89jCRxvofGa_iCxflLvx3iIXGgWe7elhBcSLxSUrwHE0vJXdjEijzYj_ppfqkEmix_ejSGdB5nCP8RDSJRj0fcWVh7"
                  />
                </div>
                <span className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase mb-3 block">
                  CASE STUDY — OXFORDSHIRE
                </span>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
                  Implementing 15% Biodiversity Net Gain on a 500-Unit
                  Residential Scheme
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
                  A technical breakdown of how we utilized on-site mitigation
                  and local credits to exceed statutory requirements.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-bold text-sm text-primary group-hover:gap-4 transition-all"
                  href="#"
                >
                  View Methodology{" "}
                  <span className="material-symbols-outlined text-sm">
                    trending_flat
                  </span>
                </a>
              </article>

              <article className="group">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Close-up of a Great Crested Newt in a glass container for study"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAW7eoHO63nO-NwX9aYGtQSTGWnbUB_unvQqKuz3gKnKLGcevvCdYahjZUfCedXSIHOoyWu2I6c_JZ0rq44JVREmRzlVpHg7KIRj8HHnf5B6kaHDFm5LIr_P7UXiQhjijvxFjnGRMlejQZjvm8zQmAPTRh7bV9rKA24SbPoGxB0-5wAZsJAgF1ZRFhlvnUzkOSWFgk6McwLhaOSwjKdp1BQMSaTUnEbX1IA8mpYT14-dBNHK-gFr2L8ZQkMc1xXjukcJu94LAGTdRA"
                  />
                </div>
                <span className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase mb-3 block">
                  POLICY REVIEW — 2023
                </span>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
                  Protected Species Licensing: Navigating the 2024 Regulatory
                  Shift
                </h3>
                <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">
                  How upcoming legislative changes will affect project timelines
                  and licensing requirements for protected species.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-bold text-sm text-primary group-hover:gap-4 transition-all"
                  href="#"
                >
                  Get the Guide{" "}
                  <span className="material-symbols-outlined text-sm">
                    trending_flat
                  </span>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-primary">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-white font-headline text-4xl font-extrabold tracking-tight mb-6">
                Ready to discuss your project?
              </h2>
              <p className="text-emerald-100/70 text-lg mb-12">
                Speak with a lead ecologist today about your site&apos;s
                requirements. We offer free initial consultations for all new
                development inquiries.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-primary-fixed">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">
                      Email Our Office
                    </h4>
                    <p className="text-emerald-100/60">
                      enquiries@ecologicalobserver.co.uk
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-primary-fixed">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">
                      Direct Technical Line
                    </h4>
                    <p className="text-emerald-100/60">+44 (0) 20 8123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-primary-fixed">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      location_on
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Headquarters</h4>
                    <p className="text-emerald-100/60">
                      Bristol &amp; South West Regional Office
                      <br />
                      Temple Meads, Bristol, BS1 6QF
                    </p>
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
                      className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                      placeholder="Jane Smith"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                      placeholder="jane@company.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase">
                    Project Type
                  </label>
                  <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none appearance-none">
                    <option>Residential Development</option>
                    <option>Infrastructure Project</option>
                    <option>Renewable Energy</option>
                    <option>Biodiversity Net Gain Strategy</option>
                    <option>Protected Species Survey</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.65rem] font-bold text-primary/60 tracking-widest uppercase">
                    Message / Site Details
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                    placeholder="How can our experts assist you?"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  className="w-full silk-gradient text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all"
                  type="submit"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-emerald-900 dark:bg-emerald-950 w-full pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8">
          <div className="md:col-span-1">
            <div className="text-lg font-bold text-white font-headline mb-6">
              The Ecological Observer
            </div>
            <p className="text-emerald-200/60 text-sm leading-relaxed mb-8">
              Professional ecological consultancy providing scientific authority
              and environmental stewardship across the UK.
            </p>
            <div className="flex gap-4">
              <a className="text-emerald-200/60 hover:text-white" href="#">
                <span className="material-symbols-outlined">language</span>
              </a>
              <a className="text-emerald-200/60 hover:text-white" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Services
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Habitat Surveys
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Biodiversity Net Gain
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Protected Species
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Mitigation Strategy
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Company
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Research Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
              Legal
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-200/60 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  href="#"
                >
                  Ethical Conduct
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-emerald-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-200/60 text-xs tracking-wide">
            © 2024 The Ecological Observer. UK Registered Consultancy.
          </p>
          <div className="flex gap-8 text-xs text-emerald-200/40">
            <span>VAT NO: 123 4567 89</span>
            <span>COMPANY NO: 987654321</span>
          </div>
        </div>
      </footer>
    </>
  );
}
