💼 API de Cadastro de Usuários — v1.0.0

A API de Cadastro de Usuários é uma aplicação RESTful desenvolvida em Node.js com MongoDB, projetada para gerenciar dados de usuários de forma simples, segura e escalável.

Esta é a versão 1.0.0, representando a primeira release estável do projeto, com todas as operações essenciais de CRUD implementadas e testadas.

📌 Objetivo do Projeto

O objetivo desta API é servir como base para sistemas administrativos, aplicações web ou mobile que necessitem de um backend estruturado, seguindo boas práticas de desenvolvimento backend com Node.js.

🚀 Funcionalidades

➕ Cadastro de usuários

🔍 Consulta de usuários

Listagem completa

Busca por ID

✏️ Atualização de dados cadastrais

❌ Remoção de usuários

⚙️ Validação de dados

🛡️ Tratamento centralizado de erros

📄 Respostas padronizadas em JSON

🧱 Arquitetura da Aplicação

A aplicação segue uma estrutura organizada para facilitar manutenção e escalabilidade:

Controllers — lógica de negócio

Routes — definição de rotas da API

Models — esquemas e validações do MongoDB (Mongoose)

Middlewares — validações e tratamento de erros

🛠️ Tecnologias Utilizadas

Linguagem: JavaScript (ES6+)

Runtime: Node.js

Framework: Express.js

Banco de Dados: MongoDB

ODM: Mongoose

Documentação / Testes: Postman / Swagger

📡 Endpoints Principais
Método	Endpoint	Descrição
POST	/users	Criar novo usuário
GET	/users	Listar todos os usuários
GET	/users/:id	Buscar usuário por ID
PUT	/users/:id	Atualizar usuário
DELETE	/users/:id	Remover usuário
▶️ Como Executar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

2️⃣ Instalar as dependências
npm install

3️⃣ Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

PORT=3000
MONGODB_URI=mongodb://localhost:27017/api-usuarios

4️⃣ Iniciar o servidor
npm run dev


O servidor estará disponível em:

http://localhost:3000

🧪 Testes da API

Os endpoints podem ser testados utilizando:

Postman

Insomnia

Swagger (se configurado)

📈 Próximas Melhorias (Roadmap)

🔐 Autenticação e autorização (JWT)

👥 Controle de permissões (roles)

📊 Paginação e filtros avançados

🧪 Testes automatizados (Jest)

🐳 Dockerização do projeto

📄 Licença

Este projeto é de uso educacional e pode ser adaptado livremente para fins de estudo e aprendizado.


