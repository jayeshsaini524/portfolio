import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-white/5 overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none flex justify-center">
        <h2 className="text-[15vw] font-black leading-none tracking-tighter text-white whitespace-nowrap">
          JAYESH SAINI
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-20">
        <div className="flex flex-col items-center justify-center gap-10">
          
          <div className="text-center">
            <div className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-violet-500 items-center justify-center text-white font-bold text-lg shadow-xl shadow-accent-500/20 mb-6">
              JS
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to build something great?</h3>
            <p className="text-dark-400 max-w-md mx-auto">
              Let's connect and craft seamless backend architectures for your next big idea.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jayeshsaini524"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-dark-300 hover:text-white hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/jayeshsaini-743554282"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-dark-300 hover:text-white hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:jayeshsaini524@gmail.com"
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-dark-300 hover:text-white hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-8" />

          <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-dark-500 font-mono gap-4">
            <p className="flex items-center gap-1.5">
              Built with <Heart size={12} className="text-rose-400 animate-pulse" /> using React
            </p>
            <p>
              © {currentYear} Jayesh Saini. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
