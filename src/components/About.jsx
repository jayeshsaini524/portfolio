import AnimatedSection from './AnimatedSection';
import { Code2, Server, Lightbulb, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'Designing RESTful APIs and microservice-ready architectures with Spring Boot.',
  },
  {
    icon: Code2,
    title: 'DSA & Problem Solving',
    desc: 'Strong foundation in data structures, algorithms, and competitive problem-solving.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Optimizing for speed, scalability, and sub-200ms response times at scale.',
  },
  {
    icon: Lightbulb,
    title: 'System Thinking',
    desc: 'Bridging clean architecture, OOP principles, and real-world engineering constraints.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent-500" />
            <span className="section-label tracking-widest text-[#a5b4fc]">About</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-10 tracking-tight">
            Engineering <span className="gradient-text">robust backends</span>
            <br className="hidden sm:block" />
            from the ground up.
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mt-16">
          {/* Left — Bio */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-8 text-dark-300 leading-relaxed text-lg sm:text-xl">
              <p>
                I'm a 2nd-year B.Tech Computer Science student at{' '}
                <span className="text-white font-medium">Vivekananda Global University</span>,
                deeply invested in backend development and systems engineering.
              </p>
              <p>
                My core stack revolves around{' '}
                <span className="text-accent-400 font-medium">Java</span>,{' '}
                <span className="text-accent-400 font-medium">Spring Boot</span>, and{' '}
                <span className="text-accent-400 font-medium">REST APIs</span> — building
                production-grade services that prioritize clean code, performance, and
                maintainability.
              </p>
              <p>
                Beyond coding, I actively explore system design patterns, database optimization,
                and authentication architectures. I believe great software comes from understanding
                the "why" behind every design decision.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { val: '6+', label: 'Projects Built' },
                { val: '4th', label: 'Semester' },
                { val: '∞', label: 'Curiosity' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center py-4 rounded-xl bg-dark-800/50 border border-dark-700/50"
                >
                  <div className="text-2xl font-bold gradient-text">{s.val}</div>
                  <div className="text-xs text-dark-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
            {highlights.map((item, i) => (
              <AnimatedSection key={i} delay={0.15 + i * 0.1}>
                <div className="glass-card rounded-2xl p-7 h-full relative overflow-hidden group transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-5 group-hover:bg-accent-500/20 transition-colors duration-300">
                    <item.icon size={24} className="text-accent-400" />
                  </div>
                  <h3 className="relative z-10 font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="relative z-10 text-sm text-dark-400 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
