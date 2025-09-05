import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet!",
      description: "Don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            I'm actively looking for new opportunities. Let's discuss how I can contribute to your team!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={() => window.location.href = 'mailto:adityajain290900@gmail.com'}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              onClick={handleFeatureClick}
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;