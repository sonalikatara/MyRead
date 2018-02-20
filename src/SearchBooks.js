import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
     static propTypes = {
     	  books: PropTypes.array.isRequired,
		  onChangeBookShelf: PropTypes.func.isRequired
	     }

	 state = {
	 	query: '',
	 	searchResult: []
	 }

	 updateQuery = (query) => {
	 	this.setState({ query: query })
	 	let result = []
	 	const books = this.props.books
	 	if(query.length>0){
	 		BooksAPI.search(query).then( searchResult =>{
		        if(Array.isArray(searchResult) ){

		        	searchResult.forEach(s => {
		        		s.shelf = "";
		        		//console.log("search book " + s.title)
		        		books.forEach(b=>{
		        			//console.log(s.title)
		        			if(s.id===b.id){
		        				s.shelf = b.shelf
		        			}
		        		})
		        		result.push(s)

		        	})

		        }
             //console.log("result : " + result)
             this.setState({searchResult: result})
	      })

	 	} else {
	 		this.setState({searchResult: []})
	 	}
	 }

	render(){
		let showingBooks = []
		showingBooks = this.state.searchResult

        //showing : { JSON.stringify(showingBooks)}
		return(
			<div >
			    <div className="close-search">
			  		<Link to="/">Close</Link>
			    </div>
				<div className="list-books-top">
					<input
					   className='search-books'
					   type='text'
					   placeholder='Search Books by title or author'
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