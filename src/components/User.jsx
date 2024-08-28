import React from "react";

export default function User({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onClickInvite,
  isInvited,
}) {
  return (
    <>
      <li style={{ display: "flex" }}>
        <img className="avatar" src={avatar} alt="User" />
        <div>
          <h3 className="name">
            {first_name} {last_name}
          </h3>
          <p className="email">{email}</p>
        </div>
        <button className="plusUser" onClick={()=> onClickInvite(id)}>
          {isInvited ? "-" : "+"}
        </button>
      </li>
    </>
  );
}
