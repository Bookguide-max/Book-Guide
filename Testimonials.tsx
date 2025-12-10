import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, MessageCircle, X, Send, Loader, CheckCircle, AlertCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', role: '', story: '' });

  const testimonials = [
    {
      id: 1,
      quote: "Seeing my debut novel featured in your curated library was a turning point. The review highlighted themes even I hadn't fully articulated. Thank you for giving 'Winter's Orbit' a chance.",
      author: "Everina Maxwell",
      role: "Author of 'Winter's Orbit'",
      image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/op7goph7vigebo0504r4k4a0fs._SX300_CR0%2C0%2C300%2C300_.jpg",
      color: "bg-pink-50"
    },
    {
      id: 2,
      quote: "I was nervous about the editorial review for 'The Dark Mirror', but your team treated it with such care. The detailed analysis gave my readers confidence, and the visibility boost was immediate.",
      author: "Samantha Shannon",
      role: "Romance Author",
      image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/n7mmfr1mqqe7bkvo6f81iu9ikl._SX300_CR0%2C0%2C300%2C300_.jpg",
      color: "bg-violet-50"
    },
    {
      id: 3,
      quote: "BookGuide actually read my book. That sounds simple, but in this industry, it's rare. Their deep dive into 'The Raven Scholar' brought me my core fanbase and skyrocketed my sales.",
      author: "Antonia Hodgson",
      role: "Fantasy Author",
      image: "https://picsum.photos/100/100?random=22",
      color: "bg-orange-50"
    },
    {
      id: 4,
      quote: "The promotional boost for 'Seveneves' was phenomenal. I went from zero visibility to the top of the Sci-Fi charts in a week after you featured it in the 'Books Read' section.",
      author: "Neal Stephenson",
      role: "Sci-Fi Author",
      image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/l2tsthkd047bnlnfud0t9o33pj._SX300_CR0%2C0%2C300%2C300_.jpg",
      color: "bg-blue-50"
    },
    {
      id: 5,
      quote: "The 'Fresh Reviews' feature is no joke. Sales for 'The Chestnut Man' spiked immediately after you posted your thoughts. Truly a partner for authors who need their voice heard.",
      author: "Soren Sveistrup",
      role: "Thriller Writer",
      image: "https://picsum.photos/100/100?random=24",
      color: "bg-green-50"
    },
    {
      id: 6,
      quote: "I appreciated the honest feedback on 'The Five'. You didn't just boost it; you explained *why* it was worth reading to your audience, which made all the difference in engagement.",
      author: "Hallie Rubenhold",
      role: "Non-Fiction Author",
      image: "https://picsum.photos/100/100?random=25",
      color: "bg-cyan-50"
    },
    {
      id: 7,
      quote: "From the sensitivity reading to the final blog tour, you supported 'Kulti' every step of the way. I'm honored to have my work displayed in your library alongside the greats.",
      author: "Mariana Zapata",
      role: "Author",
      image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/7qf9scd1ro1kucklcpho1o1ipp._SX300_CR0%2C0%2C300%2C300_.jpg",
      color: "bg-fuchsia-50"
    },
    {
      id: 8,
      quote: "The community engagement on your review of 'Exhalation' was insane. I've never had so many readers reach out to me directly to discuss the plot twists you highlighted.",
      author: "Ted Chiang",
      role: "Sci-Fi Novelist",
      image: "https://picsum.photos/100/100?random=27",
      color: "bg-amber-50"
    },
    {
      id: 9,
      quote: "You found the heart of 'The Pale Dreamer'. Thank you for sharing my story with your audience and helping me find my voice in a crowded market.",
      author: "Samantha Shannon",
      role: "Romance Author",
      image: "https://m.media-amazon.com/images/S/amzn-author-media-prod/n7mmfr1mqqe7bkvo6f81iu9ikl._SX300_CR0%2C0%2C300%2C300_.jpg",
      color: "bg-rose-50"
    },
    {
      id: 10,
      quote: "Boosting 'Count My Lies' through your newsletter was the best marketing decision I made. The ROI was instant, and the readers you brought were genuinely interested.",
      author: "Sophie Stava",
      role: "Mystery Author",
      image: "https://picsum.photos/100/100?random=29",
      color: "bg-slate-100"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Auto rotate
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Create form data to match the expected format of the script
    // We combine role and story into the message field
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', `Role/Title: ${formData.role}\n\nStory:\n${formData.story}`);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxw82KCn0koJRNgeni2Id8oiBvGc_ZRYvmDeXIDev5xah9T1fusgr75r_WHxF-NWJDH/exec", {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      });
      setFormStatus('success');
      setFormData({ name: '', email: '', role: '', story: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset status after a delay so animation can finish if desired, or immediately
    if (formStatus === 'success') {
      setTimeout(() => setFormStatus('idle'), 300);
    } else {
      setFormStatus('idle');
    }
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
          Author <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500">Success Stories</span>
        </h1>
        <p className="text-xl text-slate-600">
          Hear from the storytellers whose works we've had the privilege to read, review, and amplify to the world.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative max-w-5xl mx-auto">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-violet-600 hover:scale-110 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-violet-600 hover:scale-110 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="overflow-hidden rounded-[3rem] shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="w-full flex-shrink-0">
                <div className={`${t.color} p-12 md:p-20 min-h-[400px] flex flex-col justify-center relative`}>
                   <Quote className="absolute top-10 left-10 w-24 h-24 text-slate-900/5 rotate-180" />
                   <div className="relative z-10 max-w-4xl mx-auto">
                      <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-10 text-center">
                        "{t.quote}"
                      </p>
                      <div className="flex flex-col items-center justify-center gap-4">
                        <img src={t.image} alt={t.author} className="w-20 h-20 rounded-full border-4 border-white shadow-md" />
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-slate-900">{t.author}</h4>
                          <p className="text-slate-500 font-medium uppercase tracking-wide text-sm">{t.role}</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'bg-violet-600 w-8' : 'bg-slate-300 w-3 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/30 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/30 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 backdrop-blur-sm">
             <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Did we review your book?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            We love hearing from the authors we've supported. Share your experience with BookGuide and inspire other writers.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-200 transition-colors shadow-lg hover:shadow-white/20"
          >
            Submit Your Story
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Header / Background Shape */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-violet-600 to-pink-600 opacity-10 rounded-b-[3rem]"></div>
            
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 relative z-10">
              {formStatus === 'success' ? (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Story Received!</h3>
                  <p className="text-slate-600 text-lg mb-8">
                    Thank you for sharing your experience. We review all stories and will get back to you shortly.
                  </p>
                  <button 
                    onClick={closeModal}
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">Share Your Story</h2>
                    <p className="text-slate-500">Tell us how BookGuide helped your journey.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all"
                        placeholder="e.g. Sarah J. Maas"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all"
                        placeholder="sarah@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-bold text-slate-700 mb-1">Role / Book Title</label>
                      <input
                        type="text"
                        name="role"
                        id="role"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all"
                        placeholder="e.g. Fantasy Author / Throne of Glass"
                      />
                    </div>
                    <div>
                      <label htmlFor="story" className="block text-sm font-bold text-slate-700 mb-1">Your Story</label>
                      <textarea
                        id="story"
                        required
                        rows={4}
                        value={formData.story}
                        onChange={(e) => setFormData({...formData, story: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 outline-none transition-all resize-none"
                        placeholder="Share your experience..."
                      />
                    </div>

                    {formStatus === 'error' && (
                       <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl text-sm">
                         <AlertCircle className="w-4 h-4" />
                         Failed to submit. Please try again.
                       </div>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-xl font-bold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 mt-2"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Submit Story <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;