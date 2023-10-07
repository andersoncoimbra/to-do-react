const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <h2>Buscar</h2>
            <input
                type="text"
                placeholder="Buscar tarefa"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
    }
export default Search;