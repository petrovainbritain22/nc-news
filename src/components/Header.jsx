export default function Header() {
  const title = "NC News";
  return (
    <header className="App-header">
      {/* here will be a component insted of <p> */}
      <p>Profile</p>
      <h1>{title}</h1>
      <p>Topics</p>
    </header>
  );
}
