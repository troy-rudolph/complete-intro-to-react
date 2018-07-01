
import React, { Component } from 'react';
import Header from './Header';
import Spinner from './Spinner';
import axios from 'axios';

class Details extends Component
{
  state = {
    apiData: { rating: '' }
  };

  componentDidMount() {
    axios
      .get(`http://fs01sb.dfw.alchemysystems.com:3000/${this.props.show.imdbID}`)
      .then( (response) => { console.log(response);
           return this.setState({ apiData: response.data });
    });
  }

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;
    if (this.state.apiData.rating) {
      ratingComponent = <h4>{this.state.apiData.rating}</h4>;
    } else {
      ratingComponent = <Spinner />;
    }
    console.log(ratingComponent);

    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder="0"
          allowFullScreen
          title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

export default Details;
