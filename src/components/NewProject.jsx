import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {

    const modal = useRef();

    const title = useRef();
    const descr = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescr = descr.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' ||
            enteredDescr.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            descr: enteredDescr,
            dueDate: enteredDueDate
        });
    }

    return <>
        <Modal ref={modal} buttonCaption="Закрыть">
            <h2 className='text-xl font-bold text-stone-700 my-4'>Неверный ввод</h2>
            <p className='text-stone-600 mb-4'>Упс ... кажется вы забыли ввести значение</p>
            <p className='text-stone-600 mb-4'>Пожалуйста убедитесь, что правильно ввели все поля</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Отменить</button></li>
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 ">Сохранить</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Название" />
                <Input ref={descr} label="Описание" textarea />
                <Input type="date" ref={dueDate} label="Дата выполнения" />
            </div>
        </div>
    </>
}