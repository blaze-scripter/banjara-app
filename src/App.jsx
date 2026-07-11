import React, { useState, useEffect } from 'react';
import {
  Book,
  Music,
  Landmark,
  TrendingUp,
  User,
  Scroll,
  Flower2,
  Users,
  Flower,
  BookOpen,
  Clapperboard,
  Lightbulb,
  Crown,
  Store,
  Sprout,
  TreePine,
  UserCheck,
  Leaf,
  Calendar,
  ChevronRight,
  Menu
} from 'lucide-react';

const categories = [
  { id: 1, label: "Banjara Vedic Mantras", icon: Book },
  { id: 2, label: "Banjara Songs", icon: Music },
  { id: 3, label: "Banjara Shakti Peethas", icon: Landmark },
  { id: 4, label: "Banjara Business Development", icon: TrendingUp },
  { id: 5, label: "History and Lineage of Banjara Saints", icon: User },
  { id: 6, label: "Banjara History", icon: Scroll },
  { id: 7, label: "Banjara Matrumuni", icon: Flower2 },
  { id: 8, label: "Banjara Vaya Tradition", icon: Users },
  { id: 9, label: "Banjara Guru Tradition", icon: Flower },
  { id: 10, label: "Banjara Guru Vedic Education", icon: BookOpen },
  { id: 11, label: "Banjara Idol Installation", icon: Landmark },
  { id: 12, label: "Banjara Movies", icon: Clapperboard },
  { id: 13, label: "Banjara Innovative Ideas", icon: Lightbulb },
  { id: 14, label: "Banjara Nayak Karbhari (Traditional Leadership)", icon: Crown },
  { id: 15, label: "Banjara Pooja Store", icon: Store },
  { id: 16, label: "Banjara Agricultural System", icon: Sprout },
  { id: 17, label: "Banjara Nature Traditions", icon: TreePine },
  { id: 18, label: "Banjara Political Leaders", icon: UserCheck },
  { id: 19, label: "Banjara Yogi, Muni, Japhi, and Deeksha Gurus", icon: Flower },
  { id: 20, label: "Banjara Traditional Medicine", icon: Leaf },
  { id: 21, label: "Banjara Events", icon: Calendar }
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-[420px] mx-auto bg-white min-h-screen shadow-2xl relative flex flex-col font-sans border-x-8 border-[#342726] overflow-x-hidden">

      {/* Splash Screen Animation Overlay */}
      {showSplash && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-banjara-maroon)] animate-splash-reveal">
          <div className="flex flex-col items-center justify-center z-10 space-y-6">
            <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl bg-[var(--color-banjara-maroon)] border-2 border-[var(--color-banjara-gold)]/20">
              <img src="/favicon.png" alt="App Icon" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl font-bold text-[var(--color-banjara-gold)] font-plus-jakarta text-center px-4 tracking-tight">
              Banjara App
            </h1>
          </div>
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] pointer-events-none"></div>
        </div>
      )}

      {/* Header */}
      <header className="flex-shrink-0 bg-[#342726] flex justify-between items-center px-4 h-16 sticky top-0 z-50 relative">
        <button className="text-[#F2E5C3] hover:opacity-80 transition-opacity focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-[var(--color-banjara-gold)] font-plus-jakarta absolute left-1/2 -translate-x-1/2">
          Banjara app
        </h2>
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="w-12 h-7 bg-[var(--color-banjara-gold)] flex items-center justify-center hover:opacity-90 transition-opacity rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#F2E5C3]"
          >
            <img src="/lang-icon.png" alt="Language Switch" className="w-8 h-8 object-contain" />
          </button>

          {/* Language Popup Panel */}
          {showLangMenu && (
            <div className="absolute top-full right-0 mt-2 w-32 bg-[#FCF5E3] border border-[var(--color-banjara-gold)] rounded-xl shadow-xl overflow-hidden z-[100]">
              <div className="absolute -top-[5px] right-[20px] w-[10px] h-[10px] bg-[#FCF5E3] border-l border-t border-[var(--color-banjara-gold)] rotate-45"></div>
              <div className="flex flex-col relative z-10 text-[var(--color-banjara-maroon)] font-medium font-plus-jakarta text-sm">
                <button className="px-4 py-2 hover:bg-[#F2E5C3] text-left border-b border-[var(--color-banjara-gold)]/30 transition-colors">English</button>
                <button className="px-4 py-2 hover:bg-[#F2E5C3] text-left border-b border-[var(--color-banjara-gold)]/30 transition-colors">हिन्दी</button>
                <button className="px-4 py-2 hover:bg-[#F2E5C3] text-left border-b border-[var(--color-banjara-gold)]/30 transition-colors">తెలుగు</button>
                <button className="px-4 py-2 hover:bg-[#F2E5C3] text-left border-b border-[var(--color-banjara-gold)]/30 transition-colors">मराठी</button>
                <button className="px-4 py-2 hover:bg-[#F2E5C3] text-left border-b border-[var(--color-banjara-gold)]/30 transition-colors">ગુજરાતી</button>
                <button className="px-4 py-2 hover:bg-[#F2E5C3] text-left transition-colors">ಕನ್ನಡ</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Banner */}
      <section className="flex-shrink-0 px-4 py-6 flex flex-col items-center border-b border-gray-200 bg-gray-50 relative">
        <div className="relative flex justify-center items-center w-full max-w-[300px]">
          <div className="relative z-10">
            <div className="w-28 h-28 rounded-full border-4 border-[var(--color-banjara-gold)] shadow-lg bg-gray-200">
            </div>
          </div>
        </div>
        <div className="mt-4 bg-[var(--color-banjara-maroon)] border border-[var(--color-banjara-gold)] px-6 py-2 rounded-lg shadow-md z-10">
          <p className="font-poppins text-[var(--color-banjara-gold)] font-semibold text-center">
            Banjara Veda Pandit [Name]
          </p>
        </div>
      </section>

      {/* Main Content - Category Grid */}
      <main className="flex-1 px-4 py-6 bg-white z-0">
        <div className="grid grid-cols-3 gap-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[var(--color-banjara-cream)] rounded-xl p-3 flex flex-col items-center justify-between text-center border-t-[4px] border-[var(--color-banjara-gold)] shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-1 right-1 text-[var(--color-banjara-maroon)]/50">
                <ChevronRight size={16} />
              </div>
              <div className="w-10 h-10 bg-[var(--color-banjara-maroon)] rounded-full border border-[var(--color-banjara-gold)] flex items-center justify-center mb-2 z-10 shrink-0">
                <cat.icon size={20} className="text-[var(--color-banjara-gold)]" />
              </div>
              <div className="z-10 flex-1 flex flex-col justify-center">
                <p className="text-[10px] text-[var(--color-banjara-maroon)] font-bold leading-tight line-clamp-3 font-poppins">
                  {cat.id}. {cat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-shrink-0 flex flex-col items-center w-full bg-white pb-8 pt-4 border-t-8 border-gray-100 relative z-10">
        <div className="w-full h-2 mb-4 bg-[var(--color-banjara-gold)] opacity-80" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)" }}></div>
        <div className="flex items-center gap-4 bg-[var(--color-banjara-maroon)] px-6 py-3 rounded-full border border-[var(--color-banjara-gold)] shadow-lg">
          <div className="w-10 h-10 rounded-full border-2 border-[var(--color-banjara-gold)] bg-gray-200"></div>
          <p className="font-poppins text-[var(--color-banjara-gold)] font-semibold text-sm">
            Banjara Veda Pandit [Name]
          </p>
        </div>
      </footer>
    </div>
  );
}
