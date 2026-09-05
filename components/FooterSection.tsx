import React from 'react';

export default function FooterSection() {
  return (
    <footer id="contact" className="w-full max-w-[1240px] mx-auto px-6 py-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
      <div>
        © {new Date().getFullYear()} <span className="font-semibold text-neutral-800">Josh & Co.</span> · Oni Joshua Adeola
      </div>
      <div className="flex items-center gap-6">
        <a href="https://github.com/cyberhoruspunk" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
          GitHub
        </a>
        <a href="mailto:contact@joshandco.cc" className="hover:text-neutral-900 transition-colors">
          contact@joshandco.cc
        </a>
      </div>
    </footer>
  );
}
