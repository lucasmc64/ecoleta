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