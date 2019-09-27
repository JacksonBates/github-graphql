import React from "react";

export const Search = props => {
  const { value, setValue, setLogin } = props;
  return (
    <div className="center                                                                                                                                                                                                                                                                ">
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyDown={event => {
          if (event.key == "Enter") {
            setLogin(value);
          }
        }}
      />
      <button onClick={() => setLogin(value)}>Search</button>
    </div>
  );
};

export default Search;
