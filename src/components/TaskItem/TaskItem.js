import { useDispatch } from "react-redux";
import styles from "./TaskItem.module.scss";

const TaskItem = (props) => {
  const { task, toggleTask, deleteTask } = props;

  const dispatch = useDispatch();

  return (
    <div className={styles.taskContainer}>
      <label className={styles.taskLabel}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id))}
        />
      </label>
      <div className={styles.taskTitle}>{task.text}</div>
      <div
        className={styles.taskDelete}
        onClick={() => dispatch(deleteTask(task.id))}
        role="button"
        style={{ padding: "5px", marginLeft: "20px" }}
      >
        <span>&#10006;</span>
      </div>
    </div>
  );
};

export default TaskItem;
