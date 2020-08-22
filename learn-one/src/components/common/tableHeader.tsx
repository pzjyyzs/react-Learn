import * as React from "react";

export interface TableHeaderProps {
  columns: any;
  sortColumn: any;
  onSort: any;
}

export interface TableHeaderState {}

class TableHeader extends React.Component<TableHeaderProps, TableHeaderState> {
  constructor(props: TableHeaderProps) {
    super(props);
    console.log(props);
  }
  raiseSort = (path: any) => {
    console.log(path);
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  renderSortIcon = (column: any) => {
    if (!this.props.sortColumn.path) return null;
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc"></i>;

    return <i className="fa fa-sort-desc"></i>;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((item: any) => {
            return (
              <th
                key={item.path || item.key}
                onClick={() => this.raiseSort(item.path)}
              >
                {item.label} {this.renderSortIcon(item)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
