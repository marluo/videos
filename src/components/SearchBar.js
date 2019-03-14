import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "Seach for something"
  };

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    // calla callbacken från parent component
  };

  onSearchClick = event => {
    this.setState({
      term: ""
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              onClick={this.onSearchClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
