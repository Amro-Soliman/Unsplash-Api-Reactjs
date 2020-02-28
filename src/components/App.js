import React, { Component } from 'react';
import '../App.css';
import Search from './Search';



class App extends Component {
  state = { picQuery : ''};
 
render() {
  return (
    <div className="App">
        <Search />
    </div>
  )
}
}


export default App;
