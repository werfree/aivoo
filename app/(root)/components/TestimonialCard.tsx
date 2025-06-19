import { TESTIMONIALS } from '@/constant/content';
import Image from 'next/image';
import React from 'react';

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  avatar: string;
}
interface TestimonialItem {
  name: string;
  company: string;
  text: string;
  avatar: string;
}


function TestimonialCard({ name, company, text, avatar }: TestimonialCardProps) {
  return (
    <figure className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md">
      <blockquote className="text-gray-300 italic">{text}</blockquote>
      <figcaption className="flex items-center gap-4 mt-6">
        <Image
          className="h-14 w-14 rounded-full object-cover"
          src={avatar}
          alt={name}
          width={56}
          height={56}
          unoptimized
        />  
        <div>
          <div className="font-bold text-white">{name}</div>
          <div className="text-gray-400 text-sm">{company}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="w-full max-w-6xl mx-auto mt-24 sm:mt-32">
              <h2 className="text-4xl font-bold text-center mb-12">Trusted by Leading Teams & Talent</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {TESTIMONIALS.map((t: TestimonialItem, idx: number) => (
                  <TestimonialCard key={idx} {...t} />
                ))}
              </div>
            </section>
  )
}