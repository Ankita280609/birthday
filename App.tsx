
import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import Header from './components/Header';
import LetterSection from './components/LetterSection';
import VideoSection from './components/VideoSection';
import PhotoSection from './components/PhotoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [hasStarted]);

  if (!hasStarted) {
    return (
      <div className="fixed inset-0 bg-pink-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-8 rounded-3xl shadow-xl border-2 border-pink-200 floating">
          <h1 className="text-3xl font-bold text-pink-600 hindi-font mb-4">नमस्ते माँ ❤️</h1>
          <p className="text-gray-600 hindi-font mb-6 leading-relaxed">
            आपके जन्मदिन के इस खास मौके पर, मेरे दिल के कुछ जज्बात सिर्फ आपके लिए।
          </p>
          <button
            onClick={() => setHasStarted(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 hindi-font"
          >
            तोहफा देखें ✨
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-floral overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-16 max-w-4xl">
        <LetterSection />
        <VideoSection />
        <PhotoSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
