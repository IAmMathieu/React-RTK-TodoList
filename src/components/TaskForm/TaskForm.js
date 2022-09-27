import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../lib/todoSlice";
import styles from "./TaskForm.module.scss";

const TaskForm = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask(text));

    setText("");
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <input
        className={styles.taskInput}
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
