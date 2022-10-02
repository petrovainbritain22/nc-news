export default function SortBy({sort_by, setSort_by}) {
  function sortHandler(e) {
    setSort_by(e.target.value);
  }
  return (
    <label htmlFor="sort_by">
      Sort by
      <select
        id="sort_by"
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
