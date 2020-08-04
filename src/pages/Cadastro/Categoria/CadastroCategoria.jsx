import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import { CustomForm, FormButton, CategoriesList } from "../components/style";
import FormField from "../components/FormField";
import useForm from '../../../hooks/userForm';

// TODO: Arrumar envio de formulário e definir funções http

function CadastroCategoria() {

  const initialValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const { values, setValue, handleSubmit } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categorias:
        {values.name}
      </h1>

      <CustomForm onSubmit={handleSubmit}>
        <FormField
          label="Nome da Categoria"
          value={values.name}
          name="name"
          onChange={setValue}
        />
        <FormField
          label="Descrição"
          value={values.description}
          name="description"
          onChange={setValue}
        />
        <FormField
          label="Cor"
          value={values.color}
          type="color"
          name="color"
          onChange={setValue}
        />
        <FormButton>Cadastrar</FormButton>
      </CustomForm>

      <CategoriesList>
        {categories &&
          categories.map((e, i) => (
            <li key={`${e.titulo}${i + 1}`}>{e.titulo}</li>
          ))}
      </CategoriesList>

      <Link to="/">Retornar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
