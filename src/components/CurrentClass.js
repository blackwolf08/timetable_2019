import React, { Component } from 'react';
import ProgressBar from 'react-progressbar';
import moment from 'moment';

export default class CurrentClass extends Component {
  state = {
    completed: 0,
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    index: moment().isoWeekday() - 2,
    classes: {
      Monday: [
        {
          time: '9:00 - 9:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '10:00 - 10:50',
          className: 'Computer',
          classRoom: 'FF8',
          nameOfTeacher: 'Sidd Agarwal'
        },
        {
          time: '11:00 - 11:50',
          className: 'Economics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parth Agarwal'
        },
        {
          time: '12:00 - 12:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '14:00 - 14:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '15:00 - 15:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '16:00 - 16:50',
          className: 'Software',
          classRoom: 'FF8',
          nameOfTeacher: 'Sunny Dhama'
        }
      ],
      Tuesday: [
        {
          time: '9:00 - 9:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '10:00 - 10:50',
          className: 'Computer',
          classRoom: 'FF8',
          nameOfTeacher: 'Sidd Agarwal'
        },
        {
          time: '11:00 - 11:50',
          className: 'Economics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parth Agarwal'
        },
        {
          time: '12:00 - 12:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '14:00 - 14:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '15:00 - 15:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '16:00 - 16:50',
          className: 'Software',
          classRoom: 'FF8',
          nameOfTeacher: 'Sunny Dhama'
        }
      ],
      Wednesday: [
        {
          time: '9:00 - 9:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '10:00 - 10:50',
          className: 'Computer',
          classRoom: 'FF8',
          nameOfTeacher: 'Sidd Agarwal'
        },
        {
          time: '11:00 - 11:50',
          className: 'Economics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parth Agarwal'
        },
        {
          time: '12:00 - 12:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '14:00 - 14:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '15:00 - 15:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '16:00 - 16:50',
          className: 'Software',
          classRoom: 'FF8',
          nameOfTeacher: 'Sunny Dhama'
        }
      ],
      Thursday: [
        {
          time: '9:00 - 9:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '10:00 - 10:50',
          className: 'Computer',
          classRoom: 'FF8',
          nameOfTeacher: 'Sidd Agarwal'
        },
        {
          time: '11:00 - 11:50',
          className: 'Economics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parth Agarwal'
        },
        {
          time: '12:00 - 12:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '14:00 - 14:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '15:00 - 15:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '16:00 - 16:50',
          className: 'Software',
          classRoom: 'FF8',
          nameOfTeacher: 'Sunny Dhama'
        }
      ],
      Friday: [
        {
          time: '9:00 - 9:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '10:00 - 10:50',
          className: 'Computer',
          classRoom: 'FF8',
          nameOfTeacher: 'Sidd Agarwal'
        },
        {
          time: '11:00 - 11:50',
          className: 'Economics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parth Agarwal'
        },
        {
          time: '12:00 - 12:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '14:00 - 14:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '15:00 - 15:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '16:00 - 16:50',
          className: 'Software',
          classRoom: 'FF8',
          nameOfTeacher: 'Sunny Dhama'
        }
      ],
      Saturday: [
        {
          time: '9:00 - 9:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '10:00 - 10:50',
          className: 'Computer',
          classRoom: 'FF8',
          nameOfTeacher: 'Sidd Agarwal'
        },
        {
          time: '11:00 - 11:50',
          className: 'Economics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parth Agarwal'
        },
        {
          time: '12:00 - 12:50',
          className: 'Basic Mathematics',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '14:00 - 14:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '15:00 - 15:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '16:00 - 16:50',
          className: 'Software',
          classRoom: 'FF8',
          nameOfTeacher: 'Sunny Dhama'
        }
      ]
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        completed: this.state.completed + 1
      });
    }, 1000);
  }
  render() {
    let { days, index, classes } = this.state;
    let day = days[index];
    let classInfo = classes[day];
    console.log(day, classInfo);
    let OngoingClass = {
      time: '-:-',
      className: 'No Class Right Now',
      classRoom: '-',
      nameOfTeacher: '-'
    };
    classInfo.forEach(info => {
      let a = parseInt(info.time.split(':')[0]);
      let b = moment().format('H');
      if (b > a && b < a + 1) {
        OngoingClass = info;
      }
    });
    return (
      <div className='current_class_root' style={{ position: 'relative' }}>
        <div className='current_class_row row_one'>
          <div>{OngoingClass.className}</div>
          <div className='current_class_classroom'>
            {OngoingClass.classRoom}
          </div>
        </div>
        <div className='current_class_row teacher_name'>
          {OngoingClass.nameOfTeacher}
        </div>
        <div className='time'>{OngoingClass.time}</div>
        <div className='class_type'>Ongoing</div>
        <ProgressBar
          className='progress'
          completed={this.state.completed > 100 ? 100 : this.state.completed}
        />
      </div>
    );
  }
}
