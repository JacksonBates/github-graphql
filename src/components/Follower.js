import React from "react";

export const Follower = props => {
  const { i, name, avatarUrl } = props;
  return (
    <div className="follower" key={i}>
      <p>{name}</p>
      <img src={avatarUrl} />
    </div>
  );
};

export default Follower;
