import userEvent from "@testing-library/user-event";
import React from "react";

const propTypes = {};
const defaultProps = {};

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(props.term);
  };

  return (
    <div id="search">
      <form id='searchAPI' onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter search term..."
            id="term"
            name="term"
            value={props.term}
            onChange={(e) => props.setTerm(e.target.value)}
          />
          <ul className="list">
           
          </ul>
        </label>
        <button type="submit" value="Search" >Search</button>
      </form>
      <h1>{props.term && "Suggested For You" + props.term}</h1>
    </div>
  );
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
