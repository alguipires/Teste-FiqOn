import React, { useEffect, useState } from 'react';
import AppBar from '../../components/Appbar/AppBar';
import './List.css';
import { getPage, postBase64Validation } from '../../api/axiosInstance';
import { getSavedUser } from '../../utils/sessionStorageLogin';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import handleAlert from '../../utils/handleAlert';

function List() {
  const [apiToken, setApiToken] = useState(getSavedUser('api_token'));
  const [listPages, setListPages] = useState([]);
  const [hashBase64, setHashBase64] = useState('');
  const [responseApi, setResponseApi] = useState('');

  useEffect(() => {
    async function fetchData() {
      await getAllPages();
    }

    fetchData();
  }, []);

  const getAllPages = async () => {
    let numPage = 0;
    var currentPage = null;
    var listPages = [];

    do {
      currentPage = await getPage(apiToken, numPage);
      listPages.push(currentPage.data); // Adicionando as páginas no array
      // setListPages((prePage) => [...prePage, currentPage.data]); // Adicionando as páginas no array um por uma autlizando o estado
      numPage++;
    } while (currentPage.more_items === 'true');

    setListPages(listPages); // Adicionando o array de páginas no estado, atualiza uma vez só
  };

  const renderTable = () => {
    let numMsg = 1;

    if (listPages.length === 0) {
      return null;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {listPages.map((page) => (
            <tr key={page}>
              <td>{numMsg++}</td>
              <td>{page}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  const handleButtonClickValidationBase64 = (e) => {
    e.preventDefault();
    if (listPages.length > 0) {
      const pages = listPages.join().replace(/,/g, '');

      // Converter para UTF-8
      const encoder = new TextEncoder();
      const utf8Array = encoder.encode(pages);

      // Converter para Base64
      const base64 = btoa(String.fromCharCode.apply(null, utf8Array));

      setHashBase64(base64);

      handleAlert('Base64 gerado com sucesso', 'success');
    } else {
      handleAlert('Não há pilares para gerar o Base64', 'error');
    }
  };

  const handleButtonClickValidationResponseApi = async (e) => {
    e.preventDefault();
    if (hashBase64 !== '') {
      const response = await postBase64Validation(apiToken, hashBase64);

      if (
        response.message ===
        'Parabéns, você finalizou o teste técnico com sucesso!'
      ) {
        setResponseApi(response.message);
        handleAlert('Finalizado com sucesso', 'success');
      } else {
        setResponseApi(response.message);
        handleAlert('Erro ao validar Pilares', 'error');
      }
    } else {
      handleAlert('Não há Base64 para validar', 'error');
    }
  };

  return (
    <section className="list_container">
      <AppBar />
      <div className="container_table">
        <h2 className="container_text_title">Pilares da cultura da FiqOn</h2>
        {renderTable()}
      </div>
      <section className="container_validation-list">
        <h2 className="container_text_title">Validação</h2>

        <div className="container_button_validation">
          <Button
            className="button_salvar"
            variant="contained"
            color="success"
            value="validar Pilares"
            onClick={handleButtonClickValidationBase64}
            type="submit"
          >
            Gerar Base64
          </Button>
        </div>

        <div className="container_input_text">
          <TextField
            id="outlined-basic"
            label="Hash Base 64"
            variant="outlined"
            className="input_email"
            value={hashBase64}
            onChange={(e) => handleChange(e, setHashBase64)}
            disabled // Definindo o campo como desativado
          />
        </div>

        <div className="container_button_validation">
          <Button
            className="button_salvar"
            variant="contained"
            color="success"
            value={'validar Pilares'}
            onClick={handleButtonClickValidationResponseApi}
            type="submit"
          >
            Validar Pilares
          </Button>
        </div>

        <div className="container_input_text">
          <TextField
            id="outlined-basic"
            label="Resposta API"
            variant="outlined"
            className="input_email"
            value={responseApi}
            onChange={(e) => handleChange(e, setResponseApi)}
            disabled // Definindo o campo como desativado
          />
        </div>
      </section>
    </section>
  );
}
export default List;
