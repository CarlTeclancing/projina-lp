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

    <Section title="1. About Projina">
      <p>Projina is a project management application designed for software teams to manage projects, assign tasks, collaborate with team members, and track work progress.</p>
      <p>The platform allows organizations to create workspaces where employees can access projects, tasks, files, and other work-related information.</p>
    </Section>

    <Section title="2. Account Registration">
      <p>Access to Projina requires an account.</p>
      <p>Accounts are typically created by a company's administrator who provides login credentials to employees.</p>
      <p>Users may also request access to a company workspace by submitting their name, work email address, and role within the organization.</p>
      <p>By using Projina, you agree that the information you provide is accurate and up to date.</p>
    </Section>

    <Section title="3. User Roles">
      <p>Projina supports different user roles including administrators and employees.</p>
      <p><strong>Administrators may:</strong></p>
      <List items={[
        "Create and manage projects",
        "Create teams and assign members",
        "Assign tasks and responsibilities",
        "Manage workspace users",
        "Delete user accounts",
      ]} />
      <p><strong>Employees may:</strong></p>
      <List items={[
        "View assigned projects",
        "Create and manage tasks related to their work",
        "Upload files and share documents with team members",
      ]} />
    </Section>

    <Section title="4. Acceptable Use">
      <p>Users agree not to misuse the platform. The following activities are strictly prohibited:</p>
      <List items={[
        "Uploading illegal, harmful, or malicious content",
        "Attempting to hack or disrupt the platform",
        "Uploading viruses or malware",
        "Attempting unauthorized access to other accounts",
        "Using the platform for unlawful activities",
      ]} />
      <p>Crestlancing reserves the right to suspend or terminate accounts that violate these rules.</p>
    </Section>

    <Section title="5. Subscription Plans">
      <p>Projina operates under a freemium model with three plans:</p>
      <List items={["Basic Plan", "Pro Plan", "Enterprise Plan"]} />
      <p>Paid subscriptions may be billed monthly or yearly.</p>
      <p>Access to premium features depends on the selected plan.</p>
    </Section>

    <Section title="6. Billing and Payments">
      <p>Payments may be made through available payment methods including:</p>
      <List items={["Mobile Money", "Bank Transfer"]} />
      <p>Subscription fees must be paid in advance according to the selected billing cycle.</p>
      <p>Failure to make payment may result in suspension of premium features.</p>
    </Section>

    <Section title="7. Subscription Cancellation">
      <p>Users may cancel their subscription at any time.</p>
      <p>When a subscription is canceled, access to premium features will continue until the end of the current billing period.</p>
      <p>After the billing period ends, the account may revert to the free plan if available.</p>
    </Section>

    <Section title="8. Platform Availability">
      <p>Crestlancing strives to ensure that Projina operates smoothly and reliably. However, the platform may occasionally experience downtime due to:</p>
      <List items={[
        "System maintenance",
        "Updates",
        "Technical issues",
        "External service disruptions",
      ]} />
      <p>Crestlancing does not guarantee uninterrupted service availability.</p>
    </Section>

    <Section title="9. Data Responsibility">
      <p>Users are responsible for the data they upload or share on the platform. Although Projina maintains systems to protect data, users are encouraged to maintain backups of important information. Crestlancing shall not be liable for any loss of data resulting from technical failures or user actions.</p>
    </Section>

    <Section title="10. Intellectual Property">
      <p>All intellectual property rights related to Projina, including its software, design, branding, and functionality, remain the property of Crestlancing. Users may not copy, reproduce, or distribute any part of the platform without permission.</p>
    </Section>

    <Section title="11. Termination of Accounts">
      <p>Crestlancing may suspend or terminate user accounts if:</p>
      <List items={[
        "These Terms are violated",
        "The platform is used illegally",
        "Security risks are detected",
      ]} />
      <p>Company administrators may also remove users from their organization workspace.</p>
    </Section>

    <Section title="12. Changes to the Terms">
      <p>Crestlancing may update these Terms and Conditions from time to time. Users will be notified of significant updates through the platform or website. Continued use of the platform after changes means acceptance of the updated terms.</p>
    </Section>

    <Section title="13. Governing Law">
      <p>These Terms and Conditions are governed by the laws of Cameroon.</p>
    </Section>
  </div>
);

