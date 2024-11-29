# PokeAPI Integration

![Project Status](https://img.shields.io/badge/Status-Under_Development-yellow)
![License](https://img.shields.io/badge/License-MIT-green)
![Technologies](https://img.shields.io/badge/Technologies-JavaScript%20|%20HTML%20|%20CSS-blue)

Este é um projeto que integra a [PokeAPI](https://pokeapi.co/) para fornecer informações detalhadas sobre Pokémon de maneira fácil e acessível.

## 📋 Funcionalidades

- Consulta informações sobre Pokémon utilizando a [PokeAPI](https://pokeapi.co/).
- Pesquisa dinâmica pelo nome ou ID do Pokémon.
- Exibe dados como:
  - Imagem oficial
- Interface simples e responsiva para acesso rápido.

## 🚀 Tecnologias Utilizadas

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (fetch API para integração com a PokeAPI)
  - Vite + React
- **Backend (opcional)**:
  - [Node.js](https://nodejs.org/) *(se aplicável)*

## 📁 Estrutura do Projeto

```plaintext
pokeapi--integration/
├── public/                 # Arquivos públicos estáticos
│   ├── favicon.ico         # Ícone do projeto
│   └── assets/             # Outros recursos estáticos
├── src/                    # Código-fonte do projeto
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Ponto de entrada da aplicação
│   ├── App.css             # Estilos globais
├── .gitignore              # Arquivos e pastas ignorados pelo Git
├── index.html              # Template HTML principal
├── package.json            # Gerenciador de dependências e metadados do projeto
├── vite.config.js          # Configurações do Vite
└── README.md               # Documentação do projeto

