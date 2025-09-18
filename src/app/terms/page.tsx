import Link from "next/link";

export default function TermsPage() {
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
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Definitions</h2>
              <p className="text-gray-700 leading-relaxed">
                For the purpose of these Terms and Conditions, "we", "us", "our" refers to Leapify Technologies Private Limited, 
                with registered office at Flat No 102, Raghu Ram Enclave Silpa Park, Kondapur, Hyderabad, Telangana 500084. 
                "You", "your", "user", "visitor" refers to any person who accesses our website or purchases our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the AI LINC program and website, you accept and agree to be bound by these terms and conditions. 
                If you do not agree with these terms, please do not use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Program Description</h2>
              <p className="text-gray-700 leading-relaxed">
                AI LINC is a comprehensive program designed to enhance your skills and value in the AI economy. The program includes 
                educational content, workshops, assignments, and access to instructors and community resources.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Registration and Payment</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Registration requires payment of the full program fee</li>
                <li>All payments are processed securely through Razorpay</li>
                <li>Program access begins upon successful payment confirmation</li>
                <li>No partial payments or installments are accepted unless explicitly stated</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Program Access and Duration</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Program duration varies based on the specific course selected</li>
                <li>Access to program materials is provided for the duration of the program</li>
                <li>Extended access may be provided at AI LINC&apos;s discretion</li>
                <li>Technical requirements must be met for optimal program experience</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, materials, and resources provided in the AI LINC program are the intellectual property of AI LINC 
                and are protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Participants may not reproduce, distribute, or share program content without explicit written permission. 
                Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Code of Conduct</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintain respectful communication with instructors and fellow participants</li>
                <li>No harassment, discrimination, or inappropriate behavior will be tolerated</li>
                <li>Participate actively and constructively in program activities</li>
                <li>Respect the learning environment and community guidelines</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Website Content and Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The content of this website is subject to change without notice. We do not provide any warranty or guarantee 
                as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found 
                on this website for any particular purpose.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your use of any information or materials on our website is entirely at your own risk, for which we shall not be liable. 
                It is your responsibility to ensure that any products or services available through our website meet your specific requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may include links to other websites for your convenience and additional information. We are not responsible 
                for the content of these external sites. You may not create a link to our website without our prior written consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                AI LINC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting 
                from your participation in the program.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject 
                to the laws of India. All legal proceedings shall be conducted in the appropriate courts of Hyderabad, Telangana.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                AI LINC reserves the right to modify these terms and conditions at any time. Participants will be notified 
                of significant changes via email or through the program platform. Continued use of our services after 
                modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Email:</strong> contact@ailinc.com</li>
                  <li><strong>Phone:</strong> +91 7868-055111</li>
                  <li><strong>Address:</strong> Flat No 102, Raghu Ram Enclave Silpa Park, Kondapur, Hyderabad, Telangana 500084</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Disclaimer</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Disclaimer:</strong> The above content is created at Leapify Technologies Private Limited&apos;s sole discretion. 
                  Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and 
                  liability that may arise due to merchant&apos;s non-adherence to it.
                </p>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <p className="text-gray-600 mb-6">
              Have questions about our terms? We&apos;re here to help.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
