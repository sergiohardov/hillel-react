const List = ({ version, year, horsepower, engine }) => {
  return (
    <ul>
      <li>Version: {version}</li>
      <li>Year: {year}</li>
      <li>Horsepower: {horsepower}</li>
      <li>Engine: {engine}</li>
    </ul>
  );
};

export default List;
