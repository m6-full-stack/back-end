## Configuração e Inicialização da Aplicação

### 1. Clone o repositório da aplicação usando o comando abaixo:

- `git clone git@github.com:m6-full-stack/back-end.git`

### 2. Na raiza do projeto, rode o seguinte comando para realizar a instalação de todas as dependências:

- `yarn installl`

### 3. Copie o arquivo ".env.example" e cole na raiz do projeto, agora altere o nome do arquivo para ".env" e preenche as variáveis de ambiente dispostas ali de acordo com suas informações de conexão do postgreSQL.

### 4. Para rodas as migrations da aplicação use o seguinte comando:

- `yarn typeorm migration:run -d src/data-source.ts`

### 5. Para iniciar a aplicação rode o seguinte comando:

- `yarn dev`

## API e-commerce de veículos
 
Essa aplicação é um e-commerce voltado a compra e venda de veículos, através dela o usuário pode anunciar ou comprar carros e/ou motos, podendo ter acesso a diversas informações do veículos e, caso o usuário se interresse pelo menos a aplicação irá te encaminhar ao vendedor para que ambos possam negociar a venda.

## Tecnologias ultilizadas: 

- Typescript
- Express
- NodeJs
- Typeorm
- Bcrypt
- Jsonwebtoken
- Uuid
- PostgreSQL

### Rotas