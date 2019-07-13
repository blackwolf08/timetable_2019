import React from 'react';
import CurrentClass from './components/CurrentClass';
import ClassList from './components/ClassList';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

function App() {
  return (
    <PerfectScrollbar>
      <div className='root'>
        <nav className='navbar'>
          <p className='logo logo_p'>Time Table</p>
        </nav>
        <CurrentClass />
        <ClassList />
      </div>
    </PerfectScrollbar>
  );
}

export default App;
