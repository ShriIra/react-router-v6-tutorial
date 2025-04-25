import logo from "../assets/shri-ira-tech-logo.png";

function App() {
  return (
    <div className="app">
      <header className="container">
        <img
          className="logo"
          src={logo}
          alt="Shri Ira Tech logo"
          title="Shri Ira Tech | Home"
        />
      </header>

      <footer className="container">
        &copy;2022 | <a href="https://shriira.one/">Shri Ira Tech</a>
      </footer>
    </div>
  );
}

export default App;
