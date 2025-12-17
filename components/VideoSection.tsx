
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="space-y-6 text-center">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-800 hindi-font">
          आपके लिए एक छोटी-सी यादों की झलक 💖
        </h2>
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-gray-600 hindi-font italic">
            ये कुछ यादें हैं, जो हमने साथ जी हैं। ये वीडियो सिर्फ आपके लिए बनाया गया है, जिसमें हमारा प्यार और आपका आशीर्वाद छिपा है।
          </p>
        </div>
      </div>

      <div className="relative group max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video bg-pink-100 flex items-center justify-center border-4 border-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://picsum.photos/1200/800?mom")' }}></div>
        <div className="relative z-10 flex flex-col items-center">
           <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-xl">
             <Play className="text-pink-600 fill-current w-8 h-8 ml-1" />
           </div>
           <p className="mt-4 text-white font-bold drop-shadow-md hindi-font">वीडियो चलाने के लिए क्लिक करें</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent"></div>
      </div>
      
      <p className="text-sm text-gray-400 italic">
        (यहाँ आपका वीडियो संदेश या स्लाइडशो आएगा)
      </p>
    </section>
  );
};

export default VideoSection;
