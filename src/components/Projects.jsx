import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Star, Zap, Shield, Clock, Database, Layers, Palette, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NoXcuse',
    subtitle: 'Fitness Social Platform',
    description:
      'Full-stack fitness accountability platform with secure authentication, peer matching, and a cron-driven daily accountability system.',
    tech: ['Spring Boot', 'React', 'MongoDB', 'JWT'],
    highlights: [
      { icon: Shield, text: 'Stateless JWT auth with Spring Security' },
      { icon: Database, text: 'MongoDB aggregation & indexing' },
      { icon: Clock, text: 'Sub-200ms peer matching' },
      { icon: Zap, text: 'Cron-based accountability engine' },
    ],
    gradient: 'from-accent-500/20 to-violet-500/20',
    accentColor: '#818cf8',
    featured: true,
  },
  {
    title: 'Premium PDF Editor',
    subtitle: 'AI-Powered Document Suite',
    description:
      'Real-time PDF editing with AI-powered OCR, drag-and-drop management, and serverless compression — fully client-side.',
    tech: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    link: 'https://pdf-editor-snowy.vercel.app/',
    highlights: [
      { icon: Zap, text: 'Real-time editing with pdfjs & Konva' },
      { icon: Star, text: 'AI + OCR via Tesseract.js & ONNX' },
      { icon: Layers, text: 'Serverless PDF.co compression' },
    ],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    accentColor: '#34d399',
    featured: true,
  },
  {
    title: 'Journal App',
    subtitle: 'Personal Journaling Platform',
    description:
      'Clean backend with full CRUD operations and layered service-repository architecture.',
    tech: ['Spring Boot', 'MongoDB'],
    gradient: 'from-amber-500/20 to-rose-500/20',
    accentColor: '#fbbf24',
  },
  {
    title: 'Weather App',
    subtitle: 'Real-time Weather Dashboard',
    description:
      'External API integration for real-time weather data with robust error handling.',
    tech: ['Spring Boot', 'REST APIs'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accentColor: '#22d3ee',
  },
  {
    title: 'To-Do App',
    subtitle: 'Task Management System',
    description:
      'Task management backend with MySQL and proper relational data modeling.',
    tech: ['Spring Boot', 'MySQL'],
    gradient: 'from-violet-500/20 to-pink-500/20',
    accentColor: '#a78bfa',
  },
  {
    title: 'Car Infotainment UI',
    subtitle: 'UX/UI Design Concept',
    description:
      'Figma-designed car infotainment interface focused on UX clarity and accessibility.',
    tech: ['Figma', 'UI/UX'],
    gradient: 'from-rose-500/20 to-orange-500/20',
    accentColor: '#fb7185',
  },
];

function FeaturedProjectCard({ project, index }) {
  return (
    <AnimatedSection delay={index * 0.15}>
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Visual Side */}
          <div
            className={`relative p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br ${project.gradient}`}
          >
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-dark-300 mb-6 relative z-20">
                <Star size={14} className="text-amber-400" />
                <span className="mt-0.5">Featured Project</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-accent-300 font-medium text-sm mb-4">{project.subtitle}</p>
              <p className="text-dark-300 leading-relaxed text-sm max-w-md">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge text-xs">
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <div className="mt-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-dark-950 font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Visit App
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Highlights Side */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <h4 className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-5">
              Engineering Highlights
            </h4>
            <div className="space-y-3.5">
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${project.accentColor}15` }}
                  >
                    <h.icon size={14} style={{ color: project.accentColor }} />
                  </div>
                  <p className="text-sm text-dark-300">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({ project, index }) {
  return (
    <AnimatedSection delay={index * 0.1} variant="scale">
      <div className="glass-card rounded-2xl p-7 h-full flex flex-col relative overflow-hidden group transition-all duration-500 hover:shadow-2xl" style={{ boxShadow: `0 0 0 0 ${project.accentColor}00` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.accentColor}, transparent 70%)` }}
        />
        
        <div className="relative z-10 flex flex-col h-full">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: `${project.accentColor}15` }}
          >
            <Layers size={20} style={{ color: project.accentColor }} />
          </div>

          <h3 className="text-xl font-bold text-white mb-1.5">{project.title}</h3>
          <p className="text-xs font-semibold tracking-wide uppercase mb-4" style={{ color: project.accentColor }}>
            {project.subtitle}
          </p>
          <p className="text-sm text-dark-400 leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-800/50 text-dark-300 border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent-500" />
            <span className="section-label tracking-widest text-[#a5b4fc]">Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Things I've <span className="gradient-text">engineered</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mb-24 text-lg sm:text-xl leading-relaxed">
            A selection of backend systems, full-stack applications, and design work.
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featured.map((p, i) => (
            <FeaturedProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Other Projects */}
        <AnimatedSection>
          <h3 className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-8">
            Other Notable Projects
          </h3>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">
          {others.map((p, i) => (
            <div key={p.title}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
