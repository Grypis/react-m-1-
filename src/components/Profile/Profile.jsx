const Profile = ({
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAddress,
}) => {
  return (
    <div
      style={{
        padding: "20px 10px",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px 10px 10px 0",
        color: "black",
      }}
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
