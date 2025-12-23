
import React, { useState } from 'react';
import { WordEntry } from '../types';

interface WordCardProps {
  entry: WordEntry;
  unitId: number;
}

const WordCard: React.FC<WordCardProps> = ({ entry, unitId }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    // Expected format: ./unit5/01.mp3 or ./unit6/01.mp3
    const audioPath = `./unit${unitId}/${entry.id}.mp3`;
    const audio = new Audio(audioPath);
    
    setIsPlaying(true);
    audio.play().catch(err => {
      console.warn(`Audio file not found: ${audioPath}. Make sure audio files are placed in unit5/ and unit6/ folders.`);
      alert(`Audio file missing: ${audioPath}\nPlease ensure audio files (01.mp3 to 20.mp3) are in the unit${unitId}/ directory.`);
      setIsPlaying(false);
    });
    
    audio.onended = () => setIsPlaying(false);
  };

  // Helper to highlight the keyword in the example sentence
  const renderExample = (text: string, keyword: string) => {
    const parts = text.split(new RegExp(`(${keyword})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === keyword.toLowerCase() ? (
            <b key={i} className="text-indigo-600 font-extrabold">{part}</b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="group relative bg-white rounded-3xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl shadow-lg border-b-4 border-r-4 border-gray-100 flex flex-col h-full overflow-hidden">
      {/* 3D Gradient Accent */}
      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${unitId === 5 ? 'from-pink-500 to-rose-400' : 'from-indigo-500 to-blue-400'}`}></div>

      {/* Header: Number + Word + Emoji + Audio */}
      <div className="flex justify-between items-start mb-4 pt-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded-lg">
            {entry.id}
          </span>
          <h3 className="text-2xl font-black text-gray-800 capitalize tracking-tight">
            {entry.word}
          </h3>
          <span className="text-2xl" role="img" aria-label="meaning emoji">
            {entry.emoji}
          </span>
        </div>
        <button 
          onClick={playAudio}
          className={`p-2 rounded-full transition-all active:scale-95 ${isPlaying ? 'bg-indigo-100 text-indigo-600 animate-pulse' : 'bg-gray-50 text-gray-400 hover:bg-indigo-50 hover:text-indigo-500'}`}
          title="Pronounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4 flex-grow">
        <section>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Meaning</h4>
          <p className="text-gray-700 leading-relaxed font-medium">
            {entry.meaning}
          </p>
        </section>

        <section className="bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100">
          <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-1">Example</h4>
          <p className="text-gray-700 italic">
            "{renderExample(entry.example, entry.word)}"
          </p>
        </section>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <section>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">Synonyms</h4>
            <div className="flex flex-wrap gap-1">
              {entry.synonyms.map((s, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-md border border-emerald-100">
                  {s}
                </span>
              ))}
            </div>
          </section>
          <section>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-2">Antonyms</h4>
            <div className="flex flex-wrap gap-1">
              {entry.antonyms.map((a, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-rose-50 text-rose-700 text-[11px] font-bold rounded-md border border-rose-100">
                  {a}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
