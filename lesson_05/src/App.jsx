import { useEffect, useState } from "react";
import api from "./service/api";
import LeftList from "./components/LeftList";
import CenterList from "./components/CenterList";
import RightList from "./components/RightList";
import "./style.scss";

export default function App() {
  const [leftList, setLeftList] = useState([]);
  const [centerList, setCenterList] = useState([]);
  const [rightList, setRightList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get();
        setLeftList(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleLeftListTransfer = () => {
    let firstItem = leftList[0];
    setLeftList((prevState) => prevState.filter((item, idx) => idx !== 0));
    setCenterList((prevState) => [firstItem, ...prevState]);
  };
  const handleCenterListTransferLeft = () => {
    let firstItem = centerList[0];

    setCenterList((prevState) => prevState.filter((item, idx) => idx !== 0));
    setLeftList((prevState) => [firstItem, ...prevState]);
  };
  const handleCenterListTransferRight = () => {
    let firstItem = centerList[0];

    setCenterList((prevState) => prevState.filter((item, idx) => idx !== 0));
    setRightList((prevState) => [firstItem, ...prevState]);
  };
  const handleRightListRemove = async () => {
    try {
      const lastItem = rightList.at(-1);
      
      const response = await api.delete(lastItem.id);
      setRightList((prevState) => prevState.filter((item) => item.id !== response.id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <LeftList list={leftList} handleTransfer={handleLeftListTransfer} />
      <CenterList
        list={centerList}
        handleTransferLeft={handleCenterListTransferLeft}
        handleTransferRight={handleCenterListTransferRight}
      />
      <RightList list={rightList} handleRemove={handleRightListRemove} />
    </main>
  );
}