import React, { Component } from 'react'
import './App.css';
import List from './List'
import Withloading from './Withloading'
const Listwithloading = Withloading(List)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
}
componentDidMount=()=> {
  setTimeout(() => { this.setState({ loading: !this.state.loading }) }, 3000);
}

  render(){
  return (
    <div className="App">
      <div className="container">
            <div className="main">
            <Listwithloading  isloading={this.state.loading}/>
            </div>
      </div>
    </div>
  );
}
}
export default App;
