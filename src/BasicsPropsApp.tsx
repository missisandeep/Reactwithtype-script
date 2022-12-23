import React from 'react';
import './App.css';
import Props from './components/basicsProps/Props';
import Objects from './components/basicsProps/Objects';
import Arrays from './components/basicsProps/Arrays';
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
