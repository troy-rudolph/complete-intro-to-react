
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

class Header extends Component
{
  constructor(props) {
     super(props);
     this.state = {
     }
  }

  render() {
    let utilSpace;
    if (this.props.showSearch) {
      utilSpace =  (<input type="text" value={this.props.searchTerm} placeholder='Search' onChange={this.props.handleSearchTermChange} />);
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>Back</Link>
        </h2>
      );
    }
    return (
      <header>
        <h1>
          <Link to='/'>svideo</Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
}
Header.defaultProps = {
  showSearch: false
};
const mapStateToProps = (state) => {
  return {searchTerm: state.searchTerm };
}
const mapDispatchToProps = (dispatch) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
