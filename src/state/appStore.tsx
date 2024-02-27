import { create } from "zustand";
import { paragraphsSpanish, paragraphsEnglish } from "../data/paragraphs";

type AppState = {
    text: string;
    mistakes: number;
    words: number;
    userText: string;
    time: number;
    languaje: string;
    isTyping: boolean;
}

type AppActions = {
    setText: (languaje: string) => void;
    setTime: (time: number) => void;
    startTimer: () => void;
    startTyping: () => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function calculateAccuracy(text: string, userText: string): number {
    let correctCharacters = 0;
    for (let i = 0; i < userText.length; i++) {
        if (userText[i] === text[i]) {
            correctCharacters++;
        }
    }
    return (correctCharacters / text.length) * 100;
}

export const useAppStore = create<AppState & AppActions>((set) => ({
    text: "",
    userText: "",
    time: 30,
    words: 1,
    mistakes: 0,
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
    startTimer: () => {
        const intervalId = setInterval(() => {
            set((state) => {
                if (state.time > 0) {
                    return { time: state.time - 1 };
                } else {
                    clearInterval(intervalId);
                    return { time: 0 };
                }
            });
        }, 1000);
    },
    startTyping: () => {
        set({ isTyping: true });
        const intervalId = setInterval(() => {
            set((state) => {
                if (state.time > 0) {
                    return { time: state.time - 1 };
                } else {
                    clearInterval(intervalId);
                    const accuracy = calculateAccuracy(state.text, state.userText);
                    return { isTyping: false, time: 0, accuracy };
                }
            });
        }, 1000);
    },
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => {
        set((state) => {
            const currentLength = state.userText.length;
            const nextChar = state.text[currentLength];
            if (e.key === nextChar) {
                return { userText: state.userText + e.key };
            } else {
                // Manejar el error de tipeo aquí, si es necesario
                return state;
            }
        });
    }
}));