import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/termsStyles.css';

const TermsAndConditions = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleAgree = () => {
        navigate("/");
    };

    // Navigation tab labels
    const tabLabels = [
        "Terms & Conditions",
        "Privacy Policy",
        "Refund Policy",
        "Cancellation Policy"
    ];

    return (
        <div className="terms-page-wrapper">
            <div className="terms-container">
                <div className="terms-content">
                    {/* Navigation Tabs */}
                    <div className="terms-tabs">
                        {tabLabels.map((label, idx) => (
                            <button
                                key={label}
                                className={`terms-tab${currentPage === idx + 1 ? ' active' : ''}`}
                                onClick={() => setCurrentPage(idx + 1)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    {currentPage === 1 && (
                        <div className="terms-page">
                            <h1>Terms and Conditions</h1>
                            <span className="terms-label">Effective Date: [Insert Date]</span>
                            
                            <div className="terms-section">
                                <p>Welcome to Projina, a project management platform developed and operated by Crestlancing, a registered company based in Cameroon. These Terms and Conditions govern your access to and use of the Projina platform available at https://crms.projina.top</p>
                                <p>By accessing or using Projina, you agree to be bound by these Terms and Conditions. If you do not agree with these terms, please do not use the platform.</p>
                            </div>

                            <div className="terms-section">
                                <h2>1. About Projina</h2>
                                <p>Projina is a project management application designed for software teams to manage projects, assign tasks, collaborate with team members, and track work progress.</p>
                                <p>The platform allows organizations to create workspaces where employees can access projects, tasks, files, and other work-related information.</p>
                            </div>

                            <div className="terms-section">
                                <h2>2. Account Registration</h2>
                                <p>Access to Projina requires an account.</p>
                                <p>Accounts are typically created by a company's administrator who provides login credentials to employees.</p>
                                <p>Users may also request access to a company workspace by submitting their name, work email address, and role within the organization.</p>
                                <p>By using Projina, you agree that the information you provide is accurate and up to date.</p>
                            </div>

                            <div className="terms-section">
                                <h2>3. User Roles</h2>
                                <p>Projina supports different user roles including administrators and employees.</p>
                                <p><strong>Administrators may:</strong></p>
                                <ul>
                                    <li>Create and manage projects</li>
                                    <li>Create teams and assign members</li>
                                    <li>Assign tasks and responsibilities</li>
                                    <li>Manage workspace users</li>
                                    <li>Delete user accounts</li>
                                </ul>
                                <p><strong>Employees may:</strong></p>
                                <ul>
                                    <li>View assigned projects</li>
                                    <li>Create and manage tasks related to their work</li>
                                    <li>Upload files and share documents with team members</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h2>4. Acceptable Use</h2>
                                <p>Users agree not to misuse the platform. The following activities are strictly prohibited:</p>
                                <ul>
                                    <li>Uploading illegal, harmful, or malicious content</li>
                                    <li>Attempting to hack or disrupt the platform</li>
                                    <li>Uploading viruses or malware</li>
                                    <li>Attempting unauthorized access to other accounts</li>
                                    <li>Using the platform for unlawful activities</li>
                                </ul>
                                <p>Crestlancing reserves the right to suspend or terminate accounts that violate these rules.</p>
                            </div>

                            <div className="terms-section">
                                <h2>5. Subscription Plans</h2>
                                <p>Projina operates under a freemium model with three plans:</p>
                                <ul>
                                    <li>Basic Plan</li>
                                    <li>Pro Plan</li>
                                    <li>Enterprise Plan</li>
                                </ul>
                                <p>Paid subscriptions may be billed monthly or yearly.</p>
                                <p>Access to premium features depends on the selected plan.</p>
                            </div>

                            <div className="terms-section">
                                <h2>6. Billing and Payments</h2>
                                <p>Payments may be made through available payment methods including:</p>
                                <ul>
                                    <li>Mobile Money</li>
                                    <li>Bank Transfer</li>
                                </ul>
                                <p>Subscription fees must be paid in advance according to the selected billing cycle.</p>
                                <p>Failure to make payment may result in suspension of premium features.</p>
                            </div>

                            <div className="terms-section">
                                <h2>7. Subscription Cancellation</h2>
                                <p>Users may cancel their subscription at any time.</p>
                                <p>When a subscription is canceled, access to premium features will continue until the end of the current billing period.</p>
                                <p>After the billing period ends, the account may revert to the free plan if available.</p>
                            </div>

                            <div className="terms-section">
                                <h2>8. Platform Availability</h2>
                                <p>Crestlancing strives to ensure that Projina operates smoothly and reliably. However, the platform may occasionally experience downtime due to:</p>
                                <ul>
                                    <li>System maintenance</li>
                                    <li>Updates</li>
                                    <li>Technical issues</li>
                                    <li>External service disruptions</li>
                                </ul>
                                <p>Crestlancing does not guarantee uninterrupted service availability.</p>
                            </div>

                            <div className="terms-section">
                                <h2>9. Data Responsibility</h2>
                                <p>Users are responsible for the data they upload or share on the platform. Although Projina maintains systems to protect data, users are encouraged to maintain backups of important information. Crestlancing shall not be liable for any loss of data resulting from technical failures or user actions.</p>
                            </div>

                            <div className="terms-section">
                                <h2>10. Intellectual Property</h2>
                                <p>All intellectual property rights related to Projina, including its software, design, branding, and functionality, remain the property of Crestlancing. Users may not copy, reproduce, or distribute any part of the platform without permission.</p>
                            </div>

                            <div className="terms-section">
                                <h2>11. Termination of Accounts</h2>
                                <p>Crestlancing may suspend or terminate user accounts if:</p>
                                <ul>
                                    <li>These Terms are violated</li>
                                    <li>The platform is used illegally</li>
                                    <li>Security risks are detected</li>
                                </ul>
                                <p>Company administrators may also remove users from their organization workspace.</p>
                            </div>

                            <div className="terms-section">
                                <h2>12. Changes to the Terms</h2>
                                <p>Crestlancing may update these Terms and Conditions from time to time. Users will be notified of significant updates through the platform or website. Continued use of the platform after changes means acceptance of the updated terms.</p>
                            </div>

                            <div className="terms-section">
                                <h2>13. Governing Law</h2>
                                <p>These Terms and Conditions are governed by the laws of Cameroon.</p>
                            </div>
                        </div>
                    )}

                    {currentPage === 2 && (
                        <div className="terms-page">
                            <h1>Privacy Policy</h1>
                            <span className="terms-label">Effective Date: [Insert Date]</span>
                            
                            <div className="terms-section">
                                <p>Crestlancing respects your privacy and is committed to protecting the personal information of Projina users. This Privacy Policy explains how we collect, use, and protect your information when you use Projina.</p>
                            </div>

                            <div className="terms-section">
                                <h2>1. Information We Collect</h2>
                                <p>Projina may collect the following information:</p>
                                <p><strong>User Information</strong></p>
                                <ul>
                                    <li>Name</li>
                                    <li>Work email address</li>
                                    <li>Role within the company (optional)</li>
                                </ul>
                                <p><strong>Company Information</strong></p>
                                <ul>
                                    <li>Company name</li>
                                    <li>Address</li>
                                    <li>Industry</li>
                                    <li>Company logo</li>
                                </ul>
                                <p><strong>Platform Data</strong></p>
                                <ul>
                                    <li>Project information</li>
                                    <li>Task details</li>
                                    <li>Uploaded files</li>
                                    <li>Workspace data</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h2>2. How We Use Your Information</h2>
                                <p>We use collected data to:</p>
                                <ul>
                                    <li>Provide access to the platform</li>
                                    <li>Manage company workspaces</li>
                                    <li>Enable collaboration between team members</li>
                                    <li>Improve platform performance</li>
                                    <li>Maintain system security</li>
                                </ul>
                                <p>User and company data are stored solely for the purpose of operating the Projina platform.</p>
                            </div>

                            <div className="terms-section">
                                <h2>3. Cookies</h2>
                                <p>Projina uses cookies to improve user experience.</p>
                                <p>Cookies help us:</p>
                                <ul>
                                    <li>Maintain login sessions</li>
                                    <li>Improve platform performance</li>
                                    <li>Remember user preferences</li>
                                </ul>
                                <p>Users may disable cookies in their browser settings, but some platform features may not function properly.</p>
                            </div>

                            <div className="terms-section">
                                <h2>4. Data Sharing</h2>
                                <p>Projina does not sell or rent user data.</p>
                                <p>Information may only be shared when necessary to:</p>
                                <ul>
                                    <li>Operate the platform</li>
                                    <li>Comply with legal obligations</li>
                                    <li>Protect the security of the system</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h2>5. Data Security</h2>
                                <p>Crestlancing implements reasonable security measures to protect user data from unauthorized access, loss, or misuse. However, no system can guarantee absolute security.</p>
                            </div>

                            <div className="terms-section">
                                <h2>6. Account Deletion</h2>
                                <p>User accounts may only be deleted by the company administrator of the workspace. If an organization chooses to remove a user, their access to the platform will be revoked.</p>
                            </div>

                            <div className="terms-section">
                                <h2>7. Policy Updates</h2>
                                <p>This Privacy Policy may be updated periodically to reflect improvements to the platform or changes in legal requirements. Users will be notified of major changes.</p>
                            </div>
                        </div>
                    )}

                    {currentPage === 3 && (
                        <div className="terms-page">
                            <h1>Refund Policy</h1>
                            <span className="terms-label">Effective Date: [Insert Date]</span>
                            
                            <div className="terms-section">
                                <p>Projina offers paid subscription plans for organizations and teams.</p>
                            </div>

                            <div className="terms-section">
                                <h2>1. Refund Eligibility</h2>
                                <p>Customers may request a refund within 30 days (1 month) of a subscription payment. Refund requests must be submitted within this period to be considered.</p>
                            </div>

                            <div className="terms-section">
                                <h2>2. Conditions for Refunds</h2>
                                <p>Refunds may be issued under the following circumstances:</p>
                                <ul>
                                    <li>Accidental or duplicate payments</li>
                                    <li>Billing errors</li>
                                    <li>Service dissatisfaction within the refund period</li>
                                </ul>
                                <p>All refund requests are reviewed by the Projina support team.</p>
                            </div>

                            <div className="terms-section">
                                <h2>3. Refund Processing</h2>
                                <p>Approved refunds will be processed using the original payment method, when possible. Refund processing times may vary depending on the payment provider.</p>
                            </div>

                            <div className="terms-section">
                                <h2>4. Non-Refundable Situations</h2>
                                <p>Refunds may not be granted if:</p>
                                <ul>
                                    <li>The refund request is made after the 30-day refund period</li>
                                    <li>The service has been significantly used beyond normal evaluation</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {currentPage === 4 && (
                        <div className="terms-page">
                            <h1>Cancellation Policy</h1>
                            <span className="terms-label">Effective Date: [Insert Date]</span>
                            
                            <div className="terms-section">
                                <p>Projina subscriptions may be canceled at any time by the subscribing organization.</p>
                            </div>

                            <div className="terms-section">
                                <h2>1. Subscription Cancellation</h2>
                                <p>Organizations may cancel their Projina subscription before the next billing cycle. Cancellation will prevent future billing.</p>
                            </div>

                            <div className="terms-section">
                                <h2>2. Access After Cancellation</h2>
                                <p>After cancellation, users will continue to have access to paid features until the end of the current billing period. Once the billing period expires, the workspace may revert to the free plan if available.</p>
                            </div>

                            <div className="terms-section">
                                <h2>3. Data Access</h2>
                                <p>Organizations may download or export their data before the end of the billing cycle if needed.</p>
                            </div>
                        </div>
                    )}

                    <div className="terms-progress">
                        <div className="progress-bar" style={{width: `${(currentPage / 4) * 100}%`}}></div>
                    </div>

                    <div className="terms-footer">
                        <div className="terms-navigation">
                            <button 
                                onClick={handlePrevious} 
                                disabled={currentPage === 1}
                                className="btn-nav"
                            >
                                Previous
                            </button>
                            
                            {currentPage < 4 && (
                                <button 
                                    onClick={handleNext}
                                    className="btn-nav-next"
                                >
                                    Next
                                </button>
                            )}
                        </div>

                        {currentPage === 4 && (
                            <button 
                                onClick={handleAgree}
                                className="btn-agree"
                            >
                                Agree to Terms
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
