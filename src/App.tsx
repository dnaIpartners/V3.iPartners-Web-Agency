import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Plus, Minus, Menu, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-[#f2f2f2]/80 backdrop-blur-md border-b border-black/10 text-black' : 'bg-transparent text-white'}`}>
      <div className="text-xl font-bold tracking-tighter">iPartners</div>
     
      <button className={`hover:text-[#F27D26] transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>
        <Menu size={24} />
      </button>
    </nav>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  return (
    <motion.section 
      ref={containerRef} 
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background Particles/Abstract Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          x: useTransform(springX, x => -x),
          y: useTransform(springY, y => -y),
        }}
      >
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ y: [15, -15, 15] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-[#F27D26]/10 rounded-full blur-[120px]"
        />
        {/* Starry background effect */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0'
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)', 
            backgroundSize: '90px 90px',
            backgroundPosition: '20px 20px'
          }}
        ></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="hidden lg:block absolute left-6 md:left-12 top-0 text-sm"
        >
          <div className="text-neutral-400">You innovate,</div>
          <div className="font-bold text-white">we automate.</div>
        </motion.div>

        {/* Center Content */}
        <div className="flex-1 max-w-4xl mx-auto text-center lg:text-left pt-12 lg:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[90px] font-medium tracking-tighter leading-[0.9] mb-16"
          >
            <span className="text-white">— </span>
            The smarter way<br />
            to <span className="text-[#F27D26]">build, run,</span> and<br />
            <span className="text-[#F27D26]">scale</span> your business.
          </motion.h1>
          
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-center lg:text-left"
            >
              <div className="text-2xl font-medium mb-2">See Platform in action</div>
              <div className="text-sm text-neutral-400 max-w-[220px]">Join our guided tour and explore all features live.</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex items-center"
            >
              <div className="hidden sm:block w-16 h-[1px] bg-white/20 mr-8"></div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F27D26] text-black px-6 py-3.5 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#e06b15] transition-colors shadow-lg shadow-[#F27D26]/20"
              >
                <Calendar size={18} /> Book a Demo
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-24"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl lg:text-5xl font-medium text-[#F27D26]">97.8<span className="text-2xl">%</span></div>
              <div className="text-left">
                <div className="text-base font-medium">Uptime</div>
                <div className="text-xs text-neutral-400">30-day monitoring</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl lg:text-5xl font-medium text-[#F27D26]">+31.2<span className="text-2xl">%</span></div>
              <div className="text-left">
                <div className="text-base font-medium">Performance</div>
                <div className="text-xs text-neutral-400">AI optimized bundle</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Card */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="hidden lg:block w-[340px] shrink-0"
        >
           <motion.div 
             whileHover={{ scale: 1.03 }}
             className="bg-[#111111] rounded-xl border border-white/10 overflow-hidden group cursor-pointer shadow-2xl"
           >
              <div className="h-[200px] relative overflow-hidden">
                <img src="https://picsum.photos/seed/neural2/600/400" alt="Neural Network" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
              </div>
              <div className="p-6 flex justify-between items-center bg-[#111111]">
                 <div>
                   <div className="text-sm font-medium text-white mb-1">Neural Network</div>
                   <div className="text-xs text-[#F27D26]">// Latest Release</div>
                 </div>
                 <ArrowRight size={20} className="text-[#F27D26] group-hover:translate-x-1 transition-transform" />
              </div>
           </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const Statement = () => (
  <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter leading-tight max-w-5xl mx-auto text-neutral-400"
    >
      We craft your <span className="text-black">digital experiences</span> so you can focus on building great <span className="text-[#F27D26]">products.</span>
    </motion.h2>
  </section>
);

const OurWork = () => (
  <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-black/10">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
      <div className="flex gap-4">
        <div className="text-xs uppercase tracking-widest text-neutral-500">001</div>
        <div className="text-xs uppercase tracking-widest text-neutral-500">Our Work</div>
      </div>
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight text-black">
        Designed with purpose, automated for speed and built to help you move faster, with less friction.
      </h2>
      <p className="text-sm text-neutral-600 max-w-xs">
        Every solution is designed to solve real problems, delivering practical value over mere aesthetics.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <motion.div 
        whileHover={{ y: -5 }}
        className="md:col-span-2 bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[400px] group relative overflow-hidden border border-black/5 shadow-sm"
      >
        <img src="https://picsum.photos/seed/work1/1200/800" alt="Work 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="relative z-10 flex justify-between items-start text-white">
          <div className="text-xs uppercase tracking-widest font-medium drop-shadow-md">Featured Project</div>
          <Menu size={16} className="drop-shadow-md" />
        </div>
        <div className="relative z-10 mt-auto text-white">
          <h3 className="text-3xl font-medium mb-4 drop-shadow-md">E-Commerce Platform Redesign</h3>
          <button className="w-10 h-10 rounded-full bg-[#F27D26] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md">
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-[#F27D26] rounded-2xl p-8 flex flex-col justify-between min-h-[400px] text-white shadow-sm"
      >
        <div className="flex justify-between items-start">
          <div className="text-xs uppercase tracking-widest font-semibold opacity-90">Case Study</div>
          <div className="text-xs font-bold">0.8</div>
        </div>
        <div>
          <h3 className="text-3xl font-medium mb-4 leading-tight">Digital Transformation Strategy</h3>
          <p className="text-sm opacity-90 mb-8">A complete system of smart products that transform how infrastructure thinks, learns, and evolves.</p>
          <div className="flex items-center gap-2 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            Data-driven insights
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[300px] group relative overflow-hidden border border-black/5 shadow-sm"
      >
        <img src="https://picsum.photos/seed/work2/600/600" alt="Work 2" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="relative z-10 text-xs uppercase tracking-widest font-medium text-white drop-shadow-md">Brand Identity</div>
        <div className="relative z-10 mt-auto">
          <button className="w-10 h-10 rounded-full bg-[#F27D26] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md">
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[300px] group relative overflow-hidden border border-black/5 shadow-sm"
      >
        <img src="https://picsum.photos/seed/work3/600/600" alt="Work 3" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="relative z-10 text-xs uppercase tracking-widest font-medium text-white drop-shadow-md">Web Application</div>
        <div className="relative z-10 mt-auto">
          <button className="w-10 h-10 rounded-full bg-[#F27D26] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md">
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[300px] group relative overflow-hidden border border-black/5 shadow-sm"
      >
        <img src="https://picsum.photos/seed/work4/600/600" alt="Work 4" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="relative z-10 text-xs uppercase tracking-widest font-medium text-white drop-shadow-md">Mobile App</div>
        <div className="relative z-10 mt-auto">
          <button className="w-10 h-10 rounded-full bg-[#F27D26] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md">
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
    <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-black/10">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div className="flex gap-4">
          <div className="text-xs uppercase tracking-widest text-neutral-500">002</div>
          <div className="text-xs uppercase tracking-widest text-neutral-500">Our Services</div>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight text-black">
          Flexible solutions for building modern digital infrastructure.
        </h2>
        <p className="text-sm text-neutral-600 max-w-xs">
          Future-proof systems that scale seamlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col border-t border-black/10">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`border-b border-black/10 py-6 cursor-pointer transition-colors ${activeService === idx ? 'text-[#F27D26]' : 'text-neutral-500 hover:text-black'}`}
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
                  className="mt-6 pl-12 text-sm text-neutral-600 max-w-md"
                >
                  {service.desc}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-black/5 flex flex-col justify-between min-h-[500px] shadow-sm">
           <div className="text-xs uppercase tracking-widest text-neutral-500 mb-8">Core Services</div>
           <h3 className="text-4xl font-medium mb-6 leading-tight text-black">Modular, flexible solutions for modern digital infrastructure</h3>
           <p className="text-neutral-600 text-sm mb-12 max-w-md">We create future-proof systems that scale seamlessly and adapt to your business needs. Platforms key capabilities include:</p>
           
           <div className="grid grid-cols-2 gap-4 mt-auto">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></div> Design
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></div> Optimize
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></div> Scale
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26]"></div> Secure
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => (
  <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-black/10">
    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
      <div className="flex gap-4">
        <div className="text-xs uppercase tracking-widest text-neutral-500">003</div>
        <div className="text-xs uppercase tracking-widest text-neutral-500">Our Process</div>
      </div>
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight text-black">
        Optimized processes through simplified workflows.
      </h2>
      <p className="text-sm text-neutral-600 max-w-xs">
        Seamless operations and processes from start to finish.
      </p>
    </div>

    <div className="bg-white rounded-2xl border border-black/5 p-8 md:p-16 flex flex-col md:flex-row gap-16 items-center shadow-sm">
      <div className="flex-1 w-full relative aspect-square max-w-md mx-auto">
         <div className="absolute inset-0 border border-black/10 rounded-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 border border-black/10 rounded-full flex items-center justify-center">
               <div className="w-1/2 h-1/2 bg-neutral-100 rounded-full flex items-center justify-center relative shadow-inner">
                  <div className="w-4 h-4 bg-[#F27D26] rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-[#F27D26] rounded-full relative z-10"></div>
               </div>
            </div>
         </div>
      </div>
      <div className="flex-1">
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Platform Process</div>
        <h3 className="text-3xl font-medium mb-6 text-black">Step 1 — Smart Discovery</h3>
        <p className="text-neutral-600 mb-8 max-w-md">
          We analyze your business goals, target audience, and current digital footprint. One connection is all it takes to set everything up following industry best practices.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-neutral-800 transition-colors border border-black/10">
          Book a Demo <ArrowRight size={16} />
        </button>
      </div>
    </div>
  </section>
);

const SmartAnalytics = () => (
  <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-black/10">
    <div className="mb-16">
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black">Smart Analytics</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-black/5 min-h-[300px] flex flex-col justify-between shadow-sm">
        <div className="text-xs uppercase tracking-widest text-neutral-500">AI Powered Analytics</div>
        <div className="mt-auto">
          <div className="text-6xl font-medium tracking-tighter mb-2 text-black">21.9<span className="text-2xl text-neutral-400">%</span></div>
          <div className="text-sm text-neutral-600">Increase in conversion rate</div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-8 border border-black/5 flex items-center justify-center min-h-[300px] shadow-sm">
         <div className="w-32 h-32 rounded-full border-[12px] border-neutral-100 border-t-[#F27D26] border-r-[#F27D26] transform rotate-45"></div>
      </div>
      
      <div className="bg-white rounded-2xl p-8 border border-black/5 flex flex-col justify-end min-h-[300px] shadow-sm">
         <div className="flex items-end gap-3 h-32 mb-6">
            <div className="w-1/4 bg-[#F27D26] h-[40%] rounded-t-sm"></div>
            <div className="w-1/4 bg-neutral-200 h-[70%] rounded-t-sm"></div>
            <div className="w-1/4 bg-neutral-200 h-[50%] rounded-t-sm"></div>
            <div className="w-1/4 bg-neutral-200 h-[90%] rounded-t-sm"></div>
         </div>
         <div className="text-xs uppercase tracking-widest text-neutral-500">Traffic Growth</div>
      </div>
    </div>
    
    <div className="flex flex-wrap gap-8 justify-between items-center mt-8 pt-8 border-t border-black/10 text-sm text-neutral-600">
      <div className="font-medium text-black">News & Achievements</div>
      <div>10M+ Active Users</div>
      <div>500K+ Deployments</div>
      <div>1B+ API Calls</div>
      <div>1.2B+ Daily Requests</div>
      <button className="flex items-center gap-2 text-black hover:text-[#F27D26] transition-colors font-medium">
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
    <div className="min-h-screen bg-[#f2f2f2] text-black font-sans selection:bg-[#F27D26] selection:text-white">
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
