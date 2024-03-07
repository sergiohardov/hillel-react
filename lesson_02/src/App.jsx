import List from "./components/List/List";
import cities from "./data/cities";

function App() {
  return (
    <>
      <List list={cities} color="lightblue" />
    </>
  );
}

export default App;
