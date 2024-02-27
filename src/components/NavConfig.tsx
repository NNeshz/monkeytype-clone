import { useAppStore } from "../state/appStore"

export default function NavConfig() {

    const setTime = useAppStore(state => state.setTime);
    const setText = useAppStore(state => state.setText);
    const languaje = useAppStore(state => state.languaje);
    const time = useAppStore(state => state.time);

    return (
        <nav className="flex bg-zinc-800 rounded-md py-1 justify-around">
            <ul className="flex gap-x-4">
                <button
                    onClick={() => setText("ES")}
                    className={languaje == "ES" ? "text-emerald-400" : "text-slate-300"}
                >
                    ES
                </button>
                <button
                    onClick={() => setText("EN")}
                    className={languaje == "EN" ? "text-emerald-400" : "text-slate-300"}
                >
                    EN
                </button>
            </ul>
            <ul className="flex gap-x-4">
                <button onClick={() => setTime(15)} className={time == 15 ? "text-emerald-400" : "text-slate-300"}>15</button>
                <button onClick={() => setTime(30)} className={time == 30 ? "text-emerald-400" : "text-slate-300"}>30</button>
                <button onClick={() => setTime(60)} className={time == 60 ? "text-emerald-400" : "text-slate-300"}>60</button>
            </ul>
        </nav>
    );
}
