import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  languages: ['Python', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React.js', 'OOPs'],
  libraries: ['NumPy', 'Matplotlib', 'Pandas'],
  tools: ['VS Code', 'Celonis', 'GitHub', 'Jupyter Notebook', 'MySQL Workbench', 'Google Colab'],
};

const SkillCategory = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
  >
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
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
              Technologies & Tools
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Languages & Frameworks" items={skills.languages} delay={0.1} />
          <SkillCategory title="Libraries" items={skills.libraries} delay={0.2} />
          <SkillCategory title="Tools" items={skills.tools} delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default Skills;