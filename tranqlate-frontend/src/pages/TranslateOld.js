import {useState} from "react";
import styles from "../styles/translate.module.scss"

export function TranslateOld() {
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
                <button type="submit"
                        className={styles["translate-button"]}
                >Translate
                </button>
            </form>
            <p>{translation}</p>
        </>
    )
}