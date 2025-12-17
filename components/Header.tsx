
import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-pink-600">
          <Heart className="fill-current w-6 h-6" />
          <span className="font-bold text-xl hindi-font">माँ का जन्मदिन</span>
        </div>
        <div className="text-pink-500 font-semibold hindi-font hidden sm:block">
          जन्मदिन की ढेर सारी शुभकामनाएं!
        </div>
      </div>
    </header>
  );
};

export default Header;
