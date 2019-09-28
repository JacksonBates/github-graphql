import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./styles/styles.css";
import { ApiKeySetter, Followers, Search, Title } from "Components";

const token = process.env.GITHUB_ACCESS_TOKEN
  ? process.env.GITHUB_ACCESS_TOKEN
  : window.localStorage.getItem("GITHUB_ACCESS_TOKEN");

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${token}`,
  },
});

const App = () => {
  const [login, setLogin] = useState("");
  const [value, setValue] = useState("");

  return (
    <ApolloProvider client={client}>
      {token ? (
        <div>
          <Title />
          <Search value={value} setLogin={setLogin} setValue={setValue} />
          <Followers login={login} />
        </div>
      ) : (
        <ApiKeySetter value={value} setValue={setValue} />
      )}
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
