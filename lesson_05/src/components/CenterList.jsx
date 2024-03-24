export default function CenterList({ list, handleTransferLeft, handleTransferRight }) {
  return (
    <div className="column">
      {list.length ? (
        <>
          <ul>
            {list.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>

          <div>
            <button onClick={handleTransferLeft}>Transfer first to left</button>
            <button onClick={handleTransferRight}>Transfer first to right</button>
          </div>
        </>
      ) : null}
    </div>
  );
}
