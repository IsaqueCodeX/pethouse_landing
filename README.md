# PetHouse - Site Institucional para Clínica Veterinária

![PetHouse](https://raw.githubusercontent.com/IsaqueCodeX/PetHouse/main/public/banner.png)

## 📜 Sobre o Projeto

**PetHouse** é um site institucional moderno e responsivo para uma clínica veterinária, projetado para apresentar os serviços, a equipe e os diferenciais da clínica de forma clara e atraente. O objetivo é transmitir profissionalismo e confiança, facilitando o contato de novos clientes e o agendamento de consultas.

### ✨ Principais Funcionalidades

- **Design Responsivo:** Experiência de usuário otimizada para desktops, tablets e smartphones.
- **Navegação Intuitiva:** Acesso rápido a todas as seções importantes através de um cabeçalho fixo e links diretos.
- **Integração com WhatsApp:** Botões de ação para agendamento e contato de emergência, direcionando o usuário para o WhatsApp.
- **Componentes Reutilizáveis:** Construído com `shadcn/ui` para garantir consistência visual e agilidade no desenvolvimento.
- **Carrosséis Dinâmicos:** Utilizados para exibir banners e depoimentos de clientes de forma interativa.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **Framework Principal:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Roteamento:** [React Router](https://reactrouter.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**

    ```sh
    git clone https://github.com/seu-usuario/PetHouse.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```sh
    cd PetHouse
    ```

3.  **Instale as dependências:**
    ```sh
    npm install
    ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento, execute o comando:

```sh
npm run dev
```

A aplicação estará disponível em `http://localhost:8080`.

---

## 📂 Estrutura de Arquivos

O projeto segue uma estrutura organizada para facilitar a manutenção e escalabilidade:

```
PetHouse/
├── public/             # Arquivos estáticos e assets públicos
├── src/
│   ├── assets/         # Imagens, fontes e outros assets
│   ├── components/     # Componentes reutilizáveis (ex: Header, Button)
│   │   └── ui/         # Componentes base do shadcn/ui
│   ├── hooks/          # Hooks customizados
│   ├── lib/            # Funções utilitárias (ex: cn)
│   ├── pages/          # Componentes de página (rotas)
│   ├── App.tsx         # Componente principal e configuração de rotas
│   ├── main.tsx        # Ponto de entrada da aplicação
│   └── index.css       # Estilos globais e variáveis do Tailwind
├── package.json        # Dependências e scripts do projeto
└── README.md           # Este arquivo
```

---

## 👨‍💻 Desenvolvido por

- **Isaque Santos**
- **LinkedIn:** [linkedin.com/in/isaque-santos-720b8b15a](https://www.linkedin.com/in/isaque-santos-720b8b15a)
- **GitHub:** [@IsaqueCodeX](https://github.com/IsaqueCodeX)
