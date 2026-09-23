import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/termsStyles.css";

const legalRoutes = [
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Refund Policy", path: "/refund-policy" },
  { label: "Cancellation Policy", path: "/cancellation-policy" },
];

const pageMeta = {
  "/terms-and-conditions": { title: "Terms & Conditions", effectiveDate: "August 2024" },
  "/privacy-policy": { title: "Privacy Policy", effectiveDate: "August 2024" },
  "/refund-policy": { title: "Refund Policy", effectiveDate: "August 2024" },
  "/cancellation-policy": { title: "Cancellation Policy", effectiveDate: "August 2024" },
};

const TermsAndConditions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = legalRoutes.find((route) => route.path === location.pathname) ?? legalRoutes[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate(location.state?.from || "/");
  };

  const renderContent = () => {
    switch (currentRoute.path) {
      case "/terms-and-conditions":
        return <TermsContent />;
      case "/privacy-policy":
        return <PrivacyContent />;
      case "/refund-policy":
        return <RefundContent />;
      case "/cancellation-policy":
        return <CancellationContent />;
      default:
        return <TermsContent />;
    }
  };

  return (
    <main className="legal-page-shell">
      <button type="button" className="legal-back-button" onClick={handleGoBack}>
        <span aria-hidden="true">&#8592;</span> Go back
      </button>

      <article className="legal-document-card">
        <header className="legal-document-header">
          <p className="legal-kicker">Legal</p>
          <h1>{pageMeta[currentRoute.path]?.title || pageMeta["/terms-and-conditions"].title}</h1>
          <p className="legal-effective">Effective date: {pageMeta[currentRoute.path]?.effectiveDate || pageMeta["/terms-and-conditions"].effectiveDate}</p>
        </header>

        <div className="legal-document-body">
          {renderContent()}
        </div>
      </article>
    </main>
  );
};

