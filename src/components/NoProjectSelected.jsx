import noProjectImage from '../assets/no-projects.png';
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
    return <div className="mt-2 text-center w-2/3">
        <img src={noProjectImage} alt='пустой список' className='w-16 h-16 object-contain mx-auto' />
        <h2 className='text-xl font-bold text-stone-500 my-4'>Нет выбранных проектов</h2>
        <p className='text-stone-400 mb-4'>Выберите проект или начните новый</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>Создать новый проект</Button>
        </p>
    </div>
}