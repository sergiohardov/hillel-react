import Model from "../Model/Model";
import "./brand.css";

const Brand = ({ brand, models }) => {
  return (
    <>
      <tr className="row__brand">
        <td colSpan="2">{brand}</td>
      </tr>

      {models.map((model) => <Model key={model.id} {...model} />)}
    </>
  );
};

export default Brand;
