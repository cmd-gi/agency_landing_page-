'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  badge?: string;
  features: Feature[];
  highlighted?: boolean;
}

export default function PricingPackages() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pricingPlans: PricingPlan[] = [
    {
      name: 'STARTER',
      price: '9999',
      badge: 'Yearly Plan',
      features: [
        { text: '7–9 Custom Pages', included: true },
        { text: '5–10 Banner Graphics', included: true },
        { text: 'SEO Basics (On-Page & Off-Page)', included: true },
        { text: 'Security updates', included: true },
        { text: 'Update discounts and offers', included: true },
        { text: 'Update blog or content', included: true },
        { text: '1 Month Free Maintenance Support', included: true },
        { text: 'Review Analytics and Metrics', included: true }
      ]
    },
    {
      name: 'PRO',
      price: '19999',
      badge: 'PRO',
      highlighted: true,
      features: [
        { text: 'Astra/Blocksy Theme', included: true },
        { text: '9–12 Pages', included: true },
        { text: 'Free Domain', included: true },
        { text: '30 Products + 30 Categories', included: true },
        { text: 'Cart + Razorpay/Paytm/Stripe', included: true },
        { text: 'Shipping Setup + Coupon Code Setup', included: true },
        { text: 'Social & WhatsApp Integration', included: true },
        { text: 'Fully Responsive', included: true },
        { text: '1 Month Free Maintenance', included: true }
      ]
    },
    {
      name: 'ELITE',
      price: '24999',
      badge: 'ELITE',
      features: [
        { text: 'Astra/Blocksy Theme', included: true },
        { text: '15-20 Pages', included: true },
        { text: 'Free Domain + Server (1 Year)', included: true },
        { text: 'Unlimited Products & Categories', included: true },
        { text: 'Cart + Razorpay/Paytm/Stripe', included: true },
        { text: 'Shipping Setup + Coupon Code Setup', included: true },
        { text: 'Social & WhatsApp Integration', included: true },
        { text: 'Fully Responsive', included: true },
        { text: '1 Year Free Maintenance', included: true }
      ]
    }
  ];

  const handleAddToCart = (planName: string) => {
    console.log(`Added ${planName} to cart`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0891B2] mb-4">
            WEBSITE DEVELOPMENT PACKAGE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-[#10B981] to-[#0891B2] rounded-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.highlighted ? 'ring-2 ring-[#F59E0B] scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-6 bg-white text-[#10B981] px-3 py-1 rounded-full text-sm font-semibold">
                  {plan.badge}
                </div>
              )}

              {/* Pricing */}
              <div className="text-center mb-6 mt-4">
                <div className="text-3xl font-bold mb-2">
                  ₹ {plan.price}
                </div>
                {plan.name === 'STARTER' && (
                  <div className="text-sm opacity-80">Billed Annually</div>
                )}
                <div className="text-xl font-semibold mt-2">
                  {plan.name}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3"
                  >
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(plan.name)}
                className={`w-full bg-white text-[#10B981] font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-lg transform ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}
              >
                Add To Cart
              </button>

              {/* Hover Animation Effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/20 to-[#0891B2]/20 rounded-lg pointer-events-none transition-opacity duration-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}