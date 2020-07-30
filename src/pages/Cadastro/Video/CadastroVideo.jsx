import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import { InputItem, CustomForm, Title } from "./style";

const Input = ({ name }) => {
  return (
    <InputItem>
      <label htmlFor={name}>{name}</label>
      <input type="text" name={name} id="" />
    </InputItem>
  );
};

function CadastroVideo() {
  return (
    <div>
      <PageDefault>
        <Title>Cadastro de Video</Title>

        <CustomForm>
          <Input name="categoria" />
          <Input name="título" />
          <Input name="url" />
          <Input name="descrição" />
        </CustomForm>

        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </PageDefault>
    </div>
  );
}

export default CadastroVideo;
