import styled from "styled-components";
import Button from "../../../components/Button";

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

`;

export { InputItem, CustomForm , FormButton, CategoriesList};
