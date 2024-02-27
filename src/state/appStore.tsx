import { create } from "zustand";
import { paragraphsSpanish, paragraphsEnglish } from "../data/paragraphs";

type AppState = {
    text: string;
    userText: string;
    time: number;
    languaje: string;
    isTyping: boolean;
}

type AppActions = {
    setText: (languaje: string) => void;
    setTime: (time: number) => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const useAppStore = create<AppState & AppActions>((set) => ({
    text: "",
    userText: "",
    time: 30,
    languaje: "EN",
    isTyping: false,
    setText: (languaje) => {
        if (languaje === "EN") {
            const randomIndex = Math.floor(Math.random() * paragraphsEnglish.length);
            set({ text: paragraphsEnglish[randomIndex], languaje: "EN" });
        } else if (languaje === "ES") {
            const randomIndex = Math.floor(Math.random() * paragraphsSpanish.length);
            set({ text: paragraphsSpanish[randomIndex], languaje: "ES" });
        }
    },
    setTime: (time) => {
        set({ time });
    },
    handleKeyPress: (e) => {
        set((state) => ({ userText: state.userText + e.key }));
    }
}));