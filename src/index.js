import React, { useState } from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./styles/styles.css";
import { Followers, Search, Title } from "Components";

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
      <Title />
      <Search value={value} setLogin={setLogin} setValue={setValue} />
      <Followers login={login} />
    </ApolloProvider>
  );
};

render(<App />, document.getElementById("root"));
