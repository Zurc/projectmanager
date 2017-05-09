import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css'

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        projects: []
    }
  }

  componentWillMount() {  // fires off everytime the component is re rendered
    this.setState({projects: [
      {
          title: 'Business website',
          category: 'Web Design'
      },
      {
          title: 'Social App',
          category: 'Mobile Development'
      },
      {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
      }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Project Manager</h1>
        <hr/>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
