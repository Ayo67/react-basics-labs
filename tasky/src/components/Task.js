import React from 'react';

const Task = (props) => {

    const getPriorityColor = () => {
        // Case-insensitive comparison for priority
        switch (props.priority.toLowerCase()) {
          case 'low':
            return 'green';  // Low priority - green color
          case 'medium':
            return '#ffc107'; // Medium priority - amber color
          case 'high':
            return 'red';    // High priority - red color
          default:
            return '#5bb4c4'; // Default background color
        }
      };


    return (
            <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={{ backgroundColor: getPriorityColor() }}> <strong>{props.priority.toUpperCase()}</strong></p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
            </div>  
    );
}
export default Task;