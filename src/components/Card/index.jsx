import './styles.css'

export function Card({profile}) {
    return (
        <div className="card-container">
            <div className="card">
                <header>
                    <div className="logo-container">
                        <img src="/logo.svg" alt="logo" className='logo'/>
                    </div>
                    <h1>{profile.login}</h1>
                </header>
                <footer>
                    <img src="/logo.svg" alt="logo" className='logo' />
                    <h2>Rocketcard</h2>
                </footer>
            </div>
        </div>
    )
}