import './styles.css'

export function SearchProfile({onchange, onclick}) {
    return (
        <div className="search-profile">
            <input type="text" placeholder='Username' onChange={onchange}/>
            <button><img src="/search.svg" alt="search" onClick={onclick} /></button>
        </div>
    )
}