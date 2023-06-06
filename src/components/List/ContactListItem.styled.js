import styled from 'styled-components';
const Item = styled.li`
  display: flex;
  justify-content: left;
  color: black;
  font-size: 16px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: grey;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ContactItemStyle = {
  Item,
  Button,
};
