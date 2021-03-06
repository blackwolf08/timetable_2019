import React, { Component } from 'react';
import moment from 'moment';

export default class NextClass extends Component {
  state = {
    completed: 0,
    days: ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
    index: moment().isoWeekday() - 1,
    classes: this.props.data
  };

  componentDidMount() {}
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
            if (b + 1 === a) {
              OngoingClass = info;
            }
          } else {
            OngoingClass = {
              start: '0',
              subject: 'No Class next',
              venue: '-',
              teachers: '-'
            };
          }
        });
      }

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

            <div className='class_type'>Next Class</div>
          </div>
        );
      }
      return (
        <div className='current_class_root' style={{ position: 'relative' }}>
          <div className='current_class_row row_one'>
            <div>No Class next</div>
            <div className='current_class_classroom' />
          </div>
          <div className='current_class_row teacher_name' />

          <div className='time'>--:--</div>

          <div className='class_type'>Next Class</div>
        </div>
      );
    }
  }
}
