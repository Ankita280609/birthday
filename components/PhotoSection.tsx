import React from 'react';
import birthdayPhoto from '../assets/birthday_photo.jpg'; 

const PhotoSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-white p-8 md:p-12 rounded-3xl border border-pink-100 shadow-lg flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 space-y-6 order-2 md:order-1">
        <h2 className="text-3xl font-bold text-pink-800 hindi-font">
          दुनिया की सबसे खूबसूरत महिला
        </h2>
        
        <blockquote className="border-l-4 border-pink-300 pl-4 italic text-xl text-gray-700 hindi-font leading-relaxed">
          "माँ, आपकी खूबसूरती आपकी सादगी में है, आपकी ताकत आपकी ममता में है, और आपकी महानता आपकी निस्वार्थ सेवा में है।"
        </blockquote>

        <div className="space-y-2">
          <p className="text-pink-600 font-semibold hindi-font">
            बेहतरीन माँ | अटूट शक्ति | अनंत प्यार
          </p>
        </div>
      </div>

      <div className="w-full md:w-80 h-80 relative order-1 md:order-2">
        <div className="absolute inset-0 bg-pink-200 rounded-2xl rotate-3"></div>
        <img 
          src={birthdayPhoto} 
          alt="The most beautiful woman"
          className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white transition-transform hover:rotate-0"
        />
        <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg z-20">
          <span className="text-2xl">✨💖</span>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;