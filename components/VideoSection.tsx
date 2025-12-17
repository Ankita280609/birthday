import React from 'react';
import { Play } from 'lucide-react';
// 1. Import the video from your new assets folder
import birthdayVideo from '../assets/birthday_video.mp4'; 

const VideoSection: React.FC = () => {
  return (
    <section className="space-y-8 text-center">
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

      {/* Video Container */}
      {/* Video Container */}
<div className="relative group max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black flex items-center justify-center">
  <video 
    src={birthdayVideo} 
    controls 
    className="absolute inset-0 w-full h-full object-contain"
  >
    Your browser does not support the video tag.
  </video>
</div>

      <p className="text-sm text-gray-400 italic">
        (यहाँ आपका वीडियो संदेश या स्लाइडशो आएगा)
      </p>
    </section>
  );
};

export default VideoSection;