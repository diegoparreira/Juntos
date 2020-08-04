import styled from 'styled-components';
import Button from '../../../components/Button';

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  &label {
    text-transform: uppercase;
  }
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

const FormButton = styled(Button)`
  margin: 1em auto;
  width: 120px;
  background-color: var(--primary);
  color: var(--white);
`;

const CategoriesList = styled.ul`
  margin: 1em auto;
  padding: 10px;
  width: fit-content;
  background: var(--white);
  border: 1px solid var(--secondary);
  list-style-type: none;
  text-align: center;
`;

const CategoriesItem = styled.li`
  text-align: left;
  margin-bottom: 1em;
  color: var(--blackLight);
  border-bottom: 1px solid var(--secondary);
  display: flex;
  align-items: center;
`;

const DivColor = styled.div`
  ${(backgroundColor) => backgroundColor};
  width: 10px;
  height: 10px;
  margin-right: 1em;
`;

export {
  InputItem, CustomForm, FormButton, CategoriesList, CategoriesItem, DivColor,
};
