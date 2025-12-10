import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Star, TrendingUp, Library, MessageCircle, Mail } from 'lucide-react';
import Overview from './Overview';
import ReviewSupport from './ReviewSupport';
import VisibilityPromotion from './VisibilityPromotion';
import BooksRead from './BooksRead';
import Testimonials from './Testimonials';
import Contact from './Contact';

// Custom Logo Component matching the "BOOKGUIDE" design with stylized E
const Logo: React.FC<{ className?: string }> = ({ className = "text-slate-900" }) => (
  <div className={`flex items-center tracking-[0.2em] font-light leading-none select-none ${className}`}>
    <span className="uppercase text-2xl font-sans">BookGuid</span>
    <div className="flex flex-col justify-between h-[18px] w-[14px] ml-[2px] py-[2px] opacity-90">
      <div className="w-full h-[2px] bg-current rounded-full"></div>
      <div className="w-full h-[2px] bg-current rounded-full"></div>
      <div className="w-full h-[2px] bg-current rounded-full"></div>
    </div>
  </div>
);

// Custom WhatsApp Icon Component (High Quality 24x24)
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    stroke="none"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Overview', path: '/', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Review Support', path: '/reviews', icon: <Star className="w-4 h-4" /> },
    { name: 'Visibility', path: '/visibility', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Books Read', path: '/books', icon: <Library className="w-4 h-4" /> },
    { name: 'Testimonials', path: '/testimonials', icon: <MessageCircle className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo className="text-slate-900" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-violet-50 text-violet-700 shadow-sm ring-1 ring-violet-200' 
                      : 'text-gray-600 hover:text-violet-600 hover:bg-violet-50'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-violet-600 hover:bg-violet-50 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                   location.pathname === link.path
                    ? 'bg-violet-50 text-violet-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className={`p-2 rounded-lg ${location.pathname === link.path ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
                   {link.icon}
                </div>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 mt-auto border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="inline-block">
             <Logo className="text-white" />
          </Link>
          <p className="text-slate-400 leading-relaxed">
            Igniting the spark between passionate authors and avid readers. Your story belongs here.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
            <li><Link to="/books" className="hover:text-violet-400 transition-colors">Books Read</Link></li>
            <li><Link to="/reviews" className="hover:text-violet-400 transition-colors">Author Services</Link></li>
            <li><Link to="/visibility" className="hover:text-violet-400 transition-colors">Promotion</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
           <h3 className="text-white font-bold text-lg mb-6">Services</h3>
           <ul className="space-y-4">
            <li><Link to="/reviews" className="hover:text-violet-400 transition-colors">Editorial Reviews</Link></li>
            <li><Link to="/reviews" className="hover:text-violet-400 transition-colors">Beta Reading</Link></li>
            <li><Link to="/visibility" className="hover:text-violet-400 transition-colors">Social Blitz</Link></li>
            <li><Link to="/visibility" className="hover:text-violet-400 transition-colors">Blog Tours</Link></li>
           </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-4">
            <li>
              <a href="mailto:book.guide@hotmail.com" className="flex items-start gap-3 hover:text-violet-400 transition-colors group">
                <Mail className="w-5 h-5 text-violet-500 mt-1 group-hover:text-violet-400" />
                <span>book.guide@hotmail.com</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <a href="https://wa.me/12265608407" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-green-400 transition-colors group">
                <WhatsAppIcon className="w-5 h-5 text-green-500 mt-1 group-hover:text-green-400" />
                <span>+1 (226) 560-8407</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} BookGuide. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-pink-200 selection:text-pink-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/reviews" element={<ReviewSupport />} />
            <Route path="/visibility" element={<VisibilityPromotion />} />
            <Route path="/books" element={<BooksRead />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;