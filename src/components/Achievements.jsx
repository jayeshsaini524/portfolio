import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Trophy, Award, Lightbulb } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'CODE RED Triathlon 4.0',
    subtitle: 'Hackathon Participant',
    description:
      'Built solutions under tight deadlines, collaborating with cross-functional teams in a high-intensity hackathon.',
    color: '#fbbf24',
  },
  {
    icon: Award,
    title: 'CODE RED Triathlon 3.0',
    subtitle: 'Designathon Participant',
    description:
      'Designed user-centered interfaces in a competitive design sprint, focusing on UX clarity.',
    color: '#818cf8',
  },
  {
    icon: Lightbulb,
    title: 'Food Waste Reduction',
    subtitle: 'Impact-Driven Solution',
    description:
      'Built a technology-driven solution to address food waste — combining real-world impact with engineering.',
    color: '#34d399',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent-500" />
            <span className="section-label">Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Beyond the{' '}
            <span className="gradient-text">codebase</span>
          </h2>
          <p className="text-dark-400 max-w-xl mb-16">
            Hackathons, design sprints, and building solutions that matter.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.12} variant="scale">
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-8 h-full relative overflow-hidden group"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: item.color }}
                />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${item.color}15` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: item.color }}
                  >
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-dark-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
