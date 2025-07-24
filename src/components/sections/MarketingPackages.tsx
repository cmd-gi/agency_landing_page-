'use client';

import { useState } from 'react';
import { ShoppingCart, Check, Star } from 'lucide-react';

interface MarketingPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  label: string;
  labelColor: string;
  features: string[];
  popular?: boolean;
}

const marketingPackages: MarketingPackage[] = [
  {
    id: 'seo',
    name: 'SEO',
    price: '9999',
    period: 'Monthly',
    label: 'STARTER',
    labelColor: 'bg-blue-500',
    features: [
      '7–9 Custom Pages',
      '5–10 Banner Graphics',
      'SEO Basics (On-Page & Off-Page)',
      'Security updates',
      'Update discounts and offers',
      'Update blog or content',
      '1 Month Free Maintenance Support',
      'Review Analytics and Metrics'
    ]
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    price: '7999',
    period: 'Monthly',
    label: 'PRO',
    labelColor: 'bg-purple-500',
    features: [
      'Audience Research & Targeting (Custom & Lookalike Audiences)',
      '3 Ad Campaigns Setup & Management',
      'Creative Development (Ad Copy + Single Image/Carousel Ads)',
      'A/B Testing for Ads',
      'Performance Monitoring & Weekly Optimizations',
      'Monthly Performance Report'
    ],
    popular: true
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    price: '9999',
    period: 'Monthly',
    label: 'PRO',
    labelColor: 'bg-red-500',
    features: [
      'Keyword Research & Campaign Planning',
      'Search & Display Ads Setup',
      '3 Ad Campaigns Management (Search, Display, or Shopping Ads)',
      'Ad Copywriting & Banner Ad Design',
      'Conversion Tracking Setup (Google Analytics, GTM Integration)',
      'Bi-Weekly Campaign Optimization',
      'Monthly Performance Report'
    ]
  }
];

export default function MarketingPackages() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleAddToCart = (packageId: string) => {
    // Add to cart functionality would go here
    console.log(`Added ${packageId} to cart`);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-blue mb-4 font-primary">
            MARKETING PACKAGE
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-lg shadow-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 relative ${
                pkg.popular ? 'border-2 border-bright-green' : ''
              }`}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-bright-green text-white px-3 py-1 rounded-bl-lg">
                  <Star className="w-4 h-4 inline mr-1" />
                  Popular
                </div>
              )}

              {/* Package Header */}
              <div className="p-6 bg-gradient-to-r from-bright-green to-teal text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold font-primary text-white">
                    {pkg.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${pkg.labelColor} text-white`}>
                    {pkg.label}
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-lg font-medium">₹</span>
                  <span className="text-4xl font-bold mx-1">{pkg.price}</span>
                  <span className="text-sm opacity-90">per {pkg.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-bright-green flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(pkg.id)}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    hoveredCard === pkg.id
                      ? 'bg-bright-green text-white shadow-lg transform translate-y-[-2px]'
                      : 'bg-teal text-white hover:bg-bright-green'
                  }`}
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            All packages include dedicated support and regular performance monitoring
          </p>
        </div>
      </div>
    </section>
  );
}