import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: 'Front-end and Python Developer Intern',
    company: 'Intefai IT Solutions, Indore',
    period: 'Apr 2025 – Present',
    description: [
      'Developed and maintained dynamic React + Vite frontends across insurance, real estate, finance, and salon domains.',
      'Designed responsive UIs and admin panels with real-time customization.',
      'Integrated third-party APIs for modular, scalable functionality.',
    ],
  },
  {
    role: 'Data Science Trainee',
    company: 'Grow Tech, Indore',
    period: 'Dec 2024 – Mar 2025',
    description: [
      'Learned AI & ML concepts using Python.',
      'Implemented ML models: Regression, Decision Trees, SVM, Neural Networks.',
      'Projects: Cat vs Dog recognition, Car price prediction, Hypothyroid prediction.',
    ],
  },
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Slash Mark, Delhi',
    period: 'Jul 2024 – Oct 2024',
    description: [
      'Worked on live web projects with HTML, CSS, JavaScript, React.js.',
      'Projects included: Product Landing Page, Portfolio Website, Weather Forecast App, Link Shortener, Online Code Editor, and a Food Delivery Web App.',
    ],
  },
  {
    role: 'Process Mining Intern',
    company: 'Celonis (College Inhouse)',
    period: 'Jun 2023 – Jul 2023',
    description: [
      'Skills: Data Analysis, Process Mining, Conformance Checking.',
      'Built end-to-end analyses to identify bottlenecks, deviations, and performance gaps.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
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
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-white/10"></div>
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-12 md:pl-0 md:flex items-start w-full mb-12"
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-2'}`}>
                <p className="text-white/60 text-sm mb-1">{job.period}</p>
                <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                <p className="text-purple-300 text-lg mb-4">{job.company}</p>
                <ul className="list-disc list-inside text-white/70 space-y-2 text-left md:text-inherit">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="absolute md:relative left-0 md:left-auto top-1 md:order-1 md:w-auto flex-shrink-0">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center absolute left-0 -translate-x-1/2 md:static md:translate-x-0 md:mx-auto">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="md:w-1/2 md:order-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;