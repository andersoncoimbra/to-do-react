const Filter = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p>Status</p>
                    <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
                        <option value="all">Todos</option>
                        <option value="completed">Completos</option>
                        <option value="incompleted">Incompletos</option>
                    </select>
                </div>
                <div>
                <h2>Ordem alfabetica</h2>
                <button onClick={(e) => setSort("asc")}>Ascendente</button>
                <button onClick={ (e) => setSort("desc")}>Descendente</button>
            </div>
            </div>

        </div>
    )
}

export default Filter