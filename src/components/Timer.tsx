import { useAppStore } from "../state/appStore"

export default function Timer() {

  const time = useAppStore(state => state.time);
  const isTyping = useAppStore(state => state.isTyping);

  return (
    <div className={isTyping ? "flex justify-between" : "hidden"}>
        <span className="text-2xl text-emerald-400">{time}</span>
        <span className="text-2xl">WPM: </span>
    </div>
  )
}
