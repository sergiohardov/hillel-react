import List from "../List/List";
import './model.css'

const Model = ({ name, collection }) => {
  return (
    <>
      {collection.map((item, idx) => (
        <tr key={item.id}>
          {idx === 0 && <td rowSpan={collection.length} className="cell__model">{name}</td>}
          
          <td className="cell__list"> 
            <List {...item} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default Model;
