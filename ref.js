import React from 'react';
import ReactDOM from 'react-dom';


// using refs
class App extends React.Component {
  constructor(){
  super();
  this.state = { sayings: ""};
  }
  update(e){
  this.setState({ sayings: this.refs.anything.value});
  }
  render(){
  return (
  <div>
    Mukul Says <input type="text" ref="anything"
    onChange = {this.update.bind(this)}/>
  <br/>
  <em>{this.state.sayings}</em>
  </div>
  );
  }
  }
  ReactDOM.render(< App />, document.getElementById('root'));
  

export default App;