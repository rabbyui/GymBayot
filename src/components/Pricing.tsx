import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      features: ["Access to gym equipment", "Locker room access", "1 pt session", "App access"],
      highlight: false
    },
    {
      name: "Pro",
      price: "$89",
      period: "/month",
      features: ["Basic features", "Unlimited class access", "Monthly body scan", "2 Guest passes/mo"],
      highlight: true
    },
    {
      name: "Elite",
      price: "$149",
      period: "/month",
      features: ["Pro features", "Unlimited guest passes", "Weekly 1-on-1 coaching", "Free recovery drinks"],
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-surface" id="pricing">
      <div className="max-w-[1024px] mx-auto px-[60px]">
        <div className="mb-16 text-center">
          <h2 className="text-[60px] md:text-[80px] leading-[0.85] font-[800] uppercase tracking-[-2px] mb-[20px]">
            Ready to <span className="text-accent">Commit?</span>
          </h2>
          <p className="text-[16px] text-muted mt-4 max-w-[400px] mx-auto">No hidden fees. No long-term contracts. Just raw results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`border p-[30px] rounded-[4px] flex flex-col ${
                plan.highlight 
                  ? 'border-accent bg-bg relative transform md:-translate-y-4 shadow-2xl shadow-accent/5' 
                  : 'bg-surface-hover border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-[12px] left-1/2 transform -translate-x-1/2 bg-accent text-black font-[800] uppercase tracking-[1px] text-[10px] px-[15px] py-[5px] rounded-[4px]">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-[24px] font-[800] uppercase tracking-[-1px] mb-[12px]">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-[20px]">
                <span className="text-[48px] font-[800] leading-none tracking-[-2px]">{plan.price}</span>
                <span className="text-muted text-[12px] mb-2 uppercase tracking-[1px]">{plan.period}</span>
              </div>
              
              <ul className="space-y-[15px] mb-[30px] flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-[10px]">
                    <Check className={`w-4 h-4 shrink-0 mt-[2px] ${plan.highlight ? 'text-accent' : 'text-muted'}`} />
                    <span className="text-[14px] text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-[15px] font-[700] uppercase text-[12px] tracking-[1px] rounded-[4px] transition-colors ${
                  plan.highlight 
                    ? 'bg-accent text-black hover:opacity-90' 
                    : 'bg-transparent border border-muted text-ink hover:border-accent hover:text-accent'
                }`}
              >
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