const TermsContent = () => (
  <div className="legal-page-content">
    <div className="legal-intro">
      <p>
        Welcome to Projina, a project management platform developed and operated by <strong>Crestlancing Ltd</strong>,
        a company registered and operating under the laws of the Republic of Cameroon.
      </p>
      <p>
        These Terms and Conditions govern your access to and use of the Projina platform, including the website,
        web application, software, features, and related services.
      </p>
    </div>

    <Section title="1. Introduction and Acceptance">
      <p>Welcome to Projina, a project management platform developed and operated by <strong>Crestlancing Ltd</strong>, a company registered and operating under the laws of the Republic of Cameroon.</p>
      <p>These Terms and Conditions ("Terms") govern your access to and use of the Projina platform, including its website, web application, software, features, and related services (collectively, the "Services").</p>
      <p>By accessing, registering for, or using Projina, you acknowledge that you have read, understood, and agree to be bound by these Terms, together with the policies incorporated into them, including the Privacy Policy, Refund Policy, and Cancellation Policy.</p>
      <p>If you are accessing or using Projina on behalf of a company, organization, business, or other legal entity, you represent that you are authorized to accept these Terms on behalf of that entity.</p>
      <p>If you do not agree to these Terms, you must not access or use the Services.</p>
    </Section>

    <Section title="2. Definitions and Scope of the Services">
      <p>For the purposes of these Terms, <strong>"Crestlancing Ltd", "Crestlancing", "we", "us", or "our"</strong> means the company that develops and operates Projina.</p>
      <p><strong>"Projina"</strong> means the project management platform developed and operated by Crestlancing Ltd, including its website, web application, software, tools, features, and related services.</p>
      <p><strong>"Services"</strong> means the services and functionalities made available through Projina, including project management, task management, team collaboration, workspace management, file sharing, and related features.</p>
      <p><strong>"Customer"</strong> means the company, organization, business, institution, or other legal entity that subscribes to or uses Projina.</p>
    </Section>

    <Section title="3. Account Registration and Eligibility">
      <p>Access to certain Projina features requires the creation of an account. You agree to provide information that is accurate, complete, and reasonably up to date when creating or maintaining an account.</p>
      <p>Where an account is created or managed by an Organization, the Organization's Administrator may control user access, permissions, and account management.</p>
      <p>You are responsible for maintaining the confidentiality of your login credentials and for activities carried out through your account.</p>
    </Section>

    <Section title="4. Subscription Plans">
      <p>Projina may offer a free or freemium plan and paid subscription plans, including <strong>Basic, Pro, and Enterprise</strong> plans.</p>
      <p>Each plan may include different features, limits, storage allocations, user allowances, or other functionality.</p>
    </Section>

    <Section title="5. Acceptable Use">
      <p>You agree not to use Projina to:</p>
      <List items={[
        "violate any applicable law or regulation;",
        "gain unauthorized access to systems, accounts, Workspaces, or data;",
        "interfere with or disrupt the Services;",
        "introduce viruses, malware, malicious code, or other harmful software;",
        "attempt to bypass security or access controls;",
        "use the Services for fraud, abuse, harassment, or other unlawful conduct;",
        "upload content that you do not have the right to use or distribute; or",
        "otherwise misuse the Services in a manner that could harm Projina, Crestlancing, other users, or third parties.",
      ]} />
    </Section>

    <Section title="6. Data Protection and Privacy">
      <p>Crestlancing processes personal data in accordance with its Privacy Policy and applicable data-protection laws and regulations.</p>
      <p>The Privacy Policy explains the categories of personal data collected, the purposes of processing, data-sharing practices, security measures, retention, deletion, and applicable privacy rights.</p>
    </Section>

    <Section title="7. Billing and Payments">
      <p>Paid Services are generally billed in advance according to the subscription period selected by the Customer.</p>
      <p>Depending on availability, payments may be made through methods including <strong>Mobile Money or Bank Transfer</strong>, or other payment methods made available by Crestlancing.</p>
    </Section>

    <Section title="8. Cancellation and Refunds">
      <p>Customers may cancel subscriptions in accordance with the Projina Cancellation Policy. Cancellation generally prevents future renewal but does not automatically entitle the Customer to a refund for the current billing period.</p>
      <p>Refunds are handled in accordance with the Projina Refund Policy and applicable law.</p>
    </Section>

    <Section title="9. Suspension and Termination">
      <p>Crestlancing may suspend or restrict access to the Services where reasonably necessary to protect the platform and enforce these Terms.</p>
      <p>Where reasonably practicable, Crestlancing may provide notice and an opportunity to address the relevant issue before termination.</p>
    </Section>

    <Section title="10. Contact Information">
      <p>For questions regarding these Terms and Conditions, please contact:</p>
      <p><strong>Crestlancing Ltd</strong><br /><strong>Projina</strong><br />Website: <strong>https://crms.projina.top</strong><br />Email: <strong>info@projina.com</strong><br />Address: <strong>Yaounde, Cameroon</strong></p>
    </Section>
  </div>
);

