import React, { Component } from 'react';
import ProgressBar from 'react-progressbar';
import moment from 'moment';

export default class CurrentClass extends Component {
  state = {
    completed: 0,
    days: ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT'],
    index: moment().isoWeekday() - 2,
    classes: this.props.data
  };

  componentDidMount() {
    let { days, index, classes } = this.state;
    let day = days[index];
    let classInfo = classes[day];
    let OngoingClass = {
      start: '0',
      subject: 'No Class Right Now',
      venue: '-',
      teachers: '-'
    };
    classInfo.forEach(info => {
      let a = parseInt(info.start);
      let b = moment().format('h');
      if (b > a && b < a + 1) {
        OngoingClass = info;
      }
    });
    let time;
    if (OngoingClass.type === 'Lecture') {
      time = 36000;
    }
    if (OngoingClass.type === 'Practical') {
      time = 72000;
    }

    setInterval(() => {
      this.setState({
        completed: this.state.completed + 1
      });
    }, time);
  }
  render() {
    if (this.state.classes) {
      let { days, index, classes } = this.state;
      let day = days[index];
      let classInfo = classes[day];
      let OngoingClass = {
        start: '0',
        subject: 'No Class Right Now',
        venue: '-',
        teachers: '-'
      };
      classInfo.forEach(info => {
        let a = parseInt(info.start);
        let b = moment().format('h');
        if (b > a && b < a + 1) {
          OngoingClass = info;
        }
      });
      return (
        <div className='current_class_root' style={{ position: 'relative' }}>
          <div className='current_class_row row_one'>
            <div>{OngoingClass.subject}</div>
            <div className='current_class_classroom'>{OngoingClass.venue}</div>
          </div>
          <div className='current_class_row teacher_name'>
            {OngoingClass.teachers[0] + ' ' + OngoingClass.teachers[1]
              ? OngoingClass.teachers[2]
                ? OngoingClass.teachers[3]
                  ? OngoingClass.teachers[3]
                  : OngoingClass.teachers[2]
                : OngoingClass.teachers[1]
              : ''}
          </div>
          {OngoingClass.start !== '0' && (
            <div className='time'>
              {OngoingClass.start.length + 1 === 2
                ? `${OngoingClass.start}:00 - ${
                    OngoingClass.type === 'Practical'
                      ? parseInt(OngoingClass.start) + 1
                      : parseInt(OngoingClass.start)
                  }:50`
                : `${OngoingClass.start}:00 - ${
                    OngoingClass.type === 'Practical'
                      ? parseInt(OngoingClass.start) + 1 >= 10
                        ? `${parseInt(OngoingClass.start)}:50`
                        : `${parseInt(OngoingClass.start)}:50`
                      : `${parseInt(OngoingClass.start)}:50`
                  }`}
            </div>
          )}
          {OngoingClass.start === '0' && <div className='time'>--:--</div>}

          <div className='class_type'>Ongoing</div>
          <ProgressBar
            className='progress'
            completed={
              OngoingClass.start === '0'
                ? 0
                : this.state.completed > 100
                ? 100
                : this.state.completed
            }
          />
        </div>
      );
    }
  }
}
