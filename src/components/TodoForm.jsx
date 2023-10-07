import {useState} from "react";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;

        addTodo(value, category);
        setCategory('');
        setValue('');
    };
    return (
        <div className="todo-form">
            <h1>Criar Tarefa</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option defaultValue="trabalho">Trabalho</option>
                <option value="estudos">Estudos</option>
                <option value="casa">Casa</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
        </div>
    );
    };

export default TodoForm;