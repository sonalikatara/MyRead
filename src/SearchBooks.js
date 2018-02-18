import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
     static propTypes = {
		  onChangeBookShelf: PropTypes.func.isRequired
	     }

	 state = {
	 	query: '',
	 	searchResult: []
	 }

	 updateQuery = (query) => {
	 	this.setState({ query: query })
	 	if(query.length>0){
	 		BooksAPI.search(query).then((searchResult) =>{
	         Array.isArray(searchResult) ? this.setState({searchResult: searchResult}): this.setState({searchResult: []})
	      })
	 	} else {
	 		this.setState({searchResult: []})
	 	}

	 }


	render(){
		let showingBooks = [];
		showingBooks = this.state.searchResult;
        //console.log('showing Books : ' + JSON.stringify(showingBooks));

		return(
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
             <div className="row ">
					{showingBooks.map((book)=>
				   	<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
				   	   <Book book={book} onChangeShelf={this.props.onChangeBookShelf} />
				   	</div>
				   	)}
				</div>
			</div>
			)
	}
}

export default SearchBooks