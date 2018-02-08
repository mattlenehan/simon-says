import styled from 'styled-components';
import { Link } from 'react-router';

const styles = `
  font-size: 13px;
  margin: 4px;
  padding: 0.25em 1em;
  color: white;
  background-color: #4CAF50;
  font-family: sans-serif;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  outline: none;
  text-decoration: none;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Button = styled.button`${styles}`
export const ButtonLink = styled(Link)`${styles}`;