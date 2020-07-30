import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import { CustomForm, FormButton } from "../components/style";
import FormField from "../components/FormField";

function CadastroVideo() {
  return (
    <div>
      <PageDefault>
        <h1>Cadastro de Video</h1>

        <CustomForm>
          <FormField name="categoria" />
          <FormField name="título" />
          <FormField name="url" />
          <FormField name="descrição" />
          <FormButton />
        </CustomForm>

        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </PageDefault>
    </div>
  );
}

export default CadastroVideo;
