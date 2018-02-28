import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

import Image from './Image'

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: ''
    };
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const url = 'https://picsum.photos/list';

    // fetch promise
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => this.setState({ term:'', img: "https://picsum.photos/1280/1080?image="+data[0].id }))
    //   .catch(e => console.log('error', e));

    const fetchAsync = async () => {
        try {
          const result = await fetch(url);
          const data = await result.json();
          console.log(data);
          const random = Math.floor((Math.random()*Object.keys(data).length));
          this.setState({ img: "https://picsum.photos/1280/1080?image="+data[random].id })
        } catch (error) {
          console.log(error);
        }
      };
    
    fetchAsync();
  }

  render() {
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Retrieve a random-image from Picsum List API
        </p>
        <div className="picsum">
          <form onSubmit={this.handleSubmit}>
            <button>Random Picsum API</button>
          </form>

          <Image src={this.state.img} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
