import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Book from './Book'

class BooksList extends Component {
     static propTypes = {
		  books: PropTypes.array.isRequired,
		  onChangeBookShelf: PropTypes.func.isRequired
	     }

	render(){
		let showingBooks = this.props.books

		return(
			<div >
			<div className="list-books" >
            	<h3> Want To Read </h3>
				<div className="row ">
					{showingBooks.filter(book => book.shelf === "wantToRead").map((book)=>
				   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
				   	   <Book book={book} onChangeShelf={this.props.onChangeBookShelf} />
				   	</div>
				   	)}
				</div><hr/>
		   		<h3>Currently Reading </h3>
				<div className="row">
					{showingBooks.filter(book => book.shelf === "currentlyReading").map((book)=>
				   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
				   	   <Book book={book} onChangeShelf={this.props.onChangeBookShelf} />
				   	</div>
				   	)}
				</div><hr/>
				<h3>Read </h3>
				<div className="row">
					{showingBooks.filter(book => book.shelf === "read").map((book)=>
				   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
				   	   <Book book={book} onChangeShelf={this.props.onChangeBookShelf} />
				   	</div>
				   	)}
				</div><hr/>
				<div className="open-search">
	              <Link to="/searchBooks">Search a book</Link>
	            </div>
			</div>
			</div>
			)
	}
}

export default BooksList