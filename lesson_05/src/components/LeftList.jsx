export default function LeftList({ list, handleTransfer }) {
  return (
    <div className="column">
      {list.length ? (
        <>
          <ul>
            {list.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>

          <button onClick={handleTransfer}>Transfer first to right</button>
        </>
      ) : null}
    </div>
  );
}
