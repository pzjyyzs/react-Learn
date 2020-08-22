import React from "react";
import { getMovies } from "../../api/movice/fakeMovieService";
import { getGenres } from "../../api/movice/fakeGenreService";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import ListGroup from "../common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";

export interface MoviesProps {}

export interface MoviesState {}

class Movies extends React.Component<MoviesProps, MoviesState> {
  state = {
    movies: [] as Array<any>,
    geners: [] as Array<any>,
    pageSize: 4,
    currentPage: 1,
    selectedGenre: {} as any,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const generes = [{ _id: "", name: "All Geners" }, ...getGenres()];
    this.setState({
      ...this.state,
      movies: getMovies(),
      geners: generes,
    });
  }

  handleDelete = (movie: any) => {
    const movies = this.state.movies.filter((m: any) => m._id !== movie._id);
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

  handlePageChange = (page: number) => {
    this.setState({
      ...this.state,
      currentPage: page,
    });
  };

  handleGenreSelect = (genre: any) => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn: any) => {
    this.setState({
      sortColumn,
    });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies,
      sortColumn,
    } = this.state;
    const filtered =
      JSON.stringify(selectedGenre) !== "{}" && selectedGenre._id
        ? movies.filter((m) => {
            return m.genre._id === selectedGenre._id;
          })
        : movies;

    const stored = _.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.order as "asc"]
    );
    const moviesCut = paginate(stored, currentPage, pageSize);
    return { totalCount: filtered.length, moviesCut: moviesCut };
  };
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, selectedGenre, sortColumn } = this.state;
    if (count === 0) return <p>no movie in the database</p>;

    const { totalCount, moviesCut } = this.getPagedData();
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.geners}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          ></ListGroup>
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database</p>
          <MoviesTable
            moviesCut={moviesCut}
            onLike={this.handleLikeClick}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
