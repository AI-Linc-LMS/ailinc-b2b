import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { t, locale } = useLanguage();
  const lastUpdated = new Date().toLocaleDateString(locale);

  const infoItems = [
    "Name and contact information including email address",
    "Demographic information such as location, preferences, and interests",
    "Educational background and professional experience (for program eligibility)",
    "Payment information (processed securely through third-party providers)",
    "Usage data and analytics from website interactions",
    "Information relevant to surveys, feedback, and program improvement",
  ];

  const usageItems = [
    "Maintaining internal records and account management",
    "Improving our programs, services, and user experience",
    "Sending program updates, educational content, and relevant opportunities",
    "Conducting market research and gathering feedback for service improvement",
    "Customizing website content and program recommendations based on your interests",
    "Processing payments and managing program enrollment",
    "Providing customer support and technical assistance",
  ];

  const dataSecurityItems = [
    "Secure Socket Layer (SSL) encryption for data transmission",
    "Regular security audits and vulnerability assessments",
    "Restricted access to personal information on a need-to-know basis",
    "Secure payment processing through certified third-party providers",
  ];

  const thirdPartyItems = [
    {
      title: "Payment Processing",
      description: "Razorpay for secure payment transactions",
    },
    {
      title: "Analytics",
      description: "Google Analytics for website usage insights",
    },
    {
      title: "Email Services",
      description: "Authorized email service providers for communications",
    },
    {
      title: "Cloud Storage",
      description: "Secure cloud services for data storage and backup",
    },
  ];

  const rightsYouCan = [
    "Request access to your personal data",
    "Request corrections to inaccurate information",
    "Opt out of marketing communications",
    "Request deletion of your data",
    "Withdraw consent for data processing",
  ];

  const rightsWeWillNot = [
    "Sell your personal information to third parties",
    "Share data without your consent",
    "Use information for purposes not disclosed",
    "Retain data longer than necessary",
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
              {t("Privacy Policy")}
            </h1>
            <p className="text-gray-600 text-lg">
              {t("Last updated:")} {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t("This privacy policy sets out how Leapify Technologies Private Limited uses and protects any information that you provide when you visit our website and/or purchase our services.")}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t("We are committed to ensuring that your privacy is protected. Any information you provide will only be used in accordance with this privacy statement.")}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t("We may update this policy from time to time. You should check this page periodically to ensure you are aware of any changes.")}
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Information We Collect")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t("We may collect the following information:")}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {infoItems.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("How We Use Your Information")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("We use the information we collect to provide you with better services, specifically for:")}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {usageItems.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Data Security")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("We are committed to ensuring that your information is secure. We have implemented appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.")}
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  {dataSecurityItems.map((item) => (
                    <li key={item}>• {t(item)}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Cookies and Tracking")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("We use cookies to enhance your browsing experience and analyze website traffic. Cookies are small files stored on your device that help us understand how you use our website.")}
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t("Types of cookies we use:")}</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>
                      <strong>{t("Essential cookies")}</strong>: {t("Required for website functionality")}
                    </li>
                    <li>
                      <strong>{t("Analytics cookies")}</strong>: {t("Help us understand website usage patterns")}
                    </li>
                    <li>
                      <strong>{t("Preference cookies")}</strong>: {t("Remember your settings and preferences")}
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t("You can choose to accept or decline cookies through your browser settings. However, declining cookies may affect some website functionality.")}
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Third-Party Services")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("We work with trusted third-party service providers to deliver our services:")}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {thirdPartyItems.map(({ title, description }) => (
                  <li key={title}>
                    <strong>{t(title)}:</strong> {t(description)}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Your Rights and Control")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("You have the right to control how your personal information is collected and used:")}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">{t("You can:")}</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {rightsYouCan.map((item) => (
                      <li key={item}>• {t(item)}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">{t("We will not:")}</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    {rightsWeWillNot.map((item) => (
                      <li key={item}>• {t(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Data Retention")}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t("We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. Upon program completion or account closure, we securely delete or anonymize your personal data according to our retention schedule.")}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Contact Information")}</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t("For questions about this Privacy Policy or to exercise your rights regarding your personal information, contact us:")}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>{t("Email")}:</strong> contact@ailinc.com
                  </li>
                  <li>
                    <strong>{t("Phone")}:</strong> +91 7868-055111
                  </li>
                  <li>
                    <strong>{t("Address")}:</strong> {t("Flat No 102, Raghu Ram Enclave Silpa Park, Kondapur, Hyderabad, Telangana 500084")}
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("Disclaimer")}</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>{t("Disclaimer")}:</strong>{" "}
                  {t("The above content is created at Leapify Technologies Private Limited's sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant's non-adherence to it.")}
                </p>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-6">
              {t("Questions about how we handle your data? We're transparent and here to help.")}
            </p>
            <Link 
              href="/#contact" 
              passHref
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              {t("Contact Us")}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
