export default function SortBy({sort_by, setSort_by}) {
  function sortHandler(e) {
    setSort_by(e.target.value);
  }
  return (
    <label id="label_sort" htmlFor="select_sort">
      Sort by
      <select
        id="select_sort"
        name="sort_by"
        value={sort_by}
        onChange={sortHandler}
      >
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
        <option value="created_at">Date</option>
        <option value="title">Title</option>
      </select>
    </label>
  );
}
