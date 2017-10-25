import React, { Component } from 'react';
import ListView from 'react';

import { Row, Col, Grid, Thumbnail, Panel, Navbar, Jumbotron, ButtonToolbar, Button } from 'react-bootstrap';

export default class Product extends React.Component {

    isLoading = true;
    movies = {};

    render() {
        if(!this.state || !this.state.movies)
        {
            this.GetMovies();
            return this.renderLoadingView();
        }
        return ( 
            <Grid><Row>
            {this.renderMovie(this.state.movies)} 
            </Row></Grid>
            );
    }

    renderLoadingView() {
        return (
          <div>
            <span>
              Loading movies...
            </span>
          </div>
        );
      }
    
      renderMovie(movies) {
          var retval = movies.map(function iterator( movie ) {
                return(
                    <Col xs={6} md={4}>
                        <Thumbnail className="movie-box"> 
                            <h3 className="movie-name">
                                {movie.title} 
                            </h3>

                            <h5>
                                {movie.releaseYear}
                            </h5>

                            <Button>Buy</Button>
                        </Thumbnail>
                    </Col>
                );
            }, this);
            return  retval;
    }

    GetMovies(){
        return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            movies: responseJson.movies,
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
}
