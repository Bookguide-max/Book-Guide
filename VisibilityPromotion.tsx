import React from 'react';
import { Share2, TrendingUp, Users, Target, Rocket } from 'lucide-react';

const VisibilityPromotion: React.FC = () => {
  const promotions = [
    {
      title: "Social Media Blitz",
      price: "$199",
      features: ["5 Instagram Posts", "3 TikTok Videos", "Twitter Campaign"],
      icon: <Share2 className="w-8 h-8 text-cyan-400" />,
      accent: "border-cyan-400",
      bg: "bg-cyan-50",
      btn: "bg-cyan-500 hover:bg-cyan-600"
    },
    {
      title: "Blog Tour Elite",
      price: "$349",
      features: ["10 Book Blog Features", "Author Interviews", "Giveaway Management"],
      icon: <Users className="w-8 h-8 text-fuchsia-400" />,
      accent: "border-fuchsia-400",
      bg: "bg-fuchsia-50",
      btn: "bg-fuchsia-500 hover:bg-fuchsia-600"
    },
    {
      title: "Newsletter Feature",
      price: "$149",
      features: ["Blast to 50k+ Readers", "Genre Targeting", "Performance Report"],
      icon: <Target className="w-8 h-8 text-amber-400" />,
      accent: "border-amber-400",
      bg: "bg-amber-50",
      btn: "bg-amber-500 hover:bg-amber-600"
    }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-bold mb-6 animate-bounce">
          <Rocket className="w-4 h-4 text-orange-400" /> 
          Boost your sales today
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
          Be Seen. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Be Read.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Don't let your book gather dust. Our visibility packages are designed to place your work directly into the hands of eager readers.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-24">
        {promotions.map((promo, idx) => (
          <div key={idx} className={`relative bg-white rounded-[2rem] p-8 border-2 ${promo.accent} shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_-5px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col`}>
             <div className={`absolute -top-6 left-8 w-16 h-16 rounded-2xl ${promo.bg} border-2 ${promo.accent} flex items-center justify-center shadow-lg`}>
               {promo.icon}
             </div>
             <div className="mt-10 mb-6">
               <h3 className="text-2xl font-bold text-slate-900">{promo.title}</h3>
               <div className="flex items-baseline gap-1 mt-2">
                 <span className="text-4xl font-extrabold text-slate-900">{promo.price}</span>
                 <span className="text-slate-500 font-medium">/campaign</span>
               </div>
             </div>
             
             <ul className="space-y-4 mb-8 flex-grow">
               {promo.features.map((feat, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                   <div className={`w-2 h-2 rounded-full ${promo.btn}`}></div>
                   {feat}
                 </li>
               ))}
             </ul>

             <a 
               href={`https://wa.me/12265608407?text=${encodeURIComponent(`Hi, I'm interested in the ${promo.title} package.`)}`}
               target="_blank"
               rel="noopener noreferrer"
               className={`block w-full text-center py-4 rounded-xl text-white font-bold transition-colors shadow-lg ${promo.btn}`}
             >
               Launch Campaign
             </a>
          </div>
        ))}
      </div>

      {/* Horizontal Promo Panel */}
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Custom Marketing Strategy</h2>
            <p className="text-slate-400 max-w-lg text-lg">
              Need something specific? Our team of marketing experts can build a bespoke plan tailored to your genre and goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              <TrendingUp className="w-10 h-10 text-green-400" />
              <div>
                <div className="text-2xl font-bold text-white">+145%</div>
                <div className="text-slate-400 text-sm">Avg. Engagement</div>
              </div>
            </div>
             <a 
               href="https://wa.me/12265608407?text=Hi%2C%20I%27d%20like%20to%20consult%20an%20expert%20about%20a%20custom%20marketing%20strategy."
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors"
             >
              Consult an Expert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisibilityPromotion;