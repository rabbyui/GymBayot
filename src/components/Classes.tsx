import { motion } from "motion/react";

const classes = [
  {
    title: "CrossFit",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    time: "Mon / Wed / Fri - 6:00 AM",
    level: "All Levels"
  },
  {
    title: "Powerlifting",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    time: "Tue / Thu - 5:30 PM",
    level: "Intermediate"
  },
  {
    title: "HIIT Inferno",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    time: "Daily - 12:00 PM",
    level: "Advanced"
  },
  {
    title: "Recovery Yoga",
    image: "https://images.unsplash.com/photo-1599901860904-17e08c3d0cb4?auto=format&fit=crop&q=80&w=800",
    time: "Sun - 9:00 AM",
    level: "Beginner"
  }
];

export function Classes() {
  return (
    <section className="py-24 bg-bg border-t border-white/5" id="classes">
      <div className="max-w-[1024px] mx-auto px-[60px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-[60px] md:text-[80px] leading-[0.85] font-[800] uppercase tracking-[-2px] mb-[20px]">
              Elite <span className="text-accent">Classes</span>
            </h2>
            <p className="text-[16px] text-muted mt-4 max-w-[400px]">Push your limits with our specialized group training programs led by industry experts.</p>
          </div>
          <button className="border-b-2 border-accent text-ink font-[700] uppercase text-[14px] pb-1 hover:text-accent transition-colors self-start md:self-end decoration-none">
            View Schedule
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {classes.map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden min-h-[300px] rounded-[4px] border border-white/10"
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-colors z-10 duration-500" />
              <img 
                src={cls.image} 
                alt={cls.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 z-20 p-[30px] flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-accent font-[800] text-[10px] tracking-[1px] uppercase mb-2 block">{cls.level}</span>
                    <h3 className="text-[32px] font-[800] uppercase tracking-[-1px] text-ink">{cls.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-muted font-mono text-sm block">{cls.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