const PrivacyContent = () => (
  <div className="legal-page-content">
    <div className="legal-intro">
      <p>
        Crestlancing Ltd respects the privacy of individuals who use Projina. This Privacy Policy explains what personal data
        we may collect, how we use it, how we protect it, when we may share it, and how you may exercise applicable privacy rights.
      </p>
      <p>This Privacy Policy applies to personal data processed through the Projina website, web application, accounts, Workspaces, and related Services.</p>
    </div>

    <Section title="1. Introduction">
      <p>By using Projina, you acknowledge that your personal data may be processed as described in this Privacy Policy.</p>
      <p>Where Projina is used by an Organization, certain personal data may be provided by or managed on behalf of that Organization.</p>
      <p>This Privacy Policy should be read together with the Projina Terms and Conditions.</p>
    </Section>

    <Section title="2. Who We Are">
      <p>The entity responsible for operating Projina is:</p>
      <p><strong>Crestlancing Ltd</strong><br />Website: <strong>https://crms.projina.top</strong><br />Email: <strong>info@projina.com</strong><br />Address: <strong>Yaounde, Cameroon</strong></p>
    </Section>

    <Section title="3. Information We Collect">
      <p>Depending on how you use Projina, we may collect the following categories of information:</p>
      <List items={[
        "Account information: name, work email address, role, and login data;",
        "Organization information: name, business details, address, and workspace information;",
        "Workspace information: project names, tasks, comments, deadlines, files, and messages;",
        "Technical information: device, browser, operating system, IP address, logs, and access times;",
        "Subscription and transaction information: billing status, plan details, and payment-related records;",
        "Support information: information you provide when contacting support or communicating with Crestlancing.",
      ]} />
    </Section>

    <Section title="4. How We Use Personal Data">
      <p>We may use personal data to:</p>
      <List items={[
        "create and administer accounts;",
        "provide and operate Projina;",
        "manage Workspaces, projects, and user permissions;",
        "process subscriptions and payments;",
        "provide customer support;",
        "maintain platform security;",
        "detect and prevent fraud, abuse, or unauthorized access;",
        "improve and develop Projina;",
        "communicate important service information; and",
        "comply with applicable legal obligations.",
      ]} />
    </Section>

    <Section title="5. Data Sharing and Disclosure">
      <p>Crestlancing does not sell or rent personal data to third parties for their independent commercial use.</p>
      <p>Personal data may be shared where reasonably necessary with hosting providers, payment processors, authentication providers, support vendors, security providers, professional advisers, or public authorities where required by law.</p>
    </Section>

    <Section title="6. Cookies and Similar Technologies">
      <p>Projina may use cookies and similar technologies for purposes such as maintaining login sessions, remembering preferences, supporting security, understanding platform performance, and improving the user experience.</p>
      <p>Where applicable, users may manage certain cookie preferences through their browser or available Projina settings.</p>
    </Section>

    <Section title="7. Data Security">
      <p>Crestlancing uses reasonable technical and organizational measures designed to protect personal data against unauthorized access, alteration, disclosure, loss, misuse, or destruction.</p>
      <p>No online system can be guaranteed to be completely secure, but we take commercially reasonable steps to protect information and respond to incidents.</p>
    </Section>

    <Section title="8. Data Subject Rights">
      <p>Subject to applicable law and any lawful limitations, individuals may have rights concerning their personal data, which may include the right to request access, correction, deletion, or objection to certain processing.</p>
      <p>Requests may require reasonable identity verification. To exercise an applicable privacy right, contact <strong>info@projina.com</strong>.</p>
    </Section>

    <Section title="9. Contact Us">
      <p>For privacy questions, requests, or concerns, contact:</p>
      <p><strong>Crestlancing Ltd</strong><br /><strong>Projina</strong><br />Website: <strong>https://crms.projina.top</strong><br />Privacy Email: <strong>info@projina.com</strong><br />Address: <strong>Yaounde, Cameroon</strong></p>
    </Section>
  </div>
);

