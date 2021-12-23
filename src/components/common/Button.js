import React from 'react';
import styled, { css } from 'styled-components';

const ButtonBlock = styled.button`
  width: 100px;
  height: 100px;
  background: white;
  color: black;
  border: 0;
  border-radius: 50px;
`;

const Button = (props) => {
  return <ButtonBlock {...props}>{props.children}</ButtonBlock>;
};
export default Button;
