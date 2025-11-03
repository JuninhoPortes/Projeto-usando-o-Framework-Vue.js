Shopping Cart — Projeto Enxuto com Vue.js
Este é um projeto simples e inicial de carrinho de compras desenvolvido com Vue.js e JavaScript, utilizando o Visual Studio Code como ambiente de desenvolvimento. O objetivo principal foi aprender os fundamentos do Vue.js, explorando componentes, reatividade e manipulação de estado — tudo isso com foco em adquirir experiência prática com o framework utilizado por uma empresa na qual estou buscando uma oportunidade de estágio.

Tecnologias Utilizadas
- Vue.js 3 — Framework JavaScript progressivo para construção de interfaces web.
- Vite — Ferramenta de build rápida e moderna para projetos Vue.
- JavaScript (ES6+) — Linguagem principal para lógica e manipulação de dados.
- SCSS — Pré-processador CSS para estilização modular.
- Visual Studio Code — Editor de código utilizado durante o desenvolvimento.


Estrutura do Projeto
 PROJETO_VUEJS/
└── shopping-cart/
    ├── .vscode/
    │   └── extensions.json
    ├── node_modules/
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── modules/
    │   │   │   └── Cart.vue
    │   │   └── shared/
    │   │       └── SlidePanel.vue
    │   ├── utils/
    │   │   └── generator.js
    │   ├── views/
    │   │   └── HomePage.vue
    │   ├── App.vue
    │   ├── main.js
    │   └── style.css
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── vite.config.js
    └── yarn.lock

Funcionalidades Implementadas
- Adicionar produto ao carrinho
Gera um produto aleatório e o adiciona à lista de compras.
- Remover produto individual
Remove um item específico do carrinho com base no seu id.
- Incrementar e decrementar quantidade
Permite ajustar a quantidade de cada produto. Se a quantidade chegar a 1 e for decrementada, o produto é removido automaticamente.
- Calcular total da compra
Soma os valores dos produtos com base na quantidade, exibindo o total com duas casas decimais para melhor apresentação.
- Limpar carrinho
Botão dedicado para esvaziar completamente o carrinho.
- Abrir/fechar painel lateral
O carrinho é exibido em um painel lateral (SlidePanel), controlado por um botão de visibilidade.

Propósito do Projeto
Este projeto foi desenvolvido como parte do meu processo de aprendizado em Vue.js. Ainda estou em fase inicial de domínio da ferramenta, e este carrinho representa um exercício prático para entender conceitos como:
- Componentização
- Props e emits
- Reatividade com ref e computed
- Estilização com SCSS
- Organização de arquivos em projetos Vue
A escolha do tema foi estratégica: o carrinho de compras é um exemplo clássico que envolve múltiplas interações e estados, ideal para explorar os recursos do framework.

Como rodar o projeto
- Clone o repositório:
git clone https://github.com/seu-usuario/shopping-cart.git

- Instale as dependências:
yarn

- Inicie o servidor de desenvolvimento:
yarn dev

- Acesse no navegador:
http://localhost:5173

Observações
Este projeto foi desenvolvido com o objetivo principal de explorar e compreender os fundamentos do Vue.js, uma tecnologia amplamente utilizada no mercado. Trata-se de uma iniciativa pessoal e enxuta, voltada para o aprendizado prático e a adaptação a novas ferramentas e metodologias de desenvolvimento.



