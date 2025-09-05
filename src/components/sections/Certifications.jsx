import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'HTML, CSS, and JavaScript for Web Developers',
    issuer: 'Johns Hopkins University',
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 flex items-start space-x-6"
            >
              <Award className="w-10 h-10 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-white/70">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;