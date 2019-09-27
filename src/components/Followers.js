import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Follower } from "Components";

const GET_FOLLOWERS = gql`
  query User($login: String!) {
    user(login: $login) {
      followers(first: 100) {
        edges {
          node {
            name
            avatarUrl
          }
        }
      }
    }
  }
`;

export const Followers = props => {
  const { login } = props;
  const { loading, error, data } = useQuery(GET_FOLLOWERS, {
    variables: {
      login,
    },
  });

  if (login !== "" && loading) return <p className="center">Loading...</p>;
  if (login !== "" && error) return <p className="center">{error.message}</p>;

  return (
    <div className="followers">
      {login ? (
        data.user.followers.edges.map((edge, i) => {
          return (
            edge.node.name && (
              <Follower
                name={edge.node.name}
                avatarUrl={edge.node.avatarUrl}
                key={i}
              />
            )
          );
        })
      ) : (
        <p className="center">
          Enter a GitHub user above to discover their followers.
        </p>
      )}
    </div>
  );
};

export default Followers;
