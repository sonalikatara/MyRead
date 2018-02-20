import React from 'react'
import { PropTypes } from 'prop-types'
import './App.css'

class BookShelfRow extends React.Component{
	static propTypes = {
		 shelf: PropTypes.string.isRequired
	     }

	render(){
		const shelf = this.props.shelf
		let heading = shelf.replace(/[A-Z]/g, function (x) {
		        return ' '+x;
		    });
		heading = heading.charAt(0).toUpperCase()+heading.substr(1);
		return (
			<div>
           <h3> {heading} </h3><hr/>
           </div>
		)
	}
}

export default BookShelfRow