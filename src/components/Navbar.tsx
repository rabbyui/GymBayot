import { motion } from "motion/react";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1024px] mx-auto px-[60px] py-[40px]">
        <div className="flex items-center justify-between h-auto">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <span className="font-display text-[24px] font-[900] tracking-[-1px] uppercase">GymGymBayots</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-[32px]">
              {['Home', 'Classes', 'Pricing', 'Trainers', 'Contact'].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all text-[11px] uppercase tracking-[2px] ${
                    i === 0 
                    ? "opacity-100 border-b-2 border-accent pb-1" 
                    : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-accent text-black font-[700] uppercase text-[11px] px-[20px] py-[10px] rounded-[4px] decoration-none hover:opacity-90 transition-opacity">
              Join Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-accent focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Classes', 'Trainers', 'Pricing', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-accent block px-3 py-2 rounded-md text-base font-medium uppercase tracking-[2px]"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-accent text-black font-[700] uppercase text-[14px] px-[20px] py-[10px] rounded-[4px] hover:opacity-90 transition-opacity">
              Join Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
