
import React from 'react'
import { connect } from 'react-redux';
import ShowCard from './ShowCard'
import Header from './Header';


const Search = (props) =>  {
  return (
    <div className="search">
      <Header showSearch />
      <div>
        {props.shows.filter(show => `${show.title} ${show.description}`.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >= 0)
          .map((show) => <ShowCard key={show.imdbID} show={show} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm };
}

export default connect(mapStateToProps)(Search);
