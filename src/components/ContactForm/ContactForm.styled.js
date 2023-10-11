import { styled } from 'styled-components';
import { Form } from 'formik';

export const CardForm = styled(Form)`
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  margin: 15px auto;
  border-radius: 8px;
  box-shadow: 1px 1px 8px 0px tomato;
`;

export const Button = styled.button`
  width: 100px;
  margin-top: 10px;
  margin-left: auto;
  margin-bottom: 20px;
  margin-right: auto;
`;
