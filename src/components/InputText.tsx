import { useAppStore } from "../state/appStore";

export default function InputText() {

    const text = useAppStore(state => state.text);
    const handleKeyPress = useAppStore(state => state.handleKeyPress);

    return (
        <div className="mt-10">
            <input 
                className="opacity-5 absolute bg-zinc-500"
                type="text"
                onChange={(e: KeyboardEvent<HTMLInputElement>) => handleKeyPress(e)}/>
            <div className="overflow-hidden max-h-64">
                <p className="text-lg text-justify tracking-wide break-all opacity-10">
                    {text}
                </p>
            </div>
        </div>
    )
}
