import styled from "styled-components";

const Button = styled.button`
  border: 1px solid var(--white);
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: none;
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: var(--secondary);
  }

  @media (max-width: 800px) {
    border: 0;
    border-radius: 0;
    bottom: 0;
    color: (--white);
    left: 0;
    outline: 0;
    position: fixed;
    right: 0;
    text-align: center;
  }
`;

export default Button;
