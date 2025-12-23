
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UnitData } from '../types';
import WordCard from './WordCard';

interface UnitPageProps {
  data: UnitData;
}

const UnitPage: React.FC<UnitPageProps> = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accentColor = data.id === 5 ? 'rose' : 'indigo';

  return (
    <div className={`min-h-screen pb-20 bg-slate-50`}>
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-black transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Home
          </Link>
          <div className="flex items-center gap-3">
             <div className={`w-3 h-3 rounded-full bg-${accentColor}-500 shadow-lg shadow-${accentColor}-200`}></div>
             <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
               {data.title}
             </h1>
          </div>
          <div className="hidden md:block text-slate-400 font-bold text-sm">
            {data.words.length} Vocabulary Words
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className={`w-full py-16 px-6 bg-gradient-to-r ${data.id === 5 ? 'from-rose-500 to-pink-500' : 'from-indigo-600 to-blue-500'} mb-12`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{data.title}</h2>
            <p className="text-white/80 text-xl font-medium max-w-lg">
              Unlock the power of language! Study these {data.words.length} essential words to improve your reading and writing.
            </p>
          </div>
          <div className="p-8 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/20">
            <span className="text-8xl md:text-9xl" role="img" aria-label="Decoration">
              {data.id === 5 ? '📔' : '📘'}
            </span>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <main className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.words.map((word) => (
            <WordCard key={word.id} entry={word} unitId={data.id} />
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <footer className="mt-20 flex justify-center">
         <Link to="/" className="flex flex-col items-center gap-2 group">
            <div className="p-4 bg-white rounded-full shadow-lg border-2 border-slate-100 group-hover:border-indigo-200 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
               </svg>
            </div>
            <span className="text-sm font-black text-slate-500 uppercase tracking-widest">Back Home</span>
         </Link>
      </footer>
    </div>
  );
};

export default UnitPage;
