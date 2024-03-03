import Brand from "../Brand/Brand";
import "./table.css";

const Table = ({ list }) => {
  return (
    <table>
      <tbody>
        {list.map((item) => <Brand key={item.id} {...item} />)}
      </tbody>
    </table>
  );
};

export default Table;
