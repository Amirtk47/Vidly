import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="string"
      name="query"
      placeholder="Search..."
      value={value}
      className="form-control my-3"
      onChange={e => onChange(e.currentTarget.value)}
    ></input>
  );
};

export default SearchBox;
