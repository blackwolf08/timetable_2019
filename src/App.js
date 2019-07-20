import React, { Component } from 'react';
import CurrentClass from './components/CurrentClass';
import ClassList from './components/ClassList';
import NextClass from './components/NextClass';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import axios from 'axios';
class App extends Component {
  state = {
    data: {}
  };
  componentDidMount() {
    if (localStorage.getItem('data') && localStorage.getItem('data') !== '') {
      this.setState({
        data: JSON.parse(localStorage.getItem('data'))
      });
    } else {
      axios.get('https://api.myjson.com/bins/al769').then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
        localStorage.setItem('data', JSON.stringify(res.data));
      });
    }
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
              <NextClass data={this.state.data} />
              <ClassList data={this.state.data} />
            </>
          )}
        </div>
      </PerfectScrollbar>
    );
  }
}

export default App;
