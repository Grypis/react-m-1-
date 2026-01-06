import clsx from "clsx";
import "./Profile.css";

const Profile = ({
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAddress,
}) => {
  /*  const className = ["profile"];
  if (hasPhisicalAddress) {
    className.push("hasPhisicalAddress");
  } = 2 variant */

  return (
    <div
      // className={`profile ${hasPhisicalAddress ? "hasPhisicalAddress" : ""} `} = 1 variant
      // className={className.join(" ")} = 2 variant
      /* className={clsx("profile", {
        hasPhisicalAddress: hasPhisicalAddress,
      })}  = 3 varinat */

      className={clsx("profile", hasPhisicalAddress && "hasPhisicalAddress")}
    >
      <h2>
        Name: {name} {hasPhisicalAddress === true && "🏠"}
      </h2>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status === "online" ? "✅" : "❌"} </p>
    </div>
  );
};

export default Profile;
