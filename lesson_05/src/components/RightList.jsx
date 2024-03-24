export default function RightList({ list, handleRemove }) {
  return (
    <div className="column">
      {list.length ? (
        <>
          <ul>
            {list.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>

          <button onClick={handleRemove}>Remove last item</button>
        </>
      ) : null}
    </div>
  );
}
