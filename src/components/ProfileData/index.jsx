import './styles.css'

export function ProfileData({icon, text}) {
    return (
        <div className="profile-data">
            <img src={icon} alt="Icon" className="icon" />
            <p>{text}</p>
        </div>
    )
}