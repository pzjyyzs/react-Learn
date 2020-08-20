import React from "react";
import { getMovies } from "../../api/movice/fakeMovieService";
import Like from "../common/like";
import Pagination from "../common/pagination";

export interface MoviesProps {}

export interface MoviesState {}

class Movies extends React.Component<MoviesProps, MoviesState> {
  state = {
    movies: getMovies(),
    pageSize: 4,
  };
  handleDelete = (movie: any) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      ...this.state,
      movies,
    });
  };

  handleLikeClick = (movie: any) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      ...this.state,
      movies,
    });
  };

  handlePageChange = (page: number) => {};

  render() {
    if (this.state.movies.length === 0) return <p>no movie in the database</p>;
    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Gener</th>
              <th>stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => {
                      this.handleLikeClick(movie);
                    }}
                  ></Like>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      this.handleDelete(movie);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
