export default function LoadingCard({isLoading, children}) {
  return isLoading ? (
    <p
      style={{
        backgroundColor: "white",
        padding: "5em",
        fontSize: "2em",
        textAlign: "center",
      }}
    >
      ... is loading...
    </p>
  ) : (
    children
  );
}
