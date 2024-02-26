import axios from 'axios';

// const endpoint = window.env.REACT_APP_API_URL || 'env not-found';
// const endpoint = 'https://instance.fique.online/webhook/merge/88d8701e-a1d6-4fee-b15b-53e90dc1d126/';
const endpointPostAuthentication =
  'https://instance.fique.online/webhook/merge/88d8701e-a1d6-4fee-b15b-53e90dc1d126/autenticacao/57441afd5a59ccd4c62816683fcc8d665c42bb7b12857fc64a6cace4ababdc67f78c70b044';
const endpointGetData =
  'https://instance.fique.online/webhook/merge/88d8701e-a1d6-4fee-b15b-53e90dc1d126/listar_pilares/76b07f1dbf18eabde7b8e3611ab078daa0f34b094cc9856d20d6d0b15fb3b7a99f697e451d';
const endpointPostDataValidation =
  'https://instance.fique.online/webhook/merge/88d8701e-a1d6-4fee-b15b-53e90dc1d126/envia_resposta/7b56940678e89802e02e1981a8657206d639f657d4c58efb8d8fb74814799d1c001ec121c6';

const checkUser = async (email, password) => {
  const basicAuth = 'Basic ' + btoa(`${email}:${password}`);

  return await axios
    .post(
      endpointPostAuthentication,
      {},
      {
        headers: {
          Authorization: basicAuth,
        },
      }
    )
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    })
    .finally(() => {
      // always executed
    });
};

const getPage = async (api_token, page) => {
  const config = {
    params: {
      page: page,
      api_token: api_token,
    },
  };

  return await axios
    .get(endpointGetData, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response ? error.response.status : 'Error';
    });
};

const postBase64Validation = async (api_token, body) => {
  return await axios
    .post(
      endpointPostDataValidation,
      { answer: body },
      {
        params: {
          api_token: api_token,
        },
      }
    )
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    })
    .finally(() => {
      // always executed
    });
};

export { checkUser, getPage, postBase64Validation };
