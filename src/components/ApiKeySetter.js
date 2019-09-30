import React from "react";

export const ApiKeySetter = props => {
  const { value, setValue } = props;
  const handleSubmit = () => {
    window.localStorage.setItem("GITHUB_ACCESS_TOKEN", value);
    window.location.reload();
  };
  return (
    <section className="api-key-setter">
      <p>
        In order to unlock this app you will need to paste a read:user personal
        access token from Github.
      </p>
      <p>
        You can get one from here:&nbsp;
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
            handleSubmit();
          }
        }}
      />
      <button
        onKeyDown={event => {
          if (event.key == "Enter") {
            handleSubmit();
          }
        }}
        onClick={() => {
          handleSubmit();
        }}
      >
        Search
      </button>
    </section>
  );
};
