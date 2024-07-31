


import { config } from 'dotenv'; // IMPORTA O dotenv PARA CARREGAR AS VARIÁVEIS DE AMBIENTE
import express from 'express'; // IMPORTA O EXPRESS
import mongoose from 'mongoose'; // IMPORTA O MONGOOSE PARA MANIPULAÇÃO DO BANCO DE DADOS
import bcrypt from 'bcrypt'; // IMPORTA O BCRYPT PARA CRIPTOGRAFIA DE SENHAS
import jwt from 'jsonwebtoken'; // IMPORTA O JSONWEBTOKEN PARA AUTENTICAÇÃO
import cors from 'cors'; // IMPORTA O CORS

// CARREGA AS VARIÁVEIS DE AMBIENTE DO ARQUIVO .env
config();

const port = 3000; // DEFINE A PORTA DO SERVIDOR
const app = express(); // CRIA UMA INSTÂNCIA DO EXPRESS

app.use(express.json()); // PERMITE QUE O EXPRESS LEIA OBJETOS JSON NAS REQUISIÇÕES

app.use(cors({
    origin: 'https://jspresso-coffe-house.vercel.app/', // Permite apenas requisições originadas deste endereço
    methods: ['GET', 'POST'], // Permite apenas os métodos GET e POST
    allowedHeaders: ['Content-Type', 'Authorization'], // Permite apenas estes cabeçalhos
  }));


// IMPORTA O MODELO DE USUÁRIO CRIADO NO ARQUIVO User.js
import User from './models/User.js';

// OBTÉM AS CREDENCIAIS DO USUÁRIO DO ARQUIVO .env

// eslint-disable-next-line no-undef
const dbUser = process.env.DB_USER;
// eslint-disable-next-line no-undef
const dbPassword = process.env.DB_PASS;

console.log(dbUser);
console.log(dbPassword);



// URL DE CONEXÃO COM O BANCO DE DADOS MONGODB FORNECIDA PELO .env
const connectToDatabase = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.zersigi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// CONECTA AO BANCO DE DADOS MONGODB
mongoose.connect(connectToDatabase)
  .then(() => {
    console.log(`Servidor conectado ao banco de dados MongoDB`);
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Servidor não conectou ao banco, tente novamente`, err);
  });

// ROTA PÚBLICA
app.get('/', (req, res) => {
  res.status(200).json({msg: "Bem vindo à API pública do site!"});
});


// FUNÇÃO PARA VERIFICAR O TOKEN DE AUTENTICAÇÃO
function verificarToken(req, res, next) {
  const autorizationHeader = req.headers['authorization'];
  const token = autorizationHeader && autorizationHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({msg: "Acesso negado"});
  }

  try {
    // eslint-disable-next-line no-undef
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next(); // CONTINUA PARA A PRÓXIMA FUNÇÃO (HANDLER) DA ROTA
  } catch (error) {
    console.log('Erro ao verificar token:', error);
    res.status(500).json({ msg: 'Erro ao verificar token' });
  }
}


// ROTA PRIVADA: BUSCA UM USUÁRIO PELO ID, REQUER AUTENTICAÇÃO POR TOKEN
app.get('/user/:id', verificarToken, async (req, res) => {
  const id = req.params.id;

  // BUSCA O USUÁRIO PELO ID, EXCLUINDO O CAMPO DE SENHA (-password)
  try {
    const user = await User.findById(id, '-password');

    if (!user) {
      return res.status(404).json({msg: 'Usuário não encontrado'});
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ msg: 'Erro ao buscar usuário' });
  }
});

// ROTA PARA CRIAÇÃO DE NOVO USUÁRIO
app.post('/auth/user', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  // VALIDAÇÕES DOS DADOS RECEBIDOS

  if (!email) {
    return res.status(422).json({msg: "O email é obrigatório"});
  }
  if (!password) {
    return res.status(422).json({msg: "A senha é obrigatória"});
  }
  if (password !== confirmPassword) {
    return res.status(422).json({msg: "Senhas diferentes, por favor tente novamente"});
  }

  // VERIFICA SE O USUÁRIO JÁ EXISTE NO BANCO DE DADOS
  try {
    const usuarioExistente = await User.findOne({ email });

    if (usuarioExistente) {
      return res.status(422).json({msg: 'Email já cadastrado'});
    }

    // CRIA UMA SENHA SEGURA UTILIZANDO BCRYPT
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // CRIA UM NOVO USUÁRIO
    const newUser = new User({

      email,
      password: passwordHash
    });

    // SALVA O NOVO USUÁRIO NO BANCO DE DADOS
    await newUser.save();
    res.status(200).json({msg: "Usuário criado com sucesso!!"});
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ msg: 'Erro ao criar usuário' });
  }
});

// ROTA PARA LOGIN DE USUÁRIO
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // VALIDAÇÕES DOS DADOS RECEBIDOS
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório" });
  }
  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatória" });
  }

  try {
    // VERIFICA SE O USUÁRIO EXISTE NO BANCO DE DADOS
    const verificarUser = await User.findOne({ email });

    if (!verificarUser) {
      return res.status(404).json({msg: "Email não cadastrado"});
    }

    // VERIFICA SE A SENHA DIGITADA É VÁLIDA
    const isPasswordValid = await bcrypt.compare(password, verificarUser.password);

    if (!isPasswordValid) {
      return res.status(422).json({ msg: "Senha inválida" });
    }

    // CRIA UM TOKEN DE AUTENTICAÇÃO SEGURO
    // eslint-disable-next-line no-undef
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: verificarUser._id }, secret);

    res.status(200).json({msg: "Autenticação realizada com sucesso!", token});
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ msg: 'Erro ao fazer login' });
  }
});

