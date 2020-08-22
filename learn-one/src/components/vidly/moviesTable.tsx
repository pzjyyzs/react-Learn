import * as React from "react";
import Like from "../common/like";

export interface MoviesTableProps {
  moviesCut: Array<any>;
  onLike: any;
  onDelete: any;
  onSort: any;
}

const MoviesTable: React.SFC<MoviesTableProps> = (props) => {
  const { moviesCut, onLike, onDelete, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("genre.name")}>Gener</th>
          <th onClick={() => onSort("numberInStock")}>stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {moviesCut.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like
                liked={movie.liked}
                onClick={() => {
                  onLike(movie);
                }}
              ></Like>
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  onDelete(movie);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
