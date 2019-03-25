import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = evt => {
    this.setState({ term: evt.target.value });
  }

  onFormSubmit = evt => {
    evt.preventDefault();
    
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input 
              type="text"
              name=""
              id=""
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
