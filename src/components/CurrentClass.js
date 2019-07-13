import React, { Component } from 'react';

export default class CurrentClass extends Component {
  render() {
    return (
      <div className='current_class_root'>
        <div className='current_class_row row_one'>
          <div>Artificial Intelligance</div>
          <div className='current_class_classroom'>FF9</div>
        </div>
        <div className='current_class_row teacher_name'>Parul Agarwal</div>
        <div className='time'>10:00 - 10:50</div>
      </div>
    );
  }
}
