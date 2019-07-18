import React, { Component } from 'react';
import ProgressBar from 'react-progressbar';
import moment from 'moment';

export default class CurrentClass extends Component {
  state = {
    completed: 0,
    days: ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
    index: moment().isoWeekday() - 1,
    classes: this.props.data
  };

  componentDidMount() {
    let { days, index, classes } = this.state;
    let day = days[index];
    let classInfo = classes[day] || [];
    let OngoingClass = {
      start: '0',
      subject: 'No Class Right Now',
      venue: '-',
      teachers: []
    };
    classInfo.forEach(info => {
      console.log(info);
      let a = parseInt(info.time24);
      let b = parseInt(moment().format('H'));
      console.log(a, b);
      if (b === a && b + 1 > a) {
        OngoingClass = info;
      }
    });
    
    funcrtion interval(minutes, multiplyFactor){
      setInterval(() => {
      if (OngoingClass !== {} || OngoingClass !== '') {
        console.log(minutes, multiplyFactor); 
        let min = minutes * multiplyFactor;
        if (min <= 100) {
          this.setState({
            completed: min
          });
        } else {
          this.setState({
            completed: 100
          });
        }
      } else {
        this.setState({
          completed: 0
        });
      }
    }, 1000);
  }
    }


if(OngoingClass.type==='Practical'){
  let min = 110;
  let multiplyFactor = 1.1;
  interval(min, multiplyFactor);
}else{
  interval(50, 1);
}
  
  render() {
    if (this.state.classes) {
      let { days, index, classes } = this.state;
      let day = days[index];
      let classInfo = classes[day] || [];
      let OngoingClass = {};
      if (!(day === 'SUN')) {
        classInfo.forEach(info => {
          if (parseInt(moment().isoWeekday) !== 7) {
            let a = parseInt(info.time24);
            let b = parseInt(moment().format('H'));
            if (b === a && b < a + 1) {
              OngoingClass = info;
            }
          } else {
            OngoingClass = {
              start: '0',
              subject: 'No Class Right Now',
              venue: '-',
              teachers: '-'
            };
          }
        });
      }
      console.log(OngoingClass);

      if (classInfo.length >= 1 && Object.keys(OngoingClass).length > 2) {
        return (
          <div className='current_class_root' style={{ position: 'relative' }}>
            <div className='current_class_row row_one'>
              <div>{OngoingClass.subject}</div>
              <div className='current_class_classroom'>
                {OngoingClass.venue}
              </div>
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
              completed={this.state.completed}
            />
          </div>
        );
      }
      return (
        <div className='current_class_root' style={{ position: 'relative' }}>
          <div className='current_class_row row_one'>
            <div>No Class at the moment</div>
            <div className='current_class_classroom' />
          </div>
          <div className='current_class_row teacher_name' />

          <div className='time'>--:--</div>

          <div className='class_type'>Ongoing</div>
        </div>
      );
    }
  }
}
