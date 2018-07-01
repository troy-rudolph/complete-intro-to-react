
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';


class Landing extends Component
{
  gotoSearch = (event) => {
    event.preventDefault();
    this.props.history.push('/search');
  }

  render() {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.gotoSearch} >
          <input type='text' value={this.props.searchTerm} placeholder='Search' onChange={this.props.handleSearchTermChange} />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}


const mapStateToProps= (state) => {
  return { searchTerm: state.searchTerm };
}
const mapDispatchToProps = (dispatch) =>({
   handleSearchTermChange(event) {
     dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
