import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import {
  CustomForm,
  FormButton,
  CategoriesList,
  CategoriesItem,
  DivColor,
} from "../components/style";
import FormField from "../components/FormField";
import useForm from "../../../hooks/userForm";
import categoriesRepository from "../../../repositories/categories";

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);

  const initialValues = {
    id: 0,
    title: "",
    color: "#000",
    link_extra: "",
  };

  const { values, setValue } = useForm(initialValues);

  useEffect(() => {
    categoriesRepository
      .getAllCategories()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      })
      .catch((err) => {
        console.log(
          `Não foi possivel recuperar os dados do servidor. Error: ${err}`
        );
      });
  }, []);

  function handleSubmit() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();

    const idCategoria = categories.length + 1;
    console.log(categories.id);
    categoriesRepository.create({
      id: idCategoria,
      titulo: values.title,
      cor: values.color,
      link_extra: values.link_extra,
    });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categorias:
        {values.name}
      </h1>

      <CustomForm onSubmit={handleSubmit}>
        {/* //Desafio pessoal: deixar isso dinâmico */}

        <FormField
          label="Nome da Categoria"
          value={values.title}
          name="title"
          onChange={setValue}
        />
        <FormField
          label="Cor"
          value={values.color}
          type="color"
          name="color"
          onChange={setValue}
        />
        <FormField
          label="Link Extra"
          value={values.link_extra}
          name="link_extra"
          onChange={setValue}
        />
        <FormButton>Cadastrar</FormButton>
      </CustomForm>

      <CategoriesList>
        {categories &&
          categories.map((e) => (
            <CategoriesItem key={`${e.id}`}>
              <DivColor backgroundColor={e.cor} />
              {e.titulo}
            </CategoriesItem>
          ))}
      </CategoriesList>

      <Link to="/">Retornar para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
