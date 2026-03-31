import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service | NatureLogic",
  description: "Terms and conditions for using NatureLogic's website and services.",
};

export default function TermsOfService() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-28">
          <a href="/">
            <Image src="/logo6.png" alt="NatureLogic logo" width={200} height={60} className="h-28 w-auto" priority />
          </a>
          <a href="/#contact" className="silk-gradient text-white px-6 py-2.5 rounded-xl font-headline font-semibold hover:opacity-80 transition-opacity duration-300">
            Get in Touch
          </a>
        </div>
      </nav>

      <main className="pt-28 bg-surface min-h-screen">
        <section className="bg-primary py-20">
          <div className="max-w-4xl mx-auto px-8">
            <span className="inline-block bg-white/15 text-white px-4 py-1 rounded-full text-[0.75rem] font-label tracking-[0.08em] uppercase mb-6 border border-white/20">Legal</span>
            <h1 className="text-white font-headline text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">Terms of Service</h1>
            <p className="text-white/60 text-sm">Last updated: June 2025</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-8 space-y-12">

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">1. About These Terms</h2>
              <p className="text-on-surface-variant leading-relaxed">These terms and conditions govern your use of the NatureLogic Ltd website at naturelogic.co.uk and any services provided by NatureLogic Ltd (company number 16516775), a private limited company registered in England and Wales. By accessing this website or engaging our services, you agree to be bound by these terms. If you do not agree, please do not use this website or our services.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">2. Our Services</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">NatureLogic Ltd provides professional ecological consultancy services including, but not limited to, ecological surveys, biodiversity net gain assessments, protected species reports, habitat assessments, and strategic ecological advice. All services are provided by qualified ecologists in accordance with relevant professional standards and UK legislation.</p>
              <p className="text-on-surface-variant leading-relaxed">The information provided on this website is for general informational purposes only and does not constitute professional advice. You should not rely solely on website content when making decisions about your project. We recommend contacting us directly to discuss your specific requirements.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">3. Engagement of Services</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">Any formal engagement of NatureLogic Ltd's professional services will be subject to a separate written agreement or proposal, which will set out the specific scope of work, fees, timescales, and terms applicable to that instruction. These website terms do not constitute a contract for the provision of professional services.</p>
              <p className="text-on-surface-variant leading-relaxed">We reserve the right to decline any instruction at our discretion. An instruction is only accepted when we have confirmed acceptance in writing.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">All content on this website, including text, graphics, logos, images, and reports produced by NatureLogic Ltd, is the intellectual property of NatureLogic Ltd unless otherwise stated. You may not reproduce, distribute, or use any content from this website without our prior written consent.</p>
              <p className="text-on-surface-variant leading-relaxed">Reports and documents produced by NatureLogic Ltd as part of a professional engagement remain the intellectual property of NatureLogic Ltd until all fees have been paid in full, at which point copyright transfers to the client as agreed in the relevant service agreement.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">5. Limitation of Liability</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">To the fullest extent permitted by law, NatureLogic Ltd shall not be liable for any indirect, incidental, or consequential losses arising from your use of this website or reliance on its content. Our liability in connection with any professional services engagement shall be limited as set out in the relevant service agreement.</p>
              <p className="text-on-surface-variant leading-relaxed">Nothing in these terms limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under English law.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">6. Third Party Links</h2>
              <p className="text-on-surface-variant leading-relaxed">This website may contain links to third party websites. These links are provided for your convenience only. NatureLogic Ltd has no control over the content of those websites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">7. Privacy and Data Protection</h2>
              <p className="text-on-surface-variant leading-relaxed">NatureLogic Ltd is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Any personal information you provide via this website will be handled in accordance with our Privacy Policy, which is available on request. We will not sell, share, or distribute your personal data to third parties without your consent, except where required by law.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">8. Professional Standards</h2>
              <p className="text-on-surface-variant leading-relaxed">NatureLogic Ltd operates in accordance with the Chartered Institute of Ecology and Environmental Management (CIEEM) Code of Professional Conduct. Our ecologists are committed to maintaining the highest standards of scientific integrity, impartiality, and professional practice in all work undertaken.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="text-on-surface-variant leading-relaxed">These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">10. Changes to These Terms</h2>
              <p className="text-on-surface-variant leading-relaxed">We reserve the right to update these terms at any time. Any changes will be posted on this page with an updated date. Your continued use of this website following any changes constitutes your acceptance of the revised terms.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">11. Contact Us</h2>
              <div className="bg-surface-container-low p-8 rounded-xl">
                <p className="text-on-surface font-semibold mb-1">NatureLogic Ltd</p>
                <p className="text-on-surface-variant">Company No: 16516775</p>
                <p className="text-on-surface-variant">Based in London, operating nationwide</p>
                <p className="text-on-surface-variant mt-3">Email: <a href="mailto:aarongrainger@naturelogic.co.uk" className="text-primary hover:underline">aarongrainger@naturelogic.co.uk</a></p>
                <p className="text-on-surface-variant">Phone: <a href="tel:07809383255" className="text-primary hover:underline">07809 383255</a></p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer className="w-full pt-16 pb-8" style={{ background: '#0f3522' }}>
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs tracking-wide">© 2025 NatureLogic Ltd. UK Registered Company.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
