import React, { Component } from 'react';
import CurrentClass from './components/CurrentClass';
import ClassList from './components/ClassList';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import axios from 'axios';
class App extends Component {
  state = {
    data: {}
  };
  componentDidMount() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://timetablejiit.herokuapp.com/api/data'
      )
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
      });
  }
  render() {
    return (
      <PerfectScrollbar>
        <div className='root'>
          <nav className='navbar'>
            <p className='logo logo_p'>Time Table</p>
          </nav>
          {Object.keys(this.state.data).length > 2 && (
            <>
              <CurrentClass data={this.state.data} />
              <ClassList data={this.state.data} />
            </>
          )}
        </div>
      </PerfectScrollbar>
    );
  }
}

export default App;
