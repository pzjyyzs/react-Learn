import * as React from "react";

import Like from "../common/like";
import Table from "../common/table";

export interface MoviesTableProps {
  moviesCut: Array<any>;
  onLike: any;
  onDelete: any;
  onSort: any;
  sortColumn: any;
}

export interface MoviesTableState {}

class MoviesTable extends React.Component<MoviesTableProps, MoviesTableState> {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "NumberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie: any) => (
        <Like
          liked={movie.liked}
          onClick={() => {
            this.props.onLike(movie);
          }}
        ></Like>
      ),
    },
    {
      key: "delete",
      content: (movie: any) => (
        <button
          onClick={() => {
            this.props.onDelete(movie);
          }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { moviesCut, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        moviesCut={moviesCut}
      ></Table>
    );
  }
}

export default MoviesTable;
