import styled from "styled-components";

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
`;

export { InputItem, CustomForm };
