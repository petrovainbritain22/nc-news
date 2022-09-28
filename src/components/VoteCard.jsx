export default function VoteCard({votes, article_id}) {
  return (
    <p>
      <button>Up</button>
      {votes} votes
      <button>Down</button>
    </p>
  );
}
