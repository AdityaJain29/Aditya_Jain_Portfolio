import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: `🚧 ${feature} link not available!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start space-x-2 text-purple-300"
              >
                <MapPin className="w-4 h-4" />
                <span>Indore | Available for new opportunities</span>
              </motion.div>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  Aditya Jain
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Frontend & Python Developer
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                Specializing in building responsive user interfaces with React.js and developing automation tools with Python.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => window.location.href = 'mailto:adityajain290900@gmail.com'}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </div>

            <div className="flex space-x-6 justify-center lg:justify-start">
              <motion.a whileHover={{ scale: 1.1 }} href="#" onClick={(e) => { e.preventDefault(); handleFeatureClick('GitHub'); }} className="text-white/60 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="#" onClick={(e) => { e.preventDefault(); handleFeatureClick('LinkedIn'); }} className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="mailto:adityajain290900@gmail.com" className="text-white/60 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1 }} href="tel:8319051064" className="text-white/60 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-8 lg:mb-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img  alt="Professional headshot of Aditya Jain, frontend developer" className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white/20" src="https://images.unsplash.com/photo-1585734333426-b96221fbb2bb" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;