export default function LoadingCard({isLoading, children}) {
  return isLoading ? <p>... is loading...</p> : children;
}
