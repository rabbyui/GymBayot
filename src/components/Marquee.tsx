import { motion } from "motion/react";

export function Marquee() {
  const words = [
    "Strength & Conditioning", "Nutrition Planning", "Yoga & Wellness", 
    "High Intensity Interval Training", "Bodybuilding Elite", 
    "Strength & Conditioning", "Nutrition Planning"
  ];
  
  return (
    <div className="bg-accent text-black p-[15px] overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap items-center"
        >
          {/* Triplicate the array to ensure smooth seamless scrolling */}
          {[...words, ...words, ...words].map((word, index) => (
            <div key={index} className="flex items-center">
              <span className="text-[12px] font-[800] uppercase mx-[15px]">{word}</span>
              {index !== words.length * 3 - 1 && <span className="text-[12px] font-[800]"> • </span>}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

