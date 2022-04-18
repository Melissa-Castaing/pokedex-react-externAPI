import './style.scss';

export default function Search() {
  return (
    <div className="search">
      <nav className="search__nav">
        <button
          className="search__btn"
          type="button"
          // onClick={onZenClick}
        >
          Pokédex
        </button>
        <input
          className="search__input"
          type="search"
          placeholder="Trier par nom..."
        />
        <button
          className="search__btnList"
          type="button"
        >
          Liste types
        </button>
      </nav>
    </div>
  );
}
