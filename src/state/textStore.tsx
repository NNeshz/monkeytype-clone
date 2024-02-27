import { create } from "zustand";
import getRandomWords from "../utils/getWords";

type TextStore = {
    text: string;
    setText: (words: string[]) => string[]; 
};

// ✅ TODO: Create a store for the text that the user will type
// ✅ TODO: Split the text into words and store them in an array
// ✅ TODO: Create a function that compares the actual words with the words typed by the user


export const useTextStore = create<TextStore>((set) => ({
    text: getRandomWords(100).join(" "), 
    setText: (words) => {
        set({ text: words.join(" ") }); 
        return words; 
    },
}));