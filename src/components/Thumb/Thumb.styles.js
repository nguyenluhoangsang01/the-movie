import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 1px 1px 10px 1px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  height: 100%;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.9;
    transform: scale(1.1);
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
