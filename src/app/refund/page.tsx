export default function RefundPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <a 
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
            </a>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Cancellations and Refunds
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-12">
            <section className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  At Leapify Technologies Private Limited, we are committed to customer satisfaction and maintain 
                  a fair and transparent cancellation and refund policy to help our customers as much as possible.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Cancellation Window:</strong> Cancellation requests are accepted within <strong>6-8 days</strong> of placing your order.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Important Note:</strong> Cancellation requests may not be entertained if the order has been 
                    communicated to vendors/merchants and they have initiated the shipping process.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Program-Specific Policies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">AI LINC Programs</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Cancellations accepted within 48 hours of enrollment</li>
                    <li>Full refund available if program hasn&apos;t started</li>
                    <li>Partial refund available within first week</li>
                    <li>No refunds after 25% program completion</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Workshops & Courses</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Free cancellation up to 24 hours before start</li>
                    <li>50% refund if cancelled within 12 hours</li>
                    <li>No refund for no-shows</li>
                    <li>Rescheduling available subject to availability</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Cancellable Services</h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The following items/services cannot be cancelled once confirmed:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>One-on-one mentoring sessions (once scheduled)</li>
                  <li>Personalized consultation calls</li>
                  <li>Custom training programs (once development begins)</li>
                  <li>Certificate processing fees</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Exception:</strong> Refunds may be considered if service quality issues are established and verified.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Issues & Defects</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  If you experience issues with our services or digital products, please report them to our Customer Service team.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Reporting Process:</h3>
                  <ul className="list-decimal pl-6 space-y-2 text-gray-700">
                    <li>Contact our support team within <strong>6-8 days</strong> of the issue</li>
                    <li>Provide detailed description of the problem</li>
                    <li>Include relevant screenshots or documentation</li>
                    <li>Allow our team to investigate and verify the issue</li>
                    <li>Resolution will be provided based on investigation results</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Expectations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you feel that the service received does not match what was described or your expectations:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Notify our customer service within <strong>6-8 days</strong> of service completion</li>
                  <li>Provide specific feedback about discrepancies</li>
                  <li>Our Customer Service Team will review your complaint thoroughly</li>
                  <li>Appropriate resolution will be provided based on the investigation</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services & Warranties</h2>
              <p className="text-gray-700 leading-relaxed">
                For services or products that come with third-party warranties (software licenses, external tools, etc.), 
                please refer issues directly to the respective manufacturers or service providers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Processing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Processing Timeline</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Review:</strong> 2-3 business days</li>
                    <li>• <strong>Approval:</strong> 1-2 business days</li>
                    <li>• <strong>Processing:</strong> 6-8 business days</li>
                    <li>• <strong>Bank Credit:</strong> 2-5 business days</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Refund Methods</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Original payment method (preferred)</li>
                    <li>• Bank transfer (if original method unavailable)</li>
                    <li>• Store credit (for partial refunds)</li>
                    <li>• Alternative payment methods (case by case)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Refunds</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  To initiate a cancellation or refund request, contact us through:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Email:</strong> contact@ailinc.com</li>
                  <li><strong>Phone:</strong> +91 7868-055111</li>
                  <li><strong>Support Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Required Information:</strong> Order ID, registered email, reason for refund, and any supporting documentation.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
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
              Need help with a cancellation or refund? Our team is here to assist you.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
