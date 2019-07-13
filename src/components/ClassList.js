import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
export default class ClassList extends Component {
  state = {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    index: 0,
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
          time: '02:00 - 02:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '03:00 - 03:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '04:00 - 04:50',
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
          time: '02:00 - 02:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '03:00 - 03:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '04:00 - 04:50',
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
          time: '02:00 - 02:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '03:00 - 03:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '04:00 - 04:50',
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
          time: '02:00 - 02:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '03:00 - 03:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '04:00 - 04:50',
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
          time: '02:00 - 02:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '03:00 - 03:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '04:00 - 04:50',
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
          time: '02:00 - 02:50',
          className: 'Hindi',
          classRoom: 'FF8',
          nameOfTeacher: 'Parul Agarwal'
        },
        {
          time: '03:00 - 03:50',
          className: 'English',
          classRoom: 'G5',
          nameOfTeacher: 'Monica'
        },
        {
          time: '04:00 - 04:50',
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
        return (
          <div key={index} className='class_list_item'>
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
    return (
      <div className='class_list_root'>
        <div className='week_day'>{days[index]}</div>
        <div className='container'>
          <FlipPage
            orientation='horizontal'
            responsive={true}
            loopForever={true}
            onPageChange={this.onPageChange}
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
