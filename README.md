# Teste de integração FiqOn

### Teste

##### Etapa 1 - Autenticação

No primeiro endpoint é onde você deve realizar a autenticação, utilizando Basic Auth. Você deve enviar uma requisição conforme a documentação ao final desta página. Caso seja enviado corretamente o endpoint retornará um API Token.

##### Etapa 2 - Consumo de informações

Após receber o token de API, você deve utilizar esse token conforme a documentação e obter os pilares da cultura da FiqOn. A resposta tem uma paginação, você deve percorrer a paginação para obter todos os pilares da cultura.

##### Etapa 3 - Envio de informações

Agora que você conhece os 5 pilares da cultura da FiqOn, você deve concatenar todos em uma única string, converter em base64 e enviar para o terceiro e último endpoint, conforme documentação. Como retorno você receberá uma resposta informando se está correto ou se é necessário ajustar o código.

---

## A solução criada

O sistema foi desenvolvido utilizando React com layout responsivo
ele tem 2 telas navegáveis sendo elas.

- **Login** : url > / “localhost:3000” > contém formulário de login, validação dos inputs, e autenticação.

- **Listar**: url > /listar “localhost:3000/listar” onde é realizado o processo de buscar as mensagens na API, listá-las, converter a string em base64 e enviar para API validar o teste. **(Somente usuários logados podem acessar esta url)**

Importante ler o [Documento](https://docs.google.com/document/d/1_DuHRe_vnwDhaybZHuKykgfbFZAdPjAml69lst-S7uo/edit?usp=sharing), nele contém informações sobre o desenvolvimento, vídeo explicativo e o erro “Access-Control-Allow-Headers”

## 📝 Licença

Projeto desenvolvido por:

[Alvaro](https://github.com/alguipires)

---

## 🛠 Tecnologias

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- **React**
- **Rect router dom**
- **Axios api**
- **Material Ui**
- **validator**
- **sweetalert2**
- **Docker**

---

# 🛠 Requisitos para iniciar a aplicação em desenvolvimento

## Ferramentas

- **VsCode**
- **Docker compose**

---

## Passos para iniciar a aplicação

### Containers

Na raiz do projeto com o terminal aberto rode os comandos para iniciar

- `docker compose build`
- `docker compose up` ou `docker compose up -d`

### Pronto para testar

Abra o seu navegador e acesse `http://localhost:3000/`
