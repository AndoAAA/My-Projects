import React from "react";
import { IMAGES } from "../../images";
import Loader from "../Loader/Loader";
import User from "../User/User";
import "./style.css";

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
    <div className="container">
      <div className="search">
        <input
        className="search-input"
          value={searchValue}
          onChange={onChangeSearchValue}
          type="text"
          placeholder="Find user..."
        />
        <img
          className="search-icon"
          src={IMAGES.searchIcon}
          alt="search-icon"
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
            <button onClick={onClickSendInvites} className="send-button">Send invitations</button>
        )
      }
    </div>
  );
}
