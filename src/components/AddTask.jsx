import React from 'react';

class AddTask extends React.Component {
  minDate = new Date().toISOString().slice(0, 10)
  state = {
    text: "",
    checked: false,
    date: this.minDate
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  handleText = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  handleImportance = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }
  handleClick = () => {
    const { text, date, checked } = this.state
    if (text.length > 2) {


      const add = this.props.add(text, date, checked)
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        })
      }
    } else {
      alert('za krótki opis taska')
    }
  }
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1
    maxDate = maxDate + '-12-31'
    return (
      <>
        <div className='form'>
          <input type="text" placeholder='dodaj zadanie' value={this.state.text} onChange={this.handleText} />
          <input type="checkbox" checked={this.state.checked} id='important' onChange={this.handleImportance} />
          <label htmlFor="important" id='important'> priorytet</label>
          <br />
          <label htmlFor="date">do kiedy zrobić </label>
          <input type="date" id='date' value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
          <br />
          <button onClick={this.handleClick}>dodaj</button>
        </div>
        <hr />
      </>
    )
  }
}

export default AddTask