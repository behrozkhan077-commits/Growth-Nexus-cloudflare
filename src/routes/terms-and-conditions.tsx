import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <Link to="/" className="text-sm text-primary hover:underline">← Back to Growth Nexus</Link>
        <header className="mt-8 border-b pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Growth Nexus · Legal</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: October 13, 2026</p>
        </header>
        <article className="prose prose-slate mt-10 max-w-none dark:prose-invert">
          <h2>1. Introduction</h2>
          <p>Welcome to Growth Nexus. These Terms &amp; Conditions govern your access to and use of <a href="https://growthnexusuae.com">growthnexusuae.com</a> and the digital marketing services offered by Growth Nexus.</p>
          <p>Our services include Meta Ads management, lead generation, ad creative strategy, campaign setup and optimization, and Meta Ads audits and strategy. Growth Nexus serves clients internationally and does not limit its services to a specific country or region.</p>
          <p>By accessing our website, you agree to these Terms &amp; Conditions. If you do not agree with them, please discontinue using the website.</p>
          <h2>2. Our Services</h2>
          <p>Growth Nexus provides digital marketing and performance advertising services designed to help businesses improve their online advertising and marketing activities. The services may include:</p>
          <ul><li>Meta Ads Management</li><li>Lead Generation</li><li>Ad Creative Strategy</li><li>Campaign Setup &amp; Optimization</li><li>Meta Ads Audit &amp; Strategy</li></ul>
          <p>The exact scope of work, deliverables, pricing, timelines, and responsibilities will be agreed upon separately with each client where applicable. Information published on our website is for general informational purposes and does not guarantee that every service will be available in every circumstance.</p>
          <h2>3. No Guarantee of Advertising Results</h2>
          <p>Digital advertising results depend on many factors, including competition, market conditions, audience behavior, advertising budgets, offer quality, website performance, sales processes, platform policies, and the information provided by the client.</p>
          <p>Growth Nexus aims to deliver its services professionally and apply appropriate strategies to improve advertising performance. However, we do not guarantee a particular number of leads, sales, or conversions; a specific return on advertising spend (ROAS); guaranteed revenue, profit, or business growth; a particular cost per lead or conversion rate; approval or uninterrupted delivery of campaigns; or continued access to any advertising account or platform.</p>
          <p>Any performance estimates, projections, or examples are illustrative unless expressly agreed otherwise in writing.</p>
          <h2>4. Client Responsibilities</h2>
          <p>Clients are responsible for providing the information, materials, access, and cooperation reasonably necessary for the delivery of services. Clients agree to:</p>
          <ul><li>Provide accurate and complete business information.</li><li>Supply required advertising account access and relevant materials.</li><li>Ensure their products, services, offers, and advertising claims comply with applicable laws.</li><li>Obtain the necessary rights and permissions for images, videos, copy, trademarks, customer lists, and other supplied materials.</li><li>Review and approve advertising materials when approval is requested.</li><li>Maintain appropriate security and permissions for business and advertising accounts.</li><li>Pay agreed service fees and advertising costs on time.</li><li>Inform Growth Nexus of relevant changes to their business, offers, website, or campaign requirements.</li></ul>
          <p>Delays in providing information, access, materials, or approvals may affect project timelines and campaign performance.</p>
          <h2>5. Fees and Advertising Costs</h2>
          <p>Service fees, payment schedules, advertising budgets, and additional charges will be communicated and agreed upon with the client before or during the relevant engagement. Unless agreed otherwise in writing, advertising expenditure paid to Meta or another advertising platform is separate from Growth Nexus's service fees.</p>
          <p>Clients are responsible for their advertising expenditure, applicable platform charges, and taxes or other costs associated with their accounts, unless otherwise agreed in writing. If payments become overdue, Growth Nexus may suspend or pause relevant services where permitted by the applicable agreement and law.</p>
          <p>Refunds, cancellations, and payment adjustments will be handled according to the applicable written agreement and relevant legal requirements.</p>
          <h2>6. Third-Party Platforms</h2>
          <p>Our services may depend on third-party platforms such as Meta, Facebook, Instagram, website hosting providers, analytics tools, and other external services. These platforms operate independently and may change their policies, algorithms, features, pricing, or access requirements. They may reject advertisements, restrict accounts, suspend services, or experience interruptions.</p>
          <p>Growth Nexus does not control these third-party decisions and is not responsible for events outside its reasonable control. This does not exclude any responsibility that cannot legally be excluded. Clients remain responsible for complying with the applicable terms, policies, and requirements of third-party platforms.</p>
          <h2>7. Intellectual Property</h2>
          <p>The content published on our website, including original text, branding, graphics, design elements, and other website materials, is owned by Growth Nexus or used with permission, unless otherwise stated. Website materials may not be copied, reproduced, distributed, or commercially exploited without appropriate authorization.</p>
          <p>Clients retain ownership of materials they own and provide to Growth Nexus. Ownership and usage rights for campaign creatives, advertising copy, reports, strategies, and other deliverables will be determined by the relevant written agreement. Clients authorize Growth Nexus to use supplied materials only as reasonably necessary to deliver the agreed services.</p>
          <h2>8. Confidentiality</h2>
          <p>Growth Nexus takes reasonable steps to protect confidential business information shared by clients in connection with our services. Clients must ensure they have the necessary authority to share information or materials provided to us. Specific confidentiality, data handling, or non-disclosure obligations may be set out in a separate written agreement.</p>
          <h2>9. Acceptable Website Use</h2>
          <p>You agree to use our website lawfully and responsibly. You must not use the website for unlawful, fraudulent, or misleading purposes; attempt unauthorized access to our website, systems, or accounts; interfere with website security, functionality, or availability; introduce malicious code or harmful files; copy or misuse website content in violation of intellectual property rights; submit false, abusive, or misleading information through our contact forms; or use automated methods to disrupt or misuse website functionality.</p>
          <p>We reserve the right to take reasonable action to address misuse, security risks, or unlawful activity.</p>
          <h2>10. Limitation of Liability</h2>
          <p>To the extent permitted by applicable law, Growth Nexus will not be liable for indirect, incidental, special, or consequential losses arising from the use of our website or services, including loss of profits, revenue, business opportunities, anticipated savings, or data.</p>
          <p>Nothing in these Terms &amp; Conditions excludes or limits liability where such exclusion or limitation is prohibited by applicable law. Any additional limitations of liability for paid services may be set out in a separate written agreement, subject to applicable law.</p>
          <h2>11. Indemnity</h2>
          <p>To the extent permitted by applicable law, clients may be responsible for claims, losses, or expenses arising from unlawful materials or instructions they provide, their misuse of our services, or their violation of third-party rights or applicable platform policies. This provision does not apply to the extent a claim arises from conduct for which Growth Nexus is legally responsible.</p>
          <h2>12. Suspension and Termination</h2>
          <p>Growth Nexus may restrict access to the website or suspend services where reasonably necessary due to security concerns, misuse, unlawful activity, non-payment, or a material breach of an applicable agreement. Termination of paid services, notice periods, outstanding payments, refunds, and the treatment of completed work will be governed by the relevant written agreement and applicable law.</p>
          <h2>13. Privacy</h2>
          <p>Our collection and use of personal information are described in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
          <h2>14. Changes to These Terms</h2>
          <p>We may update these Terms &amp; Conditions to reflect changes in our website, services, business practices, or legal requirements. Updated terms will be published on this page with a revised last-updated date. Changes to these website terms do not automatically amend a separate written agreement with a client unless the agreement or applicable law provides otherwise.</p>
          <h2>15. Governing Law and Dispute Resolution</h2>
          <p>These Terms &amp; Conditions are subject to applicable law. The governing law and appropriate forum for resolving disputes may depend on the nature of the services, the parties involved, and any separate written agreement.</p>
          <p>Where a dispute arises, the parties should first attempt to resolve it through good-faith communication where reasonably possible. If a dispute cannot be resolved informally, it may be referred to the competent court or other dispute-resolution forum under applicable law and any valid agreement between the parties.</p>
          <h2>16. Contact Us</h2>
          <p>If you have questions about these Terms &amp; Conditions, our website, or our services, contact Growth Nexus at <a href="mailto:growthnexusuae@gmail.com">growthnexusuae@gmail.com</a>.</p>
          <p><strong>Website:</strong> <a href="https://growthnexusuae.com">https://growthnexusuae.com</a></p>
        </article>
        <footer className="mt-14 border-t pt-6 text-sm text-muted-foreground">© 2026 Growth Nexus. All rights reserved.</footer>
      </div>
    </main>
  );
}
