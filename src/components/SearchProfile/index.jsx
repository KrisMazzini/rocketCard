import './styles.css'

export function SearchProfile({onchange, onclick}) {
    return (
        <div className="search-profile">
            <input type="text" placeholder='Username' onChange={onchange}/>
            <button onClick={onclick}><img src="/search.svg" alt="search" /></button>
        </div>
    )
}