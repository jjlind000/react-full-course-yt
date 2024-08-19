import React, { useState } from 'react';

// function-based component

export default function ToDoList(){

    const [tasks, setTasks ] = useState([]); // initial state will be an empty array
    const [ newTask, setNewTask ] = useState("");

    function handleInputChange(event) { // function for a text box when we type something
        setNewTask(event.target.value); // this propagates text changes in the box to the newTask variable and hence updates the input box content
    }
    function addTask(){
        if (newTask.trim() === "")        
            return;
        setTasks(_tasks => [..._tasks, newTask]);
        setNewTask("");
    }
    function deleteTask(index){
        //console.log("index = " + index);
        const updatedTasks = tasks.filter((_, idx) => idx !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if (index > 0 ) // if already at top nothing to do 
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = 
                [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if (index < tasks.length -1 ) // if already at top nothing to do 
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = 
                [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>

            <div>
                <input  type="text" 
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={handleInputChange}
                />
                <button className='add-button' 
                        onClick={addTask}>Add task</button>
                <ol>
                    { tasks.map((element, index) => 
                        <li key={index}>
                            <span className="text">{element}</span> 
                            {/* we have to use an arrow function in onClick to prevent it being invoked immediately */}
                            <button className='delete-button' onClick={() => deleteTask(index)}>Delete task</button>
                            <button className='move-button' onClick={() => moveTaskUp(index)}>Move task 👆</button>
                            <button className='move-button' onClick={() => moveTaskDown(index)}>Move task 👇</button>
                        </li>)}
                </ol>        
            </div>

        </div>
    );
}
