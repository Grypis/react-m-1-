import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import css from "./components/Profile/Profile.module.css";
import dataFromServer from "./db/profiles.json";

function App() {
  let counter = 0;

  const incrementCounter = () => {
    counter += 1;
    console.log("counter :", counter);
  };

  const handleClick = (userName) => {
    console.log("name :", userName);
  };

  return (
    <div>
      <Section>
        <p>Counter: {counter}</p>
        <button type="button" onClick={incrementCounter}>
          Add to counter
        </button>
      </Section>

      <Section>
        {dataFromServer.map((profile) => {
          return (
            <Profile
              key={profile.email}
              name={profile.name}
              phone={profile.phone}
              email={profile.email}
              status={profile.status}
              hasPhisicalAddress={profile.hasPhisicalAddress}
              handleClick={handleClick}
            />
          );
        })}
      </Section>
    </div>
  );
}

export default App;
