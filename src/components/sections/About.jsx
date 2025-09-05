import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-black/20">
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
              Personal Profile
            </span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            I am Aditya Jain, a Front-end and Python Developer with hands-on experience at Intefai IT Solutions and real-world projects. I specialize in building responsive user interfaces using React.js and developing automation tools with Python. With strong problem-solving skills and a collaborative mindset, I aim to create clean, efficient, and impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <Code className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Clean Code</h3>
            <p className="text-white/70">
              Writing maintainable, scalable code following industry best practices and modern development standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <Palette className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">UI/UX Focus</h3>
            <p className="text-white/70">
              Creating beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <Smartphone className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-white">Responsive Design</h3>
            <p className="text-white/70">
              Building mobile-first, responsive applications that work seamlessly on all screen sizes and devices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;