const PrivacyContent = () => (
  <div className="legal-page-content">
    <div className="legal-intro">
      <p>Crestlancing respects your privacy and is committed to protecting the personal information of Projina users. This Privacy Policy explains how we collect, use, and protect your information when you use Projina.</p>
    </div>

    <Section title="1. Information We Collect">
      <p>Projina may collect the following information:</p>
      <p><strong>User Information</strong></p>
      <List items={["Name", "Work email address", "Role within the company (optional)"]} />
      <p><strong>Company Information</strong></p>
      <List items={["Company name", "Address", "Industry", "Company logo"]} />
      <p><strong>Platform Data</strong></p>
      <List items={["Project information", "Task details", "Uploaded files", "Workspace data"]} />
    </Section>

    <Section title="2. How We Use Your Information">
      <p>We use collected data to:</p>
      <List items={[
        "Provide access to the platform",
        "Manage company workspaces",
        "Enable collaboration between team members",
        "Improve platform performance",
        "Maintain system security",
      ]} />
      <p>User and company data are stored solely for the purpose of operating the Projina platform.</p>
    </Section>

    <Section title="3. Cookies">
      <p>Projina uses cookies to improve user experience.</p>
      <p>Cookies help us:</p>
      <List items={["Maintain login sessions", "Improve platform performance", "Remember user preferences"]} />
      <p>Users may disable cookies in their browser settings, but some platform features may not function properly.</p>
    </Section>

    <Section title="4. Data Sharing">
      <p>Projina does not sell or rent user data.</p>
      <p>Information may only be shared when necessary to:</p>
      <List items={["Operate the platform", "Comply with legal obligations", "Protect the security of the system"]} />
    </Section>

    <Section title="5. Data Security">
      <p>Crestlancing implements reasonable security measures to protect user data from unauthorized access, loss, or misuse. However, no system can guarantee absolute security.</p>
    </Section>

    <Section title="6. Account Deletion">
      <p>User accounts may only be deleted by the company administrator of the workspace. If an organization chooses to remove a user, their access to the platform will be revoked.</p>
    </Section>

    <Section title="7. Policy Updates">
      <p>This Privacy Policy may be updated periodically to reflect improvements to the platform or changes in legal requirements. Users will be notified of major changes.</p>
    </Section>
  </div>
);

const RefundContent = () => (
  <div className="legal-page-content">
    <div className="legal-intro">
      <p>Projina offers paid subscription plans for organizations and teams.</p>
    </div>

    <Section title="1. Refund Eligibility">
      <p>Customers may request a refund within 30 days (1 month) of a subscription payment. Refund requests must be submitted within this period to be considered.</p>
    </Section>

    <Section title="2. Conditions for Refunds">
      <p>Refunds may be issued under the following circumstances:</p>
      <List items={[
        "Accidental or duplicate payments",
        "Billing errors",
        "Service dissatisfaction within the refund period",
      ]} />
      <p>All refund requests are reviewed by the Projina support team.</p>
    </Section>

    <Section title="3. Refund Processing">
      <p>Approved refunds will be processed using the original payment method, when possible. Refund processing times may vary depending on the payment provider.</p>
    </Section>

    <Section title="4. Non-Refundable Situations">
      <p>Refunds may not be granted if:</p>
      <List items={[
        "The refund request is made after the 30-day refund period",
        "The service has been significantly used beyond normal evaluation",
      ]} />
    </Section>
  </div>
);

const CancellationContent = () => (
  <div className="legal-page-content">
    <div className="legal-intro">
      <p>Projina subscriptions may be canceled at any time by the subscribing organization.</p>
    </div>

    <Section title="1. Subscription Cancellation">
      <p>Organizations may cancel their Projina subscription before the next billing cycle. Cancellation will prevent future billing.</p>
    </Section>

    <Section title="2. Access After Cancellation">
      <p>After cancellation, users will continue to have access to paid features until the end of the current billing period. Once the billing period expires, the workspace may revert to the free plan if available.</p>
    </Section>

    <Section title="3. Data Access">
      <p>Organizations may download or export their data before the end of the billing cycle if needed.</p>
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
