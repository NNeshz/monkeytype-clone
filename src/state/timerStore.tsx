import { create } from 'zustand';

type TimerStore = {
    time: number;
    startTimer: boolean;
};

type Actions = {
    setTime: (time: number) => void;
    useDecrementTimer: () => void;
}


export const useTimerStore = create<TimerStore & Actions>((set) => ({
    time: 30,
    startTimer: false,
    setTime: (time) => set({ time }),
    useDecrementTimer: () => {
        set(({ startTimer: true }));
        const intervalId = setInterval(() => {
            set((state) => {
                const newTime = state.time - 1;
                if (newTime === 0) {
                    clearInterval(intervalId);
                }
                return { time: newTime };
            });
        }, 1000);
        set(({ startTimer: true }));
    }
}));