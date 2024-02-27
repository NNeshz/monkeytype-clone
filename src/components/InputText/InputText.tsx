import { useAppStore } from "../../state/appStore";
import "./InputText.css";

export default function InputText() {

    const text = useAppStore(state => state.text);

    return (
        <div className="wrapper">
            <input type="text" className="input-field" />
            <div className="content-box">
                <div className="typing-text">
                    <p>
                        {
                            text.split("").map((char, index) => {
                                return (
                                    <span key={index}>{char}</span>
                                )
                            })
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}
