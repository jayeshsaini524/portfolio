import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const categories = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: '☕', color: '#f89820' },
      { name: 'C', icon: '⚙️', color: '#00599c' },
      { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: '🌐', color: '#e34f26' },
      { name: 'CSS', icon: '🎨', color: '#1572b6' },
      { name: 'React', icon: '⚛️', color: '#61dafb' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Spring Boot', icon: '🍃', color: '#6db33f' },
      { name: 'REST APIs', icon: '🔗', color: '#6366f1' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', icon: '🐬', color: '#4479a1' },
      { name: 'MongoDB', icon: '🍃', color: '#47a248' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: '📦', color: '#f05032' },
      { name: 'Maven', icon: '🏗️', color: '#c71a36' },
      { name: 'Lombok', icon: '🌶️', color: '#bc1126' },
      { name: 'Thymeleaf', icon: '🌿', color: '#005f0f' },
    ],
  },
  {
    title: 'Concepts',
    items: [
      { name: 'DSA', icon: '🧮', color: '#8b5cf6' },
      { name: 'OOP', icon: '🧱', color: '#ec4899' },
      { name: 'System Design', icon: '🏛️', color: '#06b6d4' },
    ],
  },
  {
    title: 'Security',
    items: [
      { name: 'JWT', icon: '🔐', color: '#d63aff' },
      { name: 'Spring Security', icon: '🛡️', color: '#6db33f' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent-500" />
            <span className="section-label tracking-widest text-[#a5b4fc]">Tech Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Tools I <span className="gradient-text">build with</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mb-24 text-lg sm:text-xl leading-relaxed">
            A curated set of technologies I use to architect, build, and ship backend systems and full-stack applications.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">
          {categories.map((cat, ci) => (
            <AnimatedSection key={cat.title} delay={ci * 0.08} variant="scale">
              <div className="glass-card rounded-3xl p-7 h-full relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-accent-500/5">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xs font-bold text-dark-400 uppercase tracking-widest mb-6 pb-4 border-b border-white/5">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {cat.items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="tech-badge cursor-default shadow-sm group/badge relative overflow-hidden"
                        style={{
                          borderColor: `${item.color}30`,
                          background: `${item.color}08`,
                        }}
                      >
                        <div 
                          className="absolute inset-0 opacity-0 group-hover/badge:opacity-20 transition-opacity duration-300"
                          style={{ background: item.color }}
                        />
                        <span className="relative z-10 text-lg leading-none">{item.icon}</span>
                        <span className="relative z-10 font-semibold" style={{ color: item.color }}>{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
