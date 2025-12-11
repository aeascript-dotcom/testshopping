import { Briefcase, TrendingDown, FileText, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProProgramCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-factory-orange/20 text-factory-orange px-4 py-2 rounded-full mb-6">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-semibold">For Trade Professionals</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Join Our PRO Program
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Exclusive benefits for electricians, contractors, and business buyers. 
              Get even better pricing and tools to grow your business.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Benefit 1 */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-factory-orange/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="h-6 w-6 text-factory-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Extra 10-15% Off</h3>
              <p className="text-gray-300">
                PRO members get additional discounts on top of our already factory-direct prices.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-factory-orange/20 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-factory-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Quotations</h3>
              <p className="text-gray-300">
                Generate professional quotes for your clients in minutes with our quotation builder.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-factory-orange/20 rounded-lg flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-factory-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Delivery</h3>
              <p className="text-gray-300">
                Schedule deliveries by project phase or pick up from our warehouse at your convenience.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-factory-orange/20 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-factory-orange" />
              </div>
              <h3 className="text-xl font-bold mb-2">Project Management</h3>
              <p className="text-gray-300">
                Track multiple projects, organize orders by job site, and manage everything in one place.
              </p>
            </div>
          </div>

          {/* Membership Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* PRO Electrician */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 border-2 border-blue-400">
              <h3 className="text-2xl font-bold mb-2">PRO Electrician</h3>
              <p className="text-blue-100 mb-6">For individual contractors and electricians</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-2">
                  <svg className="h-6 w-6 text-blue-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-50">10% additional discount</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="h-6 w-6 text-blue-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-50">Quotation builder access</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="h-6 w-6 text-blue-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-50">Priority support</span>
                </li>
              </ul>
              <Link
                href="/pro/register?tier=electrician"
                className="block w-full text-center px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Register Now - Free
              </Link>
            </div>

            {/* PRO Business */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 border-2 border-purple-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-factory-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">PRO Business</h3>
              <p className="text-purple-100 mb-6">For companies and project managers</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-2">
                  <svg className="h-6 w-6 text-purple-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-50">15% additional discount</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="h-6 w-6 text-purple-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-50">All Electrician features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="h-6 w-6 text-purple-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-50">Dedicated account manager</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="h-6 w-6 text-purple-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-50">NET 30 payment terms</span>
                </li>
              </ul>
              <Link
                href="/pro/register?tier=business"
                className="block w-full text-center px-6 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Register Now - Free
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              href="/pro"
              className="inline-flex items-center text-factory-orange hover:text-factory-orange/80 font-semibold transition-colors group"
            >
              Learn more about PRO benefits
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
