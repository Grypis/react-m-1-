import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import css from "./components/Profile/Profile.module.css";
import dataFromServer from "./db/profiles.json";
import { useState } from "react";
import Bar from "./components/Bar/Bar";

function App() {
  const [showUserList, setShowUserList] = useState(false);
  const [bottles, setBottes] = useState({
    beer: 2,
    wine: 3,
    whiskey: 1,
  });
  const handleClick = (userName) => {
    console.log("name: ", userName);
  };

  const toggleUserList = () => {
    setShowUserList((actualState) => !actualState);
    //* setShowUserList(!showUserList)
  };

  const onBarSupplyAdd = (alcoName) => {
    console.log("add", alcoName);

    /*  if (alcoName === "beer") {
      setBottes({ ...bottles, beer: bottles["beer"] + 1 });
      // { beer: 2, wine: 3, whiskey: 1 }; -> {beer: 2, wine: 3, whiskey: 1, beer: 2 + 1}
      // -> {wine: 3, whiskey: 1, beer: 3}
    }
    if (alcoName === "wine") {
      setBottes({ ...bottles, wine: bottles["wine"] + 1 });
    }
    if (alcoName === "whiskey") {
      setBottes({ ...bottles, whiskey: bottles["whiskey"] + 1 });
    } */

    setBottes({ ...bottles, [alcoName]: bottles[alcoName] + 1 });
  };

  const total = bottles.beer + bottles.wine + bottles.whiskey;

  return (
    <div>
      <Section title="FSON105 weekend bar">
        <Bar
          beer={bottles.beer}
          wine={bottles.wine}
          whiskey={bottles.whiskey}
          total={total}
          onBarSupplyAdd={onBarSupplyAdd}
        />
      </Section>
      <Section>
        <button type="button" onClick={toggleUserList}>
          Toggle User List
        </button>
        {showUserList && (
          <div>
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
          </div>
        )}
      </Section>
    </div>
  );
}

export default App;
