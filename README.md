# PokeAPI Integration

![Project Status](https://img.shields.io/badge/Status-Under_Development-yellow)
![License](https://img.shields.io/badge/License-MIT-green)
![Technologies](https://img.shields.io/badge/Technologies-React%20|%20Vite-blue)

Este projeto é uma integração com a [PokeAPI](https://pokeapi.co/) que permite consultar e exibir informações detalhadas sobre Pokémon, utilizando **React** e **Vite** para uma interface moderna e rápida.

## 📋 Funcionalidades

- Pesquisa por Pokémon pelo ID.
- Exibição de informações como:
  - Imagem oficial
- Interface responsiva e fácil de usar.

## 🚀 Tecnologias Utilizadas

- **Frontend**:
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - CSS (arquivos `App.css` e `index.css`)

## 📁 Estrutura do Projeto

```plaintext
pokeapi--integration/
├── 📂 public/                 # Arquivos públicos estáticos
│   └── vite.svg               # Logotipo ou ícone do Vite
├── 📂 src/                    # Código-fonte do projeto
│   ├── 📂 assets/             # Recursos estáticos do frontend
│   │   └── react.svg          # Ícone do React
│   ├── App.css                # Estilos do componente principal
│   ├── App.jsx                # Componente principal da aplicação
│   ├── index.css              # Estilos globais
│   └── main.jsx               # Ponto de entrada da aplicação
├── .gitignore                 # Arquivos e pastas ignorados pelo Git
├── LICENSE                    # Arquivo de licença do projeto
├── README.md                  # Documentação do projeto
├── eslint.config.js           # Configurações do ESLint para linting do código
├── index.html                 # Template HTML principal
├── package-lock.json          # Dependências travadas do projeto
├── package.json               # Metadados e dependências do projeto
└── vite.config.js             # Configurações do Vite
```

## 🔧 Como Rodar o Projeto

    Clone o repositório:

    git clone https://github.com/MarcioCalisto/PokeAPI--Integration.git

### Navegue para o diretório do projeto:

    cd pokeapi--integration

### Instale as dependências:

    npm install

### Inicie o servidor de desenvolvimento:

    npm run dev

    Acesse no navegador:
        O projeto estará disponível em: http://localhost:5173

## 🛠 Melhorias Futuras

    Implementar paginação para exibir múltiplos Pokémon.
    Adicionar filtros avançados (por tipo, estatísticas, etc.).
    Criar animações para transições de elementos.
    Salvar favoritos no localStorage.

## 🤝 Contribuições

### Contribuições são bem-vindas! Siga os passos abaixo para colaborar:

### Fork o repositório.
### Crie uma branch para sua funcionalidade/feature:

    git checkout -b feature/nova-funcionalidade

### Adicione e commit suas alterações:

    git commit -m "Descrição da funcionalidade adicionada"

### Envie suas alterações:

    git push origin feature/nova-funcionalidade

### Abra um pull request.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.

💡 Dica: Confira a documentação oficial da PokeAPI para explorar as possibilidades de integração.
