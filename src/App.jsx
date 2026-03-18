import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import css from "./components/Profile/Profile.module.css";
import dataFromServer from "./db/profiles.json";
import { useState } from "react";

function App() {
  const handleClick = (userName) => {
    console.log("name: ", userName);
  };

  return (
    <div>
      <Section>
        <button></button>
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
