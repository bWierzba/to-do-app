import React from 'react';

const Task = (props) => {

  const style = {
    color: 'red'
  }

  const { date, active, importance, finishDate } = props.task



  if (active) {
    return (
      <div>
        <p>
          <strong style={importance ? style : null}>{props.task.text}</strong> - do {props.task.date}
          <span> </span>
          <button onClick={() => props.done(props.task.id)}>zrobione</button>
          <span> </span>
          <button onClick={() => props.delete(props.task.id)}>x</button>
        </p>
      </div >
    )
  } else {
    const finish = new Date(finishDate).toLocaleString()
    return (
      <p>
        <strong>{props.task.text}</strong><em> (zrobić do {date})</em>
        <br />
        zrobione {finish} <button onClick={() => props.delete(props.task.id)}>x</button>
      </p>
    )
  }

}

export default Task