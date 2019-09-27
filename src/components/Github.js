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

export const Github = props => {
  const { login } = props;
  const { loading, error, data } = useQuery(GET_FOLLOWERS, {
    variables: {
      login,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return data.user.followers.edges.map((edge, i) => {
    return (
      edge.node.name && (
        <Follower
          name={edge.node.name}
          avatarUrl={edge.node.avatarUrl}
          key={i}
        />
      )
    );
  });
};

export default Github;
