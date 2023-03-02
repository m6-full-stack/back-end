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

## **Endpoints**

A API tem um total de 7 endpoints

A url base da API é https://fullstack-project-qi7p.onrender.com

## Índice:

1. [Users](#1-users)
   1. [POST - /users](#11-criação-de-usuário)
   2. [GET - /users](#12-listar-todos-os-usuários)
   3. [PATCH - /users](#13-atualização-de-usuário)
   4. [DELETE - /users](#14-deleção-de-usuário)
   5. [PATCH - /users/address](#15-atualização-de-endereço)
   6. [GET - /users/:id](#16-listar-apenas-um-usuário)
2. [Login](#2-login)
3. [Anúncios](#3-anúncios)
   1. [POST - /announcement](#31-criação-de-anúncio)
   2. [GET - /announcement](#32-listar-todos-os-anúncios)
   3. [GET - /announcement/:id](#33-listar-apenas-um-anúncio)
   4. [PATCH - /announcement/:id](#34-atualização-de-anúncio)
   5. [DELETE - /announcement/:id](#35-deleção-de-anúncio)
4. [Comentários](#4-comentários)
   1. [POST - /comment/:id](#41-criação-de-comentário)
   2. [PATCH - /comment/:id](#42-atualização-de-comentário)
   3. [DELETE - /comment/:id](#43-deleção-de-comentário)
5. [Perfil](#5-perfil)
6. [Imagens](#6-Imagens)
   1. [POST - /images/:id](#61-adicionando-mais-uma-imagem-ao-anúncio)
   2. [DELETE - /images/:id](#62-deletando-uma-imagem-do-anúncio)

# Rotas que não precisam de autenticação

### 1.1. **Criação de Usuário**

`POST /users - FORMATO DE REQUISIÇÃO`

```json
{
  "name": "Camille",
  "email": "cammille@mail.com",
  "password": "123456",
  "phone": "012 12345-6789",
  "description": "Desenvolvedora Full-stack",
  "address": {
    "cep": "12345678",
    "state": "Minas Gerais",
    "city": "Belo Horizonte",
    "street": "Avenida Jorge Teixeira",
    "number": "1041",
    "complement": "casa"
  },
  "is_seller": true,
  "birthdate": "1991-12-22",
  "cpf": "123.456.789-10"
}
```

`POST /users - FORMATO DE REPOSTA - STATUS 201`

```json
{
  "created_at": "02/03/2023",
  "updated_at": "02/03/2023",
  "name": "Camille",
  "email": "cammille@mail.com",
  "phone": "012 12345-6789",
  "cpf": "123.456.789-10",
  "birthdate": "1991-12-22",
  "description": "Desenvolvedora Full-stack",
  "address": {
    "id": "35bbd5dd-d4bb-4bef-b623-ec283fcac638",
    "cep": "12345678",
    "state": "Minas Gerais",
    "city": "Belo Horizonte",
    "street": "Avenida Jorge Teixeira",
    "number": "1041",
    "complement": "casa"
  },
  "is_seller": true,
  "id": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167"
}
```

### **Possíveis erros:**

<br>

| Código do Erro | Descrição             |
| -------------- | --------------------- |
| 400 Conflict   | Email already exists! |
| 400 Conflict   | CPF already exists!   |

---

### 2. **Login**

`POST /login - FORMATO DE REQUISIÇÃO`

```json
{
  "email": "cammille@mail.com",
  "password": "123456"
}
```

`POST /login - FORMATO DE RESPOSTA - STATUS 200`

```json
{
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGMzYTJmLTU1ZmQtNGMxNS1iNTEwLWEwZDhkNmYwNTE2NyIsImlzX2J1eWVyIjpmYWxzZSwiaWF0IjoxNjc3NzY0OTc2LCJleHAiOjE2Nzc4NTEzNzZ9.OLI4BBb1t-DuiP-GWVqaYxo4YfkrnrNecVczJvZL1mg"
}
```

### **Possíveis erros:**

<br>

| Código do Erro | Descrição                  |
| -------------- | -------------------------- |
| 403 Forbidden  | Invalid email or password. |
| 403 Forbidden  | Invalid email or password. |

---

### 3.1. **Listar todos os anúncios**

`GET /annoucement - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`GET /annoucement - FORMATO DE RESPOSTA - STATUS 200`

```json
[
  {
    "createdAt": "2023-03-02",
    "id": "526920e5-cf10-4690-9f17-120379144a7f",
    "type": "Venda",
    "title": "Fox G2, Unico Dono, Hiper Econômico",
    "year": "2011",
    "mileage": "112.000",
    "price": "27.900",
    "description": "VW Fox 2011, 5p, 1.0, 8v, 111k Km, vidro, trava, alarme, sensor de estacionamento, espelhos elétricos, ótimo de mecanica, ótimo de elétrica, ótimo de lata, bateria, velas, cabos de velas, bobina e pneus novos. Mega econômico, 17 km/l na estrada e 11 na cidade. Pequenos detalhes nos parachoques. Tabela R$ 31.800,00. Somente a vista R$ 28.000,00",
    "vehicle_type": "Carro",
    "cover_image": "https://img1.icarros.com/dbimg/galeriaimgmodelo/2/6886_1",
    "is_sold": false,
    "advertiserId": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
    "images_list": [
      {
        "id": "89dff4c7-5ef1-48c5-9390-2cdcaf70399a",
        "image_url": "https://cdn.carrosp.com.br/img/6/full/volkswagen-fox-2011-americana-4960e4ef0e872ac688b1ceb2caa4776b.png"
      },
      {
        "id": "fece626a-a332-466a-a9d9-0f4c8d33b818",
        "image_url": "https://s3.ecompletocarros.dev/images/lojas/232/veiculos/25266/veiculoInfoVeiculoImagesMobile/vehicle_image_1592260062_4d4713169324ebfea213ba526b3a21b5.jpeg"
      }
    ],
    "comments": []
  }
]
```

### Possíveis erros:

```json
Nenhum, máximo que pode acontecer é retornar uma lista vazia
```

### 1.6. **Listar apenas um usuário**

`GET /users/:id - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`GET /users/:id - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "created_at": "2023-03-02",
  "updated_at": "2023-03-02",
  "id": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
  "name": "Camille",
  "email": "cammille@mail.com",
  "phone": "012 12345-6789",
  "cpf": "123.456.789-10",
  "birthdate": "1991-12-22",
  "description": "Desenvolvedora Full-stack",
  "is_seller": true,
  "announcements": [
    {
      "createdAt": "2023-03-02",
      "id": "526920e5-cf10-4690-9f17-120379144a7f",
      "type": "Venda",
      "title": "Fox G2, Unico Dono, Hiper Econômico",
      "year": "2011",
      "mileage": "112.000",
      "price": "27.900",
      "description": "VW Fox 2011, 5p, 1.0, 8v, 111k Km, vidro, trava, alarme, sensor de estacionamento, espelhos elétricos, ótimo de mecanica, ótimo de elétrica, ótimo de lata, bateria, velas, cabos de velas, bobina e pneus novos. Mega econômico, 17 km/l na estrada e 11 na cidade. Pequenos detalhes nos parachoques. Tabela R$ 31.800,00. Somente a vista R$ 28.000,00",
      "vehicle_type": "Carro",
      "cover_image": "https://img1.icarros.com/dbimg/galeriaimgmodelo/2/6886_1",
      "is_sold": false,
      "advertiserId": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
      "images_list": [
        {
          "id": "89dff4c7-5ef1-48c5-9390-2cdcaf70399a",
          "image_url": "https://cdn.carrosp.com.br/img/6/full/volkswagen-fox-2011-americana-4960e4ef0e872ac688b1ceb2caa4776b.png"
        },
        {
          "id": "fece626a-a332-466a-a9d9-0f4c8d33b818",
          "image_url": "https://s3.ecompletocarros.dev/images/lojas/232/veiculos/25266/veiculoInfoVeiculoImagesMobile/vehicle_image_1592260062_4d4713169324ebfea213ba526b3a21b5.jpeg"
        }
      ],
      "comments": []
    }
  ],
  "address": {
    "id": "35bbd5dd-d4bb-4bef-b623-ec283fcac638",
    "cep": "12345678",
    "state": "Minas Gerais",
    "city": "Belo Horizonte",
    "street": "Avenida Jorge Teixeira",
    "number": "1041",
    "complement": "casa"
  }
}
```

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Not found  | User not found. |

---

# Rotas que precisam de autenticação

## 1. **Users**

### 1.2. **Listar todos os usuários**

`GET /user - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`GET /users - FORMATO DE RESPOSTA - STATUS 200`

```json
[
  {
    "created_at": "2023-03-02",
    "updated_at": "2023-03-02",
    "id": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
    "name": "Camille",
    "email": "cammille@mail.com",
    "phone": "012 12345-6789",
    "cpf": "123.456.789-10",
    "birthdate": "1991-12-22",
    "description": "Desenvolvedora Full-stack",
    "is_seller": true,
    "address": {
      "id": "35bbd5dd-d4bb-4bef-b623-ec283fcac638",
      "cep": "12345678",
      "state": "Minas Gerais",
      "city": "Belo Horizonte",
      "street": "Avenida Jorge Teixeira",
      "number": "1041",
      "complement": "casa"
    }
  }
]
```

### Possíveis erros:

```json
Nenhum, máximo que pode acontecer é retornar uma lista vazia
```

---

### 1.3. **Atualização de usuário**

`PATCH /users - FORMATO DE REQUISIÇÃO`

```json
{
  "name": "Camille Ribeiro"
}
```

`PATCH /user - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "message": "Updated user",
  "user": {
    "created_at": "2023-03-02",
    "updated_at": "2023-03-02",
    "id": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
    "name": "Camille Ribeiro",
    "email": "cammille@mail.com",
    "phone": "012 12345-6789",
    "cpf": "123.456.789-10",
    "birthdate": "1991-12-22",
    "description": "Desenvolvedora Full-stack",
    "is_seller": true,
    "address": {
      "id": "35bbd5dd-d4bb-4bef-b623-ec283fcac638",
      "cep": "12345678",
      "state": "Minas Gerais",
      "city": "Belo Horizonte",
      "street": "Avenida Jorge Teixeira",
      "number": "1041",
      "complement": "casa"
    }
  }
}
```

### **Possíveis erros:**

<br>

| Código do Erro   | Descrição       |
| ---------------- | --------------- |
| 401 Unauthorized | Token required. |

---

### 1.4. **Deleção de usuário**

`DELETE /users - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`DELETE /users - FORMATO DE RESPOSTA - STATUS 204`

```json
Vazio
```

### **Possíveis erros:**

<br>

| Código do Erro   | Descrição       |
| ---------------- | --------------- |
| 401 Unauthorized | Token required. |

---

### 1.5. **Atualização de endereço**

`PATCH /users/address - FORMATO DE REQUISIÇÃO`

```json
{
  "number": 1042
}
```

`PATCH /users/address - FORMATO DE RESPOSTA`

```json
{
  "message": "Updated address",
  "user": {
    "id": "35bbd5dd-d4bb-4bef-b623-ec283fcac638",
    "cep": "12345678",
    "state": "Minas Gerais",
    "city": "Belo Horizonte",
    "street": "Avenida Jorge Teixeira",
    "number": "1042",
    "complement": "casa"
  }
}
```

### **Possíveis erros:**

<br>

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 404 Not found  | User not found. |

---

## 3. **Anúncios**

### 3.1. **Criação de anúncio**

`POST /announcement - FORMATO DE REQUISIÇÃO`

```json
{
  "type": "Venda",
  "title": "Fox G2, Unico Dono, Hiper Econômico",
  "year": "2011",
  "mileage": "112.000",
  "price": "27.900",
  "description": "VW Fox 2011, 5p, 1.0, 8v, 111k Km, vidro, trava, alarme, sensor de estacionamento, espelhos elétricos, ótimo de mecanica, ótimo de elétrica, ótimo de lata, bateria, velas, cabos de velas, bobina e pneus novos. Mega econômico, 17 km/l na estrada e 11 na cidade. Pequenos detalhes nos parachoques. Tabela R$ 31.800,00. Somente a vista R$ 28.000,00",
  "vehicle_type": "Carro",
  "cover_image": "https://img1.icarros.com/dbimg/galeriaimgmodelo/2/6886_1",
  "images_list": [
    "https://cdn.carrosp.com.br/img/6/full/volkswagen-fox-2011-americana-4960e4ef0e872ac688b1ceb2caa4776b.png",
    "https://s3.ecompletocarros.dev/images/lojas/232/veiculos/25266/veiculoInfoVeiculoImagesMobile/vehicle_image_1592260062_4d4713169324ebfea213ba526b3a21b5.jpeg"
  ]
}
```

`POST /announcement - FORMATO DE RESPOSTA - STATUS 201`

```json
{
  "createdAt": "2023-03-02",
  "id": "c9953fe0-5728-41a7-a0f7-8abfdddf625b",
  "type": "Venda",
  "title": "Fox G2, Unico Dono, Hiper Econômico",
  "year": "2011",
  "mileage": "112.000",
  "price": "27.900",
  "description": "VW Fox 2011, 5p, 1.0, 8v, 111k Km, vidro, trava, alarme, sensor de estacionamento, espelhos elétricos, ótimo de mecanica, ótimo de elétrica, ótimo de lata, bateria, velas, cabos de velas, bobina e pneus novos. Mega econômico, 17 km/l na estrada e 11 na cidade. Pequenos detalhes nos parachoques. Tabela R$ 31.800,00. Somente a vista R$ 28.000,00",
  "vehicle_type": "Carro",
  "cover_image": "https://img1.icarros.com/dbimg/galeriaimgmodelo/2/6886_1",
  "is_sold": false,
  "advertiserId": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
  "images_list": [
    {
      "id": "692de442-bca7-41c4-976e-bb26d3e98cf1",
      "image_url": "https://cdn.carrosp.com.br/img/6/full/volkswagen-fox-2011-americana-4960e4ef0e872ac688b1ceb2caa4776b.png"
    },
    {
      "id": "0ed2cb0c-84ba-4990-800d-cf319ab63e01",
      "image_url": "https://s3.ecompletocarros.dev/images/lojas/232/veiculos/25266/veiculoInfoVeiculoImagesMobile/vehicle_image_1592260062_4d4713169324ebfea213ba526b3a21b5.jpeg"
    }
  ],
  "comments": []
}
```

### Possíveis erros:

| Código do Erro | Descrição                   |
| -------------- | --------------------------- |
| 403 Forbidden  | This user cannot advertise! |

---

### 3.3. Listar apenas um anúncio

`GET /announcement/:id - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`GET /announcement/:id - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "createdAt": "2023-03-02",
  "id": "c9953fe0-5728-41a7-a0f7-8abfdddf625b",
  "type": "Venda",
  "title": "Fox G2, Unico Dono, Hiper Econômico",
  "year": "2011",
  "mileage": "112.000",
  "price": "27.900",
  "description": "VW Fox 2011, 5p, 1.0, 8v, 111k Km, vidro, trava, alarme, sensor de estacionamento, espelhos elétricos, ótimo de mecanica, ótimo de elétrica, ótimo de lata, bateria, velas, cabos de velas, bobina e pneus novos. Mega econômico, 17 km/l na estrada e 11 na cidade. Pequenos detalhes nos parachoques. Tabela R$ 31.800,00. Somente a vista R$ 28.000,00",
  "vehicle_type": "Carro",
  "cover_image": "https://img1.icarros.com/dbimg/galeriaimgmodelo/2/6886_1",
  "is_sold": false,
  "advertiserId": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
  "images_list": [
    {
      "id": "692de442-bca7-41c4-976e-bb26d3e98cf1",
      "image_url": "https://cdn.carrosp.com.br/img/6/full/volkswagen-fox-2011-americana-4960e4ef0e872ac688b1ceb2caa4776b.png"
    },
    {
      "id": "0ed2cb0c-84ba-4990-800d-cf319ab63e01",
      "image_url": "https://s3.ecompletocarros.dev/images/lojas/232/veiculos/25266/veiculoInfoVeiculoImagesMobile/vehicle_image_1592260062_4d4713169324ebfea213ba526b3a21b5.jpeg"
    }
  ],
  "comments": []
}
```

### Possíveis erros:

| Código do Erro | Descrição               |
| -------------- | ----------------------- |
| 404 Not found  | Announcement not found. |

---

## 3.4. **Atualização de anúncio**

`PATCH /announcement/:id - FORMATO DE REQUISIÇÃO`

```json
{
  "year": "2012"
}
```

`PATCH /announcement/:id - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "createdAt": "2023-03-02",
  "id": "c9953fe0-5728-41a7-a0f7-8abfdddf625b",
  "type": "Venda",
  "title": "Fox G2, Unico Dono, Hiper Econômico",
  "year": "2012",
  "mileage": "112.000",
  "price": "27.900",
  "description": "VW Fox 2011, 5p, 1.0, 8v, 111k Km, vidro, trava, alarme, sensor de estacionamento, espelhos elétricos, ótimo de mecanica, ótimo de elétrica, ótimo de lata, bateria, velas, cabos de velas, bobina e pneus novos. Mega econômico, 17 km/l na estrada e 11 na cidade. Pequenos detalhes nos parachoques. Tabela R$ 31.800,00. Somente a vista R$ 28.000,00",
  "vehicle_type": "Carro",
  "cover_image": "https://img1.icarros.com/dbimg/galeriaimgmodelo/2/6886_1",
  "is_sold": false,
  "advertiserId": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
  "images_list": [
    {
      "id": "692de442-bca7-41c4-976e-bb26d3e98cf1",
      "image_url": "https://cdn.carrosp.com.br/img/6/full/volkswagen-fox-2011-americana-4960e4ef0e872ac688b1ceb2caa4776b.png"
    },
    {
      "id": "0ed2cb0c-84ba-4990-800d-cf319ab63e01",
      "image_url": "https://s3.ecompletocarros.dev/images/lojas/232/veiculos/25266/veiculoInfoVeiculoImagesMobile/vehicle_image_1592260062_4d4713169324ebfea213ba526b3a21b5.jpeg"
    }
  ],
  "comments": []
}
```

### Possíveis erros:

| Código do Erro | Descrição                       |
| -------------- | ------------------------------- |
| 404 Not found  | This announcement don't exists! |

---

## 3.5. **Deleção de anúncio**

`DELETE /announcement/:id - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`DELETE /announcement/:id - FORMATO DE RESPOSTA - STATUS 204`

```json
Vazio
```

### Possíveis erros:

| Código do Erro | Descrição                       |
| -------------- | ------------------------------- |
| 404 Not found  | This announcement don't exists! |

---

## 4. **Comentários**

### 4.1. **Criação de comentário**

`POST /comment/:id_announcement - FORMATO DE REQUISIÇÃO`

```json
{
  "content": "Quando foi a última troca de oleo?"
}
```

`POST /comment/:id_announcement - FORMATO DE RESPOSTA - STATUS 201`

```json
{
  "id": "e5f2318d-0dc2-4736-a051-680dbbaaa0fc",
  "content": "Quando foi a última troca de oleo?",
  "created_at": "2023-03-02T18:18:08.280Z",
  "user": {
    "created_at": "2023-03-02",
    "updated_at": "2023-03-02",
    "id": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
    "name": "Camille",
    "email": "cammille@mail.com",
    "phone": "012 12345-6789",
    "cpf": "123.456.789-10",
    "birthdate": "1991-12-22",
    "description": "Desenvolvedora Full-stack",
    "is_seller": true
  },
  "announcement": {
    "createdAt": "02/03/2023",
    "id": "c9953fe0-5728-41a7-a0f7-8abfdddf625b"
  }
}
```

### Possíveis erros:

| Código do Erro | Descrição               |
| -------------- | ----------------------- |
| 404 Not found  | Announcement not exists |
| 404 Not found  | User not exist          |

---

### 4.2. **Atualizaçaõ de comentário**

`PATCH /comment/:id - FORMATO DE REQUISIÇÃO`

```json
{
  "id": "e5f2318d-0dc2-4736-a051-680dbbaaa0fc",
  "content": "Quando foi a última troca de óleo?",
  "created_at": "2023-03-02T18:18:08.280Z"
}
```

### Possíveis erros:

| Código do Erro | Descrição                             |
| -------------- | ------------------------------------- |
| 404 Not found  | Comment not found                     |
| 403 Forbidden  | You are not the owner of this comment |

---

### 4.3. **Deleção de comentário**

`DELETE /comment/:id - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`DELETE /comment/:id - FORMATO DE RESPOSTA - STATUS 204`

```json
Vazio
```

### 5. Perfil

`GET /profile - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`GET /profile - FORMATO DE RESPOSTA - STATUS 200`

```json
{
  "created_at": "2023-03-02",
  "updated_at": "2023-03-02",
  "id": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
  "name": "Camille",
  "email": "cammille@mail.com",
  "phone": "012 12345-6789",
  "cpf": "123.456.789-10",
  "birthdate": "1991-12-22",
  "description": "Desenvolvedora Full-stack",
  "is_seller": true,
  "announcements": [
    {
      "createdAt": "2023-03-02",
      "id": "c9953fe0-5728-41a7-a0f7-8abfdddf625b",
      "type": "Venda",
      "title": "Fox G2, Unico Dono, Hiper Econômico",
      "year": "2012",
      "mileage": "112.000",
      "price": "27.900",
      "description": "VW Fox 2011, 5p, 1.0, 8v, 111k Km, vidro, trava, alarme, sensor de estacionamento, espelhos elétricos, ótimo de mecanica, ótimo de elétrica, ótimo de lata, bateria, velas, cabos de velas, bobina e pneus novos. Mega econômico, 17 km/l na estrada e 11 na cidade. Pequenos detalhes nos parachoques. Tabela R$ 31.800,00. Somente a vista R$ 28.000,00",
      "vehicle_type": "Carro",
      "cover_image": "https://img1.icarros.com/dbimg/galeriaimgmodelo/2/6886_1",
      "is_sold": false,
      "advertiserId": "5edc3a2f-55fd-4c15-b510-a0d8d6f05167",
      "images_list": [
        {
          "id": "692de442-bca7-41c4-976e-bb26d3e98cf1",
          "image_url": "https://cdn.carrosp.com.br/img/6/full/volkswagen-fox-2011-americana-4960e4ef0e872ac688b1ceb2caa4776b.png"
        },
        {
          "id": "0ed2cb0c-84ba-4990-800d-cf319ab63e01",
          "image_url": "https://s3.ecompletocarros.dev/images/lojas/232/veiculos/25266/veiculoInfoVeiculoImagesMobile/vehicle_image_1592260062_4d4713169324ebfea213ba526b3a21b5.jpeg"
        }
      ],
      "comments": [
        {
          "id": "e5f2318d-0dc2-4736-a051-680dbbaaa0fc",
          "content": "Quando foi a última troca de óleo?",
          "created_at": "2023-03-02T18:18:08.280Z"
        }
      ]
    }
  ],
  "address": {
    "id": "35bbd5dd-d4bb-4bef-b623-ec283fcac638",
    "cep": "12345678",
    "state": "Minas Gerais",
    "city": "Belo Horizonte",
    "street": "Avenida Jorge Teixeira",
    "number": "1042",
    "complement": "casa"
  }
}
```

## 6. **Imagens**

### 6.1. **Adicionando mais uma imagem ao anúncio**

`POST /images/:id_announcement - FORMATO DE REQUISIÇÃO`

```json
{
  "image_url": "https://s3.ecompletocarros.dev/images/lojas/232/veiculos/25266/veiculoInfoVeiculoImagesMobile/vehicle_image_1592260062_4d4713169324ebfea213ba526b3a21b5.jpeg"
}
```

`POST /images/:id_announcement - FORMATO DE RESPOSTA - STATUS 201`

```json
{
  "id": "35bbd5dd-d4bb-4bef-b623-ec283fcac638",
  "image_url": "https://s3.ecompletocarros.dev/images/lojas/232/veiculos/25266/veiculoInfoVeiculoImagesMobile/vehicle_image_1592260062_4d4713169324ebfea213ba526b3a21b5.jpeg",
  "announcement_id": "692de442-bca7-41c4-976e-bb26d3e98cf1"
}
```

### Possíveis erros:

| Código do Erro | Descrição               |
| -------------- | ----------------------- |
| 404 Not found  | Announcement not exists |

---

## 6.2. **Deletando uma imagem do anúncio**

`DELETE /images/:id - FORMATO DE REQUISIÇÃO`

```json
Vazio
```

`DELETE /images/:id - FORMATO DE RESPOSTA - STATUS 204`

```json
Vazio
```

### Possíveis erros:

| Código do Erro | Descrição        |
| -------------- | ---------------- |
| 404 Not found  | Image not exists |

---
