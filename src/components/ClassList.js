import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
import moment from 'moment';

export default class ClassList extends Component {
  state = {
    days: ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT'],
    daysFull: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    index: moment().isoWeekday() - 2,
    classes: this.props.data
  };

  onPageChange = (index, direction) => {
    console.log(index);

    this.setState({
      index
    });
  };

  render() {
    if (this.state.classes) {
      let { index, days, daysFull } = this.state;
      let classes = [];
      if (days[index]) {
        classes = this.state.classes[days[index]].map((item, index) => {
          return (
            <div
              key={index}
              className='class_list_item'
              style={{
                backgroundColor:
                  parseInt(moment().format('h')) > parseInt(item.start)
                    ? parseInt(moment().format('h')) + 1 < parseInt(item.start)
                      ? '#FAE2E2'
                      : '#FBE6A2'
                    : '#D4EEE2',
                boxShadow:
                  parseInt(moment().format('h')) > parseInt(item.start)
                    ? parseInt(moment().format('h')) + 1 < parseInt(item.start)
                      ? '0 0 10px #FAE2E2'
                      : '0 0 10px #FBE6A2'
                    : '0 0 10px #D4EEE2'
              }}
            >
              <div className='class_list_item_row row_two'>
                <div className='class_list_item_class'>{item.subject}</div>
                <div className='class_list_item_class_room'>{item.venue}</div>
              </div>
              <div className='class_list_item_teacher_name'>
                {item.teachers[0] + ' ' + item.teachers[1]
                  ? item.teachers[2]
                    ? item.teachers[3]
                      ? item.teachers[3]
                      : item.teachers[2]
                    : item.teachers[1]
                  : ''}
              </div>
              <div className='class_list_item_time'>
                {item.start.length === 2
                  ? `${item.start}:00 - ${
                      item.type === 'Practical'
                        ? parseInt(item.start) + 1
                        : parseInt(item.start)
                    }:50`
                  : `0${item.start}:00 - ${
                      item.type === 'Practical'
                        ? parseInt(item.start) + 1 >= 10
                          ? `${parseInt(item.start) + 1}:00`
                          : `0${parseInt(item.start) + 1}:00`
                        : `0${parseInt(item.start) + 1}:00`
                    }`}
              </div>
              <div className='class_type'>{item.type}</div>
            </div>
          );
        });
      }
      let start_at = parseInt(moment().isoWeekday() - 2);
      console.log(start_at);
      return (
        <div className='class_list_root'>
          <div className='week_day'>{daysFull[index]}</div>
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
}
