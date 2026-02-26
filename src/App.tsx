import React from 'react';
import { motion } from 'motion/react';
import { 
  Car, 
  Search, 
  Heart, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Gauge,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-1.5 rounded-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-slate-900">Cinder</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">How it Works</a>
            <a href="#learning" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Learning Hub</a>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-4"
        >
          <a href="#features" className="block text-base font-medium text-slate-600">Features</a>
          <a href="#how-it-works" className="block text-base font-medium text-slate-600">How it Works</a>
          <a href="#learning" className="block text-base font-medium text-slate-600">Learning Hub</a>
          <button className="w-full bg-slate-900 text-white px-5 py-3 rounded-xl text-base font-semibold">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
  >
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-6`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3 h-3" />
                The Human-Centered Way to Buy
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                Find your match, <br />
                <span className="text-orange-500 italic">not just a car.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                Stop drowning in 100,000 trims and confusing jargon. Cinder simplifies the search by focusing on what actually matters to your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-200">
                  Start Your Search <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all">
                  How it Works
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white" 
                      src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <p>Joined by 2,000+ confident buyers this month</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
                <img 
                  src="https://picsum.photos/seed/car-hero/1200/800" 
                  alt="Modern Car" 
                  className="rounded-[2rem] w-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="font-bold text-slate-900">Reliability Match</span>
                  </div>
                  <p className="text-xs text-slate-500">This model scores 9.2/10 for long-term ownership costs.</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-slate-900 p-6 rounded-3xl shadow-xl text-white max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Gauge className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-bold">0-60 Performance</span>
                  </div>
                  <p className="text-2xl font-display font-bold">5.4s</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Top in Category</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
              Why is car shopping so stressful?
            </h2>
            <p className="text-lg text-slate-600">
              Traditional tools assume you're already an expert. They bury you in filters and contradictory reviews, leading to "paralysis by analysis."
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="text-4xl mb-4">🤯</div>
              <h3 className="text-xl font-bold mb-2">Choice Overload</h3>
              <p className="text-slate-500">100+ brands and 100,000 unique trims. How do you know which one is actually yours?</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-2">Bad Metrics</h3>
              <p className="text-slate-500">Most sites hide the stuff that matters: reliability ratings, insurance costs, and real-world performance.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-xl font-bold mb-2">Research Fatigue</h3>
              <p className="text-slate-500">Users often resort to massive Excel sheets just to keep track of their options. It shouldn't be a research project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                Designed for the <br />
                <span className="text-orange-500">modern driver.</span>
              </h2>
              <p className="text-lg text-slate-600">
                We built Cinder to be a human-centered decision support system. We simplify the complex so you can choose with confidence.
              </p>
            </div>
            <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              See all features <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap}
              title="Smart Filtering"
              description="Filter by what you actually value: Reliability, Insurance brackets, 0-60 times, and cargo space. No more generic lists."
              color="bg-orange-500"
            />
            <FeatureCard 
              icon={Heart}
              title="Social Saving"
              description="Save listings to beautiful collections. Compare them side-by-side without opening 50 browser tabs."
              color="bg-rose-500"
            />
            <FeatureCard 
              icon={BookOpen}
              title="AI Learning Hub"
              description="Confused by 'CVT' or 'Rebuilt Title'? Our AI explains car jargon in plain English, tailored to your background."
              color="bg-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-12">
                Your journey to <br />
                <span className="text-orange-400">confidence.</span>
              </h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Define Your Life", desc: "Tell us about your commute, your family, and your style. We don't just ask for a budget." },
                  { step: "02", title: "Explore Matches", desc: "See a curated list of vehicles that fit your specific needs, ranked by our proprietary match score." },
                  { step: "03", title: "Learn & Compare", desc: "Use the Learning Hub to demystify specs and compare your top picks in a social-first interface." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <span className="text-4xl font-display font-bold text-orange-400/30">{item.step}</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800 rounded-[3rem] p-8 border border-slate-700 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Top Match</span>
                    <div className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">98% Match</div>
                  </div>
                  <img src="https://picsum.photos/seed/car-match/800/500" className="rounded-2xl w-full" alt="Car Match" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="text-2xl font-bold mb-1">2024 Electric Crossover</h4>
                    <p className="text-slate-400">Perfect for your 30-mile commute and weekend trips.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-xl">
                      <p className="text-xs text-slate-400 mb-1">Reliability</p>
                      <p className="text-lg font-bold">Excellent</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-xl">
                      <p className="text-xs text-slate-400 mb-1">Annual Fuel</p>
                      <p className="text-lg font-bold">~$450</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Abstract glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Hub Preview */}
      <section id="learning" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 border border-orange-100">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mb-8 shadow-lg shadow-orange-200">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
                Never feel "car-illiterate" again.
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our GenAI-powered Learning Hub translates technical specs into human benefits. Ask anything, from "What is a powertrain?" to "Is this insurance quote fair?"
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Personable, adaptive explanations",
                  "Demystifying dealer slang",
                  "Understanding title history",
                  "Maintenance cost forecasting"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" /> {item}
                  </li>
                ))}
              </ul>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all">
                Try the AI Assistant
              </button>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-orange-100 space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0" />
                  <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none text-slate-700 text-sm">
                    What does "CVT Transmission" actually mean for my daily drive?
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-orange-500 p-4 rounded-2xl rounded-tr-none text-white text-sm max-w-[80%]">
                    Think of it like a single gear that stretches. It makes your ride smoother and saves you more on gas than a traditional automatic!
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-xs text-slate-400">
                    Ask Cinder anything...
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-7xl font-display font-bold text-slate-900 mb-8">
              Ready to find <br />
              <span className="text-orange-500 italic">the one?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Join thousands of drivers who have traded stress for confidence. Start your Cinder journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-orange-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-200">
                Get Started for Free
              </button>
              <button className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-1.5 rounded-lg">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-slate-900">Cinder</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-orange-500">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500">Terms of Service</a>
              <a href="#" className="hover:text-orange-500">Support</a>
            </div>
            <p className="text-sm text-slate-400">
              © 2026 Cinder Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
