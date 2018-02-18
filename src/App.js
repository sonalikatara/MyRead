import React, { Component } from 'react'
import './App.css'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) =>{
      this.setState({books: books})
    })
  }

  componentDidMount(){
    if(this.state.books.length === 0){
        this.getAllBooks();
    }
  }

  changeBookShelf = (updateBook, newShelf) =>{
    this.updateBookShelf(updateBook, newShelf)
    let myBook = this.state.books.findIndex((book)=> book.id === updateBook.id );
    let allBooks = this.state.books;
    allBooks[myBook].shelf = newShelf;
    this.setState({ books: allBooks});
  }

  updateBookShelf = (updateBook, newShelf) => {
    BooksAPI.update(updateBook, newShelf);
  }

  render() {
    return (
      <div className="container text-center" >
        <header className="App-header bg-dark">
          <h1><i className="fa fa-book"></i></h1>
          <h1 className="App-title">Welcome to MyRead</h1>
        </header>
        <div>
          <SearchBooks
            onChangeBookShelf = {this.changeBookShelf}
          />
        </div>

      </div>
    );
  }
}

export default App;
