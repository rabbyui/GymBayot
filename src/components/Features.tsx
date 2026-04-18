import { motion } from "motion/react";
import { Timer, CheckCircle, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Timer className="w-8 h-8" />,
    title: "24/7 Access",
    description: "Your schedule, your rules. Train whenever motivation strikes, day or night."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Premium Equipment",
    description: "Top-tier machinery and free weights designed for serious athletes."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Performance Tracking",
    description: "Advanced metrics and body composition analysis to track your gains."
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Expert Guidance",
    description: "Certified trainers ready to push you past your perceived limitations."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-bg" id="features">
      <div className="max-w-[1024px] mx-auto px-[60px]">
        <div className="mb-16">
          <h2 className="text-[60px] md:text-[80px] leading-[0.85] font-[800] uppercase tracking-[-2px] mb-[20px]">
            Why Choose <br /><span className="text-accent">GymBayots</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-surface backdrop-blur-[10px] border border-white/10 p-[30px] rounded-[4px] flex flex-col items-start group hover:border-accent transition-colors duration-300"
            >
              <div className="p-4 bg-surface-hover text-accent rounded-[4px] mb-6 group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-[24px] font-[800] uppercase tracking-[-1px] mb-[12px]">{feature.title}</h3>
              <p className="text-[14px] text-muted leading-[1.5]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
