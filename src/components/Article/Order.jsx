export default function Order({order, setOrder}) {
  function orderHandler(e) {
    setOrder(e.target.value);
  }
  return (
    <label htmlFor="select_order">
      Order
      <select
        id="select_order"
        name="order"
        value={order}
        onChange={orderHandler}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </label>
  );
}
