import './styles.css'

export function Alert({errorMessage}) {

    function closeAlert() {
        const alert = document.querySelector(".alert")
        alert.style.display = "none"
    }

    return (
        <div className="alert" onClick={closeAlert}>
            <img src="/error.svg" alt="error" />
            <div className="message-container">
                <p className="error">{errorMessage || "Error"}</p>
                <p className="close">Click here to close.</p>
            </div>
        </div>
    )
}