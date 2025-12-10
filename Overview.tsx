import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Zap, Heart, Globe, Award, Mail, 
  FileText, Search, PenTool, Share2, Users, Target,
  Star, Quote, CheckCircle, Sparkles, BookOpen, ChevronRight, Loader
} from 'lucide-react';

const Overview: React.FC = () => {
  const [activeReviewTab, setActiveReviewTab] = useState<'editorial' | 'beta' | 'sensitivity'>('editorial');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    const actionUrl = form.action;

    try {
      // Using no-cors mode allows sending data to Google Scripts without CORS errors,
      // though we cannot read the response content.
      await fetch(actionUrl, {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      });
      setNewsletterStatus('success');
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
      setNewsletterStatus('idle');
    }
  };

  const reviewContent = {
    editorial: {
      title: "Editorial Review",
      desc: "Deep analysis of plot, pacing, and character arcs.",
      features: ["Structural Critique", "Pacing Analysis", "Market Fit"],
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-200",
      gradient: "from-violet-500 to-indigo-600"
    },
    beta: {
      title: "Beta Reading",
      desc: "Authentic feedback from your target audience.",
      features: ["Reader Emotions", "Engagement Check", "Genre Expectations"],
      color: "text-pink-600",
      bg: "bg-pink-50",
      border: "border-pink-200",
      gradient: "from-pink-500 to-rose-500"
    },
    sensitivity: {
      title: "Sensitivity Reading",
      desc: "Ensuring respectful and accurate representation.",
      features: ["Cultural Nuance", "Stereotype Check", "Authenticity"],
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      gradient: "from-orange-400 to-amber-500"
    }
  };

  // Synced with BooksRead page data (Top 4 books)
  const books = [
    { id: 1, title: "A Killing Cold", author: "Kate Alice Marshall", rating: 5, ratingCount: 2098, category: "Mystery", coverImage: "https://m.media-amazon.com/images/I/81MYJAkqqAL._SL1500_.jpg", reviewLink: "https://a.co/d/4aUByHl" },
    { id: 2, title: "Prey", author: "Michael Crichton", rating: 4, ratingCount: 5046, category: "Sci-Fi", coverImage: "https://m.media-amazon.com/images/I/815gca0LaxL._SL1500_.jpg", reviewLink: "https://a.co/d/7aBnMud" },
    { id: 3, title: "The Raven Scholar", author: "Antonia Hodgson", rating: 5, ratingCount: 3369, category: "Fantasy", coverImage: "https://m.media-amazon.com/images/I/91G53RDZVeL._SL1500_.jpg", reviewLink: "https://a.co/d/atXuUAk" },
    { id: 4, title: "Under the Dome", author: "Stephen King", rating: 4, ratingCount: 15684, category: "Sci-Fi", coverImage: "https://m.media-amazon.com/images/I/715Op9T6RYL._SL1500_.jpg", reviewLink: "https://a.co/d/b10a2Lp" },
  ];

  // Updated to match Testimonials.tsx data
  const testimonials = [
    { 
      quote: "Seeing my debut novel featured in your curated library was a turning point. The review highlighted themes even I hadn't fully articulated.", 
      author: "Everina Maxwell", 
      role: "Author of 'Winter's Orbit'",
      image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/op7goph7vigebo0504r4k4a0fs._SX300_CR0%2C0%2C300%2C300_.jpg"
    },
    { 
      quote: "The 'Fresh Reviews' feature is no joke. Sales for 'The Chestnut Man' spiked immediately after you posted your thoughts.", 
      author: "Soren Sveistrup", 
      role: "Thriller Writer",
      image: "https://picsum.photos/100/100?random=24"
    },
    { 
      quote: "From the sensitivity reading to the final blog tour, you supported 'Kulti' every step of the way. I'm honored to have my work displayed here.", 
      author: "Mariana Zapata", 
      role: "Romance Author",
      image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/7qf9scd1ro1kucklcpho1o1ipp._SX300_CR0%2C0%2C300%2C300_.jpg"
    },
  ];

  return (
    <div className="overflow-hidden bg-white selection:bg-violet-200 selection:text-violet-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/50 text-violet-700 font-bold text-sm mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 fill-violet-700" /> 
            <span className="tracking-wide uppercase text-xs">Join 15,000+ passionate readers</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Ignite Your <br />
            <span className="bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Literary Spark
            </span>
          </h1>
          
          <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            The ultimate hub for authors seeking visibility and readers hunting for their next obsession.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link to="/books" className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-slate-900 rounded-full shadow-xl shadow-slate-900/20 hover:bg-slate-800 hover:scale-105 hover:shadow-2xl">
              Start Reading
              <BookOpen className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
            <Link to="/reviews" className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 transition-all duration-300 bg-white border border-slate-200 rounded-full shadow-lg hover:bg-slate-50 hover:border-violet-200 hover:text-violet-600 hover:scale-105">
              For Authors
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPS GRID --- */}
      <section className="py-12 relative z-20 -mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Fast Turnaround', text: "Reviews in 7 days", color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
              { icon: <Globe className="w-6 h-6" />, title: 'Global Reach', text: "Read in 40+ countries", color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
              { icon: <Heart className="w-6 h-6" />, title: 'Community Driven', text: "Real reader feedback", color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-100' },
              { icon: <Award className="w-6 h-6" />, title: 'Elite Quality', text: "Vetted professionals", color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' },
            ].map((feature, idx) => (
              <div key={idx} className={`bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col items-start gap-4 border ${feature.border} hover:-translate-y-2 transition-transform duration-300`}>
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center shadow-inner`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES (REVIEW SUPPORT) --- */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:w-5/12">
              <span className="text-violet-600 font-extrabold tracking-wider uppercase text-xs mb-2 block">For Authors</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Polished to <br /> Perfection.
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Every great story needs a second pair of eyes. Choose the review service that fits your stage in the publishing journey.
              </p>
              
              <div className="flex flex-col gap-3">
                {(Object.keys(reviewContent) as Array<keyof typeof reviewContent>).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveReviewTab(tab)}
                    className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${
                      activeReviewTab === tab 
                      ? `${reviewContent[tab].bg} ${reviewContent[tab].border} shadow-lg scale-[1.02]` 
                      : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeReviewTab === tab ? 'bg-white' : 'bg-slate-100'} transition-colors`}>
                         {tab === 'editorial' && <FileText className={`w-5 h-5 ${activeReviewTab === tab ? 'text-violet-600' : 'text-slate-400'}`} />}
                         {tab === 'beta' && <Search className={`w-5 h-5 ${activeReviewTab === tab ? 'text-pink-600' : 'text-slate-400'}`} />}
                         {tab === 'sensitivity' && <PenTool className={`w-5 h-5 ${activeReviewTab === tab ? 'text-orange-600' : 'text-slate-400'}`} />}
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg ${activeReviewTab === tab ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-800'}`}>
                          {reviewContent[tab].title}
                        </h4>
                      </div>
                    </div>
                    {activeReviewTab === tab && <ChevronRight className={`w-5 h-5 ${reviewContent[tab].color}`} />}
                  </button>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/reviews" className="inline-flex items-center text-slate-900 font-bold hover:text-violet-600 transition-colors group">
                  Compare all packages <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Right Content (Visual) */}
            <div className="lg:w-7/12 w-full">
              <div className={`relative rounded-[3rem] p-1 bg-gradient-to-br ${reviewContent[activeReviewTab].gradient} shadow-2xl transition-all duration-500`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-[2.9rem] p-12 h-full text-white relative overflow-hidden">
                   {/* Background Decor */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                   <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                   <div className="relative z-10">
                     <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                       Most Popular
                     </div>
                     <h3 className="text-4xl font-black mb-4">{reviewContent[activeReviewTab].title}</h3>
                     <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-lg">
                       {reviewContent[activeReviewTab].desc}
                     </p>
                     
                     <div className="grid sm:grid-cols-2 gap-4 mb-10">
                       {reviewContent[activeReviewTab].features.map((feat, i) => (
                         <div key={i} className="flex items-center gap-3 bg-black/20 rounded-xl p-3 backdrop-blur-md">
                           <CheckCircle className="w-5 h-5 text-white" />
                           <span className="font-semibold text-sm">{feat}</span>
                         </div>
                       ))}
                     </div>

                     <div className="flex items-center justify-between mt-auto">
                        <div className="flex -space-x-3">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-2 border-white/50 bg-slate-200">
                               <img src={`https://picsum.photos/100/100?random=${10+i}`} className="w-full h-full rounded-full object-cover" alt="" />
                            </div>
                          ))}
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">4.9/5</p>
                          <div className="flex text-yellow-300">
                            {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                          </div>
                        </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROMOTION SECTION (DARK) --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Amplify Your Reach</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Don't write in the dark. Our strategic promotion tools put your book in front of the readers who are actively looking for it.
                </p>
              </div>
              <Link to="/visibility" className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-violet-50 transition-colors flex items-center gap-2 group whitespace-nowrap">
                Explore Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
               {[
                 { title: "Social Blitz", desc: "High-impact campaigns on Instagram & TikTok.", icon: <Share2 className="w-8 h-8 text-cyan-400" />, border: "hover:border-cyan-500/50", shadow: "hover:shadow-cyan-500/20" },
                 { title: "Blog Tours", desc: "Features on top-rated literary blogs.", icon: <Users className="w-8 h-8 text-fuchsia-400" />, border: "hover:border-fuchsia-500/50", shadow: "hover:shadow-fuchsia-500/20" },
                 { title: "Newsletter Ads", desc: "Direct inbox access to 50k+ readers.", icon: <Target className="w-8 h-8 text-amber-400" />, border: "hover:border-amber-500/50", shadow: "hover:shadow-amber-500/20" },
               ].map((card, idx) => (
                 <div key={idx} className={`bg-slate-800/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 transition-all duration-500 group hover:-translate-y-2 ${card.border} hover:shadow-2xl ${card.shadow}`}>
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors border border-white/5">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-slate-400 mb-8 leading-relaxed">{card.desc}</p>
                    <div className="flex items-center text-white font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- RECENT READS (3D CARDS) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <span className="text-pink-600 font-extrabold tracking-wider uppercase text-xs mb-2 block">Curated Library</span>
              <h2 className="text-4xl font-black text-slate-900">Fresh Reviews</h2>
            </div>
            <Link to="/books" className="hidden md:flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors">
              View All Books <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, idx) => (
              <div key={idx} className="group h-[420px] cursor-pointer perspective-1000">
                <div className="relative h-full w-full rounded-[2rem] bg-slate-800 p-6 flex flex-col justify-between shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
                   {/* Cover Image */}
                   <img
                      src={book.coverImage}
                      alt={book.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                   
                   <div className="relative z-10">
                     <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/10 shadow-sm">
                       {book.category}
                     </span>
                     <h3 className="text-3xl font-serif font-bold text-white leading-tight mb-2 drop-shadow-md">{book.title}</h3>
                     <p className="text-white/80 font-medium text-lg">{book.author}</p>
                   </div>
                   
                   <div className="relative z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     <a href={book.reviewLink} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-white text-slate-900 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-slate-50">
                       <BookOpen className="w-4 h-4" /> Read Review
                     </a>
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link to="/books" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 rounded-full font-bold">
              View All Books <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <Quote className="absolute top-10 left-10 w-32 h-32 text-slate-200/50 -rotate-12" />
           <Quote className="absolute bottom-10 right-10 w-32 h-32 text-slate-200/50 rotate-180" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <div className="min-h-[300px] relative">
             {testimonials.map((t, i) => (
               <div 
                 key={i}
                 className={`transition-all duration-700 absolute top-0 left-0 w-full flex flex-col items-center ${
                   i === currentTestimonial ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                 }`}
               >
                 <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
                 </div>
                 <h3 className="text-2xl md:text-4xl font-medium text-slate-900 leading-tight mb-8">
                   "{t.quote}"
                 </h3>
                 <div className="flex flex-col items-center">
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-16 h-16 rounded-full border-2 border-white shadow-lg mb-3 object-cover"
                    />
                    <p className="font-bold text-slate-900 text-lg">{t.author}</p>
                    <p className="text-violet-600 font-medium text-sm uppercase tracking-wide">{t.role}</p>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="flex justify-center gap-3 mt-12">
             {testimonials.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => setCurrentTestimonial(i)}
                 className={`h-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-violet-600 w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'}`}
               />
             ))}
           </div>
           
           <div className="mt-8">
             <Link to="/testimonials" className="inline-flex items-center text-slate-500 font-bold hover:text-violet-600 transition-colors">
               Read more success stories <ArrowRight className="ml-2 w-4 h-4" />
             </Link>
           </div>
        </div>
      </section>

      {/* --- NEWSLETTER CTA --- */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-slate-900/20">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-violet-600 to-transparent opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500 to-transparent opacity-20 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/10 shadow-xl">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Stay in the Loop</h2>
              <p className="text-slate-300 text-lg mb-12">
                Join our newsletter for weekly book recommendations, author interviews, and exclusive promotion discounts.
              </p>
              
              {newsletterStatus === 'success' ? (
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                     <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                  <p className="text-slate-200">Thanks for subscribing. Keep an eye on your inbox for something special.</p>
                  <button onClick={() => setNewsletterStatus('idle')} className="mt-6 text-sm font-bold text-white/70 hover:text-white underline">
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form 
                  className="flex flex-col sm:flex-row gap-4 w-full" 
                  onSubmit={handleNewsletterSubmit} 
                  action="https://script.google.com/macros/s/AKfycbzLrd4YgSizhRkJtOGb3OOL_pIBnx4yi3_kzUmSB7wZNktKt2V5Ft59gH2Nik2aFsBI/exec" 
                  method="POST"
                >
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Enter your email address" 
                    disabled={newsletterStatus === 'submitting'}
                    className="flex-1 px-8 py-5 rounded-full bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white/20 text-white placeholder-slate-400 transition-all font-medium disabled:opacity-50"
                  />
                  <button 
                    type="submit" 
                    disabled={newsletterStatus === 'submitting'}
                    className="px-10 py-5 bg-white text-slate-900 font-bold rounded-full hover:bg-violet-50 hover:scale-105 transition-all shadow-lg whitespace-nowrap disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center min-w-[180px]"
                  >
                    {newsletterStatus === 'submitting' ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      'Subscribe Now'
                    )}
                  </button>
                </form>
              )}
              <p className="mt-6 text-slate-500 text-sm font-medium">No spam, just great stories. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;