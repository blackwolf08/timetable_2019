import React, { Component } from 'react';
import ProgressBar from 'react-progressbar';

export default class CurrentClass extends Component {
  state = {
    completed: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        completed: this.state.completed + 1
      });
    }, 1000);
  }
  render() {
    return (
      <div className='current_class_root'>
        <div className='current_class_row row_one'>
          <div>Artificial Intelligance</div>
          <div className='current_class_classroom'>FF9</div>
        </div>
        <div className='current_class_row teacher_name'>Parul Agarwal</div>
        <div className='time'>10:00 - 10:50</div>
        <ProgressBar
          className='progress'
          completed={this.state.completed > 100 ? 100 : this.state.completed}
        />
      </div>
    );
  }
}
