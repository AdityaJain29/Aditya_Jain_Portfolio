import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Medi-Caps University',
    period: 'Sept 2020 – June 2024',
    score: 'GPA: 8.85/10.0',
  },
  {
    degree: '12th MPBSE',
    institution: 'Sunrise Higher Secondary School',
    period: '2019 – 2020',
    score: 'Percentage: 82.80%',
  },
  {
    degree: '10th CBSE',
    institution: 'St. Mary’s Co-Ed School',
    period: '2017 – 2018',
    score: 'Percentage: 83.80%',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
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
              Education
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-white/10 hidden md:block"></div>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="md:flex items-center w-full mb-8"
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:flex-row-reverse'}`}>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 inline-block">
                  <p className="text-white/60 text-sm mb-1">{edu.period}</p>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-purple-300">{edu.institution}</p>
                  <p className="text-white/80 font-medium mt-2">{edu.score}</p>
                </div>
              </div>
              <div className="hidden md:flex w-10 h-10 bg-purple-500 rounded-full items-center justify-center flex-shrink-0 absolute left-1/2 -translate-x-1/2">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;