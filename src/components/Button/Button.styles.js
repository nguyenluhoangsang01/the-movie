import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background-color: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  font-size: var(--fontBig);
  border: 0;
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
