import './style.scss';

const Searchbar = () => {
    return(
        <div className="searchbar">
            <i className="bi bi-search searchbar__icon"></i>
            <input className="searchbar__input" placeholder="Search..." type="text"/>
        </div>
    )
}

export default Searchbar;