function Task({taskName}) {
    function handleDone() {

    }

    function handleRemove() {
        
    }

    return (
        <>
            {taskName}
            <button onClick={handleDone}>
                DONE
            </button>
            <button onClick={handleRemove}>
                REMOVE
            </button>
        </>
        
        
        
    );
}

export default Task;