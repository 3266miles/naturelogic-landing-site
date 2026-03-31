import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | NatureLogic",
  description: "Privacy policy for NatureLogic Ltd, detailing how we collect and use your personal data.",
};

export default function PrivacyPolicy() {
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
            <h1 className="text-white font-headline text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">Privacy Policy</h1>
            <p className="text-white/60 text-sm">Last updated: June 2025</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-8 space-y-12">

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">1. Who We Are</h2>
              <p className="text-on-surface-variant leading-relaxed">NatureLogic Ltd (company number 16516775) is a private limited company registered in England and Wales. We are the data controller responsible for your personal data. If you have any questions about this policy, please contact us at aarongrainger@naturelogic.co.uk.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">2. What Data We Collect</h2>
              <p className="text-on-surface-variant leading-relaxed">We may collect the following personal data when you use our website or engage our services: your name, email address, phone number, company name, and any information you provide in the message field of our contact form. We may also collect technical data such as your IP address and browser type through standard website analytics.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">3. How We Use Your Data</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">We use your personal data to respond to enquiries submitted via our contact form, to provide and manage professional services where you engage us, to comply with our legal and regulatory obligations, and to improve our website and services.</p>
              <p className="text-on-surface-variant leading-relaxed">We will never sell your personal data to third parties or use it for unsolicited marketing without your consent.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
              <p className="text-on-surface-variant leading-relaxed">We process your personal data on the following legal bases under UK GDPR: your consent (where you have submitted an enquiry via our contact form), the performance of a contract (where you have engaged our professional services), compliance with a legal obligation, and our legitimate interests in operating and improving our business.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">5. Who We Share Your Data With</h2>
              <p className="text-on-surface-variant leading-relaxed">We do not sell or rent your personal data. We may share it with professional advisers such as accountants, insurers, and legal advisers where necessary, HMRC and other regulatory authorities where required by law, and third party software providers we use to operate our business such as email and cloud storage services. We require all third parties to handle your data lawfully and securely.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">6. Data Storage and Security</h2>
              <p className="text-on-surface-variant leading-relaxed">Your personal data is stored securely within the UK. We use appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure. Where any data is processed outside the UK, we ensure appropriate safeguards are in place in accordance with UK GDPR.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">7. How Long We Keep Your Data</h2>
              <p className="text-on-surface-variant leading-relaxed">We retain personal data only for as long as necessary for the purpose it was collected. Enquiry data is typically retained for up to 12 months unless it leads to a formal engagement, in which case it is retained for six years in line with standard accounting and legal requirements.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">8. Your Rights</h2>
              <p className="text-on-surface-variant leading-relaxed">Under UK GDPR you have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to or restrict our processing of your data, and withdraw consent at any time where processing is based on consent. To exercise any of these rights, please contact us at aarongrainger@naturelogic.co.uk.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">9. Cookies</h2>
              <p className="text-on-surface-variant leading-relaxed">Our website may use cookies to improve your browsing experience and collect anonymised analytics data. You can control cookie settings through your browser at any time.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-on-surface-variant leading-relaxed">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">11. Complaints</h2>
              <p className="text-on-surface-variant leading-relaxed">If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://www.ico.org.uk" className="text-primary hover:underline">www.ico.org.uk</a>.</p>
            </div>

            <div>
              <h2 className="text-primary font-headline text-2xl font-bold mb-4">12. Contact Us</h2>
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
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
