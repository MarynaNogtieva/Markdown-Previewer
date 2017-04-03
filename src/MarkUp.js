import React, {Component } from 'react'
import './App.css'
import MarkDown from './MarkDown.js';

import marked from 'marked';

class MarkUp extends  React.Component{

render(){

	 
    function convertMarkup(rawMarkedData){
    	 var rawMarkup = marked(rawMarkedData , {sanitize: true});
     return{ __html: rawMarkup};
    }
	
		return(
				<div className="MarkUp">
				<h1>{this.props.title}</h1>
                 	<p  dangerouslySetInnerHTML={convertMarkup(this.props.data)}></p>
				
				</div>
			);

}
}

MarkUp.propTypes = {
	title: React.PropTypes.string.isRequired,
}


export default MarkUp