import React, { Component } from 'react'
import './App.css'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    if(this.state.books.length === 0){
      BooksAPI.getAll().then((books) =>{
      this.setState({books})
    })
    }

  }

  changeBookShelf = (title, newShelf) =>{
    let myBook = this.state.books.findIndex((book)=> book.title === title );
    let allBooks = this.state.books;
    allBooks[myBook].shelf = newShelf;
    this.setState({ books: allBooks});
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
            onChangeBookShelf = {this.changeBookShelf}
            books={this.state.books}
          />
        </div>
      </div>
    );
  }
}

export default App;
