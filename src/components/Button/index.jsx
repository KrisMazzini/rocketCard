import './styles.css'

export function Button({text, onclick}) {
    return (
        <button className="button" onClick={onclick}>
            {text || "Button"}
        </button>
    )
}