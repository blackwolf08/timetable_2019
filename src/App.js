import React, { Component } from 'react';
import CurrentClass from './components/CurrentClass';
import ClassList from './components/ClassList';
import NextClass from './components/NextClass';
import { animateScroll as scroll } from 'react-scroll';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import axios from 'axios';
class App extends Component {
  state = {
    data: {"MON":[{"day":"Monday","type":"Practical","start":"9","time24":9,"subject":"Artificial Intelligence Lab","venue":"BIOINFO","teachers":["SC","P"]},{"day":"Monday","type":"Lecture","start":"11","time24":11,"subject":"BNM","venue":"LT1","teachers":["YG"]}],"TUES":[{"day":"Tuesday","type":"Tutorial","start":"10","time24":10,"subject":"Computer Networks","venue":"TS13","teachers":["K"]},{"day":"Tuesday","type":"Lecture","start":"11","time24":11,"subject":"Principles of Management","venue":"G1","teachers":["PP"]},{"day":"Tuesday","type":"Tutorial","start":"2","time24":14,"subject":"Principles of Mangement","venue":"TS20","teachers":["PP"]},{"day":"Tuesday","type":"Tutorial","start":"4","time24":16,"subject":"BNM","venue":"TS7","teachers":["YG"]}],"WED":[{"day":"Wednesday","type":"Lecture","start":"9","time24":9,"subject":"Artificial Intelligence","venue":"G5","teachers":["PA"]},{"day":"Wednesday","type":"Lecture","start":"10","time24":10,"subject":"Computer Networks","venue":"LT5","teachers":["K"]},{"day":"Wednesday","type":"Lecture","start":"11","time24":11,"subject":"BNM","venue":"LT1","teachers":["YG"]},{"day":"Wednesday","type":"Lecture","start":"1","time24":13,"subject":"Artificial Intelligence","venue":"G1","teachers":["PA"]}],"THUR":[{"day":"Thursday","type":"Tutorial","start":"9","time24":9,"subject":"Artificial Intelligence","venue":"TS19","teachers":["PA"]},{"day":"Thursday","type":"Lecture","start":"10","time24":10,"subject":"Computer Networks","venue":"LT1","teachers":["K"]},{"day":"Thursday","type":"Lecture","start":"11","time24":11,"subject":"Principles of Management","venue":"G1","teachers":["PP"]},{"day":"Thursday","type":"Practical","start":"1","time24":13,"subject":"Computer Networks Lab","venue":"CL2","teachers":["SMT","TAJ","SH"]}],"FRI":[{"day":"Friday","type":"Lecture","start":"9","time24":9,"subject":"Artificial Intelligence","venue":"G2","teachers":["PA"]},{"day":"Friday","type":"Lecture","start":"11","time24":11,"subject":"BNM","venue":"FF8","teachers":["YG"]},{"day":"Friday","type":"Lecture","start":"1","time24":13,"subject":"Computer Networks","venue":"FF7","teachers":["K"]},{"day":"Friday","type":"Practical","start":"3","time24":15,"subject":"Information Security Lab","venue":"CL3","teachers":["APR","APJ","GD"]}],"SAT":[{"day":"Saturday","type":"Practical","start":"9","time24":9,"subject":"Open Source Lab","venue":"CL2","teachers":["AV","DSI","IC","MG"]}]}
  };
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  }
  render() {
    return (
      <PerfectScrollbar>
        <div className='root'>
          <nav className='navbar'>
            <p className='logo logo_p'>Time Table</p>
          </nav>
              <CurrentClass data={this.state.data} />
              <NextClass data={this.state.data} />
              <ClassList data={this.state.data} />
              <button className='scroll' onClick={this.scrollToTop}>
                Top
              </button>
      </div>
      </PerfectScrollbar>
    );
  }
}

export default App;
