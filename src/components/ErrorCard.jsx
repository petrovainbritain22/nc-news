export default function ErrorCard({errMsg, children}) {
  return errMsg ? (
    <details>
      <summary>Opps... Something went wrong. Look for details</summary>
      <p>{errMsg}</p>
    </details>
  ) : (
    children
  );
}
