import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''}
    
    /*onInputChange(event){
        console.log(event.target.value);
    }--> 
    <input type="text" onChange={this.onInputChange}/>
    UnController Event Call above*/

    /*onInputClick(){
        console.log('Input was clicked');
        //Following onClick handles event on when we click the input tag
        <input type="text" onChange={this.onInputChange} onClick={this.onInputClick}/>
    }*/

    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term);
        //To access callback function passed from Parent
        this.props.onUserSubmit(this.state.term);
    }

    render(){
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
                </div>    
            </form>
        </div>
        );
    };
}

export default SearchBar;