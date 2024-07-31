
# JSpresso Coffee Shop

## Descrição

Este é um projeto fullstack de uma aplicação de cafeteria. O frontend é desenvolvido em React e o backend em Node.js com Express. O projeto inclui funcionalidades de autenticação, animações interativas e integração com MongoDB.

## Tecnologias Utilizadas

### Frontend

- React
- GSAP (GreenSock Animation Platform)
- ScrollTrigger
- CSS

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- JSON Web Token (JWT)
- Dotenv
- Cors

## Funcionalidades

### Frontend

- Animações interativas com GSAP e ScrollTrigger
- Componentes reutilizáveis para botões, favoritos, navegação e rodapé
- Uso extensivo de imagens e ilustrações SVG

### Backend

- API RESTful com Express
- Autenticação JWT
- Criptografia de senhas com Bcrypt
- Integração com MongoDB via Mongoose

## Como Executar

### Backend

1. Navegue até a pasta `backend`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz da pasta `backend` e adicione as variáveis de ambiente:
   ```
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   JWT_SECRET=sua_chave_secreta
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

### Frontend

1. Navegue até a pasta `src`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

## Endpoints

### Rota Pública

- `GET /`: Retorna uma mensagem de boas-vindas.

### Rota Privada

- `GET /user/:id`: Retorna os dados do usuário pelo ID. Requer token de autenticação.

### Autenticação

- `POST /auth/user`: Cria um novo usuário.
  - Body: `{ email, password, confirmPassword }`
- `POST /auth/login`: Faz login e retorna um token de autenticação.
  - Body: `{ email, password }`

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch com a sua feature: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'Minha nova feature'`
4. Faça o push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License.
