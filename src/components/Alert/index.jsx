import './styles.css'

export function Alert({errorMessage}) {
    return (
        <div className="alert">
            <img src="/error.svg" alt="error" />
            <p>{errorMessage || "Error"}</p>
        </div>
    )
}