import { useTimerStore } from "../state/timerStore";

export default function Timer() {

    const time = useTimerStore((state) => state.time);
    const setTime = useTimerStore((state) => state.setTime);

    return (
        <div className="flex w-full justify-between items-center">
            <span className="text-2xl pl-5 text-emerald-400">{time} s</span>
            <nav className="flex gap-x-4 px-5 py-1 bg-zinc-800 rounded">
                <button onClick={() => setTime(15)} className={time == 15 ? "text-emerald-400" : "text-white"}>15</button>
                <button onClick={() => setTime(30)} className={time == 30 ? "text-emerald-400" : "text-white"}>30</button>
                <button onClick={() => setTime(60)} className={time == 60 ? "text-emerald-400" : "text-white"}>60</button>
            </nav>
        </div>
    )
}
