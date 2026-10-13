import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <Link to="/" className="text-sm text-primary hover:underline">← Back to Growth Nexus</Link>
        <header className="mt-8 border-b pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Growth Nexus · Legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: October 13, 2026</p>
        </header>
        <article className="prose prose-slate mt-10 max-w-none dark:prose-invert">
          <h2>1. Introduction</h2>
          <p>Growth Nexus respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and disclose personal information when you visit <a href="https://growthnexusuae.com">growthnexusuae.com</a>, submit an inquiry, communicate with us, or engage our digital marketing services.</p>
          <p>Growth Nexus provides digital marketing and performance advertising services to clients internationally. This policy applies to visitors, prospective clients, and clients who interact with our website or services.</p>
          <h2>2. Information We Collect</h2>
          <p><strong>Personal and contact information:</strong> When you contact us or submit an inquiry, we may collect your name, email address, phone number, business name, and other information you choose to provide.</p>
          <p><strong>Business and project information:</strong> When discussing or providing our services, we may collect information about your business, marketing objectives, advertising requirements, target audience, campaign performance, and project expectations.</p>
          <p><strong>Technical information:</strong> When you visit our website, certain technical information may be collected automatically, including your IP address, browser type, device information, pages visited, and general website usage data. The information collected depends on the website technologies and services in use.</p>
          <p><strong>Marketing and analytics information:</strong> If analytics tools, advertising pixels, cookies, or similar technologies are implemented on our website, they may collect information about website visits, user interactions, and advertising performance, subject to applicable consent requirements.</p>
          <h2>3. How We Use Your Information</h2>
          <p>We use personal information to respond to inquiries, understand business requirements, prepare proposals and quotations, deliver and manage marketing services, communicate about projects, improve our website and services, maintain website security, prevent spam or fraud, maintain business records, and meet applicable legal obligations.</p>
          <p>We will not use your personal information for unrelated purposes without an appropriate legal basis or consent where required.</p>
          <h2>4. Contact Forms and Communications</h2>
          <p>Information submitted through our website contact form may be processed through third-party services, including email and form-processing providers, to deliver your inquiry to us. We use this information to respond to your request, discuss potential projects, and communicate with you about our services.</p>
          <p>Please do not submit passwords, payment card details, or other highly sensitive information through our website contact form. Submitting an inquiry does not automatically establish a contractual relationship or guarantee that we will accept a project.</p>
          <h2>5. Cookies and Similar Technologies</h2>
          <p>Our website may use cookies and similar technologies to support functionality, improve performance, analyze website traffic, or measure advertising effectiveness. You may be able to manage cookies through your browser settings or consent controls provided on our website. Disabling certain cookies may affect some website features.</p>
          <p>Where required by applicable law, we will obtain consent before using non-essential cookies or tracking technologies.</p>
          <h2>6. How We Share Information</h2>
          <p>Growth Nexus does not sell personal information to third parties. We may share information with service providers when necessary to operate our website and deliver our services, including website hosting and infrastructure providers, email and contact form processing services, analytics providers, advertising platforms, and communication or business management tools.</p>
          <p>We may also disclose information when required by law, when necessary to protect our legal rights, or in connection with a business transfer, subject to applicable legal requirements. Where appropriate, we take reasonable steps to ensure service providers handle information securely and for authorized purposes.</p>
          <h2>7. Third-Party Platforms and Services</h2>
          <p>Growth Nexus may use or work with third-party platforms, including Meta, Facebook, Instagram, analytics providers, website hosting services, and other digital marketing tools. When we manage advertising campaigns for clients, certain business information, campaign data, or advertising assets may be processed through these platforms to deliver the agreed services.</p>
          <p>Third-party platforms operate under their own privacy policies and terms. Growth Nexus does not control their independent data processing practices. We encourage users to review the privacy policies of any third-party services they use.</p>
          <h2>8. Data Retention</h2>
          <p>We retain personal information only for as long as reasonably necessary to fulfil the purposes described in this policy, including responding to inquiries, delivering services, maintaining business records, resolving disputes, and meeting legal obligations. Retention periods depend on the nature of the information and why it was collected.</p>
          <p>When personal information is no longer required, we will take reasonable steps to delete it or securely dispose of it, subject to applicable legal requirements.</p>
          <h2>9. Data Security</h2>
          <p>We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, and disclosure. However, no electronic transmission or storage system can be guaranteed to be completely secure, so we cannot guarantee absolute security of information transmitted through the internet.</p>
          <h2>10. International Data Transfers</h2>
          <p>As Growth Nexus serves clients internationally and may rely on third-party service providers, personal information may be processed or stored in countries different from the country in which it was collected. Where applicable, we will take reasonable steps to ensure international transfers comply with relevant data protection requirements.</p>
          <h2>11. Your Privacy Rights</h2>
          <p>Depending on your location and applicable law, you may have the right to request access to your personal information, correction of inaccurate information, deletion where legally permitted, restrictions on or objection to certain processing, withdrawal of consent where processing is based on consent, a portable copy of certain information, or the ability to lodge a complaint with a relevant data protection authority.</p>
          <p>To exercise an applicable right, contact us using the details below. We may need to verify your identity before responding.</p>
          <h2>12. Children's Privacy</h2>
          <p>Our website and services are intended primarily for businesses and adults. We do not knowingly collect personal information directly from children where parental consent or other authorization is required by law. If you believe a child has provided personal information to us inappropriately, please contact us so we can review the matter.</p>
          <h2>13. Links to External Websites</h2>
          <p>Our website may contain links to third-party websites or services. We are not responsible for the content, security, or privacy practices of those external websites. Users should review the relevant privacy policies before providing personal information to third parties.</p>
          <h2>14. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy to reflect changes in our services, website technologies, business practices, or legal requirements. Any updated version will be published on this page with a revised last-updated date. We encourage visitors to review this page periodically.</p>
          <h2>15. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact Growth Nexus at <a href="mailto:growthnexusuae@gmail.com">growthnexusuae@gmail.com</a>.</p>
          <p><strong>Website:</strong> <a href="https://growthnexusuae.com">https://growthnexusuae.com</a></p>
        </article>
        <footer className="mt-14 border-t pt-6 text-sm text-muted-foreground">© 2026 Growth Nexus. All rights reserved.</footer>
      </div>
    </main>
  );
}
