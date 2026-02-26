import React, { useState, useEffect } from 'react';
import { ArrowRight, Plus, Minus, Menu } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="text-xl font-bold tracking-tighter text-white">iPartners</div>
      <div className="hidden md:block text-xs uppercase tracking-widest text-neutral-400">
        You innovate, we automate.
      </div>
      <button className="text-white hover:text-[#F27D26] transition-colors">
        <Menu size={24} />
      </button>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-40 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12">
    <div className="flex-1">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tighter leading-[0.85] mb-12"
      >
        <span className="block text-neutral-500">— The smarter way</span>
        <span className="block">to <span className="text-[#F27D26]">build, design,</span></span>
        <span className="block">and <span className="text-[#F27D26]">scale</span> your</span>
        <span className="block">digital presence.</span>
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-t border-white/10 pt-8"
      >
        <div>
          <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">See iPartners in action</div>
          <div className="text-sm text-neutral-400 max-w-xs">Join leading brands that use our expertise to build digital experiences fast.</div>
        </div>
        <button className="bg-[#F27D26] text-black px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#e06b15] transition-colors">
          Book a Demo <ArrowRight size={16} />
        </button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex gap-12 mt-16"
      >
        <div>
          <div className="text-3xl font-medium text-[#F27D26]">97.8<span className="text-lg">%</span></div>
          <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Client Retention</div>
        </div>
        <div>
          <div className="text-3xl font-medium text-[#F27D26]">+312<span className="text-lg">%</span></div>
          <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Growth Rate</div>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex-1 relative hidden lg:block"
    >
       <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl border border-white/10 overflow-hidden group">
          <img src="https://picsum.photos/seed/tech1/800/1000?blur=2" alt="Hero" className="w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
             <div>
               <div className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Latest Release</div>
               <div className="text-lg font-medium">Digital Experience Platform</div>
             </div>
             <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
               <ArrowRight size={16} />
             </button>
          </div>
       </div>
    </motion.div>
  </section>
);

const Statement = () => (
  <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-tight max-w-5xl mx-auto text-neutral-500"
    >
      We craft your <span className="text-white">digital experiences</span> so you can focus on building great <span className="text-[#F27D26]">products.</span>
    </motion.h2>
  </section>
);

