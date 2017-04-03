import React, {Component } from 'react'
import './App.css'
import marked from 'marked';



class MarkDown extends React.Component
{

	render(){
	 var text;
	
	 
	

	function handleInput(e){ 	
      return this.props.storeMarkdown(e.target.value);
	}
		return(
				<div className="MarkDown">
				<h1>{this.props.title}</h1>
					<textarea className="textArea" rows="38" onChange={handleInput.bind(this)}  value={this.props.val} >
					</textarea>
				

				</div>
			);
	}
	
}


MarkDown.propTypes = {
		title: React.PropTypes.string.isRequired,
}

export default MarkDown