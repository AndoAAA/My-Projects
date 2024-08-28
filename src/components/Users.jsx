import React from "react";
import { IMAGES } from "../images";
import Loader from "./Loader";
import User from "./User";

export default function Users({
  items,
  isLoading,
  searchValue,
  onChangeSearchValue,
  invites,
  onClickInvite,
  onClickSendInvites
}) {
  return (
    <>
      <div className="search">
        <img
          src={IMAGES.searchIcon}
          alt="search-icon"
          style={{ width: "30px", height: "30px" }}
        />
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Find user..."
        />
      </div>
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <ul className="user-list" style={{ listStyle: "none" }}>
          {items
            .filter((obj) => {
              const fullName = (obj.first_name + obj.last_name).toLowerCase();
              return (
                fullName.includes(searchValue.toLowerCase()) ||
                obj.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((obj) => (
              <User
                onClickInvite={onClickInvite}
                isInvited={invites.includes(obj.id)}
                key={obj.id}
                {...obj}
              />
            ))}
        </ul>
      )}
      {
        invites.length > 0 &&(
            <button onClick={onClickSendInvites}>Send invitations</button>
        )
      }
    </>
  );
}
