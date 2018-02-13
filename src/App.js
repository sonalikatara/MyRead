import React, { Component } from 'react'
import './App.css'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount(){
     BooksAPI.getAll().then((books) =>{
      this.setState({books})
    })
  }

  render() {
    return (
      <div className=" text-center" >
        <header className="App-header bg-dark">
          <h1><i className="fa fa-book"></i></h1>
          <h1 className="App-title">Welcome to MyRead</h1>
        </header>
        <div >
          <BooksList
            books={this.state.books}
          />
        </div>
      </div>
    );
  }
}

export default App;
