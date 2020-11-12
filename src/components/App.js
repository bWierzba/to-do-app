import React from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends React.Component {
  counter = 6
  state = {
    tasks: [
      // {
      //   id: 0,
      //   text: 'siądz na puszke montera',
      //   date: '2022-02-15',
      //   importance: false,
      //   active: true,
      //   finishDate: null
      // },
      // {
      //   id: 1,
      //   text: 'siądz na butle od vanisha',
      //   date: '2021-02-15',
      //   importance: false,
      //   active: true,
      //   finishDate: null
      // },
      // {
      //   id: 2,
      //   text: 'siądz na wiertare',
      //   date: '2023-02-15',
      //   importance: false,
      //   active: true,
      //   finishDate: null
      // },
      // {
      //   id: 3,
      //   text: 'siądz na swojej starej',
      //   date: '2028-02-15',
      //   importance: false,
      //   active: true,
      //   finishDate: null
      // },
      // {
      //   id: 4,
      //   text: 'siądz na tysiaku',
      //   date: '2028-02-15',
      //   importance: false,
      //   active: true,
      //   finishDate: null
      // },
      // {
      //   id: 5,
      //   text: 'siądz na sztolec',
      //   date: '2021-02-15',
      //   importance: true,
      //   active: true,
      //   finishDate: null
      // }
    ]
  }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({ tasks })
  }

  changeTaskStatus = (id) => {
    let tasks = [...this.state.tasks]
    const index = tasks.findIndex(task => task.id === id)
    tasks[index].active = false
    const newDate = new Date().getTime()
    tasks[index].finishDate = newDate
    this.setState({ tasks })
  }

  addTask = (text, date, importance) => {
    const task = {
      id: this.counter,
      text,
      date,
      importance,
      active: true,
      finishDate: null
    }
    this.counter++
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} done={this.changeTaskStatus} delete={this.deleteTask} />

      </div>
    );
  }
}

export default App;
