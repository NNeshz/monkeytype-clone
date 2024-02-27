import { useTextStore } from "../state/textStore"

export default function TextContainer() {
  return (
    <div className="mt-10">
        <textarea
            className="w-full h-96 p-5 bg-zinc-800 rounded"
            placeholder="Type your text here..."
            onChange={(e) => useTextStore.setState({ text: e.target.value })}
        >
            {useTextStore((state) => state.text)}
        </textarea>
    </div>
  )
}
