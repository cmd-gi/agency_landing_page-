"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  url: string;
  category: 'web' | 'smm';
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Hoverboard India",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/HOME-1-1024x576-3.png",
    url: "https://hoverboardindia.in/",
    category: 'web'
  },
  {
    id: 2,
    title: "Shasha Boutique",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/HOME-2-1024x576-4.png",
    url: "https://shashaboutique.shop/",
    category: 'web'
  },
  {
    id: 3,
    title: "Veg Webstores",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/5-1024x576-5.png",
    url: "https://veg.webstores.in/",
    category: 'web'
  },
  {
    id: 4,
    title: "Dry Fruit Wholista",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/9-1024x576-6.png",
    url: "https://dryfruit.wholista.in/",
    category: 'web'
  },
  {
    id: 5,
    title: "Gift Store",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/7-1024x576-7.png",
    url: "https://gift.i3onlinestore.in/",
    category: 'web'
  },
  {
    id: 6,
    title: "Meat Store",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/10-1024x576-8.png",
    url: "https://meat.i3onlinestore.in/",
    category: 'web'
  },
  {
    id: 7,
    title: "Dates Wholista",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/8-1024x576-9.png",
    url: "https://dates.wholista.in/",
    category: 'web'
  },
  {
    id: 8,
    title: "Beauty Webstores",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/6-1024x576-10.png",
    url: "https://beauty.webstores.in/",
    category: 'web'
  }
];

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center h-full">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              VISIT SITE
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA Button - Always visible on mobile */}
      <div className="absolute bottom-4 left-4 right-4 md:hidden">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-teal text-white font-semibold rounded-lg hover:bg-teal/90 transition-colors duration-200 text-sm"
        >
          <ExternalLink size={14} />
          VISIT SITE
        </a>
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Web Portfolio Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal mb-4">OUR WORKS</h2>
        </div>
        
        {/* Web Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}