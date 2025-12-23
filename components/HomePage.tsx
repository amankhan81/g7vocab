
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-4xl w-full text-center space-y-12">
        <header className="space-y-4 animate-fadeIn">
          <div className="inline-block p-4 bg-white rounded-3xl shadow-xl mb-6">
            <span className="text-6xl" role="img" aria-label="Book logo">📚</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight leading-tight">
            Vocabulary <span className="text-indigo-600">Practice</span> App
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-xl mx-auto">
            Master Unit 5 and Unit 6 vocabulary with fun, interactive flashcards and audio pronunciations!
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <Link to="/unit-5" className="group">
            <div className="h-64 relative bg-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center transition-all duration-300 transform group-hover:-translate-y-3 group-hover:scale-105 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] group-hover:shadow-[0_40px_80px_rgba(244,_63,_94,_0.2)] border-b-8 border-rose-500 overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-8xl">🚀</span>
               </div>
               <span className="text-5xl mb-4" role="img" aria-label="Unit 5">🎯</span>
               <h2 className="text-3xl font-black text-slate-800 group-hover:text-rose-500 transition-colors">Unit 5 Words</h2>
               <p className="text-slate-400 font-bold mt-2">20 New Words</p>
               <div className="mt-6 px-6 py-2 bg-rose-500 text-white font-black rounded-full shadow-lg shadow-rose-200">START STUDYING</div>
            </div>
          </Link>

          <Link to="/unit-6" className="group">
            <div className="h-64 relative bg-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center transition-all duration-300 transform group-hover:-translate-y-3 group-hover:scale-105 shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] group-hover:shadow-[0_40px_80px_rgba(99,_102,_241,_0.2)] border-b-8 border-indigo-500 overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-8xl">💡</span>
               </div>
               <span className="text-5xl mb-4" role="img" aria-label="Unit 6">⚡</span>
               <h2 className="text-3xl font-black text-slate-800 group-hover:text-indigo-500 transition-colors">Unit 6 Words</h2>
               <p className="text-slate-400 font-bold mt-2">20 New Words</p>
               <div className="mt-6 px-6 py-2 bg-indigo-500 text-white font-black rounded-full shadow-lg shadow-indigo-200">START STUDYING</div>
            </div>
          </Link>
        </div>

        <footer className="pt-12 flex flex-col items-center gap-6">
          <div className="text-slate-400 font-bold text-sm uppercase tracking-widest">
            Premium Student Learning Experience
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full shadow-md border border-slate-100 text-slate-600 font-medium text-sm transition-transform hover:scale-105">
            <span className="text-indigo-500" role="img" aria-label="sparkles">✨</span>
            Created by: <span className="text-indigo-600 font-black">Amanullah Khan</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
