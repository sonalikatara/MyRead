import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import './App.css'

class Book extends Component{
    static propTypes = {
			  book: PropTypes.object.isRequired,
			  onChangeShelf: PropTypes.func.isRequired
		     }

	state = {
		showDescription: false
	}

	text_truncate = (str)=> {
       let length = 100
       let ending = ''
	    if (str.length > length) {
	      return str.substring(0, length - ending.length) + ending;
	    } else {
	      return str + ending;
	    }
	  }

    changeVisibility = () => {
    	var show = this.state.showDescription?false:true
        this.setState({showDescription: show})
     }

	render(){
		 let myBook = this.props.book;
		 const url = myBook.imageLinks?myBook.imageLinks.thumbnail:'icons/search.svg';
		 const divStyle = {width:128, height:193, backgroundImage: 'url(' + url + ')'}
         const showDesc = this.state.showDescription?'inline':'none'
         let descStyle=  {display: showDesc}

		 return (
			<div className="text-left book ">
				<div className="book-top">
				  <p className="book-title">{myBook.title}</p>
				  <p>{myBook.authors?"by ":""}<span className="book-authors">{myBook.authors?myBook.authors.join(", "):""}</span></p>
				</div>
				<div className="book-bottom">
			      <div className="book-cover text-center" style={divStyle} onClick={this.changeVisibility}>
			      </div>
			      <div className="book-info" style={descStyle} onClick={this.changeVisibility} > {myBook.description?this.text_truncate(myBook.description):"No Description"} <a href={myBook.infoLink} className="txt-bold">....</a></div>
			      <div className="book-shelf-changer">
                      <select onChange={(e)=> this.props.onChangeShelf( myBook, e.target.value)} value={myBook.shelf?myBook.shelf:"none"}>
                        <option value="no" disabled>Move to...</option>
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