import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
   BooksAPI.update(updateBook, newShelf).then(()=>{
     BooksAPI.getAll().then((books) =>{
      this.setState({books: books})
      window.location.href = "/";
    })
   })
  }


  render() {
    return (
      <div className="container text-center" >
        <header className="App-header bg-dark">
          <h1><i className="fa fa-book"></i></h1>
          <h1 className="App-title">Welcome to MyRead</h1>
        </header>
        <div>
          <Route exact path="/" render = {()=>(
              <BooksList
                onChangeBookShelf = {this.changeBookShelf}
                books={this.state.books}
              />
            )} />

          <Route exact path="/search" render = {({})=>(
              <SearchBooks
                onChangeBookShelf = {this.changeBookShelf}
              />
          )} />

        </div>

      </div>
    );
  }
}

export default App;
