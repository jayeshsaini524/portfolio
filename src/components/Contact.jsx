import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, Send, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jayeshsaini524@gmail.com',
    href: 'mailto:jayeshsaini524@gmail.com',
    color: '#818cf8',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8306173641',
    href: 'tel:+918306173641',
    color: '#34d399',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'jayeshsaini524',
    href: 'https://github.com/jayeshsaini524',
    color: '#e2e8f0',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Jayesh Saini',
    href: 'https://linkedin.com/in/jayeshsaini-743554282',
    color: '#60a5fa',
  },
];

export default function Contact() {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (value, idx) => {
    navigator.clipboard.writeText(value);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left — CTA */}
          <div>
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-accent-500" />
                <span className="section-label">Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Let's build{' '}
                <span className="gradient-text">something great</span>
              </h2>
              <p className="text-dark-300 leading-relaxed mb-10 max-w-md">
                I'm always open to discussing backend engineering, collaborative projects,
                or internship opportunities. Reach out — I'd love to connect.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <a
                href="mailto:jayeshsaini524@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-500 to-violet-500 rounded-2xl hover:shadow-xl hover:shadow-accent-500/25 transition-all duration-300 hover:-translate-y-1 group"
              >
                <Send size={20} />
                Send me an email
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </AnimatedSection>
          </div>

          {/* Right — Contact Cards */}
          <div className="space-y-4">
            {contactLinks.map((link, i) => {
              const IconComponent = link.icon;
              return (
                <AnimatedSection key={i} delay={0.1 + i * 0.08} variant="slideLeft">
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 6 }}
                    className="glass-card rounded-xl p-5 flex items-center gap-4 group cursor-pointer block"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${link.color}12` }}
                    >
                      <IconComponent size={20} style={{ color: link.color }} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-xs text-dark-500 font-mono uppercase tracking-wider">
                        {link.label}
                      </p>
                      <p className="text-white font-medium truncate">{link.value}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCopy(link.value, i);
                      }}
                      className="p-2 text-dark-500 hover:text-white transition-colors shrink-0"
                      aria-label={`Copy ${link.label}`}
                    >
                      {copiedIdx === i ? (
                        <Check size={16} className="text-emerald-400" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                    <ArrowUpRight
                      size={16}
                      className="text-dark-500 group-hover:text-accent-400 transition-colors shrink-0"
                    />
                  </motion.a>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
