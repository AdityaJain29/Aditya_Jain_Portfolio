import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const projects = [
  {
    title: 'Sure Growth Solution',
    description: 'Built responsive frontend & admin-configurable content panels. Integrated APIs for real-time updates.',
    tech: ['React.js', 'Vite', 'REST APIs'],
    image: 'Modern business consulting website homepage',
    live: 'http://suregrowthsolution.com',
  },
  {
    title: 'Finanta Freedom',
    description: 'Started with vanilla stack and successfully migrated to React + Vite for enhanced scalability and performance.',
    tech: ['React.js', 'Vite', 'JavaScript'],
    image: 'Financial freedom and investment platform dashboard',
    live: 'http://finantafreedom.com',
  },
  {
    title: 'Shiksharthi',
    description: 'Built the frontend for user registration, login, and test-taking functionalities. Collaborated with the backend team for API integration.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    image: 'Online learning platform with course listings',
    live: '#',
  },
  {
    title: 'Multiple Disease Prediction System',
    description: 'An ML system predicting diabetes, Parkinson’s, heart disease, and Covid-19 using Python and various ML models.',
    tech: ['Python', 'Machine Learning', 'MySQL'],
    image: 'Medical dashboard showing disease prediction results',
    live: '#',
  },
];

const Projects = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: `🚧 ${feature} link not available!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="projects" className="py-20 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 group hover:border-purple-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-56">
                <img  alt={`Screenshot of ${project.title} project`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button
                    onClick={() => project.live === '#' ? handleFeatureClick('Live Demo') : window.open(project.live, '_blank')}
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;