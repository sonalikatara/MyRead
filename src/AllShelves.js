import React from 'react'
import { PropTypes } from 'prop-types'
import Book from './Book'
import BookShelfRow from './BookShelfRow'

class AllShelves extends React.Component {
	static propTypes = {
		  shelves: PropTypes.array.isRequired,
		  books: PropTypes.array.isRequired,
		  onChangeShelf: PropTypes.func.isRequired
	     }

	render(){
		let showingBooks = this.props.books
        let shelves = this.props.shelves
        let rows = []

		shelves.forEach((shelf) => {
			rows.push(
			<BookShelfRow  key={shelf} shelf={shelf} />
			)
			let booksRow = [];
			showingBooks.filter(book => book.shelf === shelf).forEach((book)=>
		   	booksRow.push(<div className="col-sm-4 col-lg-3 text-center " key={book.id} >
		   	   <Book book={book} onChangeShelf={this.props.onChangeShelf} />
		   	</div>)
		   	)
		   	rows.push(<div className="row"> {booksRow}</div>)
		})
		return(
			<div>{rows}</div>
			)
	}

}

export default AllShelves