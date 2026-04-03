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

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

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

        {/* GitHub Redirect */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-dark-900 border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 relative z-10">
              Want to see more of my work?
            </h3>
            <p className="text-dark-400 mb-6 max-w-md relative z-10">
              Explore my GitHub for a deeper dive into my backend architectures, frontend experiments, and open-source contributions.
            </p>
            <a
              href="https://github.com/jayeshsaini524?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white font-semibold border border-white/10 shadow-sm hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 relative z-10 group/btn"
            >
              View GitHub Profile
              <ExternalLink size={16} className="text-accent-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
