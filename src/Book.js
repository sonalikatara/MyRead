import React, { Component } from 'react'
import './App.css'

class Book extends Component{
     state ={
     	shelf: ''
     }

	render(){
		 const url = this.props.url;
		 const divStyle = {width:128, height:193, backgroundImage: 'url(' + url + ')'}

		return (
			<div className="text-left book ">
				<div className="book-top">
				  <p className="book-title">{this.props.title}</p>
				  <p className="book-authors">{this.props.authors}</p>
				</div>
				<div className="book-bottom">
			      <div className="book-cover text-center" style={divStyle}>

			      </div>
			      <div className="book-shelf-changer"> shelf : {this.state.shelf}
                      <select onChange={(e)=> this.props.onChangeShelf( this.props.title, e.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                   </div>
	            </div>

				</div>)
	}
}

export default Book