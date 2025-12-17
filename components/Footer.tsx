
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pink-900 text-white py-16 mt-20">
      <div className="container mx-auto px-4 text-center space-y-6">
        <div className="inline-block p-4 bg-pink-800/50 rounded-full mb-4">
          <span className="text-4xl">❤️</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold hindi-font">
          जन्मदिन मुबारक हो माँ ❤️
        </h2>
        <p className="text-2xl text-pink-200 hindi-font font-light">
          आप मेरी पूरी दुनिया हो।
        </p>
        <div className="pt-8 border-t border-pink-800 text-pink-300 text-sm italic hindi-font">
          हमेशा मुस्कुराते रहिये, आप हमारी शान हैं।
        </div>
      </div>
    </footer>
  );
};

export default Footer;