const OurWork = () => (
  <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-white/10">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
      <div className="flex gap-4">
        <div className="text-xs uppercase tracking-widest text-neutral-500">001</div>
        <div className="text-xs uppercase tracking-widest text-neutral-500">Our Work</div>
      </div>
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight">
        Designed with purpose, automated for speed and built to help you move faster, with less friction.
      </h2>
      <p className="text-sm text-neutral-400 max-w-xs">
        Every solution is designed to solve real problems, delivering practical value over mere aesthetics.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <motion.div 
        whileHover={{ y: -5 }}
        className="md:col-span-2 bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between min-h-[400px] group relative overflow-hidden border border-white/5"
      >
        <img src="https://picsum.photos/seed/work1/1200/800" alt="Work 1" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity" referrerPolicy="no-referrer" />
        <div className="relative z-10 flex justify-between items-start">
          <div className="text-xs uppercase tracking-widest text-neutral-400">Featured Project</div>
          <Menu size={16} className="text-neutral-500" />
        </div>
        <div className="relative z-10 mt-auto">
          <h3 className="text-3xl font-medium mb-4">E-Commerce Platform Redesign</h3>
          <button className="w-10 h-10 rounded-full bg-[#F27D26] text-black flex items-center justify-center hover:scale-105 transition-transform">
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-[#F27D26] rounded-2xl p-8 flex flex-col justify-between min-h-[400px] text-black"
      >
        <div className="flex justify-between items-start">
          <div className="text-xs uppercase tracking-widest font-semibold opacity-80">Case Study</div>
          <div className="text-xs font-bold">0.8</div>
        </div>
        <div>
          <h3 className="text-3xl font-medium mb-4 leading-tight">Digital Transformation Strategy</h3>
          <p className="text-sm opacity-80 mb-8">A complete system of smart products that transform how infrastructure thinks, learns, and evolves.</p>
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            Data-driven insights
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between min-h-[300px] group relative overflow-hidden border border-white/5"
      >
        <img src="https://picsum.photos/seed/work2/600/600" alt="Work 2" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity" referrerPolicy="no-referrer" />
        <div className="relative z-10 text-xs uppercase tracking-widest text-neutral-400">Brand Identity</div>
        <div className="relative z-10 mt-auto">
          <button className="w-10 h-10 rounded-full bg-[#F27D26] text-black flex items-center justify-center hover:scale-105 transition-transform">
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between min-h-[300px] group relative overflow-hidden border border-white/5"
      >
        <img src="https://picsum.photos/seed/work3/600/600" alt="Work 3" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity" referrerPolicy="no-referrer" />
        <div className="relative z-10 text-xs uppercase tracking-widest text-neutral-400">Web Application</div>
        <div className="relative z-10 mt-auto">
          <button className="w-10 h-10 rounded-full bg-[#F27D26] text-black flex items-center justify-center hover:scale-105 transition-transform">
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between min-h-[300px] group relative overflow-hidden border border-white/5"
      >
        <img src="https://picsum.photos/seed/work4/600/600" alt="Work 4" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity" referrerPolicy="no-referrer" />
        <div className="relative z-10 text-xs uppercase tracking-widest text-neutral-400">Mobile App</div>
        <div className="relative z-10 mt-auto">
          <button className="w-10 h-10 rounded-full bg-[#F27D26] text-black flex items-center justify-center hover:scale-105 transition-transform">
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const OurServices = () => {
  const [activeService, setActiveService] = useState(0);
  const services = [
    { title: "Strategy", desc: "A self-learning intelligence core that observes, learns, and makes smart decisions in milliseconds to optimize your operations." },
    { title: "UI/UX Design", desc: "Crafting intuitive and engaging user experiences that drive conversion and brand loyalty." },
    { title: "Development", desc: "Building robust, scalable, and secure web and mobile applications using modern technologies." },
    { title: "Marketing", desc: "Data-driven digital marketing strategies to accelerate your growth and reach your target audience." }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div className="flex gap-4">
          <div className="text-xs uppercase tracking-widest text-neutral-500">002</div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">Our Services</div>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight">
          Flexible solutions for building modern digital infrastructure.
        </h2>
        <p className="text-sm text-neutral-400 max-w-xs">
          Future-proof systems that scale seamlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col border-t border-white/10">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`border-b border-white/10 py-6 cursor-pointer transition-colors ${activeService === idx ? 'text-[#F27D26]' : 'text-neutral-400 hover:text-white'}`}
              onClick={() => setActiveService(idx)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <span className="text-xs uppercase tracking-widest opacity-50">0{idx + 1}</span>
                  <h3 className="text-2xl font-medium">{service.title}</h3>
                </div>
                {activeService === idx ? <Minus size={20} /> : <Plus size={20} />}
              </div>
              {activeService === idx && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 pl-12 text-sm text-neutral-300 max-w-md"
                >
                  {service.desc}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5 flex flex-col justify-between min-h-[500px]">
           <div className="text-xs uppercase tracking-widest text-neutral-500 mb-8">Core Services</div>
           <h3 className="text-4xl font-medium mb-6 leading-tight">Modular, flexible solutions for modern digital infrastructure</h3>
           <p className="text-neutral-400 text-sm mb-12 max-w-md">We create future-proof systems that scale seamlessly and adapt to your business needs. Platforms key capabilities include:</p>
           
           <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></div> Design
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></div> Optimize
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></div> Scale
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></div> Secure
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-white/10">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
      <div className="flex gap-4">
        <div className="text-xs uppercase tracking-widest text-neutral-500">003</div>
        <div className="text-xs uppercase tracking-widest text-neutral-500">Our Process</div>
      </div>
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight">
        Optimized processes through simplified workflows.
      </h2>
      <p className="text-sm text-neutral-400 max-w-xs">
        Seamless operations and processes from start to finish.
      </p>
    </div>

    <div className="bg-neutral-900 rounded-2xl border border-white/5 p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1 w-full relative aspect-square max-w-md mx-auto">
         <div className="absolute inset-0 border border-white/10 rounded-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 border border-white/10 rounded-full flex items-center justify-center">
               <div className="w-1/2 h-1/2 bg-neutral-800 rounded-full flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-[#F27D26] rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-[#F27D26] rounded-full relative z-10"></div>
               </div>
            </div>
         </div>
      </div>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Platform Process</div>
        <h3 className="text-3xl font-medium mb-6">Step 1 — Smart Discovery</h3>
        <p className="text-neutral-400 mb-8 max-w-md">
          We analyze your business goals, target audience, and current digital footprint. One connection is all it takes to set everything up following industry best practices.
        </p>
        <button className="bg-neutral-800 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-neutral-700 transition-colors border border-white/10">
          Book a Demo <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </section>
);

const SmartAnalytics = () => (
  <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-white/10">
    <div className="mb-16">
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Smart Analytics</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-2 bg-neutral-900 rounded-2xl p-8 border border-white/5 min-h-[300px] flex flex-col justify-between">
        <div className="text-xs uppercase tracking-widest text-neutral-500">AI Powered Analytics</div>
        <div className="mt-auto">
          <div className="text-6xl font-medium tracking-tighter mb-2">21.9<span className="text-2xl text-neutral-500">%</span></div>
          <div className="text-sm text-neutral-400">Increase in conversion rate</div>
        </div>
      </div>
      
      <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5 flex items-center justify-center min-h-[300px]">
         <div className="w-32 h-32 rounded-full border-[12px] border-neutral-800 border-t-[#F27D26] border-r-[#F27D26] transform rotate-45"></div>
      </div>
      
      <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5 flex flex-col justify-end min-h-[300px]">
         <div className="flex items-end gap-3 h-32 mb-6">
            <div className="w-1/4 bg-[#F27D26] h-[40%] rounded-t-sm"></div>
            <div className="w-1/4 bg-neutral-700 h-[70%] rounded-t-sm"></div>
            <div className="w-1/4 bg-neutral-700 h-[50%] rounded-t-sm"></div>
            <div className="w-1/4 bg-neutral-700 h-[90%] rounded-t-sm"></div>
         </div>
         <div className="text-xs uppercase tracking-widest text-neutral-500">Traffic Growth</div>
      </div>
    </div>
    
    <div className="flex flex-wrap gap-8 justify-between items-center mt-8 pt-8 border-t border-white/10 text-sm text-neutral-400">
      <div>News & Achievements</div>
      <div>10M+ Active Users</div>
      <div>500K+ Deployments</div>
      <div>1B+ API Calls</div>
      <div>1.2B+ Daily Requests</div>
      <button className="flex items-center gap-2 text-white hover:text-[#F27D26] transition-colors">
        Explore full statistics <ArrowRight size={16} />
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#F27D26] text-black pt-24 pb-12 mt-24">
    <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="overflow-hidden whitespace-nowrap mb-24 border-b border-black/10 pb-12">
        <motion.h2 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="text-[15vw] font-medium tracking-tighter leading-none inline-block"
        >
          iPartners™ iPartners™ iPartners™ iPartners™ iPartners™
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h3 className="text-5xl md:text-7xl font-medium tracking-tighter mb-12">Let's Talk.</h3>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-70">Follow us</div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-[#F27D26] transition-colors cursor-pointer text-xs font-bold">In</div>
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-[#F27D26] transition-colors cursor-pointer text-xs font-bold">Tw</div>
                <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-[#F27D26] transition-colors cursor-pointer text-xs font-bold">Ig</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-70">Digital</div>
              <a href="mailto:hello@ipartners.kr" className="text-lg hover:underline font-medium">hello@ipartners.kr</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold mb-4 opacity-70">Office</div>
              <address className="not-italic text-sm opacity-80">
                Seoul, South Korea<br/>
                Gangnam-gu, Teheran-ro
              </address>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest font-semibold mb-8 opacity-70">Got a question, challenge, or idea?</div>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="bg-transparent border-b border-black/20 pb-4 outline-none focus:border-black transition-colors placeholder:text-black/50" />
            <input type="email" placeholder="Your Email" className="bg-transparent border-b border-black/20 pb-4 outline-none focus:border-black transition-colors placeholder:text-black/50" />
            <input type="text" placeholder="Your Company" className="bg-transparent border-b border-black/20 pb-4 outline-none focus:border-black transition-colors placeholder:text-black/50" />
            <textarea placeholder="Your message" rows={4} className="bg-transparent border-b border-black/20 pb-4 outline-none focus:border-black transition-colors placeholder:text-black/50 resize-none"></textarea>
            
            <div className="flex justify-between items-center mt-4">
              <div className="text-xs opacity-70">By submitting, you agree to our Privacy Policy.</div>
              <button type="submit" className="w-12 h-12 rounded-full bg-black text-[#F27D26] flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10 text-xs font-medium opacity-70">
        <div>© 2026 iPartners. All rights reserved.</div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#F27D26] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <OurWork />
        <OurServices />
        <Process />
        <SmartAnalytics />
      </main>
      <Footer />
    </div>
  );
}
