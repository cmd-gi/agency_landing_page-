'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

interface PortfolioItem {
  id: string
  title: string
  image: string
  link: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Shri Ratna Film Company',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/Untitled-design-30-1024x1024-11.png?',
    link: 'https://www.instagram.com/shriratnafilmcompany/',
    description: 'Instagram Social Media Management'
  },
  {
    id: '2',
    title: 'Shasha Boutique',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c14134df-25fd-4e6b-a6ed-e1b610040abc-peakinfosolution-com/assets/images/Untitled-design-31-1024x1024-12.png?',
    link: 'https://www.instagram.com/shashaboutique_tnj/',
    description: 'Instagram Social Media Management'
  }
]

export default function PortfolioSMM() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
            OUR WORKS SMM
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">{item.description}</p>
                </div>
              </div>

              {/* Visit Site Button */}
              <div className="p-6 text-center">
                <Button
                  asChild
                  className="bg-bright-green hover:bg-bright-green/90 text-white px-8 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    VISIT SITE
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}