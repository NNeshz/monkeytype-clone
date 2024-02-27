import { useEffect } from "react";
import { useAppStore } from "../state/appStore"

export default function InputText() {

    const text  = useAppStore(state => state.text);
    const setText = useAppStore(state => state.setText);

    useEffect(() => {
        setText("EN");
    }, [setText]);

    return (
        <div>
            <input type="text" className="absolute opacity-0 -z-10"/>
            <div className="hidden h-64 scrollbar-hide">
                <p>{text}</p>
            </div>
        </div>
    )
}
