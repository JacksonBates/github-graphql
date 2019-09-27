import React, { useState } from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./styles/styles.css";
import { Github } from "Components";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
});

const App = () => {
  const [login, setLogin] = useState("");
  const [value, setValue] = useState("");
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>GitHub Followers</h2>
      </div>
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyDown={event => {
          if (event.key == "Enter") {
            setLogin(value);
          }
        }}
      />
      {login ? (
        <Github login={login} />
      ) : (
        <p>Enter a GitHub user to get started</p>
      )}
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
