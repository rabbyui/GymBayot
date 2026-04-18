import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-[120px] pb-[60px] flex items-center justify-center">
      <div className="max-w-[1024px] mx-auto px-[60px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[40px]">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-[60px] lg:text-[110px] leading-[0.85] font-[800] uppercase tracking-[-4px] mb-[30px]">
              Unleash<br />
              Your <span className="text-accent">Power</span>
            </h1>
            
            <p className="text-[16px] leading-[1.5] max-w-[400px] text-muted mb-[40px]">
              Elite training facilities and world-class coaching designed to push your physical limits. Transform your lifestyle at GymGymBayots.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[20px]">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-black font-[700] uppercase text-[14px] px-[40px] py-[20px] rounded-[4px] decoration-none whitespace-nowrap"
              >
                Start Trial
              </motion.a>
              <motion.a 
                href="#classes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-muted text-ink font-[700] uppercase text-[14px] px-[40px] py-[20px] rounded-[4px] decoration-none hover:border-accent hover:text-accent transition-colors whitespace-nowrap"
              >
                View Classes
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative bg-[#111] rounded-[8px] flex items-end p-[30px] overflow-hidden min-h-[400px] lg:min-h-full mt-[40px] lg:mt-0"
          >
            {/* Background image effect */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" 
                alt="Gym background" 
                className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* The decorative circle */}
            <div className="absolute -top-[50px] -right-[50px] w-[300px] h-[300px] border-[40px] border-accent rounded-full opacity-10 pointer-events-none" />

            {/* Status Card overlaying the image */}
            <div className="bg-surface backdrop-blur-[10px] w-full border border-white/10 p-[30px] rounded-[4px] relative z-10">
              <div className="grid grid-cols-2 gap-[20px]">
                {[
                  { label: "Active Members", value: "15k+" },
                  { label: "Elite Trainers", value: "120+" },
                  { label: "Program Types", value: "50+" },
                  { label: "Gym Access", value: "24/7" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <h3 className="text-[32px] text-accent mb-[4px] font-[800] leading-none">{stat.value}</h3>
                    <p className="text-[10px] uppercase tracking-[1px] text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
