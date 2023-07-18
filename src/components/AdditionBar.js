import { useState } from "react";
import Task from "./Task";

function AdditionBar() {
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
        <>
            <div id="input">
                <input type="text" value={inputValue} onChange={handleChange} />
                {inputValue && <button onClick={handleClick}>+</button>}
            </div>


            <ul id="taskList">
                {tasks.map((task, index) =>
                    <li key={index}>
                        {task}

                        <button onClick={() => handleDone({ task, index })}>
                            DONE
                        </button>
                        <button onClick={() => handleTRemove(index)}>
                            REMOVE
                        </button>
                    </li>
                )}
            </ul>

            <div className="Title">
                DONE
            </div>

            <ul id="completedList">
                {completed.map((complete, index) =>
                    <li key={index}>
                        {complete}

                        <button onClick={() => handleShift({ complete, index })}>
                            INCOMPLETE
                        </button>
                        <button onClick={() => handleCRemove(index)}>
                            REMOVE
                        </button>
                    </li>
                )}
            </ul>
        </>

    )

}

export default AdditionBar;