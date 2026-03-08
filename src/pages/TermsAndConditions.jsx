import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/termsStyles.css';

const TermsAndConditions = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentPage < 3) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleAgree = () => {
        navigate("/home");
    };

    return (
        <div className="terms-page-wrapper">
            <div className="terms-container">
                <div className="terms-content">
                    {currentPage === 1 && (
                        <div className="terms-page">
                            <h1>Terms and Conditions</h1>
                            <span className="terms-label">AGREEMENT</span>
                            
                            <div className="terms-section">
                                <h2>1. About Projina</h2>
                                <p>Welcome to Projina, a project management platform developed and operated by Unschooling, a registered company based in Cameroon.</p>
                                <p>By accessing or using Projina, you agree to comply with and be bound by all of these Terms and Conditions. If you do not agree with any part of these terms, you must not use this platform.</p>
                            </div>

                            <div className="terms-section">
                                <h2>2. User Accounts and Access</h2>
                                <p>To use Projina, you must register for an account and provide accurate information. You are responsible for maintaining the confidentiality of your login credentials and are liable for all activities under your account. You agree to notify Projina immediately of any unauthorized use of your account.</p>
                            </div>

                            <div className="terms-section">
                                <h2>3. User Roles and Permissions</h2>
                                <p>Organizations can assign team members different roles within a dedicated workspace. Each organization controls its members' workspace access and assigned responsibilities.</p>
                            </div>

                            <div className="terms-section">
                                <h2>4. Acceptable Use Policy</h2>
                                <p>You agree not to use Projina to:</p>
                                <ul>
                                    <li>Attempt to hack, defect, or compromise the platform</li>
                                    <li>Create malicious content or engage in harmful activities</li>
                                    <li>Use the platform for unlawful or fraudulent activities</li>
                                    <li>Attempt to gain unauthorized access to other user accounts</li>
                                    <li>Violate any applicable laws or regulations</li>
                                    <li>Use the platform without direct permission from Unschooling</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h2>5. Billing and Payments</h2>
                                <p>Subscription payments may be made through available payment methods including credit cards and bank transfers. By selecting a payment method, you authorize charges according to the selected billing cycle. You can view and update your payment information in your billing settings.</p>
                            </div>

                            <div className="terms-section">
                                <h2>6. Free Trial and Subscription Plans</h2>
                                <p>Projina offers a free trial period, allowing the following perks:</p>
                                <ul>
                                    <li>Basic plan - Full features for trial teams and organizations</li>
                                    <li>Enterprise plan - Customizable features for larger organizations</li>
                                </ul>
                                <p>By registering or using Projina, you agree that the trial ends automatically after 14 days (you will receive email notifications when your trial is ending).</p>
                            </div>

                            <div className="terms-section">
                                <h2>7. Account Restrictions and Termination</h2>
                                <p>Projina reserves the right to suspend or terminate your account if you violate these terms or engage in prohibited use. Upon termination, you will no longer have access to your account, and no future billing will occur, but historical data will not be deleted.</p>
                            </div>

                            <div className="terms-section">
                                <h2>8. Intellectual Property</h2>
                                <p>All content on Projina, including but not limited to software, design, graphics, text, and functionality—remains the exclusive property of Unschooling. Users may not copy, reproduce, distribute, or use any part of the platform without direct permission from Unschooling.</p>
                            </div>

                            <div className="terms-section">
                                <h2>9. Data Responsibility</h2>
                                <p>While Projina implements systems to protect user data and information on the platform, Projina cannot guarantee 100% security and is not responsible for any data loss, breach, or security incidents. Users should maintain independent backups of critical data.</p>
                            </div>

                            <div className="terms-section">
                                <h2>10. Limitation of Liability</h2>
                                <p>To the fullest extent permitted by law, Projina and Unschooling shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of or inability to use the platform or services provided through Projina.</p>
                            </div>

                            <div className="terms-section">
                                <h2>11. Third-Party Links and Services</h2>
                                <p>Projina may contain links and references to third-party websites and services. Projina is not responsible for the content, accuracy, or practices of external links. Users access third-party services at their own risk.</p>
                            </div>

                            <div className="terms-section">
                                <h2>12. Changes to Terms and Conditions</h2>
                                <p>Projina reserves the right to modify these terms at any time. Users will be notified of significant changes via email. Continued use of Projina following updates constitutes acceptance of the revised terms.</p>
                            </div>
                        </div>
                    )}

                    {currentPage === 2 && (
                        <div className="terms-page">
                            <h1>Refund Policy</h1>
                            <span className="terms-label">AGREEMENT</span>
                            
                            <div className="terms-section">
                                <h2>1. Refund Eligibility</h2>
                                <p>Projina offers paid subscription plans for organizations and teams.</p>
                                <p>Customers may request a refund within 30 days of a subscription payment. Refund requests submitted after this period may not be considered.</p>
                            </div>

                            <div className="terms-section">
                                <h2>2. Conditions for Refunds</h2>
                                <p>Refunds may be issued under the following circumstances:</p>
                                <ul>
                                    <li>Accidental or duplicate payments</li>
                                    <li>Billing errors</li>
                                    <li>Service dissatisfaction within the refund eligibility period</li>
                                </ul>
                                <p>All refund requests are reviewed by the Projina support team.</p>
                            </div>

                            <div className="terms-section">
                                <h2>3. Refund Processing</h2>
                                <p>Approved refunds will be processed using the original payment method, where possible. Processing times may vary depending on the payment provider.</p>
                            </div>

                            <div className="terms-section">
                                <h2>4. Non-Refundable Situations</h2>
                                <p>Refunds may not be granted if:</p>
                                <ul>
                                    <li>The request is submitted after the 30-day refund period</li>
                                    <li>The service has been extensively used beyond normal evaluation</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h2>5. Subscription Modifications</h2>
                                <p>Customers can modify their subscription plan at any time. Changes will be reflected in the next billing cycle. Any credits resulting from downgrading will be applied to future invoices unless otherwise requested.</p>
                            </div>

                            <div className="terms-section">
                                <h2>6. Contact and Support</h2>
                                <p>For refund inquiries or other concerns, please contact our support team at support@projina.com or through the support portal. We aim to respond to all inquiries within 48 business hours.</p>
                            </div>

                            <div className="terms-section">
                                <h2>7. Policy Updates</h2>
                                <p>Projina reserves the right to update this refund policy at any time. Customers will be notified of significant changes via email. Continued use of Projina after policy updates constitutes acceptance of the new terms.</p>
                            </div>
                        </div>
                    )}

                    {currentPage === 3 && (
                        <div className="terms-page">
                            <h1>Cancellation Policy</h1>
                            <span className="terms-label">AGREEMENT</span>
                            
                            <div className="terms-section">
                                <h2>1. Subscription Cancellation</h2>
                                <p>Projina subscriptions may be canceled at any time by the subscribing organization. Organizations may cancel their subscription before the next billing cycle to avoid future charges.</p>
                            </div>

                            <div className="terms-section">
                                <h2>2. Access After Cancellation</h2>
                                <p>After cancellation:</p>
                                <ul>
                                    <li>Paid features remain active until the end of the billing period.</li>
                                    <li>After the billing period expires, the workspace may revert to the free plan, if available.</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h2>3. Data Access</h2>
                                <p>Organizations may download or export their data before the end of the billing cycle if needed.</p>
                            </div>

                            <div className="terms-section">
                                <h2>4. Refunds on Cancellation</h2>
                                <p>Cancellations do not entitle customers to refunds of already-paid subscription fees beyond the standard refund eligibility window (see Refund Policy). However, if cancellation occurs within the 30-day refund window and qualifies under refund conditions, customers may request a refund.</p>
                            </div>

                            <div className="terms-section">
                                <h2>5. Account Reactivation</h2>
                                <p>Canceled subscriptions may be reactivated at any time. Reactivation will require a new subscription payment and will follow the current plan pricing at the time of reactivation.</p>
                            </div>

                            <div className="terms-section">
                                <h2>6. Cancellation Confirmation</h2>
                                <p>A cancellation confirmation email will be sent to the account administrator upon successful cancellation.</p>
                            </div>

                            <div className="terms-section">
                                <h2>7. Support Resources</h2>
                                <p>If you have questions about cancellation, please contact support@projina.com or visit our Help Center for more information.</p>
                            </div>
                        </div>
                    )}

                    <div className="terms-progress">
                        <div className="progress-bar" style={{width: `${(currentPage / 3) * 100}%`}}></div>
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
                            
                            {currentPage < 3 && (
                                <button 
                                    onClick={handleNext}
                                    className="btn-nav-next"
                                >
                                    Next
                                </button>
                            )}
                        </div>

                        {currentPage === 1 && (
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
