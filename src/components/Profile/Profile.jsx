import clsx from "clsx";
import css from "./Profile.module.css";

import iconReact from "../../assets/react.svg";

import { RiRadioButtonLine } from "react-icons/ri";
import { HiStatusOffline } from "react-icons/hi";

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

      className={clsx(
        css.profile,
        hasPhisicalAddress && css.hasPhisicalAddress
      )}
    >
      <img src={iconReact} alt="" />
      <h2 className={css.title}>
        Name: {name} {hasPhisicalAddress === true && "🏠"}
      </h2>
      <p className={css.fieldRow}>Phone: {phone}</p>
      <p className={css.fieldRow}>Email: {email}</p>
      <p
        /* className={clsx(
          css.fieldRow,
          status === "online" && css.online,
          status === "offline" && css.offline
        )} */

        className={clsx(css.fieldRow, {
          [css.online]: status === "online",
          [css.offline]: status === "offline",
        })}
      >
        Status:{" "}
        {status === "online" ? <RiRadioButtonLine /> : <HiStatusOffline />}{" "}
      </p>
    </div>
  );
};

export default Profile;
