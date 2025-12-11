import { Briefcase, TrendingDown, FileText, Users, Shield, Truck, Clock, Award } from "lucide-react";
import Link from "next/link";

export default function ProPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-factory-orange/20 text-factory-orange px-4 py-2 rounded-full mb-6">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-semibold">For Trade Professionals</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            PRO Program Benefits
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Exclusive pricing, powerful tools, and dedicated support for electricians, contractors, and business buyers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pro/register?tier=electrician"
              className="inline-flex items-center justify-center px-8 py-4 bg-factory-orange text-white font-semibold rounded-lg hover:bg-factory-orange/90 transition-colors"
            >
              Register as PRO Electrician
            </Link>
            <Link
              href="/pro/register?tier=business"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Register as PRO Business
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Join PRO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingDown, title: "Extra Discounts", description: "10-15% off on top of factory prices" },
              { icon: FileText, title: "Quote Builder", description: "Generate professional quotes instantly" },
              { icon: Truck, title: "Flexible Delivery", description: "Schedule by project phase" },
              { icon: Users, title: "Account Manager", description: "Dedicated support for Business tier" },
              { icon: Shield, title: "Extended Warranty", description: "Up to 7 years on select products" },
              { icon: Clock, title: "Priority Processing", description: "Faster order fulfillment" },
              { icon: Award, title: "Rewards Program", description: "Earn points on every purchase" },
              { icon: Briefcase, title: "Project Tools", description: "Track orders by job site" },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-factory-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-factory-orange" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Choose Your PRO Tier
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Both tiers are completely free to join. Just verify your professional credentials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* PRO Electrician */}
            <div className="bg-white rounded-2xl border-2 border-blue-200 p-8 hover:border-blue-400 transition-colors">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">PRO Electrician</h3>
                <p className="text-gray-600">For individual contractors</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">Free</span>
                  <span className="text-gray-600"> / forever</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "10% additional discount",
                  "Quotation builder access",
                  "Priority customer support",
                  "Project tracking dashboard",
                  "Bulk order discounts",
                  "Extended payment terms (NET 15)",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pro/register?tier=electrician"
                className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply as Electrician
              </Link>
            </div>

            {/* PRO Business */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-factory-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">PRO Business</h3>
                <p className="text-purple-100">For companies & project managers</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Free</span>
                  <span className="text-purple-100"> / forever</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "15% additional discount",
                  "All Electrician tier features",
                  "Dedicated account manager",
                  "Custom pricing for large projects",
                  "Extended payment terms (NET 30)",
                  "White-label quotations",
                  "Multi-user account access",
                  "Advanced analytics dashboard",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="h-6 w-6 text-purple-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-purple-50">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pro/register?tier=business"
                className="block w-full text-center px-6 py-3 bg-white text-purple-700 font-bold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Apply as Business
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What PRO Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Somchai Electrical Services",
                role: "PRO Electrician",
                quote: "The quotation builder saves me hours every week. I can send professional quotes to clients in minutes.",
                rating: 5,
              },
              {
                name: "Bangkok Contractors Co.",
                role: "PRO Business",
                quote: "Having a dedicated account manager makes ordering for multiple projects seamless. The NET 30 terms help with cash flow.",
                rating: 5,
              },
              {
                name: "Thai Interior Design",
                role: "PRO Business",
                quote: "The 15% additional discount on factory prices means we can offer better pricing to our clients and still maintain margins.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-factory-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start saving more and working smarter. Registration takes less than 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pro/register?tier=electrician"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-factory-orange font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply as PRO Electrician
            </Link>
            <Link
              href="/pro/register?tier=business"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Apply as PRO Business
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
