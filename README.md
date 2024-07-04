# Financial Control LOGIN API MVP 1

Este pequeno projeto é a primeira versão da api de login do Financial Control

O objetivo do projeto é um crud com 3 rotas post para autenticação de usuário utilizando a API externa do Firebase.

**Primeira rota POST**: Uma rota para registro de usuário, ela recebe um json com email e senha para efetuar a criação de usuário em uma roda POST no firebase.

**Segunda rota POST**: Uma rota para login do usuário, ela recebe um json com email e senha para efetuar o login do usuário em uma roda POST no firebase, retornando seu id e token de sessão.

**Terceira rota POST**: Uma rota de verificação de sessão, ela recebe um json com a chave de sessão em seu body para verificar se a sessão do usuário está valida em uma roda POST no firebase, retornando um true caso válido, e false caso inválido.

## Como executar

Após clonar o repositório, é necessário implementar na raiz do projeto o arquivo ```admin-key.json```, que pode ser encontrado nesse [link](https://drive.google.com/file/d/1cnyrv9s8vbhirUfNlyor9ZmTu6D2nnWv/view?usp=sharing), ou se já estiver ele, só por na pasta raiz. Para executar o projeto, é necessário ir ao diretório raiz do projeto, pelo terminal, para poder executar os comandos descritos abaixo.

### Executando sem Docker

Instalação das dependências

```bash
npm install
```

Para executar a API em modo de desenvolvimento basta executar:

```bash
npm start
```

### Executando com Docker

Criação da rede (Necessária para se comunicar com as outras apis)

```bash
docker network create financial-control-network 
```

Criação da imagem:

```bash
docker build -t financial-control-login-mvp-1 .
```

Execução da imagem:

```bash
docker run -d --name financial-control-login-mvp-1 --network financial-control-network -p 3000:3000 financial-control-login-mvp-1
```