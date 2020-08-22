import React from "react";

export interface ListGroupProps {
  items: Array<any>;
  onItemSelect: any;
  textProperty?: string;
  valueProperty?: string;
  selectedItem: any;
}

const ListGroup: React.SFC<ListGroupProps> = (props) => {
  const {
    items,
    textProperty = "name",
    valueProperty = "_id",
    onItemSelect,
    selectedItem,
  } = props;
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
