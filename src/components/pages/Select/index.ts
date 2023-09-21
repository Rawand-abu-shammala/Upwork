import styled from 'styled-components';

const Select = styled.select`
  font-size: 16px;
  font-weight: 400;
  border: ${props => props.theme.border.form};
  border-radius: 8px;
  padding: 8px 12px;
  width: 100%;
  max-width: 200px;
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.6569 10.3432L12.0001 16L6.3433 10.3432L5.65686 11.0296L12.0001 17.3728L18.3433 11.0296L17.6569 10.3432Z' fill='%231C1C1C'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.primary200};
  }

  option {
    font-size: 16px;
    line-height: 2rem;
    padding: 0.5rem 0;
    font-weight: 400;
  }

    option:hover{
    background-color:  ${props => props.theme.colors.primary.primary200} !important;
    color: #fff;
  }
`;

export default Select;