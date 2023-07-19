import { useState } from "react";
import './App.css';

function App() {
  var taskList = []
    var completedList = []
    const [tasks, setTasks] = useState(taskList);
    const [completed, setCompleted] = useState(completedList);
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    // const handleRemove = (index) => 

    function handleTRemove(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function handleCRemove(index) {
        setCompleted(completed.filter((_, i) => i !== index));
    }

    function handleClick() {
        setTasks((prevTasks) => [
            ...prevTasks,
            inputValue
        ])

        // Resets input value
        setInputValue("")
    }

    function handleDone({ task, index }) {
        setCompleted((prevTasks) => [
            ...prevTasks,
            task
        ])

        handleTRemove(index)
    }


    function handleShift({ complete, index }) {
        setTasks((prevTasks) => [
            ...prevTasks,
            complete
        ])

        handleCRemove(index)
    }

  return (
    <div className="App">        
            <div className="title">
                Task Manager
            </div>

            <div>
                <input type="text" value={inputValue} onChange={handleChange} id="task-input" />
                {inputValue && <button onClick={handleClick} id="add-button ">+</button>}
            </div>


            <ul id="task-list">
                {tasks.length === 0 && <div id="nothing-text">There's nothing here now, add a task!</div>}

                {tasks.map((task, index) =>
                    <li key={index} className="tasks">
                        {task}

                        <button id="done-btn" onClick={() => handleDone({ task, index })}>
                            DONE
                        </button>
                        <button id="remove-btn" onClick={() => handleTRemove(index)}>
                            REMOVE
                        </button>
                    </li>
                )}
            </ul>

            <div className="title">
                Completed
            </div>

            <ul id="completed-list">
                {completed.map((complete, index) =>
                    <li key={index} className="tasks">
                        {complete}

                        <button id="incomplete-btn" onClick={() => handleShift({ complete, index })}>
                            INCOMPLETE
                        </button>
                        <button id="remove-btn" onClick={() => handleCRemove(index)}>
                            REMOVE
                        </button>
                    </li>
                )}
            </ul>

    )
    </div>
  );
}

export default App;
