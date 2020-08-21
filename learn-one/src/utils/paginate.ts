import _ from "lodash";

export function paginate(
  items: Array<any>,
  pageNumber = 1,
  pageSize: number
): Array<any> {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
