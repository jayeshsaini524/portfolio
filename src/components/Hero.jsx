import { motion } from 'framer-motion';
import { ArrowDown, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const codeLines = [
  { text: 'class', highlight: 'Developer', suffix: ' {' },
  { indent: 1, text: 'name:', value: '"Jayesh Saini"' },
  { indent: 1, text: 'role:', value: '"Backend Developer"' },
  { indent: 1, text: 'passion:', value: '"Clean Architecture"' },
  { text: '}' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
           animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
           className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px]"
           style={{ willChange: "transform" }}
        >
          <div className="w-full h-full rounded-full bg-accent-500/[0.08] blur-[150px] transform-gpu" />
        </motion.div>
        
        <motion.div
           animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
           className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px]"
           style={{ willChange: "transform" }}
        >
          <div className="w-full h-full rounded-full bg-violet-500/[0.08] blur-[120px] transform-gpu" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — Text */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="glow-dot" />
            <span className="section-label">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Jayesh Saini</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-dark-300 max-w-lg leading-relaxed"
          >
            Building scalable backend systems and solving complex problems with{' '}
            <span className="text-accent-400 font-medium">clean architecture</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mt-2"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-accent-600 to-violet-600 rounded-xl hover:shadow-xl hover:shadow-accent-500/20 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-dark-300 border border-dark-600 rounded-xl hover:border-accent-500/50 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 mt-4"
          >
            <a
              href="https://github.com/jayeshsaini524"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-accent-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jayeshsaini-743554282"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-dark-400 hover:text-accent-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:jayeshsaini524@gmail.com"
              className="p-2 text-dark-400 hover:text-accent-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <div className="h-4 w-px bg-dark-600 mx-1" />
            <span className="text-xs text-dark-500 font-mono">B.Tech CSE • 3rd Year</span>
          </motion.div>
        </div>

        {/* Right — Code Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="relative rounded-2xl overflow-hidden glass shadow-2xl shadow-accent-500/10 border border-white/5 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
            <div className="relative z-10">
              {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
              <div className="flex items-center gap-1.5 ml-3 text-dark-500 text-xs font-mono">
                <Terminal size={12} />
                developer.config
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex"
                  style={{ paddingLeft: (line.indent || 0) * 24 }}
                >
                  <span className="text-dark-500 w-6 text-right mr-4 select-none">
                    {i + 1}
                  </span>
                  {line.highlight ? (
                    <>
                      <span className="text-violet-400">{line.text} </span>
                      <span className="text-emerald-400">{line.highlight}</span>
                      <span className="text-dark-400">{line.suffix}</span>
                    </>
                  ) : line.value ? (
                    <>
                      <span className="text-accent-300">{line.text}</span>
                      <span className="text-dark-400"> </span>
                      <span className="text-amber-400">{line.value}</span>
                    </>
                  ) : (
                    <span className="text-dark-400">{line.text}</span>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center mt-2"
              >
                <span className="text-dark-500 w-6 text-right mr-4 select-none">
                  {codeLines.length + 1}
                </span>
                <span className="w-2 h-5 bg-accent-400 animate-pulse-glow" />
              </motion.div>
            </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-dark-500 font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-dark-600 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-accent-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
