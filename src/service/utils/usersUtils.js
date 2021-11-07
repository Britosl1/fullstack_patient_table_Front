export const concatUserName = (first, last) => {
  const firstName = first;
  const lastName = last;
  const space = ' ';
  return firstName.concat(space, lastName)
}

export const searchValues = (rows, searchValue) => {
  return rows.filter((row) => row.name.first.toLowerCase().indexOf(searchValue) > -1 ||
    row.nat.toLowerCase().indexOf(searchValue) > -1)
};
