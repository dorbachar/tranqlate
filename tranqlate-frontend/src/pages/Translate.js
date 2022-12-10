import {useState} from "react";

export function Translate() {
    const [text, setText] = useState("");
    const [translation, setTranslation] = useState("");
    return (
        <>
            <form onSubmit={e => {
                e.preventDefault();
                console.log(translation);
                setText("");
                setTranslation("Trash");
            }}>
                <input type="text"
                       placeholder=""
                       value={text}
                       onChange={
                           (e) => {
                               setText(e.target.value);
                               setTranslation("");
                           }
                       }
                />
                <button type="submit">Translate</button>
            </form>
            <p>{translation}</p>
        </>
    )
}