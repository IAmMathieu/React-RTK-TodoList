import { Provider } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TasksHeader from "./components/TasksHeader/TasksHeader";
import TasksList from './components/TaskList/TaskList'
import { store } from "./lib/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <article>
            <TasksHeader />
            <TasksList />
            <footer>
              <TaskForm />
            </footer>
          </article>
        </div>
      </div>
    </Provider>
  );
}

export default App;
