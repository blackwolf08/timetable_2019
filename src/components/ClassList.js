import React, { Component } from 'react';
import FlipPage from 'react-flip-page';
import moment from 'moment';

export default class ClassList extends Component {
  state = {
    days: ['MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
    daysFull: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    index: moment().isoWeekday() - 1,
    classes: this.props.data
  };

  onPageChange = (index, direction) => {
    this.setState({
      index
    });
  };

  getBackGroundColor = (starting_hour, day, type) => {
    if (day === this.state.daysFull[moment().isoWeekday() - 1]) {
      if (type === 'Practical') {
        let current_hour = parseInt(moment().format('H'));
        console.log(starting_hour, current_hour, type);
        starting_hour = parseInt(starting_hour);
        if (
          current_hour === starting_hour ||
          starting_hour + 1 === current_hour
        ) {
          return '#D2EEF3';
        }
        if (current_hour >= starting_hour + 2) {
          return '#FAE2E2';
        }
        if (starting_hour > current_hour) {
          return '#D4EEE2';
        }
      } else {
        let current_hour = parseInt(moment().format('H'));
        starting_hour = parseInt(starting_hour);
        if (
          current_hour === starting_hour &&
          starting_hour < current_hour + 1
        ) {
          return '#D2EEF3';
        }
        if (current_hour > starting_hour) {
          return '#FAE2E2';
        }
        if (starting_hour > current_hour) {
          return '#D4EEE2';
        }
      }
    }
    return '';
  };
  getBoxShadow = starting_hour => {
    let current_hour = parseInt(moment().format('H'));
    starting_hour = parseInt(starting_hour);
    if (current_hour === starting_hour && starting_hour < current_hour + 1) {
      return '0 0 10px #D2EEF3';
    }
    if (current_hour > starting_hour) {
      return '0 0 10px #FAE2E2';
    }
    if (starting_hour > current_hour) {
      return '0 0 10px #D4EEE2';
    }
  };

  render() {
    if (this.state.classes) {
      let { index, days, daysFull } = this.state;
      let classes = [];
      if (days[index] && days[index] !== 'SUN') {
        classes = this.state.classes[days[index]].map((item, index) => {
          return (
            <div
              key={index}
              className='class_list_item'
              style={{
                backgroundColor: this.getBackGroundColor(
                  item.time24,
                  item.day,
                  item.type
                ),
                boxShadow: this.getBoxShadow(item.time24, item.day, item.type)
              }}
            >
              <div className='class_list_item_row row_two'>
                <div className='class_list_item_class'>{item.subject}</div>
                <div className='class_list_item_class_room'>{item.venue}</div>
              </div>
              <div className='class_list_item_teacher_name'>
                {item.teachers[0]}
              </div>
              <div className='class_list_item_time'>
                {item.start.length + 1 === 2
                  ? `${item.start}:00 - ${
                      item.type === 'Practical'
                        ? parseInt(item.start) + 1
                        : parseInt(item.start)
                    }:50`
                  : `${item.start}:00 - ${
                      item.type === 'Practical'
                        ? parseInt(item.start) + 1 >= 10
                          ? `${parseInt(item.start)}:50`
                          : `${parseInt(item.start)}:50`
                        : `${parseInt(item.start)}:50`
                    }`}
              </div>
              <div className='class_type'>{item.type}</div>
            </div>
          );
        });
      } else {
        classes = (
          <div key={index} className='class_list_item'>
            <div className='class_list_item_row row_two'>
              <div className='class_list_item_class'>No Classes to show</div>
              <div className='class_list_item_class_room'>-</div>
            </div>
            <div className='class_list_item_teacher_name' />
            <div className='class_list_item_time'>--:--</div>
            <div className='class_type'>-</div>
          </div>
        );
      }
      let start_at = parseInt(moment().isoWeekday() - 1);
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
              animationDuration={300}
              startAt={start_at}
            >
              <div className='flip_page_root'>{classes}</div>
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
