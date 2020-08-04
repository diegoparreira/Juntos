import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import { CustomForm, FormButton } from '../components/style';
import FormField from '../components/FormField';
import useForm from '../../../hooks/userForm';
import videoRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoriesTitles = categories.map((e) => e.titulo);
  const initialValues = {
    title: '',
    url: '',
    category: '',
  };

  const { values, setValue } = useForm(initialValues);


  useEffect(() => {
    categoriasRepository
      .getAllCategories()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      })
      .catch((err) => {
        console.log(`Não foi possível recuperar os dados do servidor. ${err}`);
      });
  }, []);

  const handleSubmit = () => {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();

    const categoriaEscolhida = categories.find(
      (categoria) => categoria.titulo === values.category,
    );

    videoRepository
      .create({
        titulo: values.title,
        url: values.url,
        categoriaId: categoriaEscolhida.id,
      })
      .then(() => {
        console.log('Cadastrou com sucesso !');
        history.push('/');
      });
  };

  return (
    <div>
      <PageDefault>
        <h1>Cadastro de Video</h1>

        {/* Possivel colocar um player para atualizar video conforme digitar url */}

        <CustomForm onSubmit={handleSubmit}>
          <FormField
            label="Título do Video"
            value={values.title}
            name="title"
            onChange={setValue}
          />
          <FormField
            label="URL do Video"
            value={values.url}
            name="url"
            onChange={setValue}
          />

          {/* TODO: Criar dropdown para categorias consultando state */}
          <FormField
            label="Categoria"
            value={values.category}
            name="category"
            onChange={setValue}
            suggestions={categoriesTitles}
          />

          <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
          <FormButton>Cadastrar</FormButton>
        </CustomForm>
      </PageDefault>
    </div>
  );
}

export default CadastroVideo;
