import styled, { css } from 'styled-components';

const backgrounds = {
  add: css`
    background: #fc2b6e;
  `,
  back: css`
    background: #b6bab7;
  `,
  danger: css`
    background: #eb4034;
  `,
  edit: css`
    background: #059efc;
  `,
  pagination: css`
    background: #0071c7;
  `,
};

export const ButtonField = styled.button`
  border: none;
  color: #fff;
  border-radius: ${props => (props.active ? '15px' : '4px')};
  margin: 2px 0 2px 10px;
  height: 30px;
  width: ${props =>
    props.background === 'danger' || props.background === 'edit'
      ? '30px'
      : '100px'};

  display: flex;
  align-items: center;
  justify-content: center;

  ${props => backgrounds[props.background]}
`;

export default ButtonField;
