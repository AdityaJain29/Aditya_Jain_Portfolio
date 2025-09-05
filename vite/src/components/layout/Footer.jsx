import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10 bg-black/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white/60">
          © {new Date().getFullYear()} Aditya Jain. Built with React & Tailwind CSS. Ready to create amazing web experiences!
        </p>
      </div>
    </footer>
  );
};

export default Footer;