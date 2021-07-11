import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
// Image
import searchIcon from "../../images/search-icon.svg";
// styles
import { Content, Wrapper } from "./SearchBar.styles";

export default function SearchBar({ setSearchTerm }) {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(function () {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [state, setSearchTerm]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
}

SearchBar.propTypes = {
  callback: PropTypes.func,
};
