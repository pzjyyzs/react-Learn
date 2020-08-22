import * as React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

export interface TableProps {
  columns: any;
  sortColumn: any;
  onSort: any;
  moviesCut: any;
}

const Table: React.SFC<TableProps> = ({
  columns,
  sortColumn,
  onSort,
  moviesCut,
}) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      ></TableHeader>
      <TableBody columns={columns} data={moviesCut}></TableBody>
    </table>
  );
};

export default Table;
