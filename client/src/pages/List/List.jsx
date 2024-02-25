import React, { useEffect, useState } from 'react';
import AppBar from '../../components/Appbar/AppBar';
import './List.css';
import { getPage } from '../../api/axiosInstance';
import { getSavedUser } from '../../utils/sessionStorageLogin';
import Button from '@mui/material/Button';
// import TextField from '../../components/TextFild/TextFild.jsx';
import TextField from '@mui/material/TextField';

function List() {
  const [apiToken, setApiToken] = useState(getSavedUser('api_token'));
  const [listPages, setListPages] = useState([]);

  // useEffect(() => {
  //   console.log('inicio do loadingPages');
  //   getAllPages();
  //   console.log('fim do loadingPages');
  // }, []);

  useEffect(() => {
    async function fetchData() {
      await getAllPages();
    }

    fetchData();
  }, []);

  const getAllPages = async () => {
    let numPage = 0;
    var currentPage = null;

    do {
      currentPage = await getPage(apiToken, numPage);
      console.log('Log DO while currentPage...', currentPage); //TODO remover
      setListPages((prePage) => [...prePage, currentPage.data]);
      numPage++;
    } while (currentPage.more_items === 'true');
  };

  console.log('Log ListPages linha 30...', listPages); //TODO remover

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

  return (
    <section className="list_container">
      <AppBar />
      <div className="container_table">
        <h2 className="container_text_title">Pilares da cultura da FiqOn</h2>
        {renderTable()}
        {/* <div className="container_button">
          <Button
            className="button_salvar"
            variant="contained"
            color="success"
            value="validar Pilares"
            // onClick={handleButtonClick}
            type="submit"
          >
            Validar Pilares
          </Button>
        </div> */}
      </div>
      /
      <section className="container_validation-list">
        <h2 className="container_text_title">Validação</h2>

        <div className="container_button_validation">
          <Button
            className="button_salvar"
            variant="contained"
            color="success"
            value="validar Pilares"
            // onClick={handleButtonClick}
            type="submit"
          >
            Gerar Base64
          </Button>
        </div>

        <div className="container_input_text">
          {/* <h1>1º Hash</h1> */}
          {/* <p>{pages}</p> */}
          <TextField
            // error={errorEmail}
            id="outlined-basic"
            label="Hash Base 64"
            variant="outlined"
            className="input_email"
            // onChange={(e) => handleChange(e, setEmail)}
          />
        </div>

        <div className="container_button_validation">
          <Button
            className="button_salvar"
            variant="contained"
            color="success"
            value="validar Pilares"
            // onClick={handleButtonClick}
            type="submit"
          >
            Validar Pilares
          </Button>
        </div>

        <div className="container_input_text">
          {/* <h1>2º é valido?</h1> */}
          {/* <p>{pages}</p> */}
          <TextField
            // error={errorEmail}
            id="outlined-basic"
            label="Resposta API"
            variant="outlined"
            className="input_email"
            // onChange={(e) => handleChange(e, setEmail)}
          />
        </div>
      </section>
    </section>
  );
}
export default List;