const RefundContent = () => (
  <div className="legal-page-content">
    <div className="legal-intro">
      <p>
        Projina offers subscription plans and related services to organizations, businesses, teams, and other users. This
        Refund Policy explains when payments made for Projina services may be eligible for a refund and how refund requests are handled.
      </p>
      <p>This Refund Policy forms part of the Projina Terms and Conditions. By purchasing or using a paid Projina subscription, you acknowledge and agree to this Refund Policy.</p>
    </div>

    <Section title="1. Overview">
      <p>Refunds are considered in accordance with the applicable subscription, the circumstances of the payment, and applicable laws and regulations of the Republic of Cameroon.</p>
      <p>Our objective is to provide a clear and transparent process for handling legitimate refund requests while taking into account the nature of Projina as a subscription-based digital service.</p>
    </Section>

    <Section title="2. Refund Eligibility">
      <p>A Customer may request a refund for a paid Projina subscription within <strong>30 days from the date of the relevant payment</strong>.</p>
      <p>Submitting a refund request does not automatically guarantee a refund. Each request will be reviewed based on the circumstances of the payment, the subscription involved, the extent to which the Services have been used, and applicable legal requirements.</p>
    </Section>

    <Section title="3. Eligible Refund Situations">
      <p>A refund may be considered in circumstances including:</p>
      <List items={[
        "duplicate payments;",
        "billing or payment errors attributable to Projina;",
        "accidental payments where the Customer promptly contacts Projina;",
        "a material problem that prevents reasonable use of the paid Services and cannot reasonably be resolved; or",
        "other circumstances that Crestlancing determines justify a refund, subject to applicable law.",
      ]} />
    </Section>

    <Section title="4. Non-Refundable Situations">
      <p>Except where required by applicable law, a refund may not be available where:</p>
      <List items={[
        "the request is submitted after the applicable refund period;",
        "the paid Services have been substantially used during the relevant billing period;",
        "the Customer failed to cancel before a renewal payment was processed;",
        "access was suspended or terminated because of a violation of the Terms;",
        "the Customer voluntarily stops using Projina after receiving and using the Services; or",
        "the payment relates to a service or feature expressly identified as non-refundable before purchase.",
      ]} />
    </Section>

    <Section title="5. Refund Request Procedure">
      <p>Refund requests should be submitted through the official Projina support or contact channel.</p>
      <p>The request should include enough information to identify the transaction, such as the account name, email, date, plan, amount paid, and the reason for the request.</p>
    </Section>

    <Section title="6. Refund Processing">
      <p>Approved refunds will normally be initiated using the original payment method where reasonably possible.</p>
      <p>The time required for funds to reach the Customer may depend on the bank, Mobile Money operator, payment provider, or other financial institution involved.</p>
    </Section>

    <Section title="7. Contact">
      <p>For refund requests or questions concerning this Policy:</p>
      <p><strong>Crestlancing Ltd</strong><br /><strong>Projina</strong><br />Website: <strong>https://crms.projina.top</strong><br />Email: <strong>info@projina.com</strong><br />Address: <strong>Yaounde, Cameroon</strong></p>
    </Section>
  </div>
);

const CancellationContent = () => (
  <div className="legal-page-content">
    <div className="legal-intro">
      <p>
        This Cancellation Policy explains how Customers may cancel Projina subscriptions, what happens after cancellation,
        and how access to paid features and Customer Content may be affected.
      </p>
      <p>This Policy forms part of the Projina Terms and Conditions.</p>
    </div>

    <Section title="1. Overview">
      <p>Customers may cancel their Projina subscription in accordance with this Policy.</p>
      <p>Cancellation generally prevents the subscription from renewing for a future billing period.</p>
      <p>Unless otherwise required by applicable law or provided under the Refund Policy, cancellation does not automatically result in a refund of amounts already paid for the current billing period.</p>
    </Section>

    <Section title="2. How to Cancel">
      <p>Cancellation should be completed through the subscription-management functionality provided by Projina or by contacting the official Projina support channel.</p>
      <p>Where cancellation is requested through support, Crestlancing may require sufficient information to verify that the request is being made by an authorized person.</p>
    </Section>

    <Section title="3. Cancellation and Renewal">
      <p>Where a subscription is cancelled before the next renewal date, future renewal charges should not be applied to that subscription.</p>
      <p>If a cancellation is made after a renewal payment has already been processed, the payment may be subject to the Refund Policy and applicable law.</p>
    </Section>

    <Section title="4. Access After Cancellation">
      <p>Unless otherwise stated, cancellation does not immediately terminate access to paid Services.</p>
      <p>Paid features generally remain available until the end of the current paid billing period.</p>
      <p>After the billing period ends, the account may be downgraded to the available free or freemium plan.</p>
    </Section>

    <Section title="5. Data Retention After Cancellation">
      <p>After cancellation or account closure, Crestlancing may retain Customer Content and personal data for a limited period where necessary for service administration, security, backup processes, dispute resolution, legal compliance, accounting, fraud prevention, or other purposes permitted by law.</p>
      <p>The retention period may vary depending on the type of information and applicable requirements.</p>
    </Section>

    <Section title="6. Contact">
      <p>For cancellation-related questions or requests:</p>
      <p><strong>Crestlancing Ltd</strong><br /><strong>Projina</strong><br />Website: <strong>https://crms.projina.top</strong><br />Email: <strong>info@projina.com</strong></p>
    </Section>
  </div>
);

const Section = ({ title, children }) => (
  <div className="legal-section">
    <h2>{title}</h2>
    {children}
  </div>
);

const List = ({ items }) => (
  <ul className="legal-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default TermsAndConditions;
