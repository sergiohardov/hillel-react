import Table from "../Table/Table";
import CARS from "../../data/cars";

const App = () => {
  return (
    <>
      <h1>Car Specs</h1>
      {CARS.length ? <Table list={CARS} /> : <p>No cars data.</p>}
    </>
  );
};

export default App;
