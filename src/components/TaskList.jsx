import React from 'react';
import Task from './Task'
const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active)
  const done = props.tasks.filter(task => !task.active)

  done.sort((a, b) => {
    if (a.finishDate > b.finishDate) {
      return -1
    }
    if (a.finishDate < b.finishDate) {
      return 1
    }
    return 0
  })

  active.sort((a, b) => {
    if (a.text.toLowerCase() < b.text.toLowerCase()) {
      return -1
    }
    if (a.text.toLowerCase() > b.text.toLowerCase()) {
      return 1
    }
    return 0
  })

  const activeTasks = active.map(task => <Task key={task.id} task={task} done={props.done} delete={props.delete} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} done={props.done} delete={props.delete} />)

  return (
    <>
      <div className='active'>
        <h1>lista tasków</h1>
        {activeTasks.length > 0 ? activeTasks : <p>brak zadań</p>}
      </div>
      <hr />
      <div>
        <h1>taski zrobione ({done.length})</h1>
        {done.length > 5 && <p>wyświetlonych jest 5 ostatnich zdań</p>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  )
}

export default TaskList