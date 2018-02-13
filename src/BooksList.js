import React, { Component } from 'react'
import Book from './Book'

class BooksList extends Component {

	render(){
		return(
			//books.sort(sortBy('shelf'));
            <div >
            <h3> Want To Read </h3>
			<div className="row ">
				{this.props.books.filter(book => book.shelf === "wantToRead").map((book)=>
			   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
			   	   <Book title={book.title} authors={book.authors} url={book.imageLinks.thumbnail}  />
			   	</div>
			   	)}
			   </div>
			   <hr/>
			   	<h3>Currently Reading </h3>
				<div className="row">
				{this.props.books.filter(book => book.shelf === "currentlyReading").map((book)=>
			   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
			   	   <Book title={book.title} authors={book.authors} url={book.imageLinks.thumbnail}  />
			   	</div>
			   	)}
				</div>
				<hr/>
				<h3>Read </h3>
				<div className="row">
					{this.props.books.filter(book => book.shelf === "read").map((book)=>
				   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
				   	   <Book title={book.title} authors={book.authors} url={book.imageLinks.thumbnail}  />
				   	</div>
				   	)}
				<hr/>
				 </div>

			</div>
			)
	}
}

export default BooksList