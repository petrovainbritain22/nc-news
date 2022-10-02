import {useState} from "react";
import {useSearchParams} from "react-router-dom";

export default function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const [newSortBy, setNewSortBy] = useState(sort_by);
  const [newOrder, setNewOrder] = useState(order);
  return (
    <form method="GET">
      <label htmlFor="select_sortByColumn">Sort By</label>
      <select
        name="sort_by"
        id="select_sortByColumn"
        value={newSortBy ? newSortBy : "created_at"}
        onChange={(e) => {
          setNewSortBy(e.target.value);
        }}
      >
        <option value="title">Title</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
        <option value="created_at">Date</option>
        <option value="author">Author</option>
        <option value="topic">Topic</option>
      </select>
      <label htmlFor="select_order">Order</label>
      <select
        name="order"
        id="select_order"
        value={newOrder ? newOrder : "desc"}
        onChange={(e) => {
          setNewOrder(e.target.value);
        }}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <button type="submit">Sort</button>
    </form>
  );
}
