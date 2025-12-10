import React, { useState } from 'react';
import { CheckCircle, Search, PenTool, FileText, ChevronRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const ReviewSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editorial' | 'beta' | 'sensitivity'>('editorial');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const content = {
    editorial: {
      title: "Comprehensive Editorial Review",
      description: "A deep dive into your plot, character development, and pacing. We analyze the structural integrity of your story.",
      features: ["3-round editing process", "Detailed chapter analysis", "Marketability assessment"],
      color: "from-violet-500 to-indigo-500",
      icon: <FileText className="w-6 h-6 text-white" />
    },
    beta: {
      title: "Beta Reader Insights",
      description: "Real feedback from actual readers in your target genre. Understand how your audience feels as they turn the pages.",
      features: ["Reader emotional response", "Confusion check", "Pacing feedback"],
      color: "from-pink-500 to-rose-500",
      icon: <Search className="w-6 h-6 text-white" />
    },
    sensitivity: {
      title: "Sensitivity Reading",
      description: "Ensuring your representation is authentic and respectful. We help you avoid harmful tropes and inaccuracies.",
      features: ["Cultural accuracy check", "Stereotype identification", "Nuance suggestions"],
      color: "from-orange-400 to-amber-500",
      icon: <PenTool className="w-6 h-6 text-white" />
    }
  };

  const faqs = [
    { q: "How long does a typical review take?", a: "Turnaround times vary by package. Editorial reviews typically take 2-3 weeks, while Beta Reading can be completed in 10-14 days." },
    { q: "Can I choose my reviewer?", a: "Yes! We match you with reviewers who specialize in your genre, but you can also request specific team members based on their profile." },
    { q: "What steps do you take to help my book get more reviews?", a: "I identify suitable readers, present your book to them, coordinate distribution when needed, and maintain communication until reviews begin to appear. Every step is handled with care to ensure authenticity." },
    { q: "Are the reviews you help me get honest and reader generated?", a: "Yes. I never control or influence what readers say. They share their genuine thoughts based on their personal reading experience." }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
          Review <span className="text-violet-600">Support</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Elevate your manuscript with professional feedback tailored to your specific needs.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-20">
        <div className="lg:col-span-1 space-y-4">
          {(Object.keys(content) as Array<keyof typeof content>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 flex items-center justify-between group ${
                activeTab === key
                  ? 'bg-white border-violet-500 shadow-xl shadow-violet-200'
                  : 'bg-white border-transparent hover:border-violet-200 hover:bg-slate-50'
              }`}
            >
              <span className={`font-bold text-lg ${activeTab === key ? 'text-violet-700' : 'text-slate-600'}`}>
                {content[key].title}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeTab === key ? 'bg-violet-100 text-violet-600' : 'bg-slate-100 text-slate-400'}`}>
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden h-full">
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${content[activeTab].color} opacity-10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none`}></div>
            
            <div className="relative z-10 animate-in fade-in duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${content[activeTab].color} flex items-center justify-center mb-8 shadow-lg`}>
                {content[activeTab].icon}
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{content[activeTab].title}</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">{content[activeTab].description}</p>
              
              <div className="space-y-4 mb-10">
                {content[activeTab].features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-medium text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/12265608407?text=${encodeURIComponent(`Hi, I'm interested in getting started with the ${content[activeTab].title} package.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full md:w-auto inline-block text-center px-8 py-4 rounded-xl bg-gradient-to-r ${content[activeTab].color} text-white font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all hover:-translate-y-1`}
              >
                Get Started with {content[activeTab].title}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden group transform transition hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-2xl font-bold mb-4">Why choose us?</h3>
          <p className="text-indigo-100 leading-relaxed mb-6">
            We don't just read; we analyze. Our team comprises industry veterans, published authors, and professional editors.
          </p>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} className="w-12 h-12 rounded-full border-4 border-indigo-600" src={`https://picsum.photos/100/100?random=${i}`} alt="Reviewer" />
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-indigo-600 bg-white flex items-center justify-center text-indigo-600 font-bold text-xs">
              +15K
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl flex flex-col justify-center items-start transform transition hover:-translate-y-1">
           <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 font-bold text-sm mb-4">Limited Time Offer</div>
           <h3 className="text-2xl font-bold text-slate-900 mb-4">First-Time Author?</h3>
           <p className="text-slate-600 mb-6">Get 10% off your first comprehensive editorial review package.</p>
           <a 
             href="https://wa.me/12265608407?text=Hi%2C%20I%27d%20like%20to%20claim%20the%2010%25%20discount%20for%20first-time%20authors."
             target="_blank"
             rel="noopener noreferrer"
             className="text-pink-600 font-bold flex items-center gap-2 hover:gap-4 transition-all"
           >
             Claim Discount <ChevronRight className="w-4 h-4" />
           </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-3">
          <HelpCircle className="w-8 h-8 text-violet-500" />
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 focus:outline-none"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.q}
                {openFaq === index ? <ChevronUp className="w-5 h-5 text-violet-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              <div 
                className={`px-6 text-slate-600 transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSupport;