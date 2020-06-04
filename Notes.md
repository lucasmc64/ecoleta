# Notas

## Aula 1

Ao importar bibliotecas em um arquivo TypeScript, por ser justamente um arquivo TypeScript, teremos também que instalar a definição de tipos da biblioteca. Muitas bibliotecas já podem vir com essa definição por padrão em sua instalação, mas algumas não.

Esse é o caso do Express. Para instalar a definição de tipos do Express, pelo terminal, na pasta do projeto, digite: `npm install @types/express -D`. Mas por que instalar como dependência de desenvolvimento? Porque o TypeScript é convertido em JavaScript quando a aplicação vai ao ar, ou seja, não é necessário a tipagem.



Ao tentar executar o servidor escrito em TypeScript com o Node.JS (`node src/server.ts`) haverá erro, pois o Node.JS só entende JavaScript. 

Para solucionar isso precisamos instalar outras bibliotecas: `npm install typescript -D` e `npm install ts-node -D`. Para executar: `npx ts-node src/server.ts`.



Mas se você tentar executar agora terá outro erro. É necessário ter um arquivo de configurações informando quais features do TypeScript você quer ou não usar. Para criar esse arquivo, digite: `npx tsc --init`



Para, no servidor, retornar um JSON: `response.json()`, pode ser enviado ou um array ou um objeto.



Para não ficar parando o servidor e iniciando novamente para ver as alterações em vigor, precisamos instalar uma biblioteca para fazer isso automaticamente: `npm install ts-node-dev -D`. Para executar: `npx ts-node-dev src/server.ts`.



Podemos criar um script para rodar o servidor no arquivo *package.json*: 

```javascript
"scripts": {
    "dev": "ts-node-dev src/server.ts"
}
```

Para rodar esse script, no terminal, digite: `npm run dev`



Para criar uma aplicação com ReactJS com TypeScript:

`npx create-react-app nome-do-projeto --template=typescript`



## Aula 2

O express não entende o recebimento de informações em formato JSON. Para resolver isso:

```javascript
server.use(express.json());
```

Biblioteca Knex.JS -> `npm install knex`

Rota: endereço completo da requisição
Recurso: qual entidade estamos acessando do sistema

Métodos HTTP
GET: Buscar uma ou mais informações do back-end
POST: Criar uma nova informação no back-end
PUT: Atualizar uma informação existente no back-end
DELETE: Remover uma informação do back-end

Tipos de Parâmetros
Request Param: Parâmetros que vêm na própria rota que identificam um recurso (request.param)
Query Param: Parâmetros que vêm na própria rota geralmente opcionais para filtros, paginação
Request Body: Parâmetros para criação/atualização de usuários


`item.trim()` -> Com `item` sendo uma String, o método `trim()` retira os espaços antes e depois dela, cajo haja.

## Aula 3

JSX: Sintaxe de XML dentro do JavaScript

Sempre que mudamos o estado de um objeto ou array precisamos informar o tipo da variável que está sendo armazenada lá dentro.

https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

## Aula 3

Por que duas chaves? A primeira chave significa que é código JS e a segunda chave que é um objeto.
