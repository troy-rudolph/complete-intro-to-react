
import React, { Component } from 'react'
import ShowCard from './ShowCard'
import preload from '../data.json'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input type="text" value={this.state.searchTerm} placeholder='Search' onChange={this.handleSearchTermChange} />
        </header>
        <div>
          {preload.shows
            .filter(show => `${show.title} ${show.description}`.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) >= 0)
            .map((show) => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}
export default Search;
