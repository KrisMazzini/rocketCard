import './styles.css'

export function Alert({errorMessage, onclick}) {
    return (
        <div className="alert" onClick={onclick}>
            <img src="/error.svg" alt="error" />
            <div className="message-container">
                <p className="error">{errorMessage || "Error"}</p>
                <p className="close">Click here to close.</p>
            </div>
        </div>
    )
}