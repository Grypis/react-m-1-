import "./App.css";

function App() {
  return (
    <div>
      <Profile />
      <h1>Vite + React</h1>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}

const Profile = () => {
  return (
    <>
      <p>Hi</p>
      <h2 className="title">Max's Profile</h2>
    </>
  );
};

export default App;
