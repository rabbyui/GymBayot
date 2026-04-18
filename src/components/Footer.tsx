import { Dumbbell, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1024px] mx-auto px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px] mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[24px] font-[900] tracking-[-1px] uppercase">GymGymBayots</span>
            </div>
            <p className="text-[14px] text-muted leading-[1.5] mb-6">
              A crucible for those who refuse to be average. Unleash your potential with our elite facilities.
            </p>
            <div className="flex gap-[15px]">
              <a href="#" className="w-[40px] h-[40px] border border-white/20 rounded-[4px] flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-[40px] h-[40px] border border-white/20 rounded-[4px] flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-[40px] h-[40px] border border-white/20 rounded-[4px] flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Facebook className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[14px] font-[800] uppercase tracking-[1px] mb-[20px]">Explore</h4>
            <ul className="space-y-[15px] text-[14px] text-muted">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#classes" className="hover:text-accent transition-colors">Classes</a></li>
              <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[14px] font-[800] uppercase tracking-[1px] mb-[20px]">Contact</h4>
            <ul className="space-y-[15px] text-[14px] text-muted">
              <li>123 Iron Avenue</li>
              <li>Muscle City, MC 90210</li>
              <li>contact@gymbayots.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[14px] font-[800] uppercase tracking-[1px] mb-[20px]">Newsletter</h4>
            <p className="text-[14px] text-muted leading-[1.5] mb-[20px]">Subscribe for workout tips and exclusive offers.</p>
            <form className="flex flex-col gap-[10px]">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-surface border border-white/10 px-[20px] py-[15px] text-[12px] text-ink focus:outline-none focus:border-accent rounded-[4px]"
                required
              />
              <button 
                type="submit" 
                className="bg-accent text-black font-[700] uppercase tracking-[1px] text-[12px] py-[15px] rounded-[4px] hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-[30px] border-t border-white/10 flex items-center justify-between flex-col md:flex-row text-muted text-[12px] uppercase tracking-[1px]">
          <p>&copy; {new Date().getFullYear()} GymGymBayots. All rights reserved.</p>
          <div className="flex gap-[20px] mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
