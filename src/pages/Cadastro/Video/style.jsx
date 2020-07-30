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
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
    margin-top: 10px;
`;

export { InputItem, CustomForm };
