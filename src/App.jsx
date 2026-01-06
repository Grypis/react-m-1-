import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import css from "./components/Profile/Profile.module.css";
import dataFromServer from "./db/profiles.json";

function App() {
  return (
    <div>
      <p className={css.fieldRow}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        ipsam recusandae architecto repellat enim illum natus placeat aperiam
        impedit quae.
      </p>

      <Section title="Profile list">
        <Profile
          name="Max"
          phone="123456788"
          email="1fbdjf@example.com"
          status="online"
          hasPhisicalAddress
        />
        <Profile
          name="Max"
          phone="123456788"
          email="1fbdjf@example.com"
          status="online"
          hasPhisicalAddress
        />
        <Profile
          name="Max"
          phone="123456788"
          email="1fbdjf@example.com"
          status="online"
          hasPhisicalAddress
        />
      </Section>

      <Section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem assumenda vel cupiditate quisquam corrupti id maiores.
          Suscipit molestias quasi unde ratione perspiciatis impedit qui
          voluptates asperiores ex dolorem, fugiat excepturi illo corrupti quas
          laboriosam dicta nihil explicabo vitae eaque obcaecati!
        </p>
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
            />
          );
        })}
      </Section>
      {/* <ProfileList list={dataFromServer} /> */}

      {/*  <Profile
        name="Max"
        phone="123456788"
        email="1fbdjf@example.com"
        status="online"
        hasPhisicalAddress
      /> */}
    </div>
  );
}

export default App;
