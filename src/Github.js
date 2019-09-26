import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_FOLLOWERS = gql`
  query {
    user(login: "jacksonbates") {
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

function Github() {
  const { loading, error, data } = useQuery(GET_FOLLOWERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(data.user.followers.edges);
  return data.user.followers.edges.map((edge, i) => {
    console.log(edge.node.name, i);
    return (
      edge.node.name && (
        <div key={i}>
          <p>{edge.node.name}</p>
          <img src={edge.node.avatarUrl} />
        </div>
      )
    );
  });
}

export default Github;
