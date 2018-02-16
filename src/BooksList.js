import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Book from './Book'

class BooksList extends Component {
     static propTypes = {
		  books: PropTypes.array.isRequired,
		  onChangeBookShelf: PropTypes.func.isRequired
	     }

	 state = {
	 	query: ''
	 }

	 updateQuery = (query) => {
	 	this.setState({ query: query })
	 }

	render(){
		return(
			//books.sort(sortBy('shelf'));
			<div >
			<div className="list-books-top">
				<input
				   className='search-books'
				   type='text'
				   placeholder='Search Books'
				   value={this.state.query}
				   onChange={(event)=>this.updateQuery(event.target.value)}
				 />
			</div>
			<div className="list-books" >
            <h3> Want To Read </h3>
			<div className="row ">
				{this.props.books.filter(book => book.shelf === "wantToRead").map((book)=>
			   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
			   	   <Book book={book} onChangeShelf={this.props.onChangeBookShelf} />
			   	</div>
			   	)}
			   </div>
			   <hr/>
			   	<h3>Currently Reading </h3>
				<div className="row">
				{this.props.books.filter(book => book.shelf === "currentlyReading").map((book)=>
			   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
			   	   <Book book={book} onChangeShelf={this.props.onChangeBookShelf} />
			   	</div>
			   	)}
				</div>
				<hr/>
				<h3>Read </h3>
				<div className="row">
					{this.props.books.filter(book => book.shelf === "read").map((book)=>
				   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
				   	   <Book book={book} onChangeShelf={this.props.onChangeBookShelf} />
				   	</div>
				   	)}
				<hr/>
				 </div>
			</div>
			</div>

			)
	}
}

export default BooksList