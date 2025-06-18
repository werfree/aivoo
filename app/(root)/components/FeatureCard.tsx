import { FEATURES, ICON_MAP } from '@/constant/content';
import React from 'react';

interface FeatureCardProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

type FeatureIconKey = keyof typeof ICON_MAP;

interface FeatureItem {
  icon: FeatureIconKey;
  title: string;
  description: string;
}


function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md transform hover:-translate-y-2 transition-transform duration-300">
      <div className="p-3 bg-white/10 rounded-full w-max mb-4">
        <Icon className="h-8 w-8 text-cyan-300" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default function FeatureSection(){
  return (
    <section id="features" className="w-full max-w-6xl mx-auto mt-24 sm:mt-32">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {FEATURES.map((f: FeatureItem, idx: number) => (
                  <FeatureCard
                    key={idx}
                    Icon={ICON_MAP[f.icon]}
                    title={f.title}
                    description={f.description}
                  />
                ))}
              </div>
            </section>
  )
}
