
export interface WordEntry {
  id: string; // e.g. "01"
  word: string;
  emoji: string;
  meaning: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface UnitData {
  title: string;
  id: number;
  words: WordEntry[];
}
