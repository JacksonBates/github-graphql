import React from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./styles/styles.css";
import Github from "./Github";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
    <Github />
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
