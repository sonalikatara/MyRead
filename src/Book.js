import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import './App.css'

class Book extends Component{
static propTypes = {
		  book: PropTypes.object.isRequired,
		  onChangeShelf: PropTypes.func.isRequired
	     }

	render(){
		 let myBook = this.props.book;
		 const url = myBook.imageLinks.thumbnail;
		 const divStyle = {width:128, height:193, backgroundImage: 'url(' + url + ')'}

		return (
			<div className="text-left book ">
				<div className="book-top">
				  <p className="book-title">{myBook.title}</p>
				  <p className="book-authors">{myBook.authors}</p>
				</div>
				<div className="book-bottom">
			      <div className="book-cover text-center" style={divStyle}>
			      </div>
			      <div className="book-shelf-changer">
                      <select onChange={(e)=> this.props.onChangeShelf( myBook.title, e.target.value)} value={myBook.shelf}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead"  >Want to Read</option>
                        <option value="read" >Read</option>
                        <option value="none" >None</option>
                      </select>
                   </div>
	            </div>
				</div>)
	}
}

export default Book