import React from 'react';
import './App.css';
import Props from './components/Props';
import Objects from './components/Objects';
import Arrays from './components/Arrays';
function App() {
  const Object = {
    fname: 'sandeep',
    lname: 'kumar'
  }

  const Array = [
    {
      fname: 'sandeep',
      lname: 'kumar'
    },
    {
      fname: 'sandeep',
      lname: 'kumar'
    },
    {
      fname: 'sandeep',
      lname: 'kumar'
    }
  ]
  return (
    <div className="App">
      <Props name='Sandeep' lname = "kumar" age={26} logIn={false}/>
      <Objects name={Object} />
      <Arrays name = {Array} />
    </div>
  );
}

export default App;
