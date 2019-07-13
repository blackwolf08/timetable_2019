import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
import moment from 'moment';

export default class ClassList extends Component {
  state = {
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

  onPageChange = (index, direction) => {
    console.log(index);

    this.setState({
      index
    });
  };

  render() {
    let { index, days } = this.state;
    let classes = [];
    if (days[index]) {
      classes = this.state.classes[days[index]].map((item, index) => {
        console.log(parseInt(item.time.split(':')[0]));

        return (
          <div
            key={index}
            className='class_list_item'
            style={{
              backgroundColor:
                parseInt(moment().format('H')) >
                parseInt(item.time.split(':')[0])
                  ? parseInt(moment().format('H')) + 1 <
                    parseInt(item.time.split(':')[0])
                    ? '#FAE2E2'
                    : '#FBE6A2'
                  : '#D4EEE2',
              boxShadow:
                parseInt(moment().format('H')) >
                parseInt(item.time.split(':')[0])
                  ? parseInt(moment().format('H')) + 1 <
                    parseInt(item.time.split(':')[0])
                    ? '0 0 10px #FAE2E2'
                    : '0 0 10px #FBE6A2'
                  : '0 0 10px #D4EEE2'
            }}
          >
            <div className='class_list_item_row row_two'>
              <div className='class_list_item_class'>{item.className}</div>
              <div className='class_list_item_class_room'>{item.classRoom}</div>
            </div>
            <div className='class_list_item_teacher_name'>
              {item.nameOfTeacher}
            </div>
            <div className='class_list_item_time'>{item.time}</div>
            <div className='class_type'>Lecture</div>
          </div>
        );
      });
    }
    let start_at = parseInt(moment().isoWeekday() - 2);
    console.log(start_at);
    return (
      <div className='class_list_root'>
        <div className='week_day'>{days[index]}</div>
        <div className='container'>
          <FlipPage
            orientation='horizontal'
            responsive={true}
            loopForever={true}
            onPageChange={this.onPageChange}
            animationDuration={1000}
            startAt={start_at}
          >
            <div className='flip_page_root'>{classes}</div>
            <div className='flip_page_root'>{classes}</div>
            <div className='flip_page_root'>{classes}</div>
            <div className='flip_page_root'>{classes}</div>
            <div className='flip_page_root'>{classes}</div>
            <div className='flip_page_root'>{classes}</div>
          </FlipPage>
        </div>
      </div>
    );
  }
}
