import React from "react";

export const ApiKeySetter = props => {
  const { value, setValue } = props;
  return (
    <section>
      <p>
        In order to unlock this app you will need to paste a read:user personal
        access token from Github.
      </p>
      <p>
        You can get one from here:{" "}
        <a href="https://github.com/settings/tokens/new" target="_blank">
          github.com/settings/tokens/new
        </a>
        .
      </p>
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyDown={event => {
          if (event.key == "Enter") {
            window.localStorage.setItem("GITHUB_ACCESS_TOKEN", value);
            setValue("");
            window.location.reload();
          }
        }}
      />
    </section>
  );
};
