import { useAppStore } from "../state/appStore"

export default function Timer() {

  const time = useAppStore(state => state.time);

  return (
    <div className="flex justify-between">
        <span className="text-2xl text-emerald-400">{time}</span>
        <span className="text-2xl">WPM: </span>
    </div>
  )
}
