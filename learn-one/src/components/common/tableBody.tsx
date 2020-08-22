import * as React from "react";
import _ from "lodash";
export interface TableBodyProps {
  columns: any;
  data: any;
}

export interface TableBodyState {}

class TableBody extends React.Component<TableBodyProps, TableBodyState> {
  renderCell = (item: any, column: any) => {
    if (column.content) {
      return column.content(item);
    } else {
      return _.get(item, column.path);
    }
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item: any) => {
          return (
            <tr key={item._id}>
              {columns.map((column: any) => {
                return (
                  <td key={item._id + (column.path || column.key)}>
                    {this.renderCell(item, column)}
                  </td>
                );
              })}
            </tr>
          );
        })}
        {/* {moviesCut.map((movie) => (
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
        ))} */}
      </tbody>
    );
  }
}

export default TableBody;
