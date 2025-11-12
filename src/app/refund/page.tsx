import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function RefundPage() {
  const { t, locale } = useLanguage();
  const lastUpdated = new Date().toLocaleDateString(locale);

  const cancellationDetails = [
    {
      label: "Cancellation Window",
      description:
        "Cancellation requests are accepted within 6-8 days of placing your order.",
    },
    {
      label: "Important Note",
      description:
        "Cancellation requests may not be entertained if the order has been communicated to vendors/merchants and they have initiated the shipping process.",
    },
  ];

  const aiLincPolicies = [
    "Cancellations accepted within 48 hours of enrollment",
    "Full refund available if program hasn't started",
    "Partial refund available within first week",
    "No refunds after 25% program completion",
  ];

  const workshopPolicies = [
    "Free cancellation up to 24 hours before start",
    "50% refund if cancelled within 12 hours",
    "No refund for no-shows",
    "Rescheduling available subject to availability",
  ];

  const nonCancellableItems = [
    "One-on-one mentoring sessions (once scheduled)",
    "Personalized consultation calls",
    "Custom training programs (once development begins)",
    "Certificate processing fees",
  ];

  const reportingSteps = [
    "Contact our support team within 6-8 days of the issue",
    "Provide detailed description of the problem",
    "Include relevant screenshots or documentation",
    "Allow our team to investigate and verify the issue",
    "Resolution will be provided based on investigation results",
  ];

  const serviceExpectations = [
    "Notify our customer service within 6-8 days of service completion",
    "Provide specific feedback about discrepancies",
    "Our Customer Service Team will review your complaint thoroughly",
    "Appropriate resolution will be provided based on the investigation",
  ];

  const processingTimeline = [
    { label: "Review", value: "2-3 business days" },
    { label: "Approval", value: "1-2 business days" },
    { label: "Processing", value: "6-8 business days" },
    { label: "Bank Credit", value: "2-5 business days" },
  ];

  const refundMethods = [
    "Original payment method (preferred)",
    "Bank transfer (if original method unavailable)",
    "Store credit (for partial refunds)",
    "Alternative payment methods (case by case)",
  ];

  const refundContactInfo = [
    { label: "Email", value: "contact@ailinc.com" },
    { label: "Phone", value: "+91 7868-055111" },
    { label: "Support Hours", value: "Monday - Friday, 9:00 AM - 6:00 PM IST" },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors duration-300 group"
            >
              <svg 
                className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
              {t("Back to Home")}
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t("Cancellations and Refunds")}
            </h1>
            <p className="text-gray-600 text-lg">
              {t("Last updated:")} {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  {t(
                    "At Leapify Technologies Private Limited, we are committed to customer satisfaction and maintain a fair and transparent cancellation and refund policy to help our customers as much as possible."
                  )}
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Cancellation Policy")}
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  {cancellationDetails.map(({ label, description }) => (
                    <p key={label} className="text-gray-700 leading-relaxed">
                      <strong>{t(label)}:</strong> {t(description)}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Program-Specific Policies")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t("AI LINC Programs")}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {aiLincPolicies.map((item) => (
                      <li key={item}>{t(item)}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t("Workshops & Courses")}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {workshopPolicies.map((item) => (
                      <li key={item}>{t(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Non-Cancellable Services")}
              </h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t("The following items/services cannot be cancelled once confirmed:")}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {nonCancellableItems.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>{t("Exception")}:</strong>{" "}
                  {t("Refunds may be considered if service quality issues are established and verified.")}
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Quality Issues & Defects")}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {t("If you experience issues with our services or digital products, please report them to our Customer Service team.")}
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {t("Reporting Process:")}
                  </h3>
                  <ul className="list-decimal pl-6 space-y-2 text-gray-700">
                    {reportingSteps.map((item) => (
                      <li key={item}>{t(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Service Expectations")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("If you feel that the service received does not match what was described or your expectations:")}
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {serviceExpectations.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Third-Party Services & Warranties")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t(
                  "For services or products that come with third-party warranties (software licenses, external tools, etc.), please refer issues directly to the respective manufacturers or service providers."
                )}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Refund Processing")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {t("Processing Timeline")}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {processingTimeline.map(({ label, value }) => (
                      <li key={label}>
                        • <strong>{t(label)}:</strong> {t(value)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {t("Refund Methods")}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {refundMethods.map((item) => (
                      <li key={item}>• {t(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Contact for Refunds")}
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t("To initiate a cancellation or refund request, contact us through:")}
                </p>
                <ul className="space-y-2 text-gray-700">
                  {refundContactInfo.map(({ label, value }) => (
                    <li key={label}>
                      <strong>{t(label)}:</strong> {label === "Support Hours" ? t(value) : value}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>{t("Required Information")}:</strong>{" "}
                  {t("Order ID, registered email, reason for refund, and any supporting documentation.")}
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("Disclaimer")}
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>{t("Disclaimer")}:</strong>{" "}
                  {t(
                    "The above content is created at Leapify Technologies Private Limited's sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant's non-adherence to it."
                  )}
                </p>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-6">
              {t("Need help with a cancellation or refund? Our team is here to assist you.")}
            </p>
            <Link 
              href="/#contact" 
              passHref
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              {t("Contact Support")}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
