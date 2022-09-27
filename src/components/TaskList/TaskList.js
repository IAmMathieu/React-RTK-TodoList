import TaskItem from "../TaskItem/TaskItem";
import styles from './TaskList.module.scss'
import { useSelector } from 'react-redux'
import { toggleTask, deleteTask } from "../../lib/todoSlice";

const TasksList = (props) => {

  const tasks = useSelector((state) => state.todo)
  return (
    <div className={styles.TaskListContainer}>
      {tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TasksList;