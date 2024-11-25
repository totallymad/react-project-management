import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return <section>
        <h2 className="text-2xl font-black text-stone-700 mb-4">Задачи</h2>
        <NewTask onAdd={onAdd} />
        {tasks.length === 0 && <p className="text-stone-800 my-4">У этого проекта пока ещё нет ни одной задачи.</p>}
        {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map(task =>
                <li className="flex justify-between my-4" key={task.id}>
                    <span >{task.text}</span>
                    <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">Очистить</button>
                </li>)}
        </ul>}
    </section>
}
