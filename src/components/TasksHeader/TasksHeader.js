import { useSelector } from 'react-redux';
import styles from './TasksHeader.module.scss'

const TasksHeader = (props) => {
  const tasks = useSelector((state) => state.todo);
  const undoneTasks = tasks.filter((t) => t.done === false);

  return (
    <header>
      <h1 className={styles.title} >React Todo List</h1>
      <p className={styles.taskCounter} >
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
