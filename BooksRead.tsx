import React, { useState, useMemo, useEffect } from 'react';
import { Star, BookOpen, Search, X } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  author: string;
  rating: number;
  ratingCount: number;
  category: string;
  coverImage: string;
  reviewLink: string; // Added reviewLink property
}

const BooksRead: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(10);
  }, [selectedCategory, searchQuery]);

  // Placeholder images and links used for demonstration. 
  const books: Book[] = [
    { id: 1, title: "A Killing Cold", author: "Kate Alice Marshall", rating: 5, ratingCount: 2098, category: "Mystery", coverImage: "https://m.media-amazon.com/images/I/81MYJAkqqAL._SL1500_.jpg", reviewLink: "https://a.co/d/4aUByHl" },
    { id: 2, title: "Prey", author: "Michael Crichton", rating: 4, ratingCount: 5046, category: "Sci-Fi", coverImage: "https://m.media-amazon.com/images/I/815gca0LaxL._SL1500_.jpg", reviewLink: "https://a.co/d/7aBnMud" },
    { id: 3, title: "The Raven Scholar", author: "Antonia Hodgson", rating: 5, ratingCount: 3369, category: "Fantasy", coverImage: "https://m.media-amazon.com/images/I/91G53RDZVeL._SL1500_.jpg", reviewLink: "https://a.co/d/atXuUAk" },
    { id: 4, title: "Under the Dome", author: "Stephen King", rating: 4, ratingCount: 15684, category: "Sci-Fi", coverImage: "https://m.media-amazon.com/images/I/715Op9T6RYL._SL1500_.jpg", reviewLink: "https://a.co/d/b10a2Lp" },
    { id: 5, title: "The Dark Mirror", author: "Samantha Shannon", rating: 5, ratingCount: 1190, category: "Romance", coverImage: "https://m.media-amazon.com/images/I/91vfJxDZ-xL._SL1500_.jpg", reviewLink: "https://a.co/d/h1nEPrA" },
    { id: 6, title: "The Sixth Extinction", author: "Elizabeth Kolbert", rating: 4, ratingCount: 10442, category: "Non-Fiction", coverImage: "https://m.media-amazon.com/images/I/71+1m2HBZNL._SL1500_.jpg", reviewLink: "https://a.co/d/gYrfPGE" },
    { id: 7, title: "The Chestnut Man", author: "Soren Sveistrup", rating: 4, ratingCount: 10248, category: "Thriller", coverImage: "https://m.media-amazon.com/images/I/71ec4V1R98L._SL1500_.jpg", reviewLink: "https://a.co/d/fYKtM8f" },
    { id: 8, title: "Love People, Use Things", author: "Joshua Fields Millburn", rating: 5, ratingCount: 1052, category: "Lifestyle", coverImage: "https://m.media-amazon.com/images/I/61A8zGxtJfL._SL1500_.jpg", reviewLink: "https://a.co/d/iw8cJEO" },
    { id: 9, title: "The Five", author: "Hallie Rubenhold", rating: 4, ratingCount: 11006, category: "Non-Fiction", coverImage: "https://m.media-amazon.com/images/I/91v7P0VnH+L._SL1500_.jpg", reviewLink: "https://a.co/d/5GbdXfI" },
    { id: 10, title: "Winter's Orbit", author: "Everina Maxwell", rating: 4, ratingCount: 2733, category: "Sci-Fi", coverImage: "https://m.media-amazon.com/images/I/81scRkmWrlL._SL1500_.jpg", reviewLink: "https://a.co/d/0rDWHeG" },
    { id: 11, title: "Count My Lies", author: "Sophie Stava", rating: 4, ratingCount: 5186, category: "Mystery", coverImage: "https://m.media-amazon.com/images/I/81VPkz2rFuL._SL1500_.jpg", reviewLink: "https://a.co/d/1Fi5D1b" },
    { id: 12, title: "Dear Ijeawele", author: " Chimamanda Ngozi Adichie", rating: 5, ratingCount: 6657, category: "Non-Fiction", coverImage: "https://m.media-amazon.com/images/I/81G89vGtlNL._SL1500_.jpg", reviewLink: "https://a.co/d/2ju73jw" },
    { id: 13, title: "Kulti", author: "Mariana Zapata", rating: 5, ratingCount: 25718, category: "Romance", coverImage: "https://m.media-amazon.com/images/I/81eyMnrUfgL._SL1500_.jpg", reviewLink: "https://a.co/d/0HIFEQD" },
    { id: 14, title: "Blood Over Bright Haven", author: "M.L. Wang", rating: 5, ratingCount: 9372, category: "Fantasy", coverImage: "https://m.media-amazon.com/images/I/81S-kpOlYsL._SL1500_.jpg", reviewLink: "https://a.co/d/cIPdoun" },
    { id: 15, title: "The Beauty of What Remains", author: "Steve Leder", rating: 5, ratingCount: 1833, category: "Lifestyle", coverImage: "https://m.media-amazon.com/images/I/81-dboXDvUL._SL1500_.jpg", reviewLink: "https://a.co/d/3yw1oWi" },
    { id: 16, title: "Seveneves", author: "Neal Stephenson", rating: 4, ratingCount: 31178, category: "Sci-Fi", coverImage: "https://m.media-amazon.com/images/I/81uEp4GT23L._SL1500_.jpg", reviewLink: "https://a.co/d/5ePSEFF" },
    { id: 17, title: "The Writing Retreat", author: "Julia Bartz", rating: 4, ratingCount: 3187, category: "Thriller", coverImage: "https://m.media-amazon.com/images/I/71nNLopYwuL._SL1500_.jpg", reviewLink: "https://a.co/d/6pTdEOX" },
    { id: 18, title: "Exhalation", author: "Ted Chiang", rating: 5, ratingCount: 14137, category: "Sci-Fi", coverImage: "https://m.media-amazon.com/images/I/71rxUxpcPgL._SL1500_.jpg", reviewLink: "https://a.co/d/6ipZGIk" },
    { id: 19, title: "The Starless Sea", author: "Erin Morgenstern", rating: 4, ratingCount: 19435, category: "Fantasy", coverImage: "https://m.media-amazon.com/images/I/A1fno-TO-VL._SL1500_.jpg", reviewLink: "https://a.co/d/2Ot41CX" },
    { id: 20, title: "Not a Diet Book", author: "James Smith", rating: 5, ratingCount: 6837, category: "Lifestyle", coverImage: "https://m.media-amazon.com/images/I/81ugLN+W-pL._SL1500_.jpg", reviewLink: "https://a.co/d/4T6uI7M" },
    { id: 21, title: "The Passengers", author: "John Marrs", rating: 4, ratingCount: 12315, category: "Thriller", coverImage: "https://m.media-amazon.com/images/I/81z6vngOS2L._SL1500_.jpg", reviewLink: "https://a.co/d/4q4PPOb" },
    { id: 22, title: "Redshirts", author: "John Scalzi", rating: 4, ratingCount: 12761, category: "Sci-Fi", coverImage: "https://m.media-amazon.com/images/I/81A88ArJ4rS._SL1500_.jpg", reviewLink: "https://a.co/d/dwjxaYT" },
    { id: 23, title: "Packing for Mars", author: "Mary Roach", rating: 5, ratingCount: 2117, category: "Non-Fiction", coverImage: "https://m.media-amazon.com/images/I/81S6Axu3BqL._SL1500_.jpg", reviewLink: "https://a.co/d/gsWUJGY" },
    { id: 24, title: "The Pale Dreamer", author: "Samantha Shannon", rating: 4, ratingCount: 1186, category: "Romance", coverImage: "https://m.media-amazon.com/images/I/81o+YpAIYJL._SL1500_.jpg", reviewLink: "https://a.co/d/hhkK0mY" },
    { id: 25, title: "Heartwood", author: "Amity Gaige", rating: 4, ratingCount: 12228, category: "Mystery", coverImage: "https://m.media-amazon.com/images/I/81hhHbIVzLL._SL1500_.jpg", reviewLink: "https://a.co/d/diTzlO1" },
    { id: 26, title: "Find Your People", author: "Jennie Allen", rating: 5, ratingCount: 3661, category: "Lifestyle", coverImage: "https://m.media-amazon.com/images/I/71E5qVlXLGL._SL1500_.jpg", reviewLink: "https://a.co/d/23HYe3q" },
    { id: 27, title: "Heartless", author: "Marissa Meyer", rating: 5, ratingCount: 9554, category: "Fantasy", coverImage: "https://m.media-amazon.com/images/I/817zAtfwncL._SL1500_.jpg", reviewLink: "https://a.co/d/2VLlJxj" },
    { id: 28, title: "The Lathe Of Heaven", author: "Ursula K. Le Guin", rating: 4, ratingCount: 8137, category: "Sci-Fi", coverImage: "https://m.media-amazon.com/images/I/71audPNW1kL._SL1500_.jpg", reviewLink: "https://a.co/d/dt0xl6y" },
    { id: 29, title: "In a Holidaze", author: "Christina Lauren", rating: 4, ratingCount: 15987, category: "Romance", coverImage: "https://m.media-amazon.com/images/I/71PMzaD6lYL._SL1500_.jpg", reviewLink: "https://a.co/d/dTSXEHr" },
    { id: 30, title: "Not Quite Dead Yet", author: " Holly Jackson", rating: 4, ratingCount: 5998, category: "Thriller", coverImage: "https://m.media-amazon.com/images/I/817B7aSCDPL._SL1500_.jpg", reviewLink: "https://a.co/d/5JFsz9q" },
  ];

  const categories = ['All', 'Mystery', 'Sci-Fi', 'Fantasy', 'Romance', 'Non-Fiction', 'Thriller', 'Lifestyle'];

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const visibleBooks = filteredBooks.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBooks.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Our <span className="text-violet-600">Library</span></h1>
          <p className="text-lg text-slate-600 max-w-xl mb-8">
            A curated collection of the incredible stories we've had the privilege to read and review.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-violet-500 focus:border-violet-500 sm:text-sm transition-shadow shadow-sm hover:shadow-md"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="w-full lg:w-1/2 flex flex-wrap justify-start lg:justify-end gap-2">
          {categories.map((filter) => (
            <button 
              key={filter} 
              onClick={() => setSelectedCategory(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === filter 
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-violet-50 hover:text-violet-600 hover:border-violet-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {visibleBooks.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200 border-dashed">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-600">No books found</h3>
          <p className="text-slate-400">Try adjusting your search or filter.</p>
          <button 
            onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
            className="mt-4 text-violet-600 font-bold hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleBooks.map((book) => (
            <div key={book.id} className="group perspective-1000 h-[400px]">
              <div className="relative h-full w-full rounded-2xl transition-all duration-500 transform-style-3d group-hover:rotate-y-6 group-hover:shadow-2xl overflow-hidden bg-slate-800">
                {/* Book Cover Image */}
                <img 
                  src={book.coverImage} 
                  alt={book.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                   <div className="flex justify-between items-start">
                     <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-xs font-bold uppercase tracking-wider border border-white/10 shadow-sm">
                        {book.category}
                      </span>
                   </div>
                  
                  <div>
                    <h3 className="text-2xl font-serif font-bold leading-tight mb-2 drop-shadow-md">{book.title}</h3>
                    <p className="text-white/90 font-medium border-b border-white/20 pb-4 inline-block mb-4">{book.author}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < book.rating ? 'fill-yellow-400 text-yellow-400 drop-shadow-sm' : 'text-white/30'}`} />
                        ))}
                      </div>
                      <span className="text-white/80 text-sm font-medium">({book.ratingCount})</span>
                    </div>

                    <a 
                      href={book.reviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-white/95 backdrop-blur-sm text-slate-900 rounded-xl font-bold text-sm hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg transform group-hover:translate-z-10 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" /> Read Review
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {hasMore && (
        <div className="mt-20 text-center">
          <button 
            onClick={handleLoadMore}
            className="px-10 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            Load More Books
          </button>
        </div>
      )}
      {!hasMore && visibleBooks.length > 0 && (
         <div className="mt-20 text-center text-slate-400 text-sm font-medium">
            You've reached the end of the collection.
         </div>
      )}
    </div>
  );
};

export default BooksRead;