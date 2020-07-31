import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { CustomForm, FormButton, CategoriesList } from '../components/style';
import FormField from '../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, values]);
    setValues(initialValues);
  };

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
        {categories
          && categories.map((e, i) => <li key={`${e.name}${i + 1}`}>{e.name}</li>)}
      </CategoriesList>

      <Link to="/">Retornar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
