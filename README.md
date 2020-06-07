![Ecoleta Banner](./readme-images/capa.svg)

# Ecoleta &#9851;

*Esse foi um projeto desenvolvido durante a Next Level Week #01 (Booster).* | [Protótipo](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)

## O que é a Next Level Week? &#128640;

A [NLW](https://nextlevelweek.com/) é uma semana programada pela [Rocketseat](https://rocketseat.com.br/) na qual, através de aulas, lives, prática e com apoio da comunidade, vai te ajudar a dar o próximo passo na sua evolução como dev.

## Objetivo &#127919;

Com um objetivo não apenas educacional, a princípio o projeto tem o intuito de ser um meio para ajudar as pessoas a encontrarem pontos de coleta de forma eficiente.

## Alguns detalhes &#128220;

* O backend é construído com Node.JS e SQLite.
* O fontend é construído com o framework ReactJS.
* O mobile é construído com o framework React Native e a plataforma Expo.

## Como rodar o projeto em minha máquina? &#129300;

O primeiro passo é clonar o projeto, seja via terminal ou GitHub Desktop, ou mesmo baixando o arquivo compactado (.zip). Após isso, siga adiante.

### Requisitos &#128736;

* Ter o [Node.JS](https://nodejs.org/) instalado no seu computador.
* (Opcional) Ter o [Yarn](https://yarnpkg.com/) instalado no seu computador.

### Instalando dependências &#128269;

Com o Node.JS instalado, acesse cada um dos diretórios (**server**, **web** e **mobile**) via terminal e rode o comando `npm install`. Caso você prefira usar o Yarn, basta rodar o comando `yarn`.

### Rodando o Backend &#129405;

Acesse o diretório **backend** via terminal e digite `npm run dev` ou `yarn dev` e uma mensagem parecida com a seguinte aparecerá para você:

![Resultado (backend) no terminal](./readme-images/backend.png)

Obs.: Caso não tenha sido esse o resultado verifique que os requisitos e os passos anteriores tenham sido cumpridos.

### Rodando o Frontend &#10024;

Acesse o diretório **frontend** via terminal e digite `npm start` ou `yarn start` e uma mensagem parecida com a seguinte aparecerá para você:

![Resultado (frontend) do npm start no terminal](./readme-images/frontend.png)

Automaticamente, em seu navegador padrão, se abrirá uma aba para o link http://localhost:3000/ (onde o projeto estará rodando). Não se esqueça de deixar o backend redando em paralelo!

Obs.: Caso não tenha sido esse o resultado verifique que os requisitos e os passos anteriores tenham sido cumpridos.

### Rodando o Mobile &#128241;

#### Requisitos &#128736;

* Aplicativo Expo instalado no seu smartphone ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) - [iOS](https://apps.apple.com/br/app/expo-client/id982107779));
* [expo-cli](https://expo.io/learn) (Expo Command Line) instalado no seu computador.

#### Passos &#129406;

Acesse o diretório **mobile** via terminal e digite `npm start` ou `yarn start`. Caso você não tenha instalado o expo-cli até então, aparecerá uma mensagem no terminal te informando isso e perguntando se você deseja instalá-lo. Basta digitar `Y` e dar `ENTER`. 

![Quer instalar o expo-cli?](./readme-images/expo-cli.png)

Em seguida (e caso já tivesse o expo-cli instalado), uma mensagem parecida com a seguinte aparecerá para você:

![Parte 1 - expo-cli terminal](./readme-images/mobile-1.png)
![Parte 2 - expo-cli terminal](./readme-images/mobile-2.png)

Automaticamente, em seu navegador padrão, se abrirá uma aba para o link http://localhost:9002/ com a seguinte tela:

![Expo no navegador](./readme-images/navegador-expo.png)

Como vocês puderam reparar, há um QRCode tanto no terminal, quanto no site que se abriu (ele são iguais). Agora, abra o aplicativo Expo em seu smartphone, escaneie o QRCode e aguarde até que o projeto seja sincronizado.

Obs.: Caso não tenha sido esse o resultado verifique que os requisitos e os passos anteriores tenham sido cumpridos.

### Uns pequenos detalhes... &#129504;

#### Banco de dados &#127922;

Se tudo ocorreu bem até aqui, parabéns! Mas temos mais algumas coisinhas para fazer. Como minha intenção nesse projeto foi meramente educativo, eu subi o projeto juntamente com meu banco de dados de testes. 

O ideal seria, antes de você rodar o projeto no seu computador fazer os seguintes passos:

1. Abrir a pasta */server/src/database/* e deletar o arquivo *database.sqlite*.
2. Abrir a pasta */server/uploads/* e deletar todos os arquivos que não têm a extensão *.svg*.
3. Abrir o terminal na pasta *server* e digitar o seguinte comando: `npm run knex:migrate` ou `yarn knex:migrate`.
4. Ainda no terminal aberto na pasta *server* digite o seguinte comando: `npm run knex:seed` ou `yarn knex:seed`.

#### Trocando para o seu IP &#128681;

Como estamos rodando o projeto localmente, as rotas são baseadas no IP atual do computador, por isso pode ser necessário trocá-los. Mas como eu sei o meu IP de localhost? Um meio é, quando você rodar o projeto *mobile*, quando abrir a janela do navegador, repare no endereço do lado esquerdo do site ou na barra do navegador:

![Endereço IP](./readme-images/endereco-ip.png)

Acima, no retângulo azul, está o seu IP local atual.

Segue os passos para a substituição:

##### Backend &#129405;

Acesse a pasta *server* e mude o IP nos seguintes arquivos:

* */server/src/controllers/ItemsController.ts* - linha 11.
* */server/src/controllers/PointsController.ts* - linha 15, linha 33.

##### Frontend &#10024;

Não há nenhuma linha que precise ser alterada.

##### Mobile &#128241;

Acesse a pasta *mobile* e mude o IP nos seguintes arquivos:

* */mobile/src/services/api.ts* - linha 4.

### Mudanças pessoais no projeto &#128517;

Além do que foi criado eu tentei deixar o projeto o mais próximo possível do protótipo, o que incluiu:

#### No Backend &#129405;

Nada foi alterado no backend.

#### No Frontend &#10024;

* Mudança da cor dos botões de items de coleta;
* Gradiente nos botões de items de coleta quando selecionados;
* Modal de conclusão de cadastro de ponto de coleta.

#### No Mobile &#128241;

* Adição de ícone e splashscreen provisórios;
* Correção no efeito de border-radius no ícone de flecha (tela Home);
* Troca dos inputs de texto por inputs “select”, buscando da API do IBGE os estados e as cidades com base no anterior (tela Home);
* Mudança do espaçamento, margens e border-radius dos inputs e botão (tela Home);
* Adicionado emoji sorridente (tela Points);
* Corrigido margem extra no último botão de item (tela Points);
* Mudança da cor dos botões de itens de coleta (tela Points);
* Gradiente nos botões de itens de coleta quando selecionados (tela Points);
* Adicionado uma ponta nos pins do mapa (tela Points);
* Mudança de cor do “Bem vindo.” (tela Points);
* Aumento da altura da imagem (tela Detail);
* Mudança de cor, tamanho e altura de linha dos textos (tela Detail);

### Se tudo deu certo... &#127881;

Agora você está com um banco de dados novinho em folha e com o **backend**, **frontend** e **mobile** rodando lindamente!