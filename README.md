# Software Engineer Test

Essa app tem como objetivo prover o backend para o teste que fazemos na Revelo para avaliar o código de Softwares Engineers focados em frontend. Basicamente a app disponibiliza uma API Rest de candidatos fake usando [JSON Server](https://github.com/typicode/json-server) e [Faker](https://github.com/Marak/faker.js).

GET http://localhost:3000/candidates

```json
[
  {
    "id": 3,
    "imageUrl":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWfkA6fPozy8qlbL8q282B2jWo10s-UK2bYFLv1b_v32r5TAF",
    "name": "Raoul Marquardt",
    "newThisWeek": true,
    "career": "Chief Security Representative",
    "lastCompanies": [
      "Thompson, Hintz and Walker",
      "Aufderhar, Goldner and Dach",
      "Predovic, Gutkowski and Lubowitz"
    ],
    "university": "Kentucky",
    "cities": ["Lake Bridgette", "Abeton"],
    "mainSkills": ["Creative", "Solutions"]
  }
]
```

# O Teste

O teste consiste em criar uma nova app em um novo repositório que consome a api e implementa a listagem de candidatos.
Para tal segue algumas features que gostaríamos que sua app tivesse:

* Layout de acordo com o [Wireframe](https://projects.invisionapp.com/share/BXH5LB3HEMP#/screens)
* Candidatos ordenados por ordem alfabética
* Poder remover candidatos da lista
* Poder favoritar candidatos da lista

# Regras

* Você está livre para usar as tecnologias que quiser
* Para qualquer problema/dúvida com essa App use o [Github Issues](https://github.com/contratadome/frontend-test/issues) para se comunicar conosco. Mas se achar alguma oportunidade de melhoria nessa app só mandar o PR.

# Dicas

* Lembre que o json-ser server disponibiliza uma [API Rest](http://www.betterpixels.co.uk/projects/2015/05/09/mock-up-your-rest-api-with-json-server/). A API aceita as requisições GET, POST, PUT e DELETE; necessárias para essa atividade.
* Nesse repositório temos as imagens que você vai precisar na pasta `/images`
* Não faça seu projeto em um único commit, faça commits atômicos pois isso vai nos ajudar a entender como você pensa.

# Como subir esta App

## Via npm

Baixe o repositorio e rode os comandos a seguir e o servidor estará rodando em
`http://localhost:3000`

```
npm install
npm start
```
