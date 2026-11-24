# N&M Arcondicionado

Projeto acadêmico desenvolvido para a atividade Projeto Integrador Extensionista II – Atividade 1.

Site institucional demonstrativo da N&M Arcondicionado, com uma API Express e verificação de saúde pela rota `GET /api/health`.

## Tecnologias
- Vite
- JavaScript
- Node.js
- Express
- CSS

## Requisitos
- Node.js instalado
- npm instalado

## Como executar

1. Abra a pasta do projeto no terminal.
2. Instale as dependências:

```bash
npm install
```

3. Confira se o arquivo `.env` existe. Se necessário, copie `.env.example` para `.env`.
4. Em um primeiro terminal, inicie a API:

```bash
npm run api
```

5. Em outro terminal, inicie o Vite:

```bash
npm run dev
```

6. Acesse no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

A página consulta automaticamente `GET /api/health` e exibe o status da API com data e hora.

## Rota da API

- Método: `GET`
- Caminho: `/api/health`
- Resposta esperada: JSON contendo `status: "ok"`, nome da empresa, mensagem e data/hora.

## Variáveis de ambiente

A porta da API é configurada pela variável `PORT` no arquivo `.env`. O arquivo `.env` é ignorado pelo Git; o `.env.example` deve ser mantido no repositório.

## Publicação no GitHub e histórico de commits

Crie um repositório público chamado `nm-arcondicionado` no GitHub. Na pasta do projeto, execute os comandos abaixo **na ordem** para registrar as etapas em commits separados:

```bash
git init
git add package.json .gitignore .env.example index.html
git commit -m "chore: cria estrutura inicial do projeto"

git add server
git commit -m "feat: adiciona API de health check"

git add vite.config.ts src README.md
git commit -m "feat: integra página com API e documenta o projeto"

git branch -M main
git remote add origin https://github.com/SEU-USUARIO/nm-arcondicionado.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu usuário do GitHub. Não envie o arquivo `.env` ao repositório. Confira se o repositório está público e se abre em uma janela anônima.

## Entrega da atividade

A atividade solicita:
1. Link público do repositório GitHub.
2. Captura de tela do navegador em `http://localhost:5173` mostrando `Status da API: ok`, data e hora, com a barra de endereço visível.

Antes de tirar a captura, mantenha os dois terminais (API e Vite) em execução e atualize a página.